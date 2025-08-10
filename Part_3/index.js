//---------------Lecture 1 (Faker data generate)---------------

//const { faker } = require('@faker-js/faker');

// let createRandomUser = () => {
//     return {
//         userId: faker.string.uuid(),
//         username: faker.internet.username(), // before version 9.1.0, use userName()
//         email: faker.internet.email(),
//         avatar: faker.image.avatar(),
//         password: faker.internet.password(),
//         birthdate: faker.date.birthdate(),
//         registeredAt: faker.date.past(),
//     };
// console.log(createRandomUser());
// }

/*
let getRandomUser = () => {
    return {
        id: faker.string.uuid(),
        username: faker.internet.username(),
        email: faker.internet.email(),
        password: faker.internet.password(),
    };
};
*/
// console.log(getRandomUser());


//------------lec 2(MySql2Package)----------------
//mysql package have some authentication error so mysql2

const mysql = require('mysql2');

// Create the connection to database
/*
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'db_app',
    password: '@Vadher01'
});
*/
/*
// A simple SELECT query
let q = "show tables"
try {
    connection.query(q, (err, result) => {
        if (err) throw err;
        console.log(result);
        console.log(result.length);
        console.log(result[0]);
    });
} catch (err) {
    console.log(err);
}

*/

/*
// let q = "insert into user (id,username,email,password) values (?,?,?,?)";
let q = "insert into user (id,username,email,password) values ?";



let user = ["123", "123_newuser", "abc@gmail.com", "abc"];
let users = [
    ["123b", "123_newuserb", "abc@gmail.comb", "abcb"],
    ["123c", "123_newuserc", "abc@gmail.comc", "abcc"]];

try {
    connection.query(q, [users], (err, result) => {
        if (err) throw err;
        console.log(result);
    })
} catch (err) { console.log(err); }

connection.end();
/*
//Default Format
/*
connection.query(
    'SELECT * FROM `table` WHERE `name` = "Page" AND `age` > 45',
    function (err, results, fields) {
        console.log(results); // results contains rows returned by server
        console.log(fields); // fields contains extra meta data about results, if available
    }
);

*/

//-------------------Generate bulk data using faker--------------------


const { faker, th } = require('@faker-js/faker');
// const mysql = require('mysql2');


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'db_app',
    password: '@Vadher01'
});



let getRandomUser = () => {
    return [
        faker.string.uuid(),
        faker.internet.username(),
        faker.internet.email(),
        faker.internet.password(),
    ];
};


let q = "insert into user (id,username,email,password) values ?";
let data = [];


for (let i = 0; i <= 100; i++) {
    data.push(getRandomUser());
}

try {
    connection.query(q, [data], (err, result) => {
        if (err) throw err;
        console.log(result);
    })
} catch (err) {
    console.log(err);
}

connection.end();



