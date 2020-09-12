/*
Link : https://www.codecademy.com/courses/introduction-to-javascript/projects/build-a-library
Programmer : Jatin Sharma
*/


// Parent Media Class
class Media {
    constructor(title) {
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = []
    }

    get title() {
        return this._title;
    }

    get isChekedOut() {
        return this._isCheckedOut;
    }
    get rating() {
        return this._ratings;
    }
    set isChekedOut(value) {
        this._isCheckedOut = value;
    }

    toggleCheckOutStatus() {
        this._isCheckedOut = !this._isCheckedOut;
    }

    getAverageRating() {
        let ratingSum = this._ratings.reduce((accumulator, ratings) => accumulator + ratings);

        return ratingSum / this._ratings.length;
    }

    addRating(value) {
        this._ratings.push(value);
    }

}


//Book Child Class
class Book extends Media {

    constructor(author, title, pages) {
        super(title);
        this._author = author;
        this._pages = pages;

    }

    get author() {
        return this._author;
    }

    get pages() {
        return this._pages;
    }
}
//Adding Values to the book
const historyOfEverything = new Book("Bill Bryson", 'A Short History of Nearly Everything', 544)

historyOfEverything.toggleCheckOutStatus()
console.log(historyOfEverything.isChekedOut)
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating())


// Movie Child Class
class Movie extends Media {

    constructor(director, title, runTime) {
        super(title);
        this._director = director;
        this._runTime = runTime;

    }

    get director() {
        return this._director;
    }

    get runtime() {
        return this._runTime;
    }
}

//Adding values t movie class
const speed = new Movie("Jan de Bont", "Speed", 116);
speed.toggleCheckOutStatus();
console.log(speed.isChekedOut);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating())


