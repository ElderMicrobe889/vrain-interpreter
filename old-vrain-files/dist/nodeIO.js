import { createInterface } from "readline";
import process from "process";
export default class NodeIO {
    readline = createInterface({
        input: process.stdin,
        output: process.stdout
    });
    input = async () => new Promise(resolve => {
        this.readline.question("Input Character: ", char => resolve(char));
    });
    output = console.log;
    error = console.error;
    teardown = () => this.readline.close();
}
