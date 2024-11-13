type RenderOptions = {
	character: "d" | "p";
	lines: {
		top: number;
		bottom: number;
	};
};

const getLines = (amount: number) => (amount === 0 ? "" : amount === 1 ? "'" : '"');

const render = (options: RenderOptions) => {
	let string = "";

	string += getLines(options.lines.top) + "\n";
	string += options.character + "\n";
	string += getLines(options.lines.bottom);

	return string;
};

while (true) {
	const options: RenderOptions = {
		character: "dp".at(Math.floor(Math.random() * 2)) as "d" | "p",
		lines: {
			top: Math.floor(Math.random() * 3),
			bottom: Math.floor(Math.random() * 3),
		},
	};

	console.log("\n\n\n\n" + render(options));

	await new Promise((resolve) => setTimeout(resolve, 100));
}
