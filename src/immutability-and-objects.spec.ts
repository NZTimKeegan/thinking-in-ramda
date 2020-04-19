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
    naturalisationDateOr,
    naturalisationDatePathOr,
    renamePersonPedro,
    renameInnerPersonPedro,
    pathToInnerAge,
    denaturalisePerson,
    denaturaliseInnerPerson,
    denationaliseAndBornarise,
    celebrateBirthday,
    celebrateBirthdayPointfree,
    mergeWithDefaultOptions
} from './immutability-and-objects';

import { Person } from './combining-functions';

import { expect } from 'chai';
import 'mocha';

describe('Was born in country', () => {

    it('return true if the person was born in NZ', () => {
        const input: Person = {
            age: 100,
            birthCountry: 'NZ'
        };

        const result = wasBornInCountry(input);
        expect(result).to.equal(true);
    });

    it('returns false if the person was not born in NZ', () => {
        const input: Person = {
            age: 100,
            birthCountry: '??'
        };

        const result = wasBornInCountry(input);
        expect(result).to.equal(false);

    });
});

describe('Was born in country prop', () => {

    it('return true if the person was born in NZ', () => {
        const input: Person = {
            age: 100,
            birthCountry: 'NZ'
        };

        const result = wasBornInCountryProp(input);
        expect(result).to.equal(true);
    });

    it('returns false if the person was not born in NZ', () => {
        const input: Person = {
            age: 100,
            birthCountry: '??'
        };

        const result = wasBornInCountryProp(input);
        expect(result).to.equal(false);

    });
});

describe('Was born in country watch', () => {

    it('return true if the person was born in NZ', () => {
        const input: Person = {
            age: 100,
            birthCountry: 'NZ'
        };

        const result = wasBornInCountryWatch(input);
        expect(result).to.equal(true);
    });

    it('returns false if the person was not born in NZ', () => {
        const input: Person = {
            age: 100,
            birthCountry: '??'
        };

        const result = wasBornInCountryWatch(input);
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
        const input: Person = {
            age: 100,
            birthCountry: '??'
        };

        const result = wasBornInCountryPointfree(input);
        expect(result).to.equal(false);

    });
});

describe('Is over 18', () => {

    it('returns true if the person is over 18', () => {
        const input: Person = {
            age: 100,
            birthCountry: 'NZ'
        };

        const result = isOver18(input);
        expect(result).to.equal(true);
    });

    it('returns false if the person is under 18', () => {
        const input: Person = {
            age: 10,
            birthCountry: 'NZ'
        };

        const result = isOver18(input);
        expect(result).to.equal(false);
    });
});

describe('Is over 18 curry', () => {

    it('returns true if the person is over 18', () => {
        const input: Person = {
            age: 100,
            birthCountry: 'NZ'
        };

        const result = isOver18Curry(input);
        expect(result).to.equal(true);
    });

    it('returns false if the person is under 18', () => {
        const input: Person = {
            age: 10,
            birthCountry: 'NZ'
        };

        const result = isOver18Curry(input);
        expect(result).to.equal(false);
    });
});

describe('Is over 18 prop', () => {

    it('returns true if the person is over 18', () => {
        const input: Person = {
            age: 100,
            birthCountry: 'NZ'
        };

        const result = isOver18Prop(input);
        expect(result).to.equal(true);
    });

    it('returns false if the person is under 18', () => {
        const input: Person = {
            age: 10,
            birthCountry: 'NZ'
        };

        const result = isOver18Prop(input);
        expect(result).to.equal(false);
    });
});

describe('Is over 18 watch', () => {

    it('returns true if the person is over 18', () => {
        const input: Person = {
            age: 100,
            birthCountry: 'NZ'
        };

        const result = isOver18Watch(input);
        expect(result).to.equal(true);
    });

    it('returns false if the person is under 18', () => {
        const input: Person = {
            age: 10,
            birthCountry: 'NZ'
        };

        const result = isOver18Watch(input);
        expect(result).to.equal(false);
    });
});

describe('Is over 18 point free', () => {

    it('returns true if the person is over 18', () => {
        const input: Person = {
            age: 100,
            birthCountry: 'NZ'
        };

        const result = isOver18Pointfree(input);
        expect(result).to.equal(true);
    });

    it('returns false if the person is under 18', () => {
        const input: Person = {
            age: 10,
            birthCountry: 'NZ'
        };

        const result = isOver18Pointfree(input);
        expect(result).to.equal(false);
    });
});

