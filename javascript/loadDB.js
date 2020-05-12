function loadDB() {
    for (let i = 0; i < db.length; i++) {
        let option = document.createElement("option");
        option.value = `${db[i].ref} ${db[i].desc}`;
        document.getElementById("chips").appendChild(option);
    }
}

function loadChip(val) {
    let value;
    let chip;

    for (let i = 0; i < db.length; i++) {
        chip = db[Number(i)];
        if (val === `${db[i].ref} ${db[i].desc}`) {
            value = i;
            break;
        }
    }

    let refElt = document.getElementsByName("ref")[0];
    let descElt = document.getElementsByName("desc")[0];

    refElt.value = chip.ref;
    descElt.value = chip.desc;

    refElt.onchange();
    descElt.onchange();

    for (let option of document.getElementsByName("package")[0].children) {
        if (option.value === chip.package) {
            option.selected = true;
            break;
        }
    }

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

            let prev;

            do {
                prev = content;
                content = content.replace(/!(.+)!/, '<span class="overline">$1</span>');
            } while (prev !== content);

            do {
                prev = content;
                content = content.replace(/!(.+)$/, '<span class="overline">$1</span>');
            } while (prev !== content);

            if (colspan > 1) cellElt += ` colspan="${colspan}"`;
            if (rowspan > 1) cellElt += ` rowspan="${rowspan}"`;

            cellElt += `>${content}</${cellType}>`;

            cells += cellElt;
        }

        rows.push(`<tr>${cells}</tr>`);
    }

    document.getElementById("function_table").innerHTML = rows.join("\n");
}
