import {
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
} from './immutability-and-objects';

import { Person } from './combining-functions';

import * as R from 'ramda';
import { expect } from 'chai';
import 'mocha';

describe('Was born in country', () => {

    it('return true if the person was born in NZ', () => {
        const person: Person = {
            age: 100,
            birthCountry: 'NZ'
        };

        const result = wasBornInCountry(person);
        expect(result).to.equal(true);
    });

    it('returns false if the person was not born in NZ', () => {
        const person: Person = {
            age: 100,
            birthCountry: '??'
        };

        const result = wasBornInCountry(person);
        expect(result).to.equal(false);

    });
});

describe('Was born in country prop', () => {

    it('return true if the person was born in NZ', () => {
        const person: Person = {
            age: 100,
            birthCountry: 'NZ'
        };

        const result = wasBornInCountryProp(person);
        expect(result).to.equal(true);
    });

    it('returns false if the person was not born in NZ', () => {
        const person: Person = {
            age: 100,
            birthCountry: '??'
        };

        const result = wasBornInCountryProp(person);
        expect(result).to.equal(false);

    });
});

describe('Was born in country watch', () => {

    it('return true if the person was born in NZ', () => {
        const person: Person = {
            age: 100,
            birthCountry: 'NZ'
        };

        const result = wasBornInCountryWatch(person);
        expect(result).to.equal(true);
    });

    it('returns false if the person was not born in NZ', () => {
        const person: Person = {
            age: 100,
            birthCountry: '??'
        };

        const result = wasBornInCountryWatch(person);
        expect(result).to.equal(false);

    });
});

describe('Was born in country point free', () => {

    it('return true if the person was born in NZ', () => {
        const person: Person = {
            age: 100,
            birthCountry: 'NZ'
        };

        const result = wasBornInCountryPointfree(person);
        expect(result).to.equal(true);
    });

    it('returns false if the person was not born in NZ', () => {
        const person: Person = {
            age: 100,
            birthCountry: '??'
        };

        const result = wasBornInCountryPointfree(person);
        expect(result).to.equal(false);

    });
});

describe('Is over 18', () => {

    it('returns true if the person is over 18', () => {
        const person: Person = {
            age: 100,
            birthCountry: 'NZ'
        };

        const result = isOver18(person);
        expect(result).to.equal(true);
    });

    it('returns false if the person is under 18', () => {
        const person: Person = {
            age: 10,
            birthCountry: 'NZ'
        };

        const result = isOver18(person);
        expect(result).to.equal(false);
    });
});

describe('Is over 18 curry', () => {

    it('returns true if the person is over 18', () => {
        const person: Person = {
            age: 100,
            birthCountry: 'NZ'
        };

        const result = isOver18Curry(person);
        expect(result).to.equal(true);
    });

    it('returns false if the person is under 18', () => {
        const person: Person = {
            age: 10,
            birthCountry: 'NZ'
        };

        const result = isOver18Curry(person);
        expect(result).to.equal(false);
    });
});

describe('Is over 18 prop', () => {

    it('returns true if the person is over 18', () => {
        const person: Person = {
            age: 100,
            birthCountry: 'NZ'
        };

        const result = isOver18Prop(person);
        expect(result).to.equal(true);
    });

    it('returns false if the person is under 18', () => {
        const person: Person = {
            age: 10,
            birthCountry: 'NZ'
        };

        const result = isOver18Prop(person);
        expect(result).to.equal(false);
    });
});

describe('Is over 18 watch', () => {

    it('returns true if the person is over 18', () => {
        const person: Person = {
            age: 100,
            birthCountry: 'NZ'
        };

        const result = isOver18Watch(person);
        expect(result).to.equal(true);
    });

    it('returns false if the person is under 18', () => {
        const person: Person = {
            age: 10,
            birthCountry: 'NZ'
        };

        const result = isOver18Watch(person);
        expect(result).to.equal(false);
    });
});

describe('Is over 18 point free', () => {

    it('returns true if the person is over 18', () => {
        const person: Person = {
            age: 100,
            birthCountry: 'NZ'
        };

        const result = isOver18Pointfree(person);
        expect(result).to.equal(true);
    });

    it('returns false if the person is under 18', () => {
        const person: Person = {
            age: 10,
            birthCountry: 'NZ'
        };

        const result = isOver18Pointfree(person);
        expect(result).to.equal(false);
    });
});

describe('Was naturalised', () => {

    it('returns true if the person has a naturalisaton date', () => {
        const person: Person = {
            age: 100,
            birthCountry: 'NZ',
            naturalisationDate: new Date(2020, 1, 1)
        };

        const result = wasNaturalised(person);
        expect(result).to.equal(true);
    });

    it('returns false if the person has no naturalisaton date', () => {
        const person: Person = {
            age: 100,
            birthCountry: 'NZ'
        };

        const result = wasNaturalised(person);
        expect(result).to.equal(false);
    });
});

describe('Was naturalised prop', () => {

    it('returns true if the person has a naturalisaton date', () => {
        const person: Person = {
            age: 100,
            birthCountry: 'NZ',
            naturalisationDate: new Date(2020, 1, 1)
        };

        const result = wasNaturalisedProp(person);
        expect(result).to.equal(true);
    });

    it('returns false if the person has no naturalisaton date', () => {
        const person: Person = {
            age: 100,
            birthCountry: 'NZ'
        };

        const result = wasNaturalisedProp(person);
        expect(result).to.equal(false);
    });
});

