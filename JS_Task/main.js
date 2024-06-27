// Problem: Analyzing a Sentence
//-----------------------------------------------------------------------

const sen = "The quick brown fox jumps over the lazy dog"
const senArr = sen.split(" ");

const wordCount = (senArr) => {
    return senArr.length;
}

console.log(`The sentence has ${wordCount(senArr)} words.`);

//-----------------------------------------------------------------------

// const longest_word = (senArr) => {
//     const len = [];
//     for (let word of senArr) {
//         len.push(word.length);
//     }

//     return senArr[len.indexOf(Math.max(...len))];
// }

const longestWord = (senArr) => {
    return senArr.reduce((longest, currentWord) => {
        return currentWord.length > longest.length ? currentWord : longest;
    }, '');
}

console.log(`The longest word is "${longestWord(senArr)}".`);

//-----------------------------------------------------------------------

const word1 = "fox"
const word2 = "cat"
console.log(`${sen.replace(word1, word2)}`)

//-----------------------------------------------------------------------

const strReverse = (arr) => {
    const reversed = arr.toReversed();
    return reversed.join(' ');
}

console.log(strReverse(senArr));

//-----------------------------------------------------------------------

const capitalise = (arr) => {
    const cap_sen = [];
    for (let word of arr) {
        cap_sen.push(word[0].toUpperCase() + word.slice(1));
    }

    return cap_sen.join(' ');
}

console.log(capitalise(senArr));

//-----------------------------------------------------------------------

// Managing a Book Collection
//-----------------------------------------------------------------------
const books = [
    {
        title: 'Pride and Prejudice',
        author: 'Jane Austen',
        year: 1813,
        genre: 'Romance'
    }
]

const addBook = (title, author, year, genre) => {
    books.push({
        title: title,
        author: author,
        year: year,
        genre: genre,
    })
}

addBook("Harry Potter", "JK Rowling", 1991, "Fiction");
addBook("Moby-x", "Herman Melville", 1851, "Adventure");
addBook("Test", "Jane Austen", 1858, "Test");

console.log(books);

//-----------------------------------------------------------------------

const removeTitle = "Harry Potter"
  
books.splice(books.findIndex(a => a.title === removeTitle) , 1)

console.log(books);

//-----------------------------------------------------------------------

const findByAuthor = (books, auth) => {
    return books.filter((book) => book.author === auth);
}

console.log(findByAuthor(books, "Jane Austen"));

//-----------------------------------------------------------------------

const listBooks = (books) => {
    return books;
}

console.log(listBooks(books));

//-----------------------------------------------------------------------

const updateGenre = (books, title, newGenre) => {
    const toUpdate = books.findIndex((book) => book.title === title);
    books[toUpdate].genre = newGenre;
}
updateGenre(books, "Test", "New Genre Test");
console.log(books);

//-----------------------------------------------------------------------

// Analyzing Student Grades
//-----------------------------------------------------------------------
let students = [
    { name: "Alice", grades: [85, 92, 78] },
    { name: "Bobby", grades: [89, 76, 95] },
    { name: "Charlie", grades: [100, 100, 100] },
    { name: "David", grades: [65, 70, 75] },
];

const avgGrade = students.map((student) => {
    const avg = (student.grades.reduce((a, b) => a + b) / student.grades.length).toFixed(2);
    return {...student, gradeavg: avg};
})

console.log(avgGrade);

//-----------------------------------------------------------------------

const aboveThres = (students, thres) => {
    return students.filter((student) => student.grades.some(grade => grade > thres));
}

console.log(aboveThres(students, 95));

//-----------------------------------------------------------------------

const highestGrades = students.map((student) => {
    const high = student.grades.reduce((a, b) => Math.max(a, b), -Infinity)
    return high;
})

const highestGrade = highestGrades.reduce((a, b) => Math.max(a, b), -Infinity);

console.log(highestGrade);

//-----------------------------------------------------------------------

const perfectScore = (students) => {
    return students.filter((student) => student.grades.some(grade => grade === 100));
}

console.log(perfectScore(students).length > 0);

//-----------------------------------------------------------------------

// const findByName = (students, name) => {
//     return students.filter((student) => student.name === name);
// }

// console.log(findByName(students, "Charlie"));

const isName = (givenName) => {
    return givenName.name === "Charlie";
}

console.log(students.find(isName));

//-----------------------------------------------------------------------

avgGrade.forEach(function (arrayItem) {
    var x = `Name:\t\tAvg. Grade:\n${arrayItem.name}\t\t${arrayItem.gradeavg}`;
    console.log(x);
});

//-----------------------------------------------------------------------

const arr = ["One", "One", "Two", "Three", "Two"];

x = new Set(arr);

console.log(x);