var Client = require('node-rest-client').Client;

var client = new Client();


module.exports = (ticketId, subject, content, emailIds, requester) => {
    var reqBody = {
        subject: subject,
        content: content,
        recepientEmails: emailIds,
        requester: requester,
        ticketId: ticketId
    }
    var args = {
        data: reqBody,
        headers: { "Content-Type": "application/json" }
    };
    client.post("http://localhost:7777/notifiServ/api/v1/notifications", args, function (data, response) {
        console.log("Request sent");
        console.log(data);
    });


}