import * as R from 'ramda';

// Arithmetic - recall from the first section
const multiply = (a: number, b: number) => a * b;
const addOne = (x: number) => x + 1;
const square = (x: number) => x * x;

const operate = R.pipe(
    multiply,
    addOne,
    square
);

// Rewritten using Ramda's build in arithmetic operators
const squareRamda = (x: number) => R.multiply(x, x); // build in operator

// Here are some upgrades
const operateRamdaPipe = R.pipe(
    R.multiply, // built in operator
    R.inc, // built in operator like ++ but it doesn't mutate the value
    squareRamda
);

// Same as above but compose style
const operateRamdaCompose = R.compose(
    squareRamda,
    R.inc,
    R.multiply
);

// Comparison - recall from the second section
interface Person {
    age: number;
    birthCountry: string;
    naturalisationDate?: Date;
}

const wasBornInCountry = (person: Person) => person.birthCountry === 'NZ';
const wasNaturalised = (person: Person) => Boolean(person.naturalisationDate);
const isOver18 = (person: Person) => person.age >= 18;

const isCitizen = R.either(wasBornInCountry, wasNaturalised);

const isEligibleToVote = R.both(isOver18, isCitizen);

// Here are some upgrades
const wasBornInCountryRamda = (person: Person) => R.equals('NZ', person.birthCountry);
const wasNaturalisedRamda = (person: Person) => R.not(R.isNil(person.naturalisationDate));
const isOver18Ramda = (person: Person) => R.gte(person.age, 18);

const isCitizenRamda = R.either(wasBornInCountryRamda, wasNaturalisedRamda);

const isEligibleToVoteRamda = R.both(isOver18Ramda, isCitizenRamda);

// Logic
// Default Values
interface Settings {
    lineWidth?: number;
}

// this function takes either the value of line width or the value 80 as a default
// a problem with this approach is that the || operator treats 0 as null
// so will return 80 instead of 0 - maybe not desirable
const lineWidth = (settings: Settings) => settings.lineWidth || 80;

// this is the Ramda way to do it
const lineWidthRamda = (settings: Settings) => R.defaultTo(80, settings.lineWidth);

// Conditionals
// ifElse - nice way to replace ternary functions
const forever21 = (age: number) =>
    age >= 21
        ? 21
        : age + 1;

const forever21Ramda = (age: number) =>
    R.ifElse(
        R.gte(R.__, 21),
        // R.always allows us to specify constants
        // and is equivalent to `() => 16` or `return 16`
        R.always(21),
        R.inc
    )(age);

// Identity
const alwaysDrivingAge = (age: number) =>
    R.ifElse(
        R.lt(R.__, 16),
        R.always(16),
        R.identity // R.identity is equivalent to `a => a` or `return age`;
    )(age);

// We can simplify the statement above using R.when
// R.when is useful for functions that return the identity in one half of a logic test
const alwaysDrivingAgeWhen = (age: number) =>
    R.when(
        R.lt(R.__, 16),
        R.always(16)
    )(age);

// For the inverse of this behaviour we can us R.unless
const alwaysDrivingAgeUnless = (age: number) =>
    R.unless(
        R.gte(R.__, 16),
        R.always(16)
    )(age);

// Conditional
// this is a nice substitute for a bunch of if else statements, or a switch
const water = (temperature: number) =>
    R.cond([
        [R.equals(0), R.always('water freezes at 0 degrees')],
        [R.equals(100), R.always('water boils at 100 degrees')],
        [R.T, (temp: string) => `nothing special happens at ${temp} degrees`]
    ])(temperature);

export {
    operate,
    operateRamdaPipe,
    operateRamdaCompose,
    Person,
    isEligibleToVote,
    isEligibleToVoteRamda,
    Settings,
    lineWidth,
    lineWidthRamda,
    forever21,
    forever21Ramda,
    alwaysDrivingAge,
    alwaysDrivingAgeWhen,
    alwaysDrivingAgeUnless,
    water
};