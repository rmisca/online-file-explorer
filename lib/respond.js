//require node modules
const url = require("url");
const path = require("path");
const fs = require("fs");

//file imports


//static base bath: location of your static folder
const staticBasePath = path.join(__dirname, "..", "static");

//respond to a request
//Following is function passed to createServer used to creater the server
const respond = (request, response) => {


    //before working with the pathname, you need to decode it
    let pathname = url.parse(request.url, true).pathname;

    //if favicon.ico stop
    if (pathname === "/favicon.ico") {
        return false;
    };
    pathname = decodeURIComponent(pathname);


//get the corresponding full static path located in the static
    const fullStaticPath = path.join(staticBasePath, pathname);

    //Can we find something in fullStaticPath?

    //no: send '404: File Not Found!'
    if (!fs.existsSync(fullStaticPath)) {
        console.log(`${fullStaticPath} does not exist`);
        response.write("404: File not found!");
        response.end();
    }
        // else {
    //     response.write("File blah found!");
    //     response.end();
    // }


//We found something
//is it a file or directory?



//It is a directory:


    //get content from the template index.html

    //build the page title



    //build breadcrumb


    //build table rows (main_content)


    //fill the template data with: the page title, breadcrumb and table rows (main_content)


    //print data to the webpage



//Is is not a directory but not a file either
//send: 401: Access denied!





//It is a file
//Let's get the file extension



//file size


//get the file mime type and add it to the response header

    //store headers here

    //response status code

    //set "Content-Type" for all file types

    //get the file size and add it to the response header
    //pdf file? -> display in browser


    //            head['Content-Disposition'] = 'attachment;filename=file.pdf';

    //audio/video file? -> stream in ranges


    //header

    //bytes=5210112-end
    //5210112-end
    //[5210112,end]


    //0 ... last byte

    //headers
    //Content-Range

    //Content-Length

    //options

//all other files stream in a normal way
};

//reading the file using fs.readFile
//        fs.promises.readFile(fullStaticPath, 'utf-8')
//            .then(data =>{
//            response.writeHead(statusCode, head);
//            response.write(data);
//            return response.end();
//        })
//            .catch(error => {
//            console.log(error);
//            response.statusCode = 404;
//            response.write('404: File reading error!');
//            return response.end();
//        });

//streaming method:

//Stream chunks to your response object

//events: close and error


module.exports = respond;







