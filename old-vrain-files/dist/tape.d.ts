export default class Tape {
    index: number;
    array: number[];
    constructor(index?: number, array?: number[]);
    moveTo: (index: number) => number;
    move: (amount: number) => number;
    left: () => number;
    right: () => number;
    add: () => number;
    subtract: () => number;
    put: (number: number) => number;
    get: () => number;
}
