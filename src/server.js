import express from "express";
//import cartRouter  from "./routes/cartRouter.js";
import productsRouter from "./routes/productsRouter.js"
import morgan from "morgan"
import { __dirname } from "./path.js"
import {errorHandler} from "./middlewares/errorHandler.js"


const app = express();

app.use(express.static(__dirname + "/public/"));
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(morgan("dev"));

//app.use('/api/carts', cartRouter);
app.use('/api/products', productsRouter);

app.use(errorHandler);

const PORT = 8080

app.listen(PORT,()=>{
    console.log(`app listening at http://localhost: ${PORT}`)
})