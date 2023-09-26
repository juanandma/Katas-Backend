export class UserEmail {
    constructor(email) {
        this.email = email;
        this.ensureIsValid();
    }
    ensureIsValid() {
        if(this.email.indexOf("@") === -1){
            throw new Error("Invalid email");
        }
    }
    equals(other) {
        return this.email === other.email
    }
}