
// lib/app.ts
import express = require('express');
import { cpus } from 'os';
const config = require("../config/config.json")
const dbConfig = require("../config/database.json")
const { Client } = require('pg')
const client = new Client({
    user: dbConfig.dev.user,
    host: dbConfig.dev.host,
    database: dbConfig.dev.database,
    password: dbConfig.dev.password,
    port: dbConfig.dev.port,
  });
// Create a new express application instance
const app: express.Application = express();

app.get('/', async function (req, res) {
    let fd = {
        name: "Kirill",
        surname: "Kurinnyi"
    }
    await client.connect()
    const resp = await client.query('SELECT * FROM apple.public."user";')
    await client.end()
    
  console.log(resp.rows);
  // fd = resp.rows;
  sendResponse(res, fd)
  // console.log(fd);
});

app.listen(config.port, async function () {
  console.log(`Example app listening on port ${config.port}!`);
});

function sendResponse(res: any, resp: any){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.send(resp);
} 