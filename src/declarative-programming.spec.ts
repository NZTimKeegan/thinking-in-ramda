import {
    operate,
    operateRamdaCompose,
    operateRamdaPipe,
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
} from './declarative-programming';

import { expect } from 'chai';
import 'mocha';

describe('Operate', () => {

    it('should return 169 for input 3, 4', () => {
        const result = operate(3, 4);
        expect(result).is.equal(169);
    })
});

describe('Operate compose', () => {

    it('should return 169 for input 3, 4', () => {
        const result = operateRamdaCompose(3, 4);
        expect(result).is.equal(169);
    })
});

describe('Operate pipe', () => {

    it('should return 169 for input 3, 4', () => {
        const result = operateRamdaPipe(3, 4);
        expect(result).is.equal(169);
    })
});

describe('Is eligible to vote', () => {

    it('people over 18 and born in NZ should be eligible', () => {
        const person: Person = {
            age: 18,
            birthCountry: 'NZ'
        };

        const result = isEligibleToVote(person);
        expect(result).to.equal(true);
    });

    it('people over 18 and not born in NZ should not be eligible', () => {
        const person: Person = {
            age: 18,
            birthCountry: 'IN'
        };

        const result = isEligibleToVote(person);
        expect(result).to.equal(false);
    });

    it('people under 18 and born in NZ should not be eligible', () => {
        const person: Person = {
            age: 17,
            birthCountry: 'NZ'
        };

        const result = isEligibleToVote(person);
        expect(result).to.equal(false);
    });

    it('people over 18 and naturalised should be eligible', () => {
        const person: Person = {
            age: 18,
            birthCountry: 'NZ',
            naturalisationDate: new Date(2020, 1, 1)
        };

        const result = isEligibleToVote(person);
        expect(result).to.equal(true);
    });

    it('people under 18 and naturalised should not be eligible', () => {
        const person: Person = {
            age: 17,
            birthCountry: 'NZ',
            naturalisationDate: new Date(2020, 1, 1)
        };

        const result = isEligibleToVote(person);
        expect(result).to.equal(false);
    });
});

describe('Is eligible to vote ramda', () => {

    it('people over 18 and born in NZ should be eligible', () => {
        const person: Person = {
            age: 18,
            birthCountry: 'NZ'
        };

        const result = isEligibleToVoteRamda(person);
        expect(result).to.equal(true);
    });

    it('people over 18 and not born in NZ should not be eligible', () => {
        const person: Person = {
            age: 18,
            birthCountry: 'IN'
        };

        const result = isEligibleToVoteRamda(person);
        expect(result).to.equal(false);
    });

    it('people under 18 and born in NZ should not be eligible', () => {
        const person: Person = {
            age: 17,
            birthCountry: 'NZ'
        };

        const result = isEligibleToVoteRamda(person);
        expect(result).to.equal(false);
    });

    it('people over 18 and naturalised should be eligible', () => {
        const person: Person = {
            age: 18,
            birthCountry: 'NZ',
            naturalisationDate: new Date(2020, 1, 1)
        };

        const result = isEligibleToVoteRamda(person);
        expect(result).to.equal(true);
    });

    it('people under 18 and naturalised should not be eligible', () => {
        const person: Person = {
            age: 1,
            birthCountry: 'NZ',
            naturalisationDate: new Date(2020, 1, 1)
        };

        const result = isEligibleToVoteRamda(person);
        expect(result).to.equal(false);
    });
});

describe('Line width', () => {

    it('returns the input if it is not nil', () => {
        const settings: Settings = {
            lineWidth: 123
        };

        const result = lineWidth(settings);
        expect(result).to.equal(settings.lineWidth);
    });

    it('returns 80 if the input is undefined', () => {
        const settings: Settings = {};
        const result = lineWidth(settings);
        expect(result).to.equal(80);
    });

    it('returns 80 if the input is null', () => {
        const settings: Settings = {
            lineWidth: null
        };

        const result = lineWidth(settings);
        expect(result).to.equal(80);
    });

    it('returns 80 if the input is zero (although we would like it not to)', () => {
        const settings: Settings = {
            lineWidth: 0
        };

        const result = lineWidth(settings);
        expect(result).to.equal(80);
    });
});

describe('Line width ramda', () => {

    it('returns the input if it is not nil', () => {
        const settings: Settings = {
            lineWidth: 123
        };

        const result = lineWidthRamda(settings);
        expect(result).to.equal(settings.lineWidth);
    });

    it('returns 80 if the input is undefined', () => {
        const settings: Settings = {};
        const result = lineWidthRamda(settings);
        expect(result).to.equal(80);
    });

    it('returns 80 if the input is null', () => {
        const settings: Settings = {
            lineWidth: null
        };

        const result = lineWidthRamda(settings);
        expect(result).to.equal(80);
    });

    it('returns 0 if the input is 0', () => {
        const settings: Settings = {
            lineWidth: 0
        };

        const result = lineWidthRamda(settings);
        expect(result).to.equal(0);
    });
});

describe('Forever 21', () => {

    it('returns the input plus one if less than 21', () => {
        const result = forever21(18);
        expect(result).to.equal(19);
    });

    it('returns 21 if the input is greater than 21', () => {
        const result = forever21(22);
        expect(result).to.equal(21);
    });
});

describe('Forever 21 Ramda', () => {

    it('returns the input plus one if less than 21', () => {
        const result = forever21(18);
        expect(result).to.equal(19);
    });

    it('returns 21 if the input is greater than 21', () => {
        const result = forever21Ramda(22);
        expect(result).to.equal(21);
    });
});

describe('Always driving age', () => {

    it('returns the input if greater than 16', () => {
        const result = alwaysDrivingAge(17);
        expect(result).to.equal(17);
    });

    it('returns 16 if the input is less than 16', () => {
        const result = alwaysDrivingAge(15);
        expect(result).to.equal(16);
    });
});

describe('Always driving age when', () => {

    it('returns the input if greater than 16', () => {
        const result = alwaysDrivingAgeWhen(17);
        expect(result).to.equal(17);
    });

    it('returns 16 if the input is less than 16', () => {
        const result = alwaysDrivingAgeWhen(15);
        expect(result).to.equal(16);
    });
});

describe('Always driving age unless', () => {

    it('returns the input if greater than 16', () => {
        const result = alwaysDrivingAgeUnless(17);
        expect(result).to.equal(17);
    });

    it('returns 16 if the input is less than 16', () => {
        const result = alwaysDrivingAgeUnless(15);
        expect(result).to.equal(16);
    });
});

describe('Water', () => {

    it('tells us when water freezes', () => {
        const result = water(0);
        expect(result).to.equal('water freezes at 0 degrees');
    });

    it('tells us when water boils', () => {
        const result = water(100);
        expect(result).to.equal('water boils at 100 degrees');
    });

    it('tells us nothing interesting happens at input degrees', () => {
        const result = water(50);
        expect(result).to.equal('nothing special happens at 50 degrees');
    });
});