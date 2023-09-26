export class UserRepository {
    save(user) {
        throw new Error("Cannot call abstract method");
    }
    existsByEmail(email){
        throw new Error("Cannot call abstract method");
    }
}