import { users } from "../data/users.js"
import DataError from "../models/dataError.js"

export default class UserService {
    constructor(loggerService) {
        // this.users = []
        this.employees = []
        this.customers = []
        this.errors = []
        this.loggerService = loggerService
        // this.users = getCustomersFromDb() 
    }
    load() {
        for (const user of users) {
            switch (user.type) {
                case "customer":
                    if (!this.checkCustomerValidityForErrors(user)) {
                        this.customers.push(user)
                    }
                    break;
                case "employee":
                    if (!this.checkEmployeeValidityForErrors(user)) {
                        this.employees.push(user)
                    }
                    break;
                default:
                    this.errors.push(new DataError("Wrong User Type", user))
                    break;
            }
        }
    }

    checkCustomerValidityForErrors(user) {
        let requiredFields = "id firstName lastName city age".split(" ")
        let hasErrors = false
        for (const field of requiredFields) {
            if (!user[field]) {
                hasErrors = true
                this.errors.push(new DataError(`Validation error. ${field} is required`, user))
            }
        }
        if (Number.isNaN(Number.parseInt(+user.age))) {
            hasErrors = true
            this.errors.push(new DataError(`Validation error. ${user.age} is not an age`, user))
        }



        return hasErrors
    }
    checkEmployeeValidityForErrors(user) {
        let requiredFields = "id firstName lastName city age salary".split(" ")
        let hasErrors = false
        for (const field of requiredFields) {
            if (!user[field]) {
                hasErrors = true
                this.errors.push(new DataError(`Validation error. ${field} is required`, user))
            }
        }
        if (Number.isNaN(Number.parseInt(+user.age))) {
            hasErrors = true
            this.errors.push(new DataError(`Validation error. ${user.age} is not an age`, user))
        }

        return hasErrors
    }

    add(user) {
        // console.log("The user has been added" + ": " + user)
        switch (user.type) {
            case "customer":
                if (!this.checkCustomerValidityForErrors(user)) {
                    this.customers.push(user)
                }
                break;
            case "employee":
                if (!this.checkEmployeeValidityForErrors(user)) {
                    this.employees.push(user)
                }
                break;
            default:
                this.errors.push(new DataError("This user cannot be added. Wrong User Type", user))
                break;
        }
        this.loggerService.log(user)
    }
    listCustomers() {
        // console.log("The user has been listed")
        return this.customers
    }
    listEmployees() {
        return this.employees
    }
    getCustomerById(id) {
        // console.log("The user has been viewed")
        return this.customers.find(u => u.id === id)
    }
    getEmployeeById(id) {
        return this.employees.find(u => u.id === id)
    }
    getCustomersSorted(){
       return this.customers.sort((customer1, customer2) => {
                if(customer1.firstName > customer2.firstName){
                    return 1
                }
                else if(customer1.firstName === customer2.firstName){
                    return 0
                }
                else{
                    return -1
                }
        })
    }
    getEmployeesSorted(){
        return this.employees.sort((employee1, employee2) => {
                if(employee1.firstName > employee2.firstName){
                    return 1
                }
                else if(employee1.firstName === employee2.firstName){
                    return 0
                }
                else{
                    return -1
                }
        })
    }
}

