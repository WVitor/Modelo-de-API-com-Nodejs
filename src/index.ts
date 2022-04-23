require('dotenv').config()
import { AppDataSource } from "./datasource/data-source"
import Express = require('express')
const app = Express()
const cors = require('cors')

import {userRouter} from "./routes/userRouter"

app.use(Express.urlencoded({extended: true}))
app.use(Express.json())
app.use(cors({credentials:true, origin:'*'}))

app.use(userRouter)

AppDataSource.initialize().then(() => {
    app.listen(process.env.PORT, ()=>{
        console.log(`Escutando na porta ${process.env.PORT}`)
    })
}).catch((error) => console.log(error))

