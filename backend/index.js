const express = require('express');
const app = express();
const cors = require('cors');
const port = PORT||3000;

app.use(express .json());


app.get ('/api/home', (req, res) => {
    res.send('Hello World');
});

app.listen(3000, () => {
    console.log(`Server is running on port http://localhost:${port}`);
})