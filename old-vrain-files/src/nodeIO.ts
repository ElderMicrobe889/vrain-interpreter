import {createInterface, Interface} from "readline";
import process from "process";
import IO from "./IO.js";


export default class NodeIO implements IO {
	private readline: Interface = createInterface({
		input: process.stdin,
		output: process.stdout
	});

	input = async () => new Promise<string>(resolve => {
		this.readline.question("Input Character: ", char => resolve(char));
	});

	output = console.log;

	error = console.error

	teardown = () => this.readline.close();
}