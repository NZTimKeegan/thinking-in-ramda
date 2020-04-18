import { Person, isEligibleToVote } from './combining-functions';
import { expect } from 'chai';
import 'mocha';

describe('Is Eligible to Vote', () => {

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