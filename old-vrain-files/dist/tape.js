export default class Tape {
    index;
    array;
    constructor(index = 0, array = new Array(10).fill(0)) {
        this.index = index;
        this.array = array;
    }
    moveTo = (index) => this.index = Math.max(Math.min(index, this.array.length - 1), 0);
    move = (amount) => this.moveTo(this.index + amount);
    left = () => this.move(-1);
    right = () => this.move(1);
    add = () => this.array[this.index] += 1;
    subtract = () => this.array[this.index] -= 1;
    put = (number) => this.array[this.index] = Math.max(Math.min(number, 255), 0);
    get = () => this.array[this.index];
}
