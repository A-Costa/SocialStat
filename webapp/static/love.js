var trace1 = {
    y: [26,   13,   11,   22,   10,   21,   10,  492,   72,   55,   14,
        13,   92,   26,   31,  187,   53,  204,  119,   37,   36,   38,
        25,   82,   78,   19, 5000,  113,   53,   58,  325,   29,   52,
        19,  116,   16,   10,   21,   22,  219,  133,   36,   26, 1300,
        289,  119,  928,   35,   10,   32
    ],
    name: 'McDonald\'s',
    type: 'box',
    boxpoints: true
};

var trace3 = {
    y: [ 75,  14, 571,  37,  67,  42,  53, 540,  23, 223,  29, 147,  28,
         709, 357, 184, 122, 125, 183,  47,  21,  22,  18,  20,  17,  27,
         149,  32,  25, 175, 177,  81, 130, 183, 241, 298,  78,  46, 189,
         38,  25, 123,  59, 115,  22,  73, 166,  58,  15,  51
    ],
    name: 'Burger King',
    type: 'box',
    boxpoints: true
};

var trace5 = {
    y: [9,   7,  10,   4,  22,   3, 124,  21,  16,  26,   3,  20,   1,
        12,  13,  17,  18,   9,  29,  21,  19,   7,  22,  10,   9,   4,
        7,  12,   3,  16,  26,  19,  19,   6,  13,   6,   0,  21,   9,
        0,   7,  14,   6, 160,  15,   6,  32,   6,  10,   1
    ],
    name: 'Hardee\'s',
    type: 'box',
    boxpoints: true
};

var trace2 = {
    y: [406, 74, 100, 226, 213, 51, 257, 205, 304, 145, 386,
        124, 137, 176, 201, 534, 141, 209, 1000, 140, 274, 257,
        71, 267, 184, 241, 289, 2400, 50, 113, 72, 81, 2400,
        130, 178, 242, 1000, 108, 1000, 139, 263, 3300, 563, 133,
        158, 155, 200, 134, 179, 153
    ],
    name: 'KFC',
    type: 'box',
    boxpoints: true
};

var trace6 = {
    y: [40,  14, 146,  56,  42,  13,  99,  62,  63,  42,  45,   1,  57,
        62,  62, 105,  64,   3,  59,  45,  80,  62,  28,  49,  59,  49,
        18,  34,   9,  10,  30,  98,  62,  25,  36,  22,  40,  76,  15,
        43,  68, 183,  37,  16,   8,   6,  60,  53,  49, 157
    ],
    name: 'Quiznos',
    type: 'box',
    boxpoints: true
};

var trace4 = {
    y: [110,   77,  109,  123,  129,    6,   58,  424,  614,  333,   53,
        121,   56,  757,  349,   32,   18,  497,  945,  283,   54,  303,
        70,   76,   28,   29,   93,   73, 1304,  301,  362,  248,   16,
        250,  289,   54,   80, 1229,   33,   39,   62,  452,  308,  360,
        586,  152,  488,  156,  201,  536
    ],
    name: 'Wendy\'s',
    type: 'box',
    boxpoints: true
};

var data = [trace1, trace2, trace3, trace4, trace5, trace6];

var layout = {
    title: 'Love reactions',
    font: {
        size: 12
    },
    yaxis: {
        range: [0, 500]
    }
};

Plotly.newPlot('love', data, layout, {
    responsive: true,

});
