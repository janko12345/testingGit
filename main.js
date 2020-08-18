let fakeProto = {
    sayHi() {
        return "hi";
    }
}
let obj = {
    name: "obj",
    age: 30,
    "yes property": "yes",
    sayHi() {
        return "bye";
    },
    proto: fakeProto,
}
if (obj.sayHi)
    console.log(obj.sayHi());
else
    console.log(obj.proto.sayHi());

// testing private fields in class

class Animal {
    static count = 3;
    #name;
    #age;
    #methodName = "changeName";

    constructor(name, age, methodName) {
        console.log(this.changeFnName);
        this.#name = name;
        this.#age = age;
        this.#methodName = methodName;
    }
    ["change" + "Name"](change) {
        this.#name = change;
    }
    changeFnName() {
        obj = dbj;
    }
    get name() {
        return this.#name;
    }
    get count() {
        return this.count;
    }
    set age(age) {
        if (age > 5)
            alert("Too old try younger");
        else
            this.#age = age;
    }
}


// testing objec