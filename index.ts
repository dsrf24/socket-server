import bodyParser from "body-parser";
import Server from "./classes/server";
import { SERVER_PORT } from "./global/environment";
import router from "./routes/router";
import cors from "cors";

const server = new Server();

// CONFIGURAR BODY PARSER - ENVIO DE DATOS JSON
server.app.use(bodyParser.urlencoded({extended:true}));
server.app.use(bodyParser.json());

//CONFIGURAR CORS
server.app.use(cors({origin:true,credentials:true}));

server.app.use("/", router)

server.start(()=>{
    console.log(`[Server] Running On Port ${SERVER_PORT}`);
    
})