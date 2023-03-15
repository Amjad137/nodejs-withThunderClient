const http= require("http");

const port = 1836;

var myArray=["one","two","three"];

http
  .createServer((req,res) => {
    const {method, url} = req;     // ES6 Destructuring Assignment

    if(url === "/methds"){
        if(method === "GET"){
            res.writeHead(200,{"Content-Type":"text/html"});
            res.write(`GET Method: ${myArray.toString()}`); //Arrays are in JSON format defaultly
        }
        
        else if(method==="POST"){
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
            console.log("data to be added: ",body);

            let myNewArray=myArray;
            myNewArray.push(body.Amjad); //add key&value named amjad in thunder client
            console.log(myNewArray);
           })
        }
        else if(method === "DELETE"){
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

            let deleteThis=body.Amjad;

            // for(let i=0; i < myArray.length; i++){
            //   if (myArray[i] === deleteThis){
            //     myArray.splice(i , 1);
            //     break;
            //   }
            //   else{
            //     console.log("Match Not Found");
            //     break;
            //   }
            // }

            myArray.find((elem,index) => {
              if (elem === deleteThis){ //elem is pointing array elements automatically hence find is an array method(index also)
                myArray.splice(index,1);
              }
              else{
                // console.error("Match Not Found");  It sucks
              }
            });
            /**
             Or We can use find() to delete

             
          
             */

          })
        }
        else{
          res.writeHead(501);
        }

    }
    res.end();
  })
  .listen(port, () => {
    console.log(`Server is started on Port: ${port}`)
  })

  // http://localhost:1836


