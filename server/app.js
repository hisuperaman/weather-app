const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors');

dotenv.config();

const app = express();

app.use(cors());

app.get('/current_weather', async (req, res)=>{
    const urlString = `${process.env.API_BASE_URL}/current.json?KEY=${process.env.API_KEY}&q=${req.query.q}`;
    const response = await fetch(urlString, {
        method: 'GET',
        body: JSON.stringify()
    });
    const data = await response.json();
    return res.json(data);
})

app.get('/forecast_weather', async (req, res)=>{
    const urlString = `${process.env.API_BASE_URL}/forecast.json?KEY=${process.env.API_KEY}&q=${req.query.q}&days=7`;
    const response = await fetch(urlString, {
        method: 'GET',
        body: JSON.stringify()
    });
    const data = await response.json();
    return res.json(data);
})

app.get('/search', async (req, res)=>{
    const urlString = `${process.env.API_BASE_URL}/search.json?KEY=${process.env.API_KEY}&q=${req.query.city}`;
    const response = await fetch(urlString, {
        method: 'GET',
        body: JSON.stringify()
    });
    const data = await response.json();
    return res.json(data);
})

app.get('/get_ip', async (req, res)=>{
    const ipUrlString = `${process.env.API_BASE_URL}/ip.json.json?KEY=${process.env.API_KEY}&q=auto:ip`;
    const ipResponse = await fetch(ipUrlString, {
        method: 'GET',
        body: JSON.stringify()
    });
    const ipData = await ipResponse.json();

    return res.json(ipData);
})

const port = process.env.PORT
app.listen(port, ()=>{
    console.log(`Server started at port ${port}`)
})