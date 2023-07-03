import User from "./userEnginDemirog.js"

export default class Customer extends User{
    constructor(id, firstName, lastName, city,age, creditCardNumber) {
        super(id, firstName, lastName, city,age)
        this.creditCardNumber = creditCardNumber
    }
}