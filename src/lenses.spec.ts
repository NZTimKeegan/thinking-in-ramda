import {
    Person,
    viewName,
    viewNameProp,
    setTwitter,
    setTwitterPath,
    overName,
    overNameProp,
    viewIndex
} from './lenses';

import { expect } from 'chai';
import 'mocha';

describe('View lens', () => {

    it('gets name of person', () => {
        expect(viewName).to.equal('Randy');
    });
});

describe('View lens prop', () => {

    it('gets name of person', () => {
        expect(viewNameProp).to.equal('Randy');
    });
});

describe('Set lens', () => {

    it('sets twitter handle', () => {
        const expected: Person = {
            name: 'Randy',
            socialMedia: {
                github: 'randycoulman',
                twitter: '@randyrakakanaknak'
            }
        };

        expect(setTwitter).to.eql(expected);
    });
});

describe('Set lens path', () => {

    it('sets twitter handle', () => {
        const expected: Person = {
            name: 'Randy',
            socialMedia: {
                github: 'randycoulman',
                twitter: '@randyrakakanaknak'
            }
        };

        expect(setTwitterPath).to.eql(expected);
    });
});

describe('Over lens', () => {

    it('sets name to upper case', () => {
        const expected: Person = {
            name: 'RANDY',
            socialMedia: {
                github: 'randycoulman',
                twitter: '@randycoulman'
            }
        };

        expect(overName).to.eql(expected);
    });
});

describe('Over lens prop', () => {

    it('sets name to upper case', () => {
        const expected: Person = {
            name: 'RANDY',
            socialMedia: {
                github: 'randycoulman',
                twitter: '@randycoulman'
            }
        };

        expect(overNameProp).to.eql(expected);
    });
});

describe('View lens index', () => {

    it('views array element at index two', () => {
        expect(viewIndex).to.equal(30);
    });
});