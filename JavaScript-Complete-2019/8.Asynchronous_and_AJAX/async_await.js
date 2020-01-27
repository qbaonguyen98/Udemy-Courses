/*  *** IMPORTANT ***

    async, await is an feature of ES8

    --> an easier replacement for Promise

*/
// -----------------------------------------------------------------------------------------------------------------------------------------------
const getPi =  new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(3.14);
        // reject(3.14);
    }, 2000);
});
async function asyncFoo() {
    let pi = await getPi;
    console.log(pi);

    return 'You got the PI';
}
const val = asyncFoo();
console.log(val);

/*  result:

    Promise { <pending> }
    3.14

*/// => WHY ?

// line 20 and line 21 are synchronous => when line 21 is executed, we haven't had the val yet 

// -----------------------------------------------------------------------------------------------------------------------------------------------
// To fix it
/*
    - REMEMBER: When we return something in an async function. It always returns a Promise resolved with the return value
*/

const fixedVal = asyncFoo();
fixedVal.then(data => console.log(data));