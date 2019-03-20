var trace1 = {
    y: [2,   1,   2,   1,   0,   4,   4,  14,   2,   5,  11,  16,  15,
     7,   1,  17,  49,  28,  12,   3,   1,  27,   9,  65,  10,   2,
   188,  14,   9,   7,  12,   0,   2,   2,   6,   1,   3,   2,   3,
     7,   8,   3,   0,  34,   8,  12,  16,   3,   2,   4
    ],
    name: 'McDonald\'s',
    type: 'box',
    boxpoints: true
};

var trace2 = {
    y: [1,  0,  0,  0,  0,  0,  3,  6,  1,  2,  3,  1,  1,  2,  1,  4,  3,
    0, 18,  1,  2,  2,  2,  5,  5,  7,  2,  7,  0,  0,  0,  0,  3,  2,
    0,  1,  6,  1,  3,  0,  1, 22,  8,  1,  3,  5, 24,  9,  8, 11
    ],
    name: 'KFC',
    type: 'box',
    boxpoints: true
};

var trace3 = {
    y: [2,  1,  3,  2,  2,  2,  1, 11,  3, 16,  3,  4,  3,  6,  2,  4, 13,
    2, 10,  4,  5,  5,  2,  0,  1,  1,  6,  3,  1,  7,  5, 18, 48,  0,
    3,  2,  1,  1, 17,  2,  0,  4,  1,  0,  8, 13,  8,  2,  5,  3
    ],
    name: 'Burger King',
    type: 'box',
    boxpoints: true
};

var trace4 = {
    y: [5,  4,  5,  5,  4,  0,  2,  3, 21,  5,  1,  0,  3, 18,  7,  1,  2,
    8, 10, 11, 14,  4,  4,  2,  3,  2,  3,  3, 17,  3,  9,  6,  0,  6,
    8,  1,  0, 14,  2,  2,  1,  8, 12, 10,  5,  3,  4,  3,  8,  9
    ],
    name: 'Wendy\'s',
    type: 'box',
    boxpoints: true
};

var trace5 = {
    y: [3, 0, 1, 0, 1, 2, 3, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0,
   0, 1, 1, 0, 1, 1, 0, 0, 2, 1, 2, 0, 3, 0, 0, 0, 1, 0, 0, 2, 0, 0,
   0, 0, 0, 0, 0, 1
    ],
    name: 'Hardee\'s',
    type: 'box',
    boxpoints: true
};



var trace6 = {
    y: [1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 3, 0, 0, 1, 0, 1, 1,
   0, 1, 1, 1, 2, 3, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 1, 1, 0, 1,
   0, 0, 1, 1, 0, 1
    ],
    name: 'Quiznos',
    type: 'box',
    boxpoints: true
};


var data = [trace1, trace2, trace3, trace4, trace5, trace6];

var layout = {
    title: 'Angry reactions',
    font: {
        size: 12
    },
    yaxis: {
        range: [0, 30]
    }
};

Plotly.newPlot('angry', data, layout, {
    responsive: true,

});
