{
  let usingLet = "I'm a let variable";
  var usingVar = "I'm a var variable";
  const usingConst = "I'm a const variable";

  console.log(usingLet);  // Output: I'm a let variable
  console.log(usingVar);  // Output: I'm a var variable
  console.log(usingConst); // Output: I'm a const variable
}

// These will result in ReferenceError if you try to access them outside the block scope.
