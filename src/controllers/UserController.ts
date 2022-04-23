import {User} from '../entity/User'
import {UserRepository} from '../repositories/UserRepository'

export class UserController{
    static async AllUsers(req, res){
        try {
            const users = await UserRepository.find()
            if(users.length === 0){//se não houver usuários retorna um array vazio
                return res.json({message: 'não existe usuários'})
            }
            return res.json(users)
        } catch (error) {
            console.log(error)
        }
    }

    static async AddUser(req, res){
        //const {firstName, lastName, age} = req.body
        //const user = new User()
        //user.firstName = firstName
        //user.lastName = lastName
        //user.age = age
        //await UserRepository.save(user)
        try {
            await UserRepository.save({firstName: req.body.firstName, lastName: req.body.lastName, age: req.body.age})
            return res.json({message: 'Inserido com sucesso'})    
        } catch (error) {
            console.log(error)
        }
            
    }

    static async UserByName(req, res){
        try {
            const {firstName, lastName} = req.query
            if(!firstName || !lastName){
                return res.json({message: "usuário não encontrado"})
            }

            const user = await UserRepository.findByName(firstName, lastName)
            
            if(!user){//se não encontrar retorna null 
                return res.json({message: "usuário não encontrado"})
            } 
            return res.json(user)  
        } catch (error) {
            console.log(error)
        }
    }
    static async findById(req, res){
        try {
            const {id} = req.params
            const user = await UserRepository.findById(parseInt(id))
            return res.json(user)
        } catch (error) {
            
        }
    }
}