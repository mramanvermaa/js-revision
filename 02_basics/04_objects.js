//const tinderUser = new Object()     // its  singleton object
 const tinderUser = {}               // its non singleton object

tinderUser.id = "123abc"
tinderUser.name = "harsh"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

// object ander ke ander object 

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname:  {
            firstname: "aman",
            lastname: "verma"
        }
       }
     }

     //console.log(regularUser);
     console.log(regularUser.fullname.userfullname.firstname);

     // combined and merge the objects

     const Obj1 = {1: "a", 2: "b"}
     const Obj2 = {3: "a", 5: "b"}
     const Obj4 = {4: "a", 6: "b"}

    // const Obj3 = {Obj1, Obj2}

    // const Obj3 = Object.assign({}, Obj1, Obj2, Obj4)
     const Obj3 = {...Obj1, ...Obj2, ...Obj4}
     console.log(Obj3);

     // CASES when the value come from data base

     
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]