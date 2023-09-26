import { IdGenerator } from "../dominio/servicio/IdGenerator";
export class IdGeneratorMock extends IdGenerator {
    generate(){
        return 1;
    }
}