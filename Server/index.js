import express from 'express';
import Dataset from './MOCK_DATA.json' assert { type: 'json' };
import cors from "cors";

const app = express();
app.use(express.json());  //Built-in Middleware of Express for JSON parsing
app.use(cors());   // used when working with middleware

var ProfileEmail = "Burhan";
app.post("/", (req, res) => {
    const { email, password } = req.body;
    const user = Dataset.find((item) => item.email === email && item.password === password);
    const index = Dataset.findIndex(item => item.email === email);
    if (user) {
        res.send("Login successful")
        ProfileEmail = Dataset[index];
    }
    else {
        res.send("Login Fail");
    }
})
app.get("/profile", (req, res) => {
    return res.send(ProfileEmail);
})

app.listen(8000, () => console.log("Server is running on port"));