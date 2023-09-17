const express = require("express");

const server = express();

server.use(express.urlencoded({ extended: false }));

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

server.get("/cheese", (req, res) => {
    const list = cheeseList.map((cheese) => {
        return `<li>${cheese.name} | ${cheese.rating} stars</li>`;
    });
    res.send(`
        <form method="POST">
            <div>
                <label for="name">Cheese name</label>
                <input name="name">
            </div>
            <div>
                <label for="rating">Cheese rating</label>
                <input name="rating" type="range" min="0" max="5" step="0.5">
            </div>
            <button>Rate cheese</button>
        </form>
        <ul>${list.join("")}</ul>
    `);
});

const cheeseList = [];

server.post("/cheese", (req, res) => {
    const name = req.body.name;
    const rating = req.body.rating;
    cheeseList.push({ name, rating });
    res.redirect("/cheese");
});

module.exports = server;
