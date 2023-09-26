import { EmailSender } from "../dominio/servicio/EmailSender";

export class EmailSenderMock extends EmailSender {
    sendEmail(email, message) {        
    }
}