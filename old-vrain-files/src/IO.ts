export type InputAsync = () => Promise<string | null>;

export type InputSync = () => string | null;

export type Input = string | InputAsync | InputSync;

export type Output = (...args: any[]) => void;

export default interface IO {
	input: Input;
	output: Output;
	error?: Output;
	teardown?: () => void;
}
