import { User } from "../dominio/User.js"
import { UserRepository } from "../dominio/UserRepository.js";

const sleep = function(ms) {
    return new Promise(function(resolve) {
        return setTimeout(resolve, ms)
    })
}

export class UserRepositoryFile extends UserRepository{

    async save(user) {
        /*
        const users = JSON.parse(Deno.readTextFileSync("users.json")) as User[]
        await sleep(1000)
        users.push(user)
        Deno.writeTextFileSync("users.json", JSON.stringify(user, null, 2));
        */
    }

    async existsByEmail(email) {
        /*
        const users = JSON.parse(Deno.readTextFileSync("users.json")) as User[]
        await sleep(1000)
        return Boolean(users.find(function(user) {
            return user.email === email;
        }))    
        */    
    }
}