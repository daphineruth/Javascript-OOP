'use strict';

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
    
}

//constructor converted to a class

class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
    //prototype
    getsummary() {

        return `${this.title} was written by ${this.author} in ${this.year} `;
    }
}


//magazine constuctor

function Magazine(title, author, year) {
    Book.call(this, title, author, year);

    this.month = month;
}

//inherit prototype

Magazine.prototype =Object.create(Book.prototype);


//intatiate Magazine object
 const mag1 = new Book('Mag One', 'John Doe', '2018', 'Jan');


    Magazine.prototype.constructor = Magazine;

 // console.log(mag1);

 

