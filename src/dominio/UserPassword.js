const { createHmac } = await import('node:crypto');
export class UserPassword {
    constructor(password){
        this.password=createHmac('sha256', "secret")
        .update(password)
        .digest('hex');                       
    }
    /*
    static fromPlain(plain) {
        const hashPassword = createHmac('sha256', "secret")
        .update(plain)
        .digest('hex');
        return new UserPassword(hashPassword);
    }
    */
    hasPassword(password){
        console.log(password);
        console.log(this.password);
        return password===this.password;
    }
}