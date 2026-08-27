//  QUESTION 1 
const promise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Data fetched successfully");
    }, 2000);
});

promise.then((data) => {
    console.log(data);
});


//  QUESTION 2 


function checkAge(age) {
    return new Promise((resolve, reject) => {
        if (age >= 18) {
            resolve("Eligible");
        } else {
            reject("Not Eligible");
        }
    });
}

checkAge(20)
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log(error);
    });


// QUESTION 3


function loginUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("User logged in");
            resolve();
        }, 1000);
    });
}

function getUserDetails() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("User details fetched");
            resolve();
        }, 1000);
    });
}

function getUserOrders() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("User orders fetched");
            resolve();
        }, 1000);
    });
}

loginUser()
    .then(() => {
        return getUserDetails();
    })
    .then(() => {
        return getUserOrders();
    })
    .then(() => {
        console.log("All operations completed");
    });


// QUESTION 4 


const users = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Users fetched");
    }, 1000);
});

const products = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Products fetched");
    }, 2000);
});

const orders = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Orders fetched");
    }, 3000);
});

Promise.all([users, products, orders])
    .then((results) => {
        console.log(results);
    });


//  QUESTION 5 

function getData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data received");
        }, 2000);
    });
}

async function displayData() {
    const result = await getData();
    console.log(result);
}

displayData();


//  QUESTION 6


function getData() {
    return Promise.reject("Unable to fetch data");
}

async function fetchData() {
    try {
        const result = await getData();
        console.log(result);
    } catch (error) {
        console.log("Error:", error);
    }
}

fetchData();


//  QUESTION 7 


function getUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("User data");
        }, 1000);
    });
}

function getProfile() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Profile data");
        }, 1000);
    });
}

function getPosts() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Posts data");
        }, 1000);
    });
}

async function getAllData() {
    const user = await getUser();
    console.log(user);

    const profile = await getProfile();
    console.log(profile);

    const posts = await getPosts();
    console.log(posts);
}

getAllData();


//  QUESTION 8 


console.log("A");

setTimeout(() => {
    console.log("B");
}, 0);

Promise.resolve().then(() => {
    console.log("C");
});

console.log("D");

// Output:
// A
// D
// C
// B


// QUESTION 9


console.log("Start");

setTimeout(() => {
    console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise");
});

console.log("End");

// Output:
// Start
// End
// Promise
// Timeout


//  QUESTION 10 


console.log("1");

setTimeout(() => {
    console.log("2");
}, 0);

async function test() {
    console.log("3");

    await Promise.resolve();

    console.log("4");
}

test();

Promise.resolve().then(() => {
    console.log("5");
});

console.log("6");

// Output:
// 1
// 3
// 6
// 4
// 5
// 2


//  QUESTION 11 


console.log("Start");

setTimeout(() => {
    console.log("Timeout 1");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise 1");

    setTimeout(() => {
        console.log("Timeout 2");
    }, 0);
});

async function demo() {
    console.log("Async 1");

    await Promise.resolve();

    console.log("Async 2");
}

demo();

console.log("End");

// Output:
// Start
// Async 1
// End
// Promise 1
// Async 2
// Timeout 1
// Timeout 2