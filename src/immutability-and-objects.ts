import * as R from 'ramda';
import { Person } from './combining-functions';

// Remember this stuff from earlier
const wasBornInCountry = (person: Person) => R.equals('NZ', person.birthCountry);
const wasNaturalised = (person: Person) => R.not(R.isNil(person.naturalisationDate));
const isOver18 = (person: Person) => R.gte(person.age, 18);

// Lets improve the first three statements
const wasBornInCountryProp = (person: Person) => R.equals('NZ', R.prop('birthCountry', person));
const wasNaturalisedProp = (person: Person) => R.not(R.isNil(R.prop('naturalisationDate', person)));
const isOver18Prop = (person: Person) => R.gte(R.prop('age', person), 18);

// We can do a little better for is over 18
const isOver18Curry = (person: Person) => R.gte(R.__, 18)(R.prop('age', person));

// Now watch this
const wasBornInCountryWatch = (person: Person) => R.equals('NZ', R.prop('birthCountry')(person));
const wasNaturalisedWatch = (person: Person) => R.not(R.isNil(R.prop('naturalisationDate')(person)));
const isOver18Watch = (person: Person) => R.gte(R.__, 18)(R.prop('age')(person));

// More improvements by curring things
const wasBornInCountryPointfree = R.compose(
    R.equals('NZ'),
    R.prop('birthCountry')
);

const wasNaturalisedPointfree = R.compose(
    R.not,
    R.isNil,
    R.prop('naturalisationDate')
);


const isOver18Pointfree = R.compose(
    R.gte(R.__, 18),
    R.prop('age')
);

// Here are some tools that are useful for working with objects
// Pick works like prop but can take multiple properties off an object
const ageAndCountry = R.pick(['age', 'birthCountry']);

// Has checks if an object has a property
// todo: verify whether this operates on the interface or on the instance of the object
const hasNaturalisationDate = R.has('naturalisationDate');

// Path can pick nested properties off objects
interface OuterObject {
    person: Person
}

const pathToInnerAge = R.path(['person', 'age']);

// propOr / pathOr -- allow specifying default values
const defaultDate = new Date(2020, 1, 1);
const hasNaturalisationDateOr = R.propOr(defaultDate, 'naturalisationDate');
const hasNaturalisationDatePathOr = R.pathOr(defaultDate, ['person', 'naturalisationDate']);

// see also R.keys, R.values 

// Adding, Updating and Removing properties
// Assoc / AssocPath - reassignment without mutation, along with a nested properties variant
const renamePersonPedro = R.assoc('name', 'pedro');
const renameInnerPersonPedro = R.assocPath(['person', 'name'], 'pedro');

// Dissoc / DissocPath
const denaturalisePerson = R.dissoc('naturalisationDate');
const denaturaliseInnerPerson = R.dissocPath(['person', 'naturalisationDate']);

// Omit - works like pick but deletes properties
const denationaliseAndBornarise = R.omit(['age', 'birthCountry']);

// Transforming properties
const nextAge = R.compose(
    R.inc,
    R.prop('age')
);

const celebrateBirthday = (person: Person) => R.assoc('age', nextAge(person), person);

// Pointfree using evolve - this is apparently very useful and powerful, you should check it out
const celebrateBirthdayPointfree = R.evolve({ age: R.inc });

export {
    wasBornInCountry,
    wasBornInCountryProp,
    wasBornInCountryWatch,
    wasBornInCountryPointfree,
    isOver18,
    isOver18Curry,
    isOver18Prop,
    isOver18Watch,
    isOver18Pointfree,
    wasNaturalised,
    wasNaturalisedProp,
    wasNaturalisedWatch,
    wasNaturalisedPointfree,
    ageAndCountry,
    OuterObject,
    defaultDate,
    hasNaturalisationDate,
    hasNaturalisationDateOr,
    hasNaturalisationDatePathOr,
    renamePersonPedro,
    renameInnerPersonPedro,
    pathToInnerAge,
    denaturalisePerson,
    denaturaliseInnerPerson,
    denationaliseAndBornarise,
    celebrateBirthday,
    celebrateBirthdayPointfree
};