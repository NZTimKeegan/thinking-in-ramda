import {
    forever21,
    forever21Pointfree,
    alwaysDrivingAge,
    alwaysDrivingAgePointfree,
    water,
    waterPointfree,
    titlesForYear,
    titlesForYearPointfree
} from './pointfree-style';
import { Book } from './partial-application';
import { expect } from 'chai';
import 'mocha';


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

describe('Forever 21 pointfree', () => {

    it('returns the input plus one if less than 21', () => {
        const result = forever21Pointfree(18);
        expect(result).to.equal(19);
    });

    it('returns 21 if the input is greater than 21', () => {
        const result = forever21Pointfree(22);
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

describe('Always driving age point free', () => {

    it('returns the input if greater than 16', () => {
        const result = alwaysDrivingAgePointfree(17);
        expect(result).to.equal(17);
    });

    it('returns 16 if the input is less than 16', () => {
        const result = alwaysDrivingAgePointfree(15);
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

describe('Water point free', () => {

    it('tells us when water freezes', () => {
        const result = waterPointfree(0);
        expect(result).to.equal('water freezes at 0 degrees');
    });

    it('tells us when water boils', () => {
        const result = waterPointfree(100);
        expect(result).to.equal('water boils at 100 degrees');
    });

    it('tells us nothing interesting happens at input degrees', () => {
        const result = waterPointfree(50);
        expect(result).to.equal('nothing special happens at 50 degrees');
    });
});

describe('Titles for year', () => {

    it('should return title of books matching year', () => {
        const bookMatch: Book = {
            title: 'this book matches',
            year: 2020
        };

        const bookDoesNotMatch: Book = {
            title: 'this book does not match',
            year: 2019
        };

        const result = titlesForYear(2020, [bookMatch, bookDoesNotMatch]);
        expect(result.length).to.equal(1);
        expect(result[0]).to.equal(bookMatch.title);
    });
});

describe('Titles for year point free', () => {

    it('should return title of books matching year', () => {
        const bookMatch: Book = {
            title: 'this book matches',
            year: 2020
        };

        const bookDoesNotMatch: Book = {
            title: 'this book does not match',
            year: 2019
        };

        // note the ugly syntax because we went point free
        // instead of titlesForYearPointfree(2020, [a, b])
        // we have to write titlesForYearPointfree(2020)([a, b])
        const result = titlesForYearPointfree(2020)([bookMatch, bookDoesNotMatch]);
        expect(result.length).to.equal(1);
        expect(result[0]).to.equal(bookMatch.title);
    });
});