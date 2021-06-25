// Interpolation

// Example 1
const username = 'Kenn';
console.log(`${username} is the true JS Wizard!`);

// Example 2 (template literals)
console.log(`Hey student,
What bugs can
${username}
fix for you today?`)

// Example 3 (Interpolation with an Object)
const person = {
    username: 'Kenn',
    profession: 'Secret Agent'
};

console.log(`${person.username}, ${person.profession}, extraordinaire`); // Kenn, Secret Agent, extraordinaire