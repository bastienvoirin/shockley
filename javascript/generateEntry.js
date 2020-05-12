function generateEntry() {
    const out = document.getElementsByName("JSON")[0];
    let labels = [[], []];

    for (let i = 1; i <= (pins >> 1); i++) {
        labels[0][i-1] = document.getElementsByName(`pin${i}`)[0].value;
        labels[1][i-1] = document.getElementsByName(`pin${i+(pins>>1)}`)[0].value;
    }

    out.innerHTML = JSON.stringify({
            ref,
            desc,
            package,
            pins,
            rows: pins >> 1,
            cols: 2,
            pin_labels: labels
        },
        function replace(key, val) {
            if (Number.isInteger(+key) && Array.isArray(val)) {
                return `["${val.toString().split(",").join('", "')}"]`;
            }

            if (Number.isInteger(+key) && typeof val === "string") {
                return;
            }

            return val;
        },
        "    "
    ).replace(/\\|"(?=\[)/g, "").replace(/\]"/g, "]");
}

function copy() {
    const elt = document.getElementsByName("JSON")[0];
    elt.select();
    document.execCommand("copy");
}