describe('Was naturalised', () => {

    it('returns true if the person has a naturalisaton date', () => {
        const input: Person = {
            age: 100,
            birthCountry: 'NZ',
            naturalisationDate: new Date(2020, 1, 1)
        };

        const result = wasNaturalised(input);
        expect(result).to.equal(true);
    });

    it('returns false if the person has no naturalisaton date', () => {
        const input: Person = {
            age: 100,
            birthCountry: 'NZ'
        };

        const result = wasNaturalised(input);
        expect(result).to.equal(false);
    });
});

describe('Was naturalised prop', () => {

    it('returns true if the person has a naturalisaton date', () => {
        const input: Person = {
            age: 100,
            birthCountry: 'NZ',
            naturalisationDate: new Date(2020, 1, 1)
        };

        const result = wasNaturalisedProp(input);
        expect(result).to.equal(true);
    });

    it('returns false if the person has no naturalisaton date', () => {
        const input: Person = {
            age: 100,
            birthCountry: 'NZ'
        };

        const result = wasNaturalisedProp(input);
        expect(result).to.equal(false);
    });
});

describe('Was naturalised watch', () => {

    it('returns true if the person has a naturalisaton date', () => {
        const input: Person = {
            age: 100,
            birthCountry: 'NZ',
            naturalisationDate: new Date(2020, 1, 1)
        };

        const result = wasNaturalisedWatch(input);
        expect(result).to.equal(true);
    });

    it('returns false if the person has no naturalisaton date', () => {
        const input: Person = {
            age: 100,
            birthCountry: 'NZ'
        };

        const result = wasNaturalisedWatch(input);
        expect(result).to.equal(false);
    });
});

describe('Was naturalised point free', () => {

    it('returns true if the person has a naturalisaton date', () => {
        const input: Person = {
            age: 100,
            birthCountry: 'NZ',
            naturalisationDate: new Date(2020, 1, 1)
        };

        const result = wasNaturalisedPointfree(input);
        expect(result).to.equal(true);
    });

    it('returns false if the person has no naturalisaton date', () => {
        const input: Person = {
            age: 100,
            birthCountry: 'NZ'
        };

        const result = wasNaturalisedPointfree(input);
        expect(result).to.equal(false);
    });
});

describe('Age and country', () => {

    it('picks the age and country off a person', () => {
        const input: Person = {
            age: 100,
            birthCountry: 'NZ',
            naturalisationDate: new Date(2020, 1, 1)
        };

        const expected: Person = {
            age: input.age,
            birthCountry: input.birthCountry
        };

        const result = ageAndCountry(input);
        expect(result).to.eql(expected);
    });
});

describe('Naturalisation date', () => {

    it('Returns true if the person has a naturalisation date', () => {
        const input: Person = {
            age: 100,
            birthCountry: 'NZ',
            naturalisationDate: new Date(2020, 1, 1)
        };

        const result = hasNaturalisationDate(input);
        expect(result).to.equal(true);
    });

    it('Returns false if the person has no naturalisation date', () => {
        const input: Person = {
            age: 100,
            birthCountry: 'NZ'
        };

        const result = hasNaturalisationDate(input);
        expect(result).to.equal(false);
    });
});

describe('Naturalisation date or', () => {

    it('Returns the prop if the person has a naturalisation date', () => {
        const input: Person = {
            age: 100,
            birthCountry: 'NZ',
            naturalisationDate: new Date(2020, 1, 1)
        };

        const result = naturalisationDateOr(input);
        expect(result).to.equal(input.naturalisationDate);
    });

    it('Returns default if the person has no naturalisation date', () => {
        const input: Person = {
            age: 100,
            birthCountry: 'NZ'
        };

        const result = naturalisationDateOr(input);
        expect(result).to.equal(defaultDate);
    });
});

describe('Naturalisation date path or', () => {

    it('Returns the date if the person has a naturalisation date', () => {
        const input: OuterObject = {
            person: {
                age: 100,
                birthCountry: 'NZ',
                naturalisationDate: new Date(2020, 1, 2)
            }
        };

        const result = naturalisationDatePathOr(input);
        expect(result).to.equal(input.person.naturalisationDate);
    });

    it('Returns default if the person has no naturalisation date', () => {
        const input: OuterObject = {
            person: {
                age: 100,
                birthCountry: 'NZ'
            }
        };

        const result = naturalisationDatePathOr(input);
        expect(result).to.equal(defaultDate);
    });
});

describe('Rename person pedro', () => {

    it('renames people pedro', () => {
        const input: Person = {
            age: 100,
            birthCountry: 'NZ',
            name: 'Not pedro'
        };

        const expected: Person = {
            age: input.age,
            birthCountry: input.birthCountry,
            name: 'pedro'
        };

        const result = renamePersonPedro(input);
        expect(result).to.eql(expected);
    });
});

describe('Rename inner person pedro', () => {

    it('renames inner people pedro', () => {
        const input: OuterObject = {
            person: {
                age: 100,
                birthCountry: 'NZ',
                name: 'Not pedro'
            }
        };

        const expected: OuterObject = {
            person: {
                age: input.person.age,
                birthCountry: input.person.birthCountry,
                name: 'pedro'
            }
        };

        const result = renameInnerPersonPedro(input);
        expect(result).to.eql(expected);
    });
});

describe('Path to inner age', () => {

    it('picks the age of a nested person', () => {
        const input: OuterObject = {
            person: {
                age: 100,
                birthCountry: 'NZ'
            }
        };

        const result = pathToInnerAge(input);
        expect(result).to.equal(input.person.age);
    });
});

describe('Denaturalise person', () => {

    it('removes the naturalisation date from a person', () => {
        const input: Person = {
            age: 100,
            birthCountry: 'NZ',
            naturalisationDate: new Date(2020, 1, 2)
        };

        const expected: Person = {
            age: input.age,
            birthCountry: input.birthCountry
        };

        const result = denaturalisePerson(input);
        expect(result).to.eql(expected);
    });
});

describe('Denaturalise inner person', () => {

    it('removes the naturalisation date from a person', () => {
        const input: OuterObject = {
            person: {
                age: 100,
                birthCountry: 'NZ',
                naturalisationDate: new Date(2020, 1, 2)
            }
        };

        const expected: OuterObject = {
            person: {
                age: input.person.age,
                birthCountry: input.person.birthCountry
            }
        };

        const result = denaturaliseInnerPerson(input);
        expect(result).to.eql(expected);
    });
});

describe('Denaturalise and debornarise', () => {

    it('removes age and birth country from a person', () => {
        const input: Person = {
            age: 100,
            birthCountry: 'NZ'
        };

        const expected = {};

        const result = denationaliseAndBornarise(input);
        expect(result).to.eql(expected);
    });
});

describe('Celebrate birthday', () => {

    it('increments person age', () => {
        const input: Person = {
            age: 100,
            birthCountry: 'NZ'
        };

        const expected: Person = {
            age: 101,
            birthCountry: input.birthCountry
        };

        const result = celebrateBirthday(input);
        expect(result).to.eql(expected);
    });
});

describe('Celebrate birthday pointfree', () => {

    it('increments person age', () => {
        const input: Person = {
            age: 100,
            birthCountry: 'NZ'
        };

        const expected: Person = {
            age: 101,
            birthCountry: input.birthCountry
        };

        const result = celebrateBirthdayPointfree(input);
        expect(result).to.eql(expected);
    });
});

describe('Merge', () => {

    it('uses defaults if neither supplied', () => {
        const input = {};

        const expected = {
            value: 42,
            local: true
        };

        const result = mergeWithDefaultOptions(input);
        expect(result).to.eql(expected);
    });

    it('uses default value if not supplied', () => {
        const input = {
            local: false
        };

        const expected = {
            value: 42,
            local: false
        };

        const result = mergeWithDefaultOptions(input);
        expect(result).to.eql(expected);
    });

    it('uses default local if not supplied', () => {
        const input = {
            value: 24
        };

        const expected = {
            value: 24,
            local: true
        };

        const result = mergeWithDefaultOptions(input);
        expect(result).to.eql(expected);
    });

    it('does not use defaults in both values supplied', () => {
        const input = {
            value: 24,
            local: false
        };

        const result = mergeWithDefaultOptions(input);
        expect(result).to.eql(input);
    });

    it('adds default properties to object', () => {
        const input = {
            name: 'name'
        };

        const expected = {
            name: 'name',
            value: 42,
            local: true
        };

        const result = mergeWithDefaultOptions(input);
        expect(result).to.eql(expected);
    });
});