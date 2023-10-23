{
  // This will throw a ReferenceError due to the Temporal Dead Zone (TDZ)
  console.log(usingLet); // ReferenceError: usingLet is not defined
  let usingLet = "I'm a let variable";
}
