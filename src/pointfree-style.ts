import * as R from 'ramda';
import { Book } from './partial-application';
import { Person } from './combining-functions';

// Remember forever 21 from last time
const forever21 = (age: number) =>
    R.ifElse(
        R.gte(R.__, 21),
        R.always(21),
        R.inc
    )(age);

// Because age appears only twice in the function above, we can remove it
// this is call pointfree style and looks like this
const forever21Pointfree = R.ifElse(
    R.gte(R.__, 21),
    R.always(21),
    R.inc
);

// Here is another example
const alwaysDrivingAge = (age: number) =>
    R.when(
        R.lt(R.__, 16),
        R.always(16),
    )(age);

const alwaysDrivingAgePointfree = R.when(
    R.lt(R.__, 16),
    R.always(16)
);

// And another example
const water = (temperature: number) =>
    R.cond([
        [R.equals(0), R.always('water freezes at 0 degrees')],
        [R.equals(100), R.always('water boils at 100 degrees')],
        [R.T, (temp: number) => `nothing special happens at ${temp} degrees`],
    ])(temperature);

const waterPointfree = R.cond([
    [R.equals(0), R.always('water freezes at 0 degrees')],
    [R.equals(100), R.always('water boils at 100 degrees')],
    [R.T, (temp: number) => `nothing special happens at ${temp} degrees`],
]);

// Multi-argument functions
// Remember from that other example
const publishedInYear = R.curry((year: number, book: Book) => book.year === year);

const titlesForYear = R.curry((year: number, books: Book[]) =>
    R.pipe(
        R.filter(publishedInYear(year)),
        R.map((book: Book) => book.title)
    )(books)
);

// We can get rid of books because it only appears twice, but we can't get rid of year
// probably better not to bother cause it is confusing to have some but not all parameters
const titlesForYearPointfree = (year: number) =>
    R.pipe(
        R.filter(publishedInYear(year)),
        R.map((book: Book) => book.title)
    );

export {
    forever21,
    forever21Pointfree,
    alwaysDrivingAge,
    alwaysDrivingAgePointfree,
    water,
    waterPointfree,
    titlesForYear,
    titlesForYearPointfree
};