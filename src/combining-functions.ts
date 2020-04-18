import * as R from 'ramda';

interface Person {
    age: number;
    birthCountry: string;
    name?: string;
    naturalisationDate?: Date;
}

const wasBornInCountry = (person: Person) => person.birthCountry === 'NZ';
const wasNaturalised = (person: Person) => Boolean(person.naturalisationDate);
const isOver18 = (person: Person) => person.age >= 18;

const isCitizen = R.either(wasBornInCountry, wasNaturalised);

const isEligibleToVote = R.both(isCitizen, isOver18);

export { Person, isEligibleToVote };