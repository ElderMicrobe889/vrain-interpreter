import IO from "./IO.js";
import Tape from "./tape.js";
export default class Interpreter {
    private IO;
    tape: Tape;
    constructor(IO?: IO);
    eval(input: string): Promise<void>;
}
