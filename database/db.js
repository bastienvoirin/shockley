const db = [
    {
        "ref": "74x148",
        "desc": "8-to-3 priority encoder",
        "package": "DIP16",
        "pins": 16,
        "rows": 8,
        "cols": 2,
        "pin_labels": [
            ["4", "5", "6", "7", "EI", "A2", "A1", "GND"],
            ["A0", "0", "1", "2", "3", "GS", "EO", "VCC"]
        ],
        "function_table": [
            [["*INPUTS", 9, 1], ["*OUTPUTS", 5, 1]],
            ["*EI", "*0", "*1", "*2", "*3", "*4", "*5", "*6", "*7", "*A2", "*A1", "*A0", "*GS", "*EO"],
            ["H", "X", "X", "X", "X", "X", "X", "X", "X", "H", "H", "H", "H", "H"],
            ["L", "H", "H", "H", "H", "H", "H", "H", "H", "H", "H", "H", "H", "L"],

            ["L", "X", "X", "X", "X", "X", "X", "X", "L", "L", "L", "L", "L", "H"],
            ["L", "X", "X", "X", "X", "X", "X", "L", "H", "L", "L", "H", "L", "H"],
            ["L", "X", "X", "X", "X", "X", "L", "H", "H", "L", "H", "L", "L", "H"],
            ["L", "X", "X", "X", "X", "L", "H", "H", "H", "L", "H", "H", "L", "H"],
            ["L", "X", "X", "X", "L", "H", "H", "H", "H", "H", "L", "L", "L", "H"],
            ["L", "X", "X", "L", "H", "H", "H", "H", "H", "H", "L", "H", "L", "H"],
            ["L", "X", "L", "H", "H", "H", "H", "H", "H", "H", "H", "L", "L", "H"],
            ["L", "L", "H", "H", "H", "H", "H", "H", "H", "H", "H", "H", "L", "H"],
        ]
    },
    {
        "ref": "74x193",
        "desc": "Presettable synchronous 4-bit binary up/down counter",
        "package": "DIP16",
        "pins": 16,
        "rows": 8,
        "cols": 2,
        "pin_labels": [
            ["P1", "Q1", "Q0", "CPD", "CPU", "Q2", "Q3", "GND"],
            ["P3", "P2", "!PL", "TCU", "TCD", "MR", "P0", "VCC"]
        ],
        "function_table": [
            ["*CPU", "*CPD", "*MR", "*!PL", "*FUNCTION"],
            ["↑", "H", "L", "H", "Count Up"],
            ["H", "↑", "L", "H", "Count Down"],
            ["X", "X", "H", "X", "Reset"],
            ["X", "X", "L", "L", "Load Preset Inputs"]
        ]
    },
    {
        "ref": "74x245",
        "desc": "Octal 3-state bus transceiver",
        "package": "DIP20",
        "pins": 20,
        "rows": 10,
        "cols": 2,
        "pin_labels": [
            ["DIR", "A1", "A2", "A3", "A4", "A5", "A6", "A7", "A8", "GND"],
            ["B8", "B7", "B6", "B5", "B4", "B3", "B2", "B1", "!OE", "VCC"]
        ],
        "function_table": [
            [["*INPUTS", 2, 1], ["*OPERATION", 1, 2]],
            ["*!OE", "*DIR"],
            ["L", "L", "B data to A bus"],
            ["L", "H", "A data to B bus"],
            ["H", "X", "Isolation"]
        ]
    },
    {
        "ref": "74x573",
        "desc": "Octal transparent, D-type, 3-state latch",
        "package": "DIP20",
        "pins": 20,
        "rows": 10,
        "cols": 2,
        "pin_labels": [
            ["!OE", "D0", "D1", "D2", "D3", "D4", "D5", "D6", "D7", "GND"],
            ["LE", "Q7", "Q6", "Q5", "Q4", "Q3", "Q2", "Q1", "Q0", "VCC"]
        ],
        "function_table": [
            [["*INPUTS", 3, 1], "*OUTPUT"],
            ["*!OE", "*LE", "*Dn", "*Qn"],
            ["L", "H", "L", "L"],
            ["L", "H", "H", "H"],
            ["H", "X", "X", "Z"],
        ]
    },
    {
        "ref": "74x574",
        "desc": "Octal D-type, positive-edge triggered, 3-state flip-flop",
        "package": "DIP20",
        "pins": 20,
        "rows": 10,
        "cols": 2,
        "pin_labels": [
            ["!OE", "D0", "D1", "D2", "D3", "D4", "D5", "D6", "D7", "GND"],
            ["CP", "Q7", "Q6", "Q5", "Q4", "Q3", "Q2", "Q1", "Q0", "VCC"]
        ],
        "function_table": [
            [["*INPUTS", 3, 1], "*OUTPUT"],
            ["*!OE", "*CP", "*Dn", "*Qn"],
            ["L", "↑", "L", "L"],
            ["L", "↑", "H", "H"],
            ["H", "X", "X", "Z"]
        ]
    },
    {
        "ref": "74x86",
        "desc": "Quad 2-input XOR gate",
        "package": "DIP14",
        "pins": 14,
        "rows": 7,
        "cols": 2,
        "pin_labels": [
            ["1A", "1B", "1Y", "2A", "2B", "2Y", "GND"],
            ["3Y", "3A", "3B", "4Y", "4A", "4B", "VCC"]
        ],
        "function_table": [
            [["*INPUTS", 2, 1], "*OUTPUT"],
            ["*A", "*B", "*Y"],
            ["L", "L", "L"],
            ["L", "H", "H"],
            ["H", "L", "H"],
            ["H", "H", "L"]
        ]
    },
    {
        "ref": "AT28C256",
        "desc": "256K (32K x 8) paged parallel EEPROM",
        "package": "DIP28 wide",
        "pins": 28,
        "rows": 14,
        "cols": 2,
        "pin_labels": [
            ["A14", "A12", "A7", "A6", "A5", "A4", "A3", "A2", "A1", "A0", "I/O0", "I/O1", "I/O2", "GND"],
            ["I/O3", "I/O4", "I/O5", "I/O6", "I/O7", "!CE", "A10", "!OE", "A11", "A9", "A8", "A13", "!WE", "VCC"]
        ]
    },
    {
        "ref": "AT28C64",
        "desc": "64K (8K x 8) parallel EEPROM",
        "package": "DIP28 wide",
        "pins": 28,
        "rows": 14,
        "cols": 2,
        "pin_labels": [
            ["RDY/!BUSY", "A12", "A7", "A6", "A5", "A4", "A3", "A2", "A1", "A0", "I/O0", "I/O1", "I/O2", "GND"],
            ["I/O3", "I/O4", "I/O5", "I/O6", "I/O7", "!CE", "A10", "!OE", "A11", "A9", "A8", "NC", "!WE", "VCC"]
        ]
    },
    {
        "ref": "ATF16V8",
        "desc": "EEPLD",
        "package": "DIP20",
        "pins": 20,
        "rows": 10,
        "cols": 2,
        "pin_labels": [
            ["IN/CLK", "IN", "IN", "IN", "IN", "IN", "IN", "IN", "IN", "GND"],
            ["IN/!OE", "I/O", "I/O", "I/O", "I/O", "I/O", "I/O", "I/O", "I/O", "VCC"]
        ]
    },
    {
        "ref": "ATF22V10",
        "desc": "EEPLD",
        "package": "DIP24 wide",
        "pins": 24,
        "rows": 12,
        "cols": 2,
        "pin_labels": [
            ["IN/CLK", "IN", "IN", "IN/PD", "IN", "IN", "IN", "IN", "IN", "IN", "IN", "GND"],
            ["IN", "I/O", "I/O", "I/O", "I/O", "I/O", "I/O", "I/O", "I/O", "I/O", "I/O", "VCC"]
        ]
    },
    {
        "ref": "CD4008",
        "desc": "4-bit full adder",
        "package": "DIP16",
        "pins": 16,
        "rows": 8,
        "cols": 2,
        "pin_labels": [
            ["A4", "B3", "A3", "B2", "A2", "B1", "A1", "GND"],
            ["CIN", "S1", "S2", "S3", "S4", "COUT", "B4", "VCC"]
        ]
    },
    {
        "ref": "CD4040",
        "desc": "12-stage ripple-carry binary counter/divider",
        "package": "DIP16",
        "pins": 16,
        "rows": 8,
        "cols": 2,
        "pin_labels": [
            ["Q12", "Q6", "Q5", "Q7", "Q4", "Q3", "Q2", "GND"],
            ["Q1", "PHI", "R", "Q9", "Q8", "Q10", "Q11", "VCC"]
        ]
    },
    {
        "ref": "CD4048",
        "desc": "Multifunction expandable 8-input gate",
        "package": "DIP16",
        "pins": 16,
        "rows": 8,
        "cols": 2,
        "pin_labels": [
            ["J", "OE", "H", "G", "F", "E", "Kb", "GND"],
            ["Kc", "Ka", "D", "C", "B", "A", "EXP", "VCC"]
        ],
        "function_table": [
            [["*INPUTS", 3, 1], ["*OUTPUT", 2, 1]],
            ["*Ka", "*Kb", "*Kc", "*FUNCTION", "*BOOLEAN EXPRESSION"],
            ["0", "0", "0", "NOR", "J = !(A+B+C+D+E+F+G+H)+(EXP)!"],
            ["0", "0", "1", "OR", "J = (A+B+C+D+E+F+G+H)+(EXP)"],
            ["0", "1", "0", "OR/AND", "J = (A+B+C+D)·(E+F+G+H)·!(EXP)!"],
            ["0", "1", "1", "OR/NAND", "J = !(A+B+C+D)·(E+F+G+H)·!(EXP)!!"],
            ["1", "0", "0", "AND", "J = (ABCDEFGH)·!(EXP)!"],
            ["1", "0", "1", "NAND", "J = !(ABCDEFGH)·!(EXP)!!"],
            ["1", "1", "0", "AND/NOR", "J = !(ABCD)+(EFGH)+(EXP)!"],
            ["1", "1", "1", "AND/OR", "J = (ABCD)+(EFGH)+(EXP)"]
        ]
    },
    {
        "ref": "CD4051",
        "desc": "Single 8-channel analog multiplexer/demultiplexer",
        "package": "DIP16",
        "pins": 16,
        "rows": 8,
        "cols": 2,
        "pin_labels": [
            ["4", "6", "COM", "7", "5", "INH", "VEE", "VSS"],
            ["C", "B", "A", "3", "0", "1", "2", "VDD"]
        ]
    },
    {
        "ref": "CD4076",
        "desc": "4-bit D-type register",
        "package": "DIP16",
        "pins": 16,
        "rows": 8,
        "cols": 2,
        "pin_labels": [
            ["!OE1", "!OE2", "Q1", "Q2", "Q3", "Q4", "", "GND"],
            ["!IE1", "!IE2", "D4", "D3", "D2", "D1", "RST", "VCC"]
        ]
    },
    {
        "ref": "CD4516",
        "desc": "Presettable synchronous 4-bit binary up/down counter",
        "package": "DIP16",
        "pins": 16,
        "rows": 8,
        "cols": 2,
        "pin_labels": [
            ["PE", "Q4", "P4", "P1", "!CI", "Q1", "!CO", "GND"],
            ["RST", "U/D", "Q2", "P2", "P3", "Q3", "CLK", "VCC"]
        ]
    }
]
