// const coding = ['js', 'cpp', 'rb', 'swift'];

// coding.forEach((item) => {
//     console.log(item);
// })

// const printMe = (items, index, arr) => {
//     console.log(items, index, arr);
// }

// coding.forEach(printMe);

const myCoding = [

    {
        languageName: 'JavaScript',
        languageType: 'Scripting Language',
    },
    {
        languageName: 'C++',
        languageType: 'Programming Language',
    },
    {
        languageName: 'Ruby',
        languageType: 'Programming Language',
    },
    {
        languageName: 'Swift',
        languageType: 'Programming Language',
    }
]

myCoding.forEach((item) => {
    console.log(item.languageName, item.languageType);
})