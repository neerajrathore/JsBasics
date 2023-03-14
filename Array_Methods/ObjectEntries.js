const obj = {
    a: 1,
    b: 2,
    c: 3,
  }

  // skip 1 
//   Object.entries(obj).filter(([key, _]) => key !== "a").map((data)=> {
//     console.log(data);
//   });

//   Object.fromEntries()

  //
  // this will hide key 'b' from obj
Object.defineProperty(obj, 'b', {
    enumerable: false,  
  });
  
  Object.entries(obj).map(([key, value]) => console.log(`${key}: ${value}`))