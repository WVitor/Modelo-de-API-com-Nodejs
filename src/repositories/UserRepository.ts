import { User } from "../entity/User";
import { AppDataSource } from "../datasource/data-source";

//getOne() retorna um único item em objeto
//getMany() retorna um ou mais itens em objetos dentro de um array

export const UserRepository = AppDataSource.getRepository(User).extend({
    findByName(firstName: string, lastName: string) {
        return UserRepository.createQueryBuilder("user")
            .where("user.firstName = :firstName", { firstName })
            .andWhere("user.lastName = :lastName", { lastName })
            .getOne()
    },
    findById(id: Number){
        return UserRepository.createQueryBuilder("user")
            .select(["user.firstName", "user.lastName"])
            .where("user.id = :id", { id })
            .getOne()
    }
})
