// Note that there's no need for your .then cause fetch is failing assumed.
const myFunc = (): Response => {
    return fetch("http://something")
    .catch(err => {
        console.error(`the call failed completely: ${err}`)
        return new Response(null, {
            status: 503,
            statusText: "failed 503",
        }); 
    });
};

// with async await
const myFunc = async (): Response => {
    try {
        return await fetch("http://something");
    } catch (err) {
        console.error(`the call failed completely: ${err}`)
        return new Response(null, {
            status: 503,
            statusText: "failed 503",
        }); 
    }
};
