const http= require("http");

const port = 1836;

var myArray=["one","Two","Three"];

http
  .createServer((req,res) => {
    const {method, url} = req;     // ES6 Destructuring Assignment

    if(url === "/methds"){
        if(method === "GET"){
            res.writeHead(200,{"Content-Type":"text/html"});
            res.write(`GET Method: ${myArray.toString()}`); //Arrays are in JSON format defaultly
        }else if(method==="POST"){
          let body="";
          req
           .on("error", (err) => {
            console.log(err);
           })
           .on("data", (chunk) => {
            body += chunk;
            console.log(chunk);
           })
           .on("end", () => {
            body =JSON.parse(body);
            console.log("data: ",body);
           })
        }
        else{
          res.writeHead(501);
        }

    }
    res.end
  })
  .listen(port, () => {
    console.log(`Server is started on Port: ${port}`)
  })

  // http://localhost:8081


