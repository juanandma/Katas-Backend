import { UserRepository } from "../dominio/Repositorio/UserRepository";
export class UserRepositoryMock extends UserRepository {
    save(){    }
    existsByEmail() {    }
}