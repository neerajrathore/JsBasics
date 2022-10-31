
//The Tin the figure is called a generic type parameter
//  IMPORTANT  and it is the type placeholder we wish to pass to the identity function.

//Just like passing parameters, we take the actual type specified by the user and chain it to the parameter type and the return value type
function identity <T> (value: T) : T {
    return value;
}

// passing multiple parameter
// the end one is function return type 
function identity2<T, U> (value:T, string:U): T {
    console.log(typeof value, typeof string);
    
    console.log("identity2", value, string);
    return value
}

identity2<string, number>("12", 12);
