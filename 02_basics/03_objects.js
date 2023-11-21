// singleton
// objects.create


// object Literals


const mysym = Symbol("aman1")

const JsUsers = {
    name : "aman",
    "full name": "aman Verma",
    age: 22,
    location: "Indore",
    ["email"]: "aman787918google.com",
    isLoggedIn: false,
    lastLoginDays: ["Mondays", "Saturdays"],
    [mysym]: "aman1",

}

//console.log(JsUsers.email);
// console.log(JsUsers["email"]);
// console.log(JsUsers["full name"]);
console.log(JsUsers[mysym]);

JsUsers.email = "aman@chatgpt.com" // to change value like email with= overwrite a value
//Object.freeze(JsUsers) // to lock/ freeze the object 
JsUsers.email = "harsh2microsoft.com"
//console.log(JsUsers);

JsUsers.greeting = function(){
    console.log("Hello JS Users");
    
}

JsUsers.greetingtwo = function (){
    console.log(`Hello JS user,${this.name}`);
}
console.log(JsUsers.greeting());
console.log(JsUsers.greetingtwo());