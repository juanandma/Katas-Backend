import { describe, it, expect } from "vitest";
import { User } from "./User.js";
import { UserAge } from "./UserAge.js";
import { UserEmail } from "./UserEmail.js";




// Arrange, Act and Assert

describe("User", () => {
    it("has an id", function () {
        const id = "1";
        const name = "Juan";
        const email = "juan@email.com";
        const password = "123456";
        const age = 18;
        const user = new User(id, name, email, password, age);
        return expect(user.hasId(id)).toBeTruthy();
    })
    it("has an name", function () {
        const id = "1";
        const name = "Juan";
        const email = "juan@email.com";
        const password = "123456";
        const age = 18;
        const user = new User(id, name, email, password, age);
        return expect(user.hasName(name)).toBeTruthy();
    })
    it("has an email", function () {
        const id = "1";
        const name = "Juan";
        const email = "juan@email.com";
        const password = "123456";
        const age = 18;
        const user = new User(id, name, email, password, age);
        return expect(
            user.hasEmail(email)
        ).toBe(true);
    })
    it("has an age", function () {
        const id = "1";
        const name = "Juan";
        const email = "juan@email.com";
        const password = "123456";
        const age = 18;
        const user = new User(id, name, email, password, age);
        return expect(
            user.hasAge(age)
        ).toBe(true);
    })

    it("should create a user", function () {
        const id = "1";
        const name = "Juan";
        const email = "juan@email.com";
        const password = "123456";
        const age = 18;
        const user = new User(id, name, email, password, age);

        return expect(user.email).toEqual(new UserEmail(email));
    })

    it("fails if a user with age less than 18 is created", function () {
        return expect(function () {
            return new User("1", "Juan", "juan@email.com", "1234", 8);
        }).toThrow("Invalid age");
    })

    it("should store a hashed password", function () {
        const id = "1";
        const name = "Juan";
        const email = "juan@email.com";
        const password = "123456";
        const age = 18;
        const user = new User(id, name, email, password, age);
        return expect(user.hasPassword("1234")).not.toEqual("1234");
    })

    it("should store the password as a hashed password", function () {
        const id = "1";
        const name = "Juan";
        const email = "juan@email.com";
        const password = "123456";
        const age = 18;
        const user = new User(id, name, email, password, age);
        return expect(user.hasPassword("4a83854cf6f0112b4295bddd535a9b3fbe54a3f90e853b59d42e4bed553c55a4")).toBeTruthy();
    })







});

