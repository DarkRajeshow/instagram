import nodemailer from 'nodemailer'


const email = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;


export const transporter = nodemailer.createTransport(
    {
        service: "Gmail",
        secure: true,
        auth: {
            user: email,
            pass
        }
    }
)

export const mailOptions = {
    from: email,
    to: 'itsrajeshadeli@gmail.com,rajannaadeli@gmail.com,Kaliji2161@gmail.com'
}

