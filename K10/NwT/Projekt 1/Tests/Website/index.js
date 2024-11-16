var _a, _b, _c, _d;
(_a = document.querySelector("#github")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => window.open("https://github.com/DNAScanner/Schule/tree/main/K10/NwT/Projekt%201/Tests/Website"));
const sizes = {
    rows: 10,
    columns: 40,
};
const selected = {
    x: 0,
    y: 0,
};
const randomCharacter = () => "dp"[Math.floor(Math.random() * 2)];
for (let row = 0; row < sizes.rows; row++) {
    const rowElement = document.createElement("div");
    rowElement.classList.add("row");
    (_b = document.querySelector("#row-wrapper")) === null || _b === void 0 ? void 0 : _b.appendChild(rowElement);
    for (let column = 0; column < sizes.columns; column++) {
        const columnElement = document.createElement("div");
        columnElement.classList.add("column");
        rowElement.appendChild(columnElement);
        for (const alignment of ["top", "bottom"]) {
            const dotWrapper = document.createElement("div");
            dotWrapper.classList.add(`dot-${alignment}`);
            columnElement.appendChild(dotWrapper);
            // Create a for loop of random 1 or 2
            for (let i = 0; i < Math.floor(Math.random() * 3); i++) {
                const randomCharacterElement = document.createElement("div");
                randomCharacterElement.classList.add("dot");
                dotWrapper.appendChild(randomCharacterElement);
            }
        }
        // Between the 2 rows (top and bottom) add a random character
        const randomCharacterElement = document.createElement("div");
        randomCharacterElement.classList.add("random-character");
        randomCharacterElement.textContent = randomCharacter();
        columnElement.insertBefore(randomCharacterElement, columnElement.children[1]);
    }
}
const showText = (text) => {
    if (text) {
        document.querySelector("#text").textContent = text;
        document.querySelector("#text").classList.remove("hidden");
    }
    else
        document.querySelector("#text").classList.add("hidden");
};
const setHighlight = (x, y) => {
    var _a;
    selected.x = x;
    selected.y = y;
    for (const currentlyHighlighted of document.querySelectorAll(".highlight"))
        currentlyHighlighted.classList.remove("highlight");
    (_a = document.querySelector("#row-wrapper")) === null || _a === void 0 ? void 0 : _a.children[selected.y].children[selected.x].classList.add("highlight");
};
var Key;
(function (Key) {
    Key["MARK"] = "KeyZ";
    Key["SKIP"] = "KeyN";
})(Key || (Key = {}));
const timeExceeded = (startTime, time) => Date.now() - startTime > time;
const waitForKey = async (allowedKeys, exitCondition) => {
    const key = {
        pressed: false,
        key: "",
    };
    const callback = (event) => {
        if (!allowedKeys.includes(event.code))
            return;
        key.key = event.code;
        key.pressed = true;
    };
    document.addEventListener("keydown", callback);
    while (!key.pressed && !exitCondition())
        await new Promise((resolve) => setTimeout(resolve, 5));
    document.removeEventListener("keydown", callback);
    return key.key;
};
showText("Wenn du bereit bist, drücke die Leertaste oder Enter");
await waitForKey(["Space", "Enter"], () => false);
showText("");
const TIME_PER_ROW = 10000;
for (let row = 0; row < sizes.rows; row++) {
    const startTime = Date.now();
    for (let column = 0; column < sizes.columns; column++) {
        const columnElement = (_c = document.querySelector("#row-wrapper")) === null || _c === void 0 ? void 0 : _c.children[row].children[column];
        setHighlight(column, row);
        const key = await waitForKey([Key.MARK, Key.SKIP], () => timeExceeded(startTime, TIME_PER_ROW));
        if (key === Key.MARK)
            columnElement === null || columnElement === void 0 ? void 0 : columnElement.classList.add("marked");
        // If this is the last column and the time has not been exceeded, show the text
        if (column === sizes.columns - 1 && !timeExceeded(startTime, TIME_PER_ROW)) {
            showText("Du warst sehr schnell, bitte warte kurz");
            await new Promise((resolve) => setTimeout(resolve, startTime + TIME_PER_ROW - Date.now()));
            showText("");
            break;
        }
        if (timeExceeded(startTime, TIME_PER_ROW)) {
            showText("Stopp! Du kommst gleich in die nächste Zeile");
            await new Promise((resolve) => setTimeout(resolve, 2000));
            showText("");
            break;
        }
    }
}
showText("Das war die letzte Zeile, danke fürs Testen");
await new Promise((resolve) => setTimeout(resolve, 1500));
let score = 0;
let achievable = 0;
for (const row of document.querySelectorAll(".row"))
    for (const column of row.children) {
        const dots = column.querySelectorAll(".dot").length;
        const letter = (_d = column.querySelector(".random-character")) === null || _d === void 0 ? void 0 : _d.textContent;
        const marked = column.classList.contains("marked");
        if (marked && dots === 2 && letter === "d")
            score++;
        if (dots === 2 && letter === "d")
            achievable++;
    }
showText(`Dein Score: ${score / achievable * 100} von 100`);
export {};
//# sourceMappingURL=index.js.map