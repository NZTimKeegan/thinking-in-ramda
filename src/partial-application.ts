import * as R from 'ramda';

interface Book {
    title: string;
    year: number;
}

// These two are the simple versions of these functions
const publishedInYear = (book: Book, year: number) => book.year === year;

const titlesForYear = (books: Book[], year: number) => {
    const selected = R.filter((book: Book) => publishedInYear(book, year), books);
    
    return R.map((book: Book) => book.title, selected);
};

// Here we are refactoring the published in year function
// so that it returns a function, and allows us to simplify the filter
const publishedInYearFunc = (year: number) => (book: Book) => book.year === year;

const titlesForYearSimpleFilter = (books: Book[], year: number) => {
    const selected = R.filter(publishedInYearFunc(year), books);

    return R.map((book: Book) => book.title, selected);
};

// And here we have the partial application definition
// which allows calling a function with fewer arguments than it expects
const titlesForYearPartial = (books: Book[], year: number) => {
    const selected = R.filter(R.partialRight(publishedInYear, [year]), books);

    return R.map((book: Book) => book.title, selected);
};

// Lastly here is the Curry example
// It is useful for making partial application more terse
// but comes with some performance overhead so better to use partial or partial right
const publishedInYearCurry = R.curry((year: number, book: Book) => book.year === year);

const titlesForYearCurry = (books: Book[], year: number) => {
    const selected = R.filter(publishedInYearCurry(year), books);

    return R.map((book: Book) => book.title, selected);
}

// Curry will do partial with the lefthand function argument
// Flip allows us to reverse things
// It is generally better to rewrite the function in the right order
// but this is useful for functions that we can't control
const titlesForYearFlip = (books: Book[], year: number) => {
    const selected = R.filter(R.flip(publishedInYear)(year), books);

    return R.map((book: Book) => book.title, selected);
};

// Placeholder allows us to supply some of the arguments and leave the others for later
// It only works with curried functions - partial, partialRight and flip work 
// with any type of function
const publishedInYearFlip = R.flip(publishedInYearCurry);
const titlesForYearPlaceholder = (books: Book[], year: number) => {
    const selected = R.filter(publishedInYearFlip(R.__, year), books);
    
    return R.map((book: Book) => book.title, selected);
}

// This simplifies further and combines the lesson from the previous example
// We have reversed books and year from the previous examples to meet
// a Ramda styleguide recommendation to put the data to be operated on last
// and the function has been curried so it too can support partial application
const titlesForYearPipe = R.curry((year: number, books: Book[]) =>
    R.pipe(
        R.filter(publishedInYearCurry(year)),
        R.map((book: Book) => book.title)
    )(books)
);

// And as a compose for good measure
const titlesForYearCompose = R.curry((year: number, books: Book[]) =>
    R.compose(
        R.map((book: Book) => book.title),
        R.filter(publishedInYearCurry(year))
    )(books)
);

export {
    Book,
    titlesForYear,
    titlesForYearSimpleFilter,
    titlesForYearPartial,
    titlesForYearCurry,
    titlesForYearFlip,
    titlesForYearPlaceholder,
    titlesForYearPipe,
    titlesForYearCompose
};
