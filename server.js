const express = require('express');
const fs = require('fs');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// 👇 file ensure karo (create ho jaye)
if (!fs.existsSync('data.txt')) {
    fs.writeFileSync('data.txt', '');
}

app.post('/join', (req, res) => {
    console.log(req.body); // 👈 debug

    const data = req.body;

    fs.appendFileSync('data.txt', JSON.stringify(data) + "\n");

    res.send("🎉 Form Submitted Successfully!");
});

app.listen(3000, () => {
    console.log("🔥 Server running on port 3000");
});