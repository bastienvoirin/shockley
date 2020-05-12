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
        labels.innerHTML += `<input type="text" class="pin_label" size="10" onchange="generateEntry()" name="pin${i}" placeholder="Pin ${i}">`;
        labels.innerHTML += `<input type="text" class="pin_label" size="10" onchange="generateEntry()" name="pin${pins+1-i}" placeholder="Pin ${pins+1-i}">`;
        labels.innerHTML += `<span class="pin">${(pins+1-i).toString().padStart(2, " ")}</span><br>`;
    }
}

let pin_labels = [];

function add() {
    if (!package) return false;

    const width = package.includes("wide") ? 0.6 : 0.3;

    pin_labels.push("\n\\begin{tikzpicture}\n");

    for (let i = 1; i <= pins / 2; i++) {
        let label_left  = document.getElementsByName(`pin${i}`)[0].value || " ";
        let label_right = document.getElementsByName(`pin${pins+1-i}`)[0].value || " ";

        let il = label_left.indexOf("!");
        let ir = label_right.indexOf("!");

        if (il > -1) {
            label_left = `${label_left.substring(0,il)}$\\overline{\\mbox{${label_left.substring(il+1)}}}$`;
        }
        if (ir > -1) {
            label_right = `${label_right.substring(0,ir)}$\\overline{\\mbox{${label_right.substring(ir+1)}}}$`;
        }

        const y = (-0.1*(i-1)).toFixed(1);

        pin_labels.push(
            `\\foreach \\j in {0,...,${count-1}} { ` +
            `\\node[right] at ({2.54*0.7*\\j-0.01},${y}in) {${label_left}}; ` +
            `\\node[left] at ({2.54*(0.7*\\j+0.01+${width})},${y}in) {${label_right}}; }\n`
        );
    }

    pin_labels.push(
        `\\foreach \\j in {0,...,${count-1}} {\n` +
        `  \\node[rotate=-90] at ({2.54*(0.7*\\j+${width/2})},${(0.05-0.05*pins/2).toFixed(2)}in) {${ref || ""}};\n` +
        `  \\node at ({2.54*(0.7*\\j+${width/2})},${(-0.05*(pins+1)).toFixed(2)}in) {\\scriptsize ${package}};\n` +
        `  \\draw[very thin] ({2.54*0.7*\\j},0.05in) rectangle ({2.54*(0.7*\\j+${width})},${(0.05*(1-pins)).toFixed(2)}in);\n}\n` +
        `\\end{tikzpicture}\n\n\\vspace{1.5em}\n{\\footnotesize ${ref}}\\\\\n{\\footnotesize ${desc}}\n\\vspace{4.5em}\n`
    );
}

function generate() {
    const blob = new Blob(
        [
            "\\documentclass[12pt,a4paper]{article}\n",
            "\\usepackage[utf8]{inputenc}\n",
            "\\usepackage[T1]{fontenc}\n",
            "\\usepackage{tikz}\n",
            "\\usepackage[left=0.5in,right=0.5in,top=0.5in,bottom=0.5in]{geometry}\n",
            "\\pagestyle{empty}\n",
            "\\setlength{\\parindent}{0pt}",
            "\\begin{document}\n",
            "\\fontsize{4}{4}\\selectfont\\sffamily\n",
            ...pin_labels,
            "\\end{document}\n"
        ], {type: "application/x-tex", charset: "utf-8"}
    );

    const anchor = document.getElementById("anchor");
    anchor.href = URL.createObjectURL(blob);
    anchor.click();
}
