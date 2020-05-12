function loadDB() {
    for (let i = 0; i < db.length; i++) {
        let option = document.createElement("option");
        option.value = i;
        option.innerHTML = `${db[i].ref} ${db[i].desc}`;
        document.getElementById("db").appendChild(option);
    }
}

function loadChip(value) {
    const chip = db[Number(value)];

    let refElt = document.getElementsByName("ref")[0];
    let descElt = document.getElementsByName("desc")[0];

    refElt.value = chip.ref;
    descElt.value = chip.desc;

    refElt.onchange();
    descElt.onchange();

    chgPackage(chip.package);

    for (let i = 1; i <= chip.rows; i++) {
        for (let j = 0; j < chip.cols; j++) {
            document.getElementsByName(`pin${i+j*chip.rows}`)[0].value = chip.pin_labels[j][i-1];
        }
    }

    loadFunctionTable(chip);
    generateEntry();
}

function loadFunctionTable(chip) {
    const ft = chip.function_table;

    if (!ft) {
        document.getElementById("function_table").innerHTML = "";
        return false;
    }

    let rows = [];

    for (let row of ft) {
        let cells = "";

        for (let cell of row) {
            let colspan = 1;
            let rowspan = 1;
            let content;
            let cellType = "td";

            if (Array.isArray(cell)) {
                content = cell[0] || "";
                colspan = cell[1] || 1;
                rowspan = cell[2] || 1;
            } else {
                content = cell;
            }

            if (content[0] === "*") {
                content = content.substring(1);
                cellType = "th";
            }

            let cellElt = `<${cellType}`;

            if (content[0] === "!") {
                content = content.substring(1);
                cellElt += ` style="text-decoration: overline"`;
            }

            if (colspan > 1) cellElt += ` colspan="${colspan}"`;
            if (rowspan > 1) cellElt += ` rowspan="${rowspan}"`;

            cellElt += `>${content}</${cellType}>`;

            cells += cellElt;
        }

        rows.push(`<tr>${cells}</tr>`);
    }

    document.getElementById("function_table").innerHTML = rows.join("\n");
}
