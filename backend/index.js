const express = require('express');
const bodyParser = require('body-parser');
const twilio = require('twilio');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const PORT = process.env.PORT || 8000;

const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;
const client = new twilio(accountSid, authToken);

const from = 'whatsapp:+14155238886'; // Your Twilio WhatsApp number/Sandbox number
const to = ['whatsapp:+917009611934']; // Another one here, with trial account the number needs to be verified or smth

app.get('/', (req, res) => {
    res.send("API works")
})

app.post('/send-message', (req, res) => {
  const message = 'Hello, this is a predetermined message from Arnav!';

  to.forEach(toNumber => {
    client.messages.create({
      body: message,
      from: from,
      to: toNumber
    })
    .then(message => console.log(message.sid))
    .catch(error => console.error(error));
  });

  res.send('Messages sent!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
