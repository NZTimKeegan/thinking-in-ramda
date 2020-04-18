import { operate, operateCompose, operatePipe } from './pipelines';
import { expect } from 'chai';
import 'mocha';

describe('Operate', () => {

    it('should return 169 for inputs 3, 4', ()  => {
        const result = operate(3, 4);
        expect(result).to.equal(169);
    });

});

describe('Operate Compose', () => {

    it('Should return 169 for inputs 3, 4', () => {
        const result = operateCompose(3, 4);
        expect(result).to.equal(169);
    });

});

describe('Operate Pipe', () => {

    it('Should return 169 for inputs 3, 4', () => {
        const result = operatePipe(3, 4);
        expect(result).to.equal(169);
    });

});