const express = require("express");

const server = express();

server.get("/", (req, res) => {
    res.send(`<h1>Hello Express</h1>`);
});

server.get("/colour", (req, res) => {
    const hex = req.query.hex || "ffffff";
    res.send(`
    <style>body { background-color: #${hex}; }</style>
    `);
});

module.exports = server;
