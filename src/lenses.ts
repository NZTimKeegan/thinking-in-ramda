import * as R from 'ramda';

interface SocialMedia {
    github: string;
    twitter: string;
}

interface Person {
    name: string;
    socialMedia: SocialMedia;
}

const person: Person = {
    name: 'Randy',
    socialMedia: {
        github: 'randycoulman', // this guide is written by Randy Coulman
        twitter: '@randycoulman'
    }
};

const nameLens = R.lens(R.prop('name'), R.assoc('name'));

const twitterLens = R.lens(
    R.path(['socialMedia', 'twitter']),
    R.assocPath(['socialMedia', 'twitter'])
);

// Notice we're repeating ourselves? Heres the shorthand version
const nameLensProp = R.lensProp('name');

const twitterLensPath = R.lensPath(['socialMedia', 'twitter']);

const lensIndexTwo = R.lensIndex(2);

// These don't do anything on their own - they just specify what we want to act on
// Here they are combined with lens operations
const viewName = R.view(nameLens, person);
const viewNameProp = R.view(nameLensProp, person);

const setTwitter = R.set(twitterLens, '@randyrakakanaknak', person);
const setTwitterPath = R.set(twitterLensPath, '@randyrakakanaknak', person);

const overName = R.over(nameLens, R.toUpper, person);
const overNameProp = R.over(nameLensProp, R.toUpper, person);

const viewIndex = R.view(lensIndexTwo, [10, 20, 30]);

export {
    Person,
    nameLens,
    twitterLens,
    nameLensProp,
    twitterLensPath,
    lensIndexTwo,
    viewName,
    viewNameProp,
    setTwitter,
    setTwitterPath,
    overName,
    overNameProp,
    viewIndex
};