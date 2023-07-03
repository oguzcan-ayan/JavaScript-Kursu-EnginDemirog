export default class UserService{
    constructor(loggerService){
        this.users = []
        this.loggerService = loggerService
       // this.users = getCustomersFromDb() 
    }
    add(user){
       // console.log("The user has been added" + ": " + user)
        this.users.push(user)
        this.loggerService.log(user)
    }
    list(){
        // console.log("The user has been listed")
        return this.users
    }
    getById(id){
        // console.log("The user has been viewed")
        return this.users.find(u => u.id === id)
    }

}

