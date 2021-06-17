const request = require('request');
const fetch = require('node-fetch');

const getUsers = () => {
    return new Promise((resolve, reject) => {
        request('https://jsonplaceholder.typicode.com/users', (error, response, body) => {
            if (error || response.statusCode !== 200) reject(error);

            resolve(JSON.parse(body));
        });
    });
};

const getComments = () => {
    return new Promise((resolve, reject) => {
        request('https://jsonplaceholder.typicode.com/comments', (error, response, body) => {
            if (error || response.statusCode !== 200) reject(error);

            resolve(JSON.parse(body));
        });
    });
};

getUsers()
    .then((data) => {
        // console.log(data);
    })
    .catch((error) => {
        throw new Error(error);
    });

const users = getUsers();
const comments = getComments();

// 1. Rewrite getUsers to async/await
const getUsersAsync = async () => {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/users');
        let usersData = await response.json();
        console.log(JSON.stringify(usersData , null, 2));
    } catch (error) {
        throw new Error(error.message);
    }    
};

// getUsersAsync();

/**
 *  2. Add another request to url - https://jsonplaceholder.typicode.com/comments.
 *  Make two requests, and return all values
 *  Hint: Promise.all
 * */
// Promise.all([users, comments]).then((data) => {
//         console.log(data);
//     })
//     .catch((error) => {
//         throw new Error(error);
//     });


/**
 * 3. Read about Promice.race
 * Try to use it on previous two requests
 */
Promise.race([users, comments]).then((data) => {
        if (data.body) {
            console.log('Comments win!');
        } else {
            console.log('Users win!');
        }
    })
    .catch((error) => {
        throw new Error(error);
    });


/**
 * 4. Read about Promice.any
 * Try to use it on previous two requests
 */
 Promise.any([users, comments]).then((data) => {
    if (data.body) {
        console.log('Comments win!');
    } else {
        console.log('Users win!');
    }
})
.catch((error) => {
    throw new Error(error);
});
