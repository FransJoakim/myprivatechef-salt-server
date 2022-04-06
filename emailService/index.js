const nodeMailer = require('nodemailer')
const sendMail = (user,totalPrice,chef,totalMinutes,date)=>{
    const convertMinToHr = (totalMinutes) => {
        const minutes = totalMinutes % 60;
        const hours = Math.floor(totalMinutes / 60);
        return `${hours}hr : ${minutes}min`
      }
    const transporter =nodeMailer.createTransport({
        service:'gmail',
        auth: {
           user:'myprivatechefapp@gmail.com',
           pass:'fouraliens'
        }
    })
    const options = {
        from:'myprivatechefapp@gmail.com',
        to:'sumana.sattar@gmail.com,ksarvanitakis@hotmail.com,fransjlt@gmail.com,barbarakogus@gmail.com',
        subject:'testing',
        text:`Hello ${user}! \n Your order is confirmed.The chef ${chef} is booked for ${convertMinToHr(totalMinutes)} at ${date}.\n Total price: ${totalPrice} SEK`,
      
       
    
    }
    transporter.sendMail(options,(err,info)=>{
     if(err){
         console.log(err)
     }else {
         console.log('email send '+info.response)
     }
    })    
}
module.exports = {sendMail}
