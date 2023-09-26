import { UserAge } from './UserAge.js';
import { UserEmail } from './UserEmail.js';
import { UserPassword } from "./UserPassword.js";


export class User {

    constructor(id, name, email, password, age){
        this.id=id;
        this.name=name;
        this.email= new UserEmail(email);
        this.password = new UserPassword(password);
        this.age=new UserAge(age);

        
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
        return this.email.equals(new UserEmail(email));
    }
    hasAge(age){
        return this.age.equals(new UserAge(age));
    }

}