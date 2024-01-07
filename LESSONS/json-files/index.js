// JSON -> (Javascript Object Notation) data-interchange format
//         Used for exchanging data between a server & a web application
//         JSON files (key:value) or {value1,value2.value3}

//         JSON.stringify() = converts a JS object to a JSON string
//         JSON.parse() = convert a JSON string to a JS object

const jsonNames = `["Spongebob", "Patrick", "Squidward", "Sandy"]`;
const jsonPerson = `{"name": "Spongebob","age": 30,"isEmployed": true,"hobbies": ["Jellyfishing", "Karate", "Cooking"]}`;
const jsonPeople = `[{"name": "Spongebob","age": 30,"isEmployed": true},
                {"name": "Patrick","age": 34,"isEmployed": false},
                {"name": "Squidward","age": 50,"isEmployed": true},
                {"name": "Sandy","age": 27,"isEmployed": false}]`;

// const jsonString = JSON.stringify(people);
// console.log(jsonString);

// const parsedData = JSON.parse(jsonPeople);
// console.log(parsedData);

fetch("person.json")
    .then(response => response.json())
    .then(value => console.log(value));
fetch("names.json")
    .then(response => response.json())
    .then(value => console.log(value));

fetch("people.json")
    .then(response => response.json())
    .then(values => values.array.forEach(value => 
        {
            console.log(value.name);
        }))
    .catch(error => console.error(error));