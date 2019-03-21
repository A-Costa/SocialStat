var trace1 = {
    x: ['Burger King', 'Hardee\'s', 'KFC', 'McDonald\'s', 'Quiznos',
        'Wendy\'s'
    ],
    y: [0.747,
        0.837,
        0.757,
        0.883,
        0.947,
        0.844,
    ],
    name: 'Likes',
    type: 'bar'
};

var trace2 = {
    x: ['Burger King', 'Hardee\'s', 'KFC', 'McDonald\'s', 'Quiznos',
        'Wendy\'s'
    ],
    y: [0.119,
        0.109,
        0.0874,
        0.0704,
        0.0363,
        0.117,
    ],
    name: 'Love',
    type: 'bar'
};

var trace3 = {
    x: ['Burger King', 'Hardee\'s', 'KFC', 'McDonald\'s', 'Quiznos',
        'Wendy\'s'
    ],
    y: [0.0671,
        0.022,
        0.108,
        0.0259,
        0.00562,
        0.0109,
    ],
    name: 'Haha',
    type: 'bar'
};

var trace4 = {
    x: ['Burger King', 'Hardee\'s', 'KFC', 'McDonald\'s', 'Quiznos',
        'Wendy\'s'
    ],
    y: [0.059,
        0.0264,
        0.0385,
        0.0149,
        0.00978,
        0.0241,
    ],
    name: 'Wow',
    type: 'bar'
};

var trace5 = {
    x: ['Burger King', 'Hardee\'s', 'KFC', 'McDonald\'s', 'Quiznos',
        'Wendy\'s'
    ],
    y: [0.00223,
        0.00163,
        0.00199,
        0.00168,
        0.00051,
        0.00136,
    ],
    name: 'Sad',
    type: 'bar'
};

var trace6 = {
    x: ['Burger King', 'Hardee\'s', 'KFC', 'McDonald\'s', 'Quiznos',
        'Wendy\'s'
    ],
    y: [0.00507,
        0.00375,
        0.00716,
        0.00428,
        0.000439,
        0.00247,

    ],
    name: 'Angry',
    type: 'bar'
};


var data = [trace1, trace2, trace3, trace4, trace5, trace6];

var layout = {
    title: 'Stacked Bar of Reaction Percentages',
    barmode: 'stack'
};

Plotly.newPlot('stacked-bar', data, layout, {
    responsive: true,
});
