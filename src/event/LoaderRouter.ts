import amqp from 'amqplib'
import express from 'express'

const config = {
    protocol: "amqp",
    hostname: process.env.HOST,
    port: 5672,
    username: process.env.DB_USER,
    password:  process.env.DB_PASS,
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