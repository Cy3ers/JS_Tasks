// Problem: Analyzing a Sentence
//-----------------------------------------------------------------------

const sen = "The quick brown fox jumps over the lazy dog"
const sen_arr = sen.split(" ");

const word_count = (sen_arr) => {
    return sen_arr.length;
}

console.log(`The sentence has ${word_count(sen_arr)} words.`);

//-----------------------------------------------------------------------

// const longest_word = (sen_arr) => {
//     const len = [];
//     for (let word of sen_arr) {
//         len.push(word.length);
//     }

//     return sen_arr[len.indexOf(Math.max(...len))];
// }

const longest_word = (sen_arr) => {
    return sen_arr.reduce((longest, currentWord) => {
        return currentWord.length > longest.length ? currentWord : longest;
    }, '');
}

console.log(`The longest word is "${longest_word(sen_arr)}".`);

//-----------------------------------------------------------------------

const word1 = "fox"
const word2 = "cat"
console.log(`${sen.replace(word1, word2)}`)

//-----------------------------------------------------------------------

const str_reverse = (arr) => {
    const reversed = arr.toReversed();
    return reversed.join(' ');
}

console.log(str_reverse(sen_arr));

//-----------------------------------------------------------------------

const Capitilise = (arr) => {
    const cap_sen = [];
    for (let word of arr) {
        cap_sen.push(word[0].toUpperCase() + word.slice(1));
    }

    return cap_sen.join(' ');
}

console.log(Capitilise(sen_arr));

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

const removetitle = "Harry Potter"
  
books.splice(books.findIndex(a => a.title === removetitle) , 1)

console.log(books);

//-----------------------------------------------------------------------

const findByAuthor = (books, auth) => {
    return books.filter((book) => book.author === auth);
}

console.log(findByAuthor(books, "Jane Austen"));

//-----------------------------------------------------------------------

const listbooks = (books) => {
    return books;
}

console.log(books);

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