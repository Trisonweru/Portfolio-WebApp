export default function (req, res) {
  if (req.body.email === "" || req.body.name === "") {
    return;
  }

  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: "isaactrisonwaweru@gmail.com",
      pass: process.env.PASSWORD,
    },
    secure: true,
  });
  const mailData = {
    from: req.body.email,
    to: "isaactrisonwaweru@gmail.com",
    subject: `Message From Website User: ${req.body.name}`,
    text: req.body.message + " | Sent from: " + req.body.email,
    html: `<div>${req.body.message}</div><p>Sent from:
    ${req.body.email}</p>`,
  };
  return transporter.sendMail(mailData, function (err, info) {
    if (err) console.log(err);
    else {
      res.send(200);
    }
  });
}
