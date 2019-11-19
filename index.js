const app = require("express")();
const server = require("http").Server(app);
const io = require("socket.io")(server);
const cors = require("cors");
const port = 5000;
const database = require("./models");

app.use(cors());

database.DB.connectDb().then(async () => {
  server.listen(port, () => {
    console.log("server start at port ", port);
  });
});

io.on("connection", socket => {
  socket.emit("news", { hello: "world" });
  socket.on("my other event", function(data) {
    console.log(data);
  });
});

module.exports = {
  io: io,
  app: app
};

const UserRoute = require("./routes/User")(io);
app.use("/user", UserRoute);
