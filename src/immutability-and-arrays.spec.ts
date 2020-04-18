import {
    third,
    secondFromTheRight,
    middleThree,
    containsTwenty,
    headOfNumbers,
    tailOfNumbers,
    lastOfNumbers,
    initNumbers,
    takeThree,
    takeLastThree,
    insertedThirtyFive,
    appendedSeventy,
    prependedTen,
    updateOneToFifteen,
    concatenated,
    removeTwoThree,
    withoutArray,
    dropThree,
    dropLastThree,
    adjustedTwo
} from './immutability-and-arrays';

import { expect } from 'chai';
import 'mocha';

describe('Nth', () => {

    it('third picks the element at index 3', () => {
        expect(third).to.equal(40);
    });

    it('second from the right picks the element at index 4', () => {
        expect(secondFromTheRight).to.equal(50);
    });
});

describe('Slice', () => {

    it('middle three picks the elements from 2 to 5', () => {
        expect(middleThree.length).to.equal(3);
    });
});

describe('Contains', () => {

    it('numbers contains 20', () => {
        expect(containsTwenty).to.equal(true);
    });
});

describe('Head', () => {

    it('picks 10 the head element in numbers', () => {
        expect(headOfNumbers).to.equal(10);
    });
});

describe('Tail', () => {

    it('returns everything except for head', () => {
        expect(tailOfNumbers).to.eql([20, 30, 40, 50, 60]);
    });
});

describe('Last', () => {

    it('picks 60 as the last element in numbers', () => {
        expect(lastOfNumbers).to.equal(60);
    });
});

describe('Init', () => {

    it('returns everything except for last', () => {
        expect(initNumbers).to.eql([10, 20, 30, 40, 50]);
    });
});

describe('Take', () => {

    it('picks the first 3 numbers', () => {
        expect(takeThree).to.eql([10, 20, 30])
    });
});

describe('Take last', () => {

    it('picks the last 3 numbers', () => {
        expect(takeLastThree).to.eql([40, 50, 60]);
    });
});

describe('Inserted', () => {

    it('inserts 35 in position 3', () => {
        expect(insertedThirtyFive).to.eql([10, 20, 30, 35, 40, 50, 60]);
    });
});

describe('Append', () => {

    it('appends 70 at the end of the array', () => {
        expect(appendedSeventy).to.eql([10, 20, 30, 40, 50, 60, 70]);
    });
});

describe('Prepend', () => {

    it('prepends ten to the beginning of the array', () => {
        expect(prependedTen).to.eql([10, 10, 20, 30, 40, 50, 60]);
    });
});

describe('Update', () => {

    it('updates the value of the element at position one to fifteen', () => {
        expect(updateOneToFifteen).to.eql([10, 15, 30, 40, 50, 60]);
    });
});

describe('Concatenate', () => {

    it('attaches seventy, eighty and ninety to the end of the array', () => {
        expect(concatenated).to.eql([10, 20, 30, 40, 50, 60, 70, 80, 90]);
    });
});

describe('Remove', () => {

    it('takes three elements out of the array starting from position two', () => {
        expect(removeTwoThree).to.eql([10, 20, 60])
    });
});

describe('Without', () => {

    it('removes thirty, fourty and fifty from the array', () => {
        expect(withoutArray).to.eql([10, 20, 60]);
    });
});

describe('Drop', () => {

    it('drops the first three numbers', () => {
        expect(dropThree).to.eql([40, 50, 60]);
    });
});

describe('Drop last', () => {

    it('drops the last 4 numbers', () => {
        expect(dropLastThree).to.eql([10, 20]);
    });
});

describe('Adjust', () => {

    it('multiplies the number at two by ten', () => {
        expect(adjustedTwo).to.eql([10, 20, 300, 40, 50, 60]);
    });
});