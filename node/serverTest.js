const http = require("http");

const app = http.createServer((req, res) => {
	// 查看收到的请求地址
    console.log(req.url);
    // 收到的url信息
    console.log(req.rawHeaders);
  if (req.url === "/login/index") {
    res.end("hello world!!");

  }

});

app.listen(9000, "localhost", () => {
  console.log("localhost:9000开启服务");

});