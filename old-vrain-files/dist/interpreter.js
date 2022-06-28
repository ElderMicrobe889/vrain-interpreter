import Tape from "./tape.js";
import NodeIO from "./nodeIO.js";
export default class Interpreter {
    IO;
    tape = new Tape();
    constructor(IO = new NodeIO()) {
        this.IO = IO;
    }
    async eval(input) {
        for (const char of input) {
            switch (char) {
                case "<":
                    this.tape.left();
                    break;
                case ">":
                    this.tape.right();
                    break;
                case "+":
                    this.tape.add();
                    break;
                case "-":
                    this.tape.subtract();
                    break;
                case ",":
                    const input = this.IO.input;
                    const inputChar = typeof input === "string" ? input : await input();
                    this.tape.put(inputChar.charCodeAt(0));
                    break;
                case ".":
                    this.IO.output(String.fromCharCode(this.tape.get()));
                    break;
            }
        }
        if (this.IO.teardown)
            this.IO.teardown();
    }
}
