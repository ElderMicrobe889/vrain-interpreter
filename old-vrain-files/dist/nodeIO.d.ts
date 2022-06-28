import IO from "./IO.js";
export default class NodeIO implements IO {
    private readline;
    input: () => Promise<string>;
    output: {
        (...data: any[]): void;
        (message?: any, ...optionalParams: any[]): void;
    };
    error: {
        (...data: any[]): void;
        (message?: any, ...optionalParams: any[]): void;
    };
    teardown: () => void;
}
