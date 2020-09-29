import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import * as nodemailer from 'nodemailer'
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  
  async main() {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
  
    // create reusable transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
     
      },
    });
  
    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: '"The Proseia team" <noreply@proseia.app>', // sender address
      to: "raphael@telluria.com.br, bruno@telluria.com.br", // list of receivers
      subject: "Hello From Proseia ✔", // Subject line
      html: "<b>Hello world?</b>", // html body
    });
  
    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  
    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  }

  @Get()
  async getHello(): Promise<string> {
    await this.main();
    return this.appService.getHello();
  }

  
}
