// Rest paramter syntax: ... 


function isMature (limitAge, ...years) {          // => when we pass several numbers into this function, they will be packed into an array before the execution
    years.forEach(cur => console.log((2020 - cur) >= limitAge));
}

isMature(18, 1998, 2008, 1975, 2013, 1968);