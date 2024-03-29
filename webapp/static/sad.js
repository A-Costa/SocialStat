var trace3 = {
    y: [2,  0,  2,  0,  4,  2,  0,  9,  2, 13,  1,  0,  0,  5,  2,  4,  2,
        13,  1,  1,  0,  0,  0,  0,  0,  0,  7,  0,  0,  6,  3,  4,  4,  2,
        1,  1,  1,  0,  0,  1,  0,  3,  0,  1,  8,  3,  7,  0,  1,  1
    ],
    name: 'Burger King',
    type: 'box',
    boxpoints: true
};

var trace5 = {
    y: [1, 0, 1, 0, 2, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0,
        1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0
    ],
    name: 'Hardee\'s',
    type: 'box',
    boxpoints: true
};

var trace2 = {
    y: [0, 0, 0, 2, 1, 0, 4, 0, 2, 2, 1, 0, 0, 0, 0, 0, 0, 1, 6, 0, 0, 2,
        0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 9, 6, 2,
        1, 0, 3, 0, 0, 2
    ],
    name: 'KFC',
    type: 'box',
    boxpoints: true
};

var trace1 = {
    y: [3,   0,   0,   1,   1,   4,   0,   6,   0,   5,   0,   1,   7,
        2,   0,   3,   4,   7,   3,   3,   0,   1,   0,   8,   5,   0,
        114,   3,   4,   2,  11,   1,   2,   1,   3,   0,   0,   1,   1,
        7,   9,   0,   1,  15,   2,   3,   8,   1,   2,   1
    ],
    name: 'McDonald\'s',
    type: 'box',
    boxpoints: true
};

var trace6 = {
    y: [2, 0, 1, 0, 0, 1, 2, 0, 1, 1, 0, 0, 1, 1, 0, 3, 0, 0, 1, 0, 0, 2,
        0, 2, 1, 1, 0, 0, 0, 0, 0, 2, 0, 0, 1, 2, 1, 0, 0, 1, 4, 3, 0, 0,
        0, 0, 1, 0, 1, 0
    ],
    name: 'Quiznos',
    type: 'box',
    boxpoints: true
};

var trace4 = {
    y: [2,  4,  1,  3,  1,  0,  2,  3,  7,  2,  0,  1,  0, 14,  5,  0,  0,
        2,  1,  2,  3,  5,  3,  3,  2,  3,  2,  5, 15,  6,  5,  3,  0,  2,
        7,  0,  3, 11,  0,  0,  0,  6,  2,  3,  6,  0,  4,  0,  1,  5
    ],
    name: 'Wendy\'s',
    type: 'box',
    boxpoints: true
};

var data = [trace1, trace2, trace3, trace4, trace5, trace6];

var layout = {
    title: 'Sad reactions',
    font: {
        size: 12
    },
    yaxis: {
        range: [0, 20]
    }
};

Plotly.newPlot('sad', data, layout, {
    responsive: true,

});
