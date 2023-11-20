//Arrays

const myArr = [0, 1, 2, 3, 4, 5] // [] its shown arrays
const myHeros = ["ironman" , "superman", "jaadu"]

const myArr2 = new Array (1, 2, 3, 4)

// console.log(myArr[]);

// Array Mathods

 //myArr.push(9,5,7)
 //myArr.push(0,0,0)
 //myArr.pop(1)

 //myArr.unshift()
// myArr.unshift(9,0,5)

 //myArr.shift()

 //console.log(myArr.includes(4));
 //console.log(myArr.indexOf(8));

//const newArr = myArr.join()  // to convert array into string


 //console.log(myArr);
 //console.log(newArr);


 // Slice ,Splice
  console.log("A " , myArr);

  const myn1 = myArr.slice(1,3)

  console.log(myn1);
  console.log("B ", myArr);

  const myn2 = myArr.splice(1,3)

  console.log("c ", myArr);
  console.log(myn2);
  // diff between Slice / Splice Slice
  // does 
  //manuplate Original Array but splice does not manuplate original array