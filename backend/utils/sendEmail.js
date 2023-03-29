import emailjs from '@emailjs/nodejs';

const sendEmail = async (email, subject, message) => {
  const templateParams = {
    email,
    subject,
    message,
  };

  try {
    await emailjs.send(
      process.env.EMAILJS_SERVICE_ID,
      process.env.EMAILJS_TEMPLATE_ID,
      templateParams,
      {
        publicKey: process.env.EMAILJS_PUBLIC_KEY,
        privateKey: process.env.EMAILJS_PRIVATE_KEY,
      },
    );

    console.log('Email sent!');
  } catch (err) {
    console.error(err);
  }
};

export default sendEmail;
