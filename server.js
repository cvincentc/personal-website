const express = require("express");
const path = require("path");

console.log(__dirname);

const app = express();

const publicDirPath = path.join(__dirname, "/public");
app.use(express.static(publicDirPath));



app.listen(2020, () => {
    console.log("server up and running at 2020");
});

// var htmlreq = {'Content-Type': 'text/html'};
// var cssreq = {'Content-Type': 'text/css'};
// var jsreq = {'Content-Type': 'text/javascript'};
// var pdfreq = {'Content-Type': 'application/pdf'};
// var reqtype;


// http.createServer(function(req,res){
//     var q = url.parse(req.url, true);
//     var filename = "./htmls" + q.pathname;
    
    
//     if(filename == './htmls/'){
//         filename = './htmls/default.html'
//         reqtype=htmlreq
//         let ts = Date.now();
//         let date_ob = new Date(ts);
//         let date = date_ob.getDate();
//         let month = date_ob.getMonth()+1;
//         let year = date_ob.getFullYear();
//         let hours = date_ob.getHours();
//         let minutes = date_ob.getMinutes();
//         let seconds = date_ob.getSeconds();
//         console.log(year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds);
//     }
//     else if(filename.includes('.css')){
//         reqtype=cssreq;
//     }
//     else if(filename.includes('.js')){
//         reqtype=jsreq;
//     }
//     else if(filename == '../htmls/resume.html'){
//         reqtype=pdfreq;
//     }
//     else if(filename.includes('.jpg')){
//         reqtype = {'Content-Type': 'image/jpeg'};
//     }
//     else if(filename.includes('.pdf')){
//         reqtype = {'Content-Type': 'application/pdf'};
//     }
//     else if(filename.includes('.png')){
//         reqtype = {"Content-Type":"image/png"};
//     }
//     else {
//         reqtype = htmlreq;
//     }
//     fs.readFile(filename, function(err,data){
//         if(err){
//             res.writeHead(404,{'Content-Type': 'text/html'});
//             return res.end("404 Not Found");
//         }
//         if(reqtype==cssreq){
//             data = fs.readFileSync(filename,{encoding: 'utf8'});
//         }
//         res.writeHead(200,reqtype);
//         res.write(data);
//         return res.end();
//     });
// }).listen(2020);