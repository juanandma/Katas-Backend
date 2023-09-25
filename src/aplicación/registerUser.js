import { User } from "../dominio/User.js";


export class RegisterUser {


    constructor(userRepositoryFile){
        this.userRepository=userRepositoryFile;
    }

    async execute(name, email, password, age){

        const user = new User(
            crypto.randomUUID(),
            name,
            email,
            password,
            age
        );

        if (await this.userRepository.existsByEmail(user.email)){
          throw new Error("User already exists");
        }

        this.userRepository.save(user);
    }
}