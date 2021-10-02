import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);
async function sendEmail(req, res) {
  try {
    await sendgrid.send({
      to: "isaactrisonwaweru@gmail.com", // Your email where you'll receive emails
      from: "isaactrisonwaweru@gmail.com", // your website email address here
      subject: `<h1>${req.body.subject}</h1>`,
      html: `<div>${req.body.message}</div>`,
    });
  } catch (error) {
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
}

export default sendEmail;
