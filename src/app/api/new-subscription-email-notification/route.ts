import {NextResponse} from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request){
    try{
        const {name, email, phone, school, programme, course, session, purpose, time} = await request.json()
        var transport = nodemailer.createTransport({
            host: "bhs108.truehost.cloud",
            port: 587,
            auth: {
                user: "info@vasaskills.com.ng",
                pass: "@Pijaya2024",
            }
        });
        const mailOptions = {
            from: "Vasaskills.com.ng <info@vasaskills.com.ng",
            to: email,
            subject: school +" WhatsApp Group Invitation Link",
            html:`
            <html>
            <head>
            <style>
                h1 {
                    color: green;
                    text-align: center;
                }
                p {
                    font-size: 16px;
                }
                .phoneNumber {
                    color:blue;
                    font-weight: bold;
                }
                .order-detail {
                    text-decoration: underline;
                    font-weight: bold;
                }
                img {
                    display: block;
                    margin-left: auto;
                    margin-right: auto;
                }
                button {
                    height: 40px;
                    padding-left: 24px;
                    padding-right: 24px;
                    border-radius: 20px;
                    color: white;
                    background-color: #054e92;
                    border: 0px;

                }
                button:hover {
                 cursor: pointer;
                 background-color: blue;
                }
            </style>
            </head>
            <body>
            <img src = "http://vasaskills.com.ng/_next/image?url=%2Fvasaskills-logo.png&w=96&q=75" alt = "Vasaskills Institute Logo" width = "100px"/>
            <p>Dear ${name},</p>
            <p>We are delighted to inform you that we have approved your request to join ${school} ${programme} WhatsApp Group for ${course}.</p>
            <p>Consequently, we are inviting you to join the group by clicking on the 'Join Now' button below:</p>
            <a href = "https://chat.whatsapp.com/IwvJJysoIbR1P6IPaZZgnr"><button>Join Now</button></a>
            <p>If the button above is not working copy this link and paste in the browser</p>
            <p>https://chat.whatsapp.com/IwvJJysoIbR1P6IPaZZgnr</p>
            <p>If you did not create an account with ParlyPay, please ignore this email or contact our support team.</p>
            <p>Warm Regards,</p>
            <p>Admin (<a href = "https://vasaskills.com.ng">Vasaskills.com.ng</a>)</p>
            </body>
            </html>
            `
        }
        await transport.sendMail(mailOptions)

        return NextResponse.json({message:"Success"})
    }catch(e){
        console.log({e})
    }
}