describe('Was naturalised watch', () => {

    it('returns true if the person has a naturalisaton date', () => {
        const person: Person = {
            age: 100,
            birthCountry: 'NZ',
            naturalisationDate: new Date(2020, 1, 1)
        };

        const result = wasNaturalisedWatch(person);
        expect(result).to.equal(true);
    });

    it('returns false if the person has no naturalisaton date', () => {
        const person: Person = {
            age: 100,
            birthCountry: 'NZ'
        };

        const result = wasNaturalisedWatch(person);
        expect(result).to.equal(false);
    });
});

describe('Was naturalised point free', () => {

    it('returns true if the person has a naturalisaton date', () => {
        const person: Person = {
            age: 100,
            birthCountry: 'NZ',
            naturalisationDate: new Date(2020, 1, 1)
        };

        const result = wasNaturalisedPointfree(person);
        expect(result).to.equal(true);
    });

    it('returns false if the person has no naturalisaton date', () => {
        const person: Person = {
            age: 100,
            birthCountry: 'NZ'
        };

        const result = wasNaturalisedPointfree(person);
        expect(result).to.equal(false);
    });
});

describe('Age and country', () => {

    it('picks the age and country off a person', () => {
        const person: Person = {
            age: 100,
            birthCountry: 'NZ',
            naturalisationDate: new Date(2020, 1, 1)
        };

        const expected: Person = {
            age: 100,
            birthCountry: 'NZ'
        };

        const result = ageAndCountry(person);

        expect(result.age).to.equal(expected.age);
        expect(result.birthCountry).to.equal(expected.birthCountry);
    });
});

describe('Has naturalisation date', () => {

    it('Returns true if the person has a naturalisation date', () => {
        const person: Person = {
            age: 100,
            birthCountry: 'NZ',
            naturalisationDate: new Date(2020, 1, 1)
        };

        const result = hasNaturalisationDate(person);
        expect(result).to.equal(true);
    });

    it('Returns false if the person has no naturalisation date', () => {
        const person: Person = {
            age: 100,
            birthCountry: 'NZ'
        };

        const result = hasNaturalisationDate(person);
        expect(result).to.equal(false);
    });
});

describe('Has naturalisation date or', () => {

    it('Returns true if the person has a naturalisation date', () => {
        const person: Person = {
            age: 100,
            birthCountry: 'NZ',
            naturalisationDate: new Date(2020, 1, 1)
        };

        const result = hasNaturalisationDateOr(person);
        expect(result).to.equal(person.naturalisationDate);
    });

    it('Returns false if the person has no naturalisation date', () => {
        const person: Person = {
            age: 100,
            birthCountry: 'NZ'
        };

        const result = hasNaturalisationDateOr(person);
        expect(result).to.equal(defaultDate);
    });
});

describe('Has naturalisation date path or', () => {

    it('Returns the date if the person has a naturalisation date', () => {
        const person: Person = {
            age: 100,
            birthCountry: 'NZ',
            naturalisationDate: new Date(2020, 1, 2)
        };

        const outer: OuterObject = {
            person: person
        };

        const result = hasNaturalisationDatePathOr(outer);
        expect(result).to.equal(person.naturalisationDate);
    });

    it('Returns false if the person has no naturalisation date', () => {
        const person: Person = {
            age: 100,
            birthCountry: 'NZ'
        };

        const outer: OuterObject = {
            person: person
        };

        const result = hasNaturalisationDatePathOr(outer);
        expect(result).to.equal(defaultDate);
    });
});

describe('Rename person pedro', () => {

    it('renames people pedro', () => {
        const person: Person = {
            age: 100,
            birthCountry: 'NZ',
            name: 'Not pedro'
        };

        const result = renamePersonPedro(person);
        expect(result.name).to.equal('pedro');
    });
});

describe('Rename inner person pedro', () => {

    it('renames inner people pedro', () => {
        const person: Person = {
            age: 100,
            birthCountry: 'NZ',
            name: 'Not pedro'
        };

        const outer: OuterObject = {
            person: person
        };

        const result = renameInnerPersonPedro(outer);
        expect(result.person.name).to.equal('pedro');
    });
});

describe('Path to inner age', () => {

    it('picks the age of a nested person', () => {
        const person: Person = {
            age: 100,
            birthCountry: 'NZ'
        };

        const outer: OuterObject = {
            person: person
        };

        const result = pathToInnerAge(outer);
        expect(result).to.equal(person.age);
    });
});

describe('Denaturalise person', () => {

    it('removes the naturalisation date from a person', () => {
        const person: Person = {
            age: 100,
            birthCountry: 'NZ',
            naturalisationDate: new Date(2020, 1, 2)
        };

        const result = denaturalisePerson(person);
        expect(result.naturalisationDate).to.equal(undefined);
    });
});

describe('Denaturalise inner person', () => {

    it('removes the naturalisation date from a person', () => {
        const person: Person = {
            age: 100,
            birthCountry: 'NZ',
            naturalisationDate: new Date(2020, 1, 2)
        };

        const outer: OuterObject = {
            person: person
        };

        const result = denaturaliseInnerPerson(outer);
        expect(result.person.naturalisationDate).to.equal(undefined);
    });
});

describe('Denaturalise and debornarise', () => {

    it('removes age and birth country from a person', () => {
        const person: Person = {
            age: 100,
            birthCountry: 'NZ'
        };

        const result = denationaliseAndBornarise(person);
        expect(result.age).to.equal(undefined);
        expect(result.birthCountry).to.equal(undefined);
    });
});

describe('Celebrate birthday', () => {

    it('', () => {
        const person: Person = {
            age: 100,
            birthCountry: 'NZ'
        };

        const result = celebrateBirthday(person);
        expect(result.age).to.equal(101);
    });
});

describe('Celebrate birthday pointfree', () => {

    it('', () => {
        const person: Person = {
            age: 100,
            birthCountry: 'NZ'
        };

        const result = celebrateBirthdayPointfree(person);
        expect(result.age).to.equal(101);
    });
});