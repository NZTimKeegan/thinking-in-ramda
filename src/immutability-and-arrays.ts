import * as R from 'ramda';

const numbers = [10, 20, 30, 40, 50, 60];

// Reading array elements 
const third = R.nth(3, numbers);
const secondFromTheRight = R.nth(-2, numbers);

const middleThree = R.slice(2, 5, numbers);

const containsTwenty = R.contains(20, numbers);

const headOfNumbers = R.head(numbers);

const tailOfNumbers = R.tail(numbers);

const lastOfNumbers = R.last(numbers);

const initNumbers = R.init(numbers);

const takeThree = R.take(3, numbers);

const takeLastThree = R.takeLast(3, numbers);

// Adding, updating, and removing array elements
// Adding
const insertedThirtyFive = R.insert(3, 35, numbers);

const appendedSeventy = R.append(70, numbers);

const prependedTen = R.prepend(10, numbers);

// Updating
const updateOneToFifteen = R.update(1, 15, numbers);

const concatenated = R.concat(numbers, [70, 80, 90]);

// Removing
const removeTwoThree = R.remove(2, 3, numbers);

const withoutArray = R.without([30, 40, 50], numbers);

const dropThree = R.drop(3, numbers);

const dropLastThree = R.dropLast(4, numbers);

// Transforming elements
// Adjust - works like R.evolve on objects
const adjustedTwo = R.adjust(2, R.multiply(10), numbers);

export {
    third,
    secondFromTheRight,
    middleThree,
    containsTwenty,
    headOfNumbers,
    tailOfNumbers,
    lastOfNumbers,
    initNumbers,
    takeThree,
    takeLastThree,
    insertedThirtyFive,
    appendedSeventy,
    prependedTen,
    updateOneToFifteen,
    concatenated,
    removeTwoThree,
    withoutArray,
    dropThree,
    dropLastThree,
    adjustedTwo
};