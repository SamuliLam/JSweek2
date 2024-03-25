'use strict';

async function postData() {
    const data = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: 'John Doe', job: 'Siivooja' })
    }
    const response = await fetch('https://reqres.in/api/users', data);
    const json = await response.json();
    return console.log(json);
}

postData();
