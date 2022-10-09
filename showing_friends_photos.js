const http = require('http');
const url = require('url');

const port = 3006;
const hostname = "127.0.0.1";

friends = [
    {
        name: "Vallabh",
        url: `https://3.imimg.com/data3/YF/SK/MY-15008424/modal-photography-500x500.png`,
        age:18,
        blood_group: 'Unknown'
    },
    {
        name: 'Om',
        url: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqJkDm6Vn5rFOGqjalxMr_SifPIn_Snvb8M9ewy7fSM2jSwZhPDQyclMYA0K6PObM9IPk&usqp=CAU`,
        age: 19,
        blood_group:'O+'
    },
    {
        name: 'Sanjyot',
        url: `C:\Users\Surendra Longre\OneDrive\Desktop\IMG_20220907_190912.jpg`,
        age:19
    },

    {
        name: 'Mohit',
        url: `https://thumbs.dreamstime.com/b/fashion-model-wavy-hairstyle-attractive-young-girl-curly-hair-posing-studio-face-beautiful-woman-long-brown-female-196126449.jpg`,
        age:19,
        blood_group: 'unknown'
    }
]

const respond = (request, response) => {
    query = url.parse(request.url, true).query;
    pathname = url.parse(request.url, true).pathname;

    response.write(`
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Friends</title>
</head>
<body>`);

    response.write('<p>My Friends</p>');

    const check = friend => (query.name == undefined || query.name == friend.name)

    if (pathname == '/friends') {

        friends.filter(check).forEach(friend => {
            response.write(`
            <hr>
            <h1> Photo: ${friend.name}</h1>
            <img src='${friend.url}' height="540x" alt="Unable to show photo">
            <h3 style="font-size:1.5em;"> Age: ${friend.age}</h3>
            <h1>Blood group: ${friend.blood_group}</h1>



        `)
        });

        response.end(`</body></html>`);

    }


}





const server = http.createServer(respond);
server.listen(port, hostname, () => { console.log(`Listening to port: ${port} hostname: ${hostname}`) })
