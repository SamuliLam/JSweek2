'use strict';

async function getData() {
    try {
        const response = await fetch('https://reqres.in/api/users/1');
        const result = await response.json();
        console.log(result);
    } catch (error){
        console.log(error.message);
    }
}  
getData();