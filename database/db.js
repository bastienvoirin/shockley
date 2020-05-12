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
        "ref": "ATF16V8",
        "desc": "EEPLD",
        "package": "DIP20",
        "pins": 20,
        "rows": 10,
        "cols": 2,
        "pin_labels": [
            ["I/CLK", "I1", "I2", "I3", "I4", "I5", "I6", "I7", "I8", "GND"],
            ["I9/!OE", "I/O", "I/O", "I/O", "I/O", "I/O", "I/O", "I/O", "I/O", "VCC"]
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
            ["J", "KD", "H", "G", "F", "E", "KB", "GND"],
            ["KC", "KA", "D", "C", "B", "A", "EXP", "VCC"]
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
