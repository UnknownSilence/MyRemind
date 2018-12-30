const accountID = "AC0d7626f4a45e3bf1886ac29e0ae7bec9";
const authToken = "ab69d64c808f7cbafc5bb43556208058";
const apiPhone = "18302154209";
const sendBtn = document.getElementById('send');

sendBtn.addEventListener("click", function () {
    var targetPhone = document.getElementById('phone').value;
    var message = document.getElementById('message').value;
    const client = require("twilio")(accountID, authToken);

    client.messages
        .create({
            from: apiPhone,
            to: targetPhone,
            body: message
        })
        .then(messsage => console.log(message.sid))
        .then(document.getElementById('phone').value = "")
        .then(document.getElementById('message').value = "");
})