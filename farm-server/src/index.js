
http = require("http")
class Server {
    
    constructor(port) {
        // this.port = port
        this.createServer(port)
        // vegetableArray
    }
    vegetableArray = [ {
        label: "Картошка",
        value:"carrot",
        amount: 5
    },
    {
        label: "Морковь",
        value:"carrot",
        amount: 4
    },
    {
        label: "Помидор",
        value:"tomato",
        amount: 3
    },
    {
        label: "Огурец",
        value:"cucumber",
        amount: 7
    },
    {
        label: "Баклажан",
        value:"eggplant",
        amount: 4
    },
    {
        label: "Кабачек",
        value:"zucchini",
        amount: 3
    },
    {
        label: "Тыква",
        value:"pumpkin",
        amount: 6
    }]
    createServer(port){
        http.createServer((req, res)=>{
            this.router(req, res)

        }).listen(port, () => {console.log("server is done!")})

    }
    router(req, res){
        switch (req.url) {
                case "/":
                    this.roteRoot(req, res)
                    break;
                case "/veg":
                    this.roteGetVegetables(req, res)
                    break;
                case "/veg/create":
                    this.roteCreateVegetables(req, res)
                    break;
                case "/anim":
                    this.roteGetAnimals(req, res)
                    break;

                default:
                    this.roteNotFound(req, res)
                    break;
            
                }
            
    }
    roteNotFound(req, res){
        res.statusCode = 404
        res.end()
    }
    roteGetVegetables(req, res){
        // const data = [
           
        // ]
        // this.vegetableArray = [...data]
        res.setHeader("Content-type", "application/json")
        res.end(JSON.stringify(this.vegetableArray))
    }
    roteCreateVegetables(req, res){
        if(req.method === 'POST'){
            const body = []
            req.on("data", (chunk)=>{body.push(chunk)})
            req.on("end", ()=>{
                const bodyStr = Buffer.concat(body).toString()
                const bodyObj = JSON.parse(bodyStr)
                console.log(bodyObj)

                let isFound = false

                for(i = 0; i < this.vegetableArray.length; i++){
                    if (i.value != bodyObj.value){
                        this.vegetableArray.push(bodyObj)       
                        console.log(this.vegetableArray)
                        res.end("this is POST")
                    } else {
                        // this.roteNotFound(req, res)
                    }
                }
                
               
            })
            
        }
        else{
            this.roteNotFound(req, res)
        }
    }
    roteGetAnimals(req, res){
        const data = [
            {
                label: "Свинья",
                value:"pork",
                amount: 1
            },
            {
                label: "Корова",
                value:"cow",
                amount: 1
            }
        ]
        res.setHeader("Content-type", "application/json")
        res.end(JSON.stringify(data))
    }
    
    roteRoot(req, res){

        res.end("it is root")
    }
    // server = http.createServer()

    // start(){
    //     server.listen(this.port) 
    // }
    
    // home(){
    //     response.end("It is root")
    // }
    // data = [
    //             {
    //                 type: "carrot",
    //                 count: 2
    //             },
    //             {
    //                 type: "tomato",
    //                 count: 4
    //             },
    //             {
    //                 type: "potato",
    //                 count: 10
    //             }
    //         ]

    
}
const server = new Server(3034)


// const http = require("http")
 
// const server = http.createServer((request, response) => {
//     console.log(request.headers, request.method, request.url)
//     switch (request.url) {
//         case "/":
//             response.end("It is root")
//             break;
    
//         case "/start":
//             response.end("It is start")
//             break;
//         case "/data":
//             const data = [
//                 {
//                     type: "carrot",
//                     count: 2
//                 },
//                 {
//                     type: "tomato",
//                     count: 4
//                 },
//                 {
//                     type: "potato",
//                     count: 10
//                 }
//             ]
//             response.setHeader("Content-Type","application/json")
//             response.end(JSON.stringify(data))
//             break;
//             default:
//                 response.statusCode = 404
//                 response.end()
//                 break;

//     }

//     response.end(JSON.stringify(data))
// })

// server.listen(3001, ()=>{console.log("server is done")/**/})