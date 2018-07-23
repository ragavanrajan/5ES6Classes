class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greeting() {
        return `Hello There ${this.firstName} ${this.lastName}`;
    }

}
class Customer extends Person {
    constructor(firstName, lastName, phone, membership) {
        // since it is extending the Person. we want to call the person constructor using super- used in ReactJS
        super(firstName, lastName);
        this.phone = phone;
        this.membership = membership;

    }

    static getMembershipCost() {
        return 500;
    }
}

const john = new Customer('Mike', 'Bisset', '022898202', 'standard');
console.log(john.greeting());
// since it is a static method we need to use the Parent class
console.log(Customer.getMembershipCost());