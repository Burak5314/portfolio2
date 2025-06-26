const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Vul hier je eigen e-mailgegevens in
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'burakalperen2007@gmail.com', // jouw Gmail-adres
    pass: 'tkzn zqhr qmae rhmo'         // plak hier je Gmail app-wachtwoord
  }
});

transporter.verify(function(error, success) {
  if (error) {
    console.error('Verbindingsfout:', error);
  } else {
    console.log('Server is klaar om e-mails te versturen');
  }
});

app.post('/contact', (req, res) => {
  const { naam, email, bericht } = req.body;

  const mailOptions = {
    from: email,
    to: 'burak-unlu-2007@outlook.com',
    subject: `Contactformulier van ${naam}`,
    text: `Naam: ${naam}\nE-mail: ${email}\n\nBericht:\n${bericht}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      return res.status(500).send('Er is iets misgegaan.');
    }
    res.send('Bericht succesvol verzonden!');
  });
});

app.listen(3000, () => {
  console.log('Server gestart op http://localhost:3000');
});