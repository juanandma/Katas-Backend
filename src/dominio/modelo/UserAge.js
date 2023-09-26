export class UserAge {
    constructor(age) {
        this.age = age;
        this.ensureIsAdult();
    }
    ensureIsAdult() {
        if (this.age < 18) {
            throw new Error("Invalid age");
        }
    }
    equals(other) {
        return this.age === other.age
    }
}