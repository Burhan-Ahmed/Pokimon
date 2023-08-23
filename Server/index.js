import express from 'express';
import Dataset from './MOCK_DATA.json' assert { type: 'json' };

const app = express();
//Each app.get request is a Route

app.get("/:index", (req, res) => {
    const datasett = Dataset[Number(req.params.index)]
    res.json(datasett);
})
// This method will also work fine but it is sometimes hard to understand it
// res.send((Dataset.map(index => (index.first_name === "Dina"))) ? "FOUND" : "NOT FOUND");
app.get("/home", (req, res) => {

    res.send("Hello from Home")
})
app.get("/about", (req, res) => {
    res.send("Hello from About")
})

app.listen(8000, () => console.log("Server is running on port"));
