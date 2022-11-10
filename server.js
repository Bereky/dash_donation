
const express = require("express")
const app = express()
const axios = require("axios").default
const bodyParser = require("body-parser")
const path = require("path");

const cors = require('cors')

require("dotenv").config()
const PORT = process.env.PORT || 5200

app.use(cors({origin: true}))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('client/build'))


const CHAPA_URL = process.env.CHAPA_URL || "https://api.chapa.co/v1/transaction/initialize"
const CHAPA_AUTH = process.env.CHAPA_AUTH


const config = {
    headers: {
        Authorization: CHAPA_AUTH
    }
}


app.post("/api/create-payment-session", cors(), async (req, res) => {
    
    const CALLBACK_URL = "https://localhost:5200/api/verify-donation/"
    const RETURN_URL = "http://localhost:5200/donation-complete"

    const TEXT_REF = "tx-myecommerce12345-" + Date.now()
    
    const data = {
        amount: req.body.amount, 
        currency: 'USD',
        email: 'johndoe@email.com',
        first_name: 'John',
        last_name: 'Doe',
        tx_ref: TEXT_REF,
        callback_url: CALLBACK_URL + TEXT_REF,
        return_url: RETURN_URL
    }

        await axios.post(CHAPA_URL, data, config)
        .then((response) => {
                let resData = response.data.data;
                res.json(resData);
            })
            .catch((err) => console.log(err))
})


app.get("/api/verify-donation/:id", cors(), async (req, res) => {
    
    await axios.get("https://api.chapa.co/v1/transaction/verify/" + req.params.id, config)
    .then((response) => {
                console.log("Payment Verified");
            }) 
            .catch((err) => console.log("Payment can't be verfied", err))
})


app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
});


app.listen(PORT, () => console.log("Server listening on port:", PORT))
