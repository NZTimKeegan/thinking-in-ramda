import * as R from 'ramda';

const multiply = (a: number, b: number) => a * b;
const addOne = (x: number) => x + 1;
const square = (x: number) => x * x;

const operate = (x: number, y: number) => {
    const product = multiply(x, y);
    const increment = addOne(product);
    const squared = square(increment);

    return squared;
};

const operateCompose = R.compose(
    square,
    addOne,
    multiply
);

const operatePipe = R.pipe(
    multiply,
    addOne,
    square
);

export { operate, operateCompose, operatePipe };