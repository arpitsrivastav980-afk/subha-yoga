const express = require('express');
const fs = require('fs');

const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// 👇 file ensure karo (create ho jaye)
if (!fs.existsSync('data.txt')) {
    fs.writeFileSync('data.txt', '');
}

// 👇 form submit route
app.post('/join', (req, res) => {
    console.log(req.body);

    const data = req.body;

    fs.appendFileSync('data.txt', JSON.stringify(data) + "\n");

    res.send("🎉 Form Submitted Successfully!");
});

// 👇 IMPORTANT (Render ke liye)
const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
    console.log("🔥 Server running on port", PORT);
});