"use strict";
var _a;
const sizes = {
    rows: 10,
    columns: 30,
};
const randomCharacter = () => "dp"[Math.floor(Math.random() * 2)];
for (let row = 0; row < sizes.rows; row++) {
    const rowElement = document.createElement("div");
    rowElement.classList.add("row");
    (_a = document.querySelector("#row-wrapper")) === null || _a === void 0 ? void 0 : _a.appendChild(rowElement);
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
    }
}
//# sourceMappingURL=index.js.map