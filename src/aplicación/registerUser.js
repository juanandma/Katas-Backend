import { User } from "../dominio/modelo/User.js";
import { IdGenerator } from "../dominio/servicio/IdGenerator.js";
const crypto = await import('node:crypto');


export class RegisterUser {


    constructor(userRepositoryFile, IdGenerator, EmailSender){
        this.userRepository=userRepositoryFile;
        this.IdGenerator=IdGenerator;
        this.EmailSender=EmailSender;

    }

    async execute(name, email, password, age){

        const user = new User(
            this.IdGenerator.generate(),
            name,
            email,
            password,
            age
        );

        if (await this.userRepository.existsByEmail(user.email)){
          throw new Error("User already exists");
        }

        this.EmailSender.sendEmail(user.email, "message");

        this.userRepository.save(user);
    }

}