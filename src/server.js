const express = require("express");

const server = express();

server.get("/", (req, res) => {
    res.send(`<h1>Hello Express</h1>`);
});

server.get("/colour", (req, res) => {
    const hex = req.query.hex || "ffffff";
    res.send(`
    <style>body { background-color: #${hex}; }</style>
    <form>
        <label for="hex">Enter hex code:</label>
        <input type="text" name="hex" value="${hex}">
    </form>
    `);
});

module.exports = server;
