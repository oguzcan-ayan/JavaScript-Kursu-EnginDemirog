import { BaseLogger, ElasticLogger, MongoLogger } from "../crossCuttingConcernsMyFile/logger.js"
import User from "../models/user.js"
import UserService from "../services/UserService.js"


console.log("User Component loaded")

let logger1 = new MongoLogger()
let userService = new UserService(logger1)

let user1 = new User(1, "Oğuzcan", "Ayan", "İstanbul")
let user2 = new User(2, "Beyza", "Ayan", "Ankara")

userService.add(user1)
userService.add(user2)

console.log(userService.list())
console.log(userService.getById(1))




let customer = {id : 2, firstName : "Oğuzcan"}  //prototyping
customer.lastName = "Ayan"
console.log(customer.lastName)


