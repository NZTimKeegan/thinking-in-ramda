import {
    Book,
    titlesForYear,
    titlesForYearCompose,
    titlesForYearCurry,
    titlesForYearFlip,
    titlesForYearPartial,
    titlesForYearPipe,
    titlesForYearPlaceholder,
    titlesForYearSimpleFilter
} from './partial-application';

import { expect } from 'chai';
import 'mocha';

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

        const expected = [bookMatch.title];

        const result = titlesForYear([bookMatch, bookDoesNotMatch], 2020);
        expect(result).to.eql(expected);
    });
});

describe('Titles for year compose', () => {

    it('should return title of books matching year', () => {
        const bookMatch: Book = {
            title: 'this book matches',
            year: 2020
        };

        const bookDoesNotMatch: Book = {
            title: 'this book does not match',
            year: 2019
        };

        const expected = [bookMatch.title];
        const result = titlesForYearCompose(2020, [bookMatch, bookDoesNotMatch]);
        expect(result).to.eql(expected);
    });
});

describe('Titles for year curry', () => {

    it('should return title of books matching year', () => {
        const bookMatch: Book = {
            title: 'this book matches',
            year: 2020
        };

        const bookDoesNotMatch: Book = {
            title: 'this book does not match',
            year: 2019
        };

        const expected = [bookMatch.title];
        const result = titlesForYearCurry([bookMatch, bookDoesNotMatch], 2020);
        expect(result).to.eql(expected);
    });
});

describe('Titles for year flip', () => {

    it('should return title of books matching year', () => {
        const bookMatch: Book = {
            title: 'this book matches',
            year: 2020
        };

        const bookDoesNotMatch: Book = {
            title: 'this book does not match',
            year: 2019
        };

        const expected = [bookMatch.title];
        const result = titlesForYearFlip([bookMatch, bookDoesNotMatch], 2020);
        expect(result).to.eql(expected);
    });
});

describe('Titles for year partial', () => {

    it('should return title of books matching year', () => {
        const bookMatch: Book = {
            title: 'this book matches',
            year: 2020
        };

        const bookDoesNotMatch: Book = {
            title: 'this book does not match',
            year: 2019
        };

        const expected = [bookMatch.title];
        const result = titlesForYearPartial([bookMatch, bookDoesNotMatch], 2020);
        expect(result).to.eql(expected);
    });
});

describe('Titles for year pipe', () => {

    it('should return title of books matching year', () => {
        const bookMatch: Book = {
            title: 'this book matches',
            year: 2020
        };

        const bookDoesNotMatch: Book = {
            title: 'this book does not match',
            year: 2019
        };

        const expected = [bookMatch.title];
        const result = titlesForYearPipe(2020, [bookMatch, bookDoesNotMatch]);
        expect(result).to.eql(expected);
    });
});

describe('Titles for year placeholder', () => {

    it('should return title of books matching year', () => {
        const bookMatch: Book = {
            title: 'this book matches',
            year: 2020
        };

        const bookDoesNotMatch: Book = {
            title: 'this book does not match',
            year: 2019
        };

        const expected = [bookMatch.title];
        const result = titlesForYearPlaceholder([bookMatch, bookDoesNotMatch], 2020);
        expect(result).to.eql(expected);
    });
});

describe('Titles for year simple filter', () => {

    it('should return title of books matching year', () => {
        const bookMatch: Book = {
            title: 'this book matches',
            year: 2020
        };

        const bookDoesNotMatch: Book = {
            title: 'this book does not match',
            year: 2019
        };

        const expected = [bookMatch.title];
        const result = titlesForYearSimpleFilter([bookMatch, bookDoesNotMatch], 2020);
        expect(result).to.eql(expected);
    });
});