const nodeMailer = require('nodemailer')
const sendMail = (user, totalPrice, chef, totalMinutes, date, shoppingList) => {

    const convertMinToHr = (totalMinutes) => {
        const minutes = totalMinutes % 60;
        const hours = Math.floor(totalMinutes / 60);
        return `${hours}hr : ${minutes}min`
    }
    const transporter = nodeMailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'myprivatechefapp@gmail.com',
            pass: 'fouraliens'
        }
    })

    const list = shoppingList.map(li => {
        return `<li>${li.name} ${li.quantity} ${li.unit}</li>`;
    });

    let confirmationMessage = `Hello ${user}, <br><br>
        Your order is confirmed!<br> 
        The chef ${chef} is booked for ${convertMinToHr(totalMinutes)} at ${date}.<br>
        Total price: ${totalPrice} SEK.<br>
        <h1>Shopping List</h1><br>
        <ul>
            ${list.join(' ')}
        </ul>
     `;

    const options = {
        from: 'myprivatechefapp@gmail.com',
        to: 'sumana.sattar@gmail.com, barbarakogus@gmail.com',
        subject: 'Order confirmation',
        text: 'My private Chef',
        html: confirmationMessage,
    }

    transporter.sendMail(options, (err, info) => {
        if (err) {
            console.log(err)
        } else {
            console.log('email send ' + info.response)
        }
    })
}
module.exports = { sendMail }
