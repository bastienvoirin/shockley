let package;
let pins;
let ref;
let desc;
let count = 1;

function chgPackage(value) {
    package = value;
    pins = Number((/\d+/.exec(value) || [0])[0]);

    const labels = document.getElementById("pin_labels");
    labels.innerHTML = "";

    for (let i = 1; i <= pins / 2; i++) {
        labels.innerHTML += `<span class="pin">${i.toString().padStart(2, " ")}</span>`;
        labels.innerHTML += `<input type="text" class="pin_label" size="6" onchange="generateEntry()" name="pin${i}" placeholder="Pin ${i}">`;
        labels.innerHTML += `<input type="text" class="pin_label" size="6" onchange="generateEntry()" name="pin${pins+1-i}" placeholder="Pin ${pins+1-i}">`;
        labels.innerHTML += `<span class="pin">${(pins+1-i).toString().padStart(2, " ")}</span><br>`;
    }
}

let pin_labels = [];

function add() {
    if (!package) return false;

    const width = package.includes("wide") ? 0.6 : 0.3;
    const parent = document.getElementById("parent");

    console.log(pins);

    for (let _ = 0; _ < count; _++) {
        let newLabel = document.createElement("div");

        newLabel.className = "label";
        newLabel.style.display = "inline-block";
        newLabel.style.width = `${width}in`;
        newLabel.style.height = `${pins*0.05}in`;

        for (let i = 1; i <= pins / 2; i++) {
            let label_left  = document.getElementsByName(`pin${i}`)[0].value || " ";
            let label_right = document.getElementsByName(`pin${pins+1-i}`)[0].value || " ";

            newLabel.innerHTML += `<span class="left">${label_left}</span>`;
            newLabel.innerHTML += `<span class="right">${label_right}</span><br>`;
        }

        parent.appendChild(newLabel);
    }
}
