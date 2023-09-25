import { UserAge } from './UserAge.js';
import { UserPassword } from "./UserPassword.js";


export class User {

    constructor(id, name, email, password, age){
        this.id=id;
        this.name=name;
        this.email=email;
        this.password = new UserPassword(password);
        this.age=new UserAge(age);

        if(email.indexOf("@") === -1){
            throw new Error("Invalid email");
        }
    }

    hasPassword(password){        
        return this.password.hasPassword(password);
    }
    hasId(id){
        return id===this.id;
    }
    hasName(name){
        return name===this.name;
    }
    hasEmail(email){
        return email===this.email;
    }
    hasAge(age){
        return age===this.age;
    }

}