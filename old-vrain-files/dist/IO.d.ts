export declare type InputAsync = () => Promise<string | null>;
export declare type InputSync = () => string | null;
export declare type Input = string | InputAsync | InputSync;
export declare type Output = (...args: any[]) => void;
export default interface IO {
    input: Input;
    output: Output;
    error?: Output;
    teardown?: () => void;
}
