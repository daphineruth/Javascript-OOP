
const Book1 = {
    title: 'Book One',
    author : 'John Doe',
    year: '2019',

    getsummary : function() {
        return `${this.title} was written by ${this.author} in ${this.year} `;
    }
};

// console.log(book1.getsummary());
const Book2 = {
    title: 'Book Two',
    author : 'Jane Doe',
    year: '2020',
    getsummary : function() {
        return `${this.title} was written by ${this.author} in ${this.year} `;
    }
}


//constructors

class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
}

//intatiate an object
 //const book1 = new Book('Book One', 'John Doe' '2013');
