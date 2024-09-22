import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config({
    path: "./.env",
});

const port = process.env.PORT || 3001;

const app = express();
app.use(cors());
app.use(express.json());

const isDigitString = (str) => /^\d+$/.test(str);
const alphabets = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];
const numbers = [
    "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"
];

app.get("/", (req, res) => {
    res.json({
        "user_id": "samanyu_vyas_10092003",
        "email": "sn8319@srmist.edu.in",
        "roll_number": "RA2111003020269",
    })
});

app.post("/api/bfhl", (req, res) => {
    const data = req.body;
    console.log("recieved data: ", data);
    let allAlpha = [];
    let allNo = [];
    let highestAlpha = "";
    let highestLowerAlpha = "";
    data?.data?.map(elem => {
      if (alphabets.includes(elem.toUpperCase()))
        allAlpha.push(elem);
      if (isDigitString(elem))
        allNo.push(elem);
      // if (alphabets.includes(elem.toUpperCase()) && elem.toUpperCase() > highestAlpha.toUpperCase())
      //   highestAlpha = elem;
      alphabets.map (alpha => {
        if ((alpha.toLowerCase() == elem) && (alpha.toLowerCase() > highestAlpha))
          highestLowerAlpha = elem;
      })
    })
    res.json({
      is_success: true,
      "user_id": "samanyu_vyas_10092003",
      "email": "sn8319@srmist.edu.in",
      "roll_number": "RA2111003020269",
      "numbers": allNo,
      "alphabets": allAlpha,
      "highest_lowercase_alphabet": highestLowerAlpha,
      "file_valid": true,
      "file_mime_type": "image/png",
      "file_size_kb": "400"
      // "highest_alphabet": highestAlpha,
    })
  })

app.get("/api/bfhl", (req, res) => {
    const responseJSON = { "operation_code": 1 }
    res.status(200).send(responseJSON);
});

app.listen(port, () => {
    console.log(`example on port ${port}`);
});