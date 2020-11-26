module.exports = function sendEmails(emailArray) {

    const mailjet = require('node-mailjet').connect(process.env.MAILJET_API_KEY, process.env.MAILJET_API_SECRET);
    let dataArray = emailArray.map((each) => {
        let data =  {
            'FROM': {
                'Email': process.env.FROM_EMAIL,
                'Name': process.env.FROM_NAME
            },
            'To':[{
                "Email": each.gifter,
            }],
            'Subject': 'Secret Santa Assignement!',
            'TextPart': "Hello! Your secret santa assignement will be found at: " + each.url,

        };
        return data;
    })
    return request = mailjet.post("send", {'version': 'v3.1'}).request({
        "Messages": dataArray
    });
}