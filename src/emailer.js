module.exports = function sendEmails(emailInfo) {
    const mailjet = require('node-mailjet').connect(process.env.MAILJET_API_KEY, process.env.MAILJET_API_SECRET);
    let data = {
        'FromEmail': process.env.FROM_EMAIL,
        'FromName':  process.env.FROM_NAME,
        'Subject': 'Secret Santa Assignement!',
        'Text-part': "Hello! Your secret santa assignement will be found at: " + emailInfo.url,
        'Recipients': [{'Email': emailInfo.gifter}]
    };
    mailjet.post('send').request(data).catch((err) => {
        console.error('Email failed to send: ' + err.ErrorMessage);
    });
}