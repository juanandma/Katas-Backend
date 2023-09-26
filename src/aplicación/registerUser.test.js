import { User } from "../dominio/modelo/User.js";
import { RegisterUser } from "./registerUser.js";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { EmailSenderMock } from "../infraestructura/EmailSenderMock.js";
import { IdGeneratorMock } from "../infraestructura/IdGeneratorMock.js"
import { UserRepositoryMock } from "../infraestructura/UserRepositoryMock.js"

describe("registerUser", () => {
    let userRepository
    let idGenerator
    let registerUser
    let emailSender
    const notImportantName = "juanma"
    const notImportantEmail = "juanma@email.com"
    const notImportantAge = 18
    const notImportantPassword = "123456"

    beforeEach(() => {
        userRepository = new UserRepositoryMock();
        idGenerator = new IdGeneratorMock();
        emailSender = new EmailSenderMock();
        vi.spyOn(userRepository, "save");
        vi.spyOn(emailSender, "sendEmail");
        registerUser = new RegisterUser(userRepository, idGenerator, emailSender)
    })
    
    it("saves the user in the repository", async () => {
        await registerUser.execute(notImportantName, notImportantEmail, notImportantPassword, notImportantAge);
        
        expect(userRepository.save).toHaveBeenCalled();
    })

    it("saves the user with all the data", async () => {
        await registerUser.execute(notImportantName, notImportantEmail, notImportantPassword, notImportantAge);

        const user = new User(idGenerator.generate(),notImportantName, notImportantEmail, notImportantPassword, notImportantAge);

        expect(userRepository.save).toHaveBeenCalledWith(user);
    })   

    it("sends email to the user", async () => {
        const name = "John Doe"
        const email = "john@email.com"
        const age = 18
        const password = "password"


        await registerUser.execute(name, email, password, age);

        const user = new User(IdGeneratorMock.generate, name, email, password, age)

        expect(emailSender.sendEmail).toHaveBeenCalledWith(user.email, "message");
    })   

    
});