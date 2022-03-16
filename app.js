const book1 = {
    title: 'Book One',
    author : 'John Doe',
    year: '2019',

    getsummary : function() {
        return `${this.title} was written by ${this.author} in ${this.year} `;
    }
};

// console.log(book1.getsummary());
const book2 = {
    title: 'Book Two',
    author : 'Jane Doe',
    year: '2020',
    getsummary : function() {
        return `${this.title} was written by ${this.author} in ${this.year} `;
    }
}