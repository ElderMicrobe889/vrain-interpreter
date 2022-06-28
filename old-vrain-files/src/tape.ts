export default class Tape {
	constructor(
		public index = 0,
		public array: number[] = new Array(10).fill(0)
	) {
	}

	moveTo = (index: number) => this.index = Math.max(Math.min(index, this.array.length - 1), 0);

	move = (amount: number) => this.moveTo(this.index + amount);

	left = () => this.move(-1);

	right = () => this.move(1);

	add = () => this.array[this.index] += 1;

	subtract = () => this.array[this.index] -= 1;

	put = (number: number) => this.array[this.index] = Math.max(Math.min(number, 255), 0);

	get = () => this.array[this.index];
}