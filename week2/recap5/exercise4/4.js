"use strict";

async function fetchData(url = '', options = {}) {
    const response = await fetch(url, options);

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
}

try {
    const user = {
        name: 'John Doe',
        job: 'Developer'
    };
    const url = 'https://reqres.in/api/users';
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    }
    const userData = fetchData(url, options);
    userData.then(data => console.log(data));
} catch (error) {
    console.error('An error occurred:', error);
}