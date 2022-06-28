import Interpreter from "./interpreter.js";


(async () => {
	const i = new Interpreter();
	await i.eval("++>+++->,.>,");
	console.log(i.tape.array);
})();