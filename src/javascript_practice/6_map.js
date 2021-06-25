
// forEach method used in JS
const instructors = [
    {name: 'Quincy', specialty: 'Quantum Mechanics'},
    {name: 'Kenn', specialty: 'Norse Mythology'},
    {name: 'Carolyn', specialty: 'Kung Fu'},
    {name: 'Paul', specialty: 'Entomology'},
];

let instructor_names = [];

instructors.forEach(instructors => {
    instructor_names.push(instructors.name);
});

console.log(instructor_names)

// map() method for React
const instructorNames = instructors.map(instructor => instructor.name);
console.log(instructorNames)

// Exact same thing, different parameter name
const instructorNamesTwo = instructors.map(i => i.name);
console.log(instructorNamesTwo);

// Another example
let kvArray = [
    {key: 1, value: 10},
    {key: 2, value: 20},
    {ket: 3, value: 30}
];
console.log(kvArray);

let reformattedArray = kvArray.map(obj => {
    let rObj = {};
    rObj[obj.key] = obj.value;
    console.log(rObj);
});
