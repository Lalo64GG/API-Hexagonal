import amqp from 'amqplib'
import express from 'express'

const config = {
    protocol: "amqp",
    hostname: "localhost:3306",
    port: 5672,
    username: "eduardo",
    password: "Lolasso1012",
};

export const loaderRouter = express.Router();

loaderRouter.get('/', async function loadEvent(req, res){
    const conn = await amqp.connect(config);
    const channel = await conn.createChannel();
    await channel.sendToQueue("InitialEvent", Buffer.from("Mensaje"));
    await channel.close();
    await conn.close();
    res.status(200).send("OK")
})