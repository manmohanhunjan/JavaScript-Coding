const myObject = {
    js: 'JavaScript',
    cpp: 'C++',
    rb: 'Ruby',
    swift: 'Swift by Apple',
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

//for array

const programming = ['js', 'cpp', 'rb', 'swift'];

for (const key in programming) {
    console.log(`${key} shortcut is for ${programming[key]}`);
}