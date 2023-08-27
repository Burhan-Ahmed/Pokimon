import express from 'express';
import Dataset from './MOCK_DATA.json' assert { type: 'json' };
import cors from "cors";

const app = express();
app.use(express.json());  //Built-in Middleware of Express for JSON parsing
app.use(cors());   // used when working with middleware

app.post("/", (req, res) => {
    const { email, password } = req.body;
    const user = Dataset.find((item) => item.first_name === email && item.password === password);
    user ? res.send("Login successful") : res.send("Login Fail");
})

app.listen(8000, () => console.log("Server is running on port"));