// const coding = ['js', 'cpp', 'rb', 'swift'];

// const values = coding.forEach((item) => {
//     return item;
// })

// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNums.filter((num) =>{
//     return num > 4;
// });

// const newNums = []
// myNums.forEach((num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// })

// console.log(newNums);


const books = [
    {
        title: 'The Alchemist', genre: 'Adventure', publish: 1988, edition: 2014
    },
    {
        title: 'The Monk who sold his Ferrari', genre: 'Self-help', publish: 1997, edition: 2003
    },
    {
        title: 'The Power of Now', genre: 'Self-help', publish: 1997, edition: 2003
    },
    {
        title: 'The Power of Habit', genre: 'Self-help', publish: 1997, edition: 2003
    },
    {
        title: 'The Power of Positive Thinking', genre: 'Self-help', publish: 1997, edition: 2003
    },
    {
        title: 'The Power of Positive Thinking', genre: 'Self-help', publish: 1997, edition: 2003
    },
    {
        title: 'The Secret', genre: 'Self-help', publish: 1997, edition: 2003
    },

    
]

const userBooks = books.filter((bk) => {
   return bk.edition >= 2013 && bk.genre === 'Adventure'
})


console.log(userBooks);