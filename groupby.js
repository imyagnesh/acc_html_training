const users = [
    {
        name: 'Yagnesh',
        gender: 'male',
        age: 32
    },
    {
        name: 'Rohit',
        gender: 'male',
        age: 28
    },
    {
        name: 'Virat',
        gender: 'male',
        age: 26
    },
    {
        name: 'dipika',
        gender: 'female',
        age: 31
    },
    {
        name: 'alia',
        gender: 'female',
        age: 19
    },
    {
        name: 'priyanka',
        gender: 'female',
        age: 40
    }
];

console.log(users);

const groupByAge = users.reduce((p,c) => {
    
    if (p[c.age] === undefined) {
        p[c.age] = []
    
    }
    p[c.age].push(c);
    return p
}, {});

console.log(groupByAge);