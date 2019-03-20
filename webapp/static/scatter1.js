var trace1 = {
    x: [ 91,   50,   96,   64,   62,  136,  140, 1400,  154,  376,   86,
      210,  486,  195,   60,  943,  715,  889,  589,  172,  179,  137,
      96,  641,  493,   43, 1000,  404,  325,  317,  680,   90,  282,
      105,  322,   34,  234,  100,  327,  569,  926,  270,   93, 2400,
      459,  661,  981,   77,  129,   75,  133,   26,   51,  120,  109,    5,  163,   67,  206,   50,   82,
        38,   69,   51,   35,  302,   26,   35,  803,   22,   20,  117,
        21,  160,  115,   97,   83,  957,   15,   30,   23,   20,  307,
        37,   33,   36,  244,   19,   63,   21,   77, 2800,  380,   25,
        122,   89,  213,   62,  135,   42],
    y: [ 229,   166,   215,   284,   175,   207,   200,  1500,   711,
      453,   198,   294,   576,   324,   332,  1300,   601,  1300,
      900,   355,   296,   509,   332,   500,   501,   395, 82000,
      916,  1300,  1200,  5400,   318,   571,   272,  1000,   224,
      249,   248,   309,  2000,  1600,   393,   371, 11000,  2500,
      1000,  8100,   488,   184,   268, 406,   74,  100,  226,  213,   51,  257,  205,  304,  145,  386,
        124,  137,  176,  201,  534,  141,  209, 1000,  140,  274,  257,
        71,  267,  184,  241,  289, 2400,   50,  113,   72,   81, 2400,
        130,  178,  242, 1000,  108, 1000,  139,  263, 3300,  563,  133,
        158,  155,  200,  134,  179,  153],
    name: 'Very Popular',
    mode: 'markers',
    type: 'scatter'
};



var trace2 = {
    x: [  21,  10,  52,  36,  21,  19,  35,  13,  38,  11,  21,   2,  11,
      24,  27,  46,  34,   6,  41,  33,  42,  34,  11,  20,  23,  13,
      10,   5,   8,   8,  15,  40,  27,   5,  12,  18,  17,  33,   3,
      16,  62, 147,   4,   6,   8,   3,  17,  11,   5,  56, 33,  16,  15,   4,  64,  10, 670,  36,  22,  23,   5,  45,  16,
        36,  48,  36,  26,  21,  58,  30,  33,  17,  44,  22,  16,   9,
        6,  27,   8,   7,  24,   8,  28,   9,  18,   2,   6,  27,  80,
        11,  27,  52,  13, 113,  19,   6,  12,   7,   2,   4],
    y: [  1200,  375, 1900, 1900, 1500,  647, 1900, 1800, 2000, 1400, 1500,
      18, 1800, 1800, 1900, 2000, 1900,  161, 1700, 1500, 2000, 2100,
      1100,  968, 1500, 1300,  861,  933,  344,  417,  956, 1400, 1400,
      889, 1100,  981, 1400, 1800,  487, 1500, 1700, 2700, 1100,  664,
      183,   35, 2400, 1500, 1500, 2800, 70,  46,  74,  44, 242,  55, 753, 104,  64, 155,  67, 251,  49,
        150, 158, 112, 123,  49, 232, 201, 162,  60, 239,  78,  55,  33,
        41, 127,  55, 134, 143,  61, 114,  42,  76,  51,  21, 164, 141,
        29, 119, 287,  48, 910, 108,  82, 188,  43,  66,  17],
    name: 'Not Popular',
    mode: 'markers',
    type: 'scatter'
};

var trace3 = {
    x: [ 147,   65, 1421,   98,   97,  133,  119, 1198,   67,  596,   77,
      190,   49, 1929,  712,  400,  343,  256,  448,   83,   65,   89,
      54,   65,   72,   81,  144,   59,   63,  246,  268,  463, 1177,
      265,  352,  435,  139,   65,  305,   61,   36,  154,   92,  177,
      259,  285,  763,  133,  179,  117, 186,  179,  162,  243,  183,   27,  138,  461,  714,  415,   40,
        150,  140, 1127,  603,   64,  134,  485, 1199,  570,  269,  570,
        236,  148,   75,  137,  160,  103, 1226,  212,  449,  308,   40,
        570,  397,   61,   88, 2211,   64,   48,  102,  357,  321,  231,
        313,  165,  459,  144,  155,  367],
    y: [ 596,  165, 2109,  302,  507,  434,  571, 2219,  272, 1062,  198,
      663,  196, 3155, 1771,  947,  733,  965, 1249,  552,  314,  280,
      267,  233,  223,  373,  904,  417,  385, 1048, 1054,  955, 1001,
      1006, 1533, 1155,  370,  563, 1312,  428,  292,  845,  443, 1010,
      760,  637, 1338,  646,  292,  465, 792,  428,  930,  843,  657,  118,  375, 2308, 3413, 1903,  404,
        618,  344, 4188, 1761,  188,  146, 5385, 9147, 1613,  499, 2050,
        475,  572,  297,  357,  631,  519, 6371, 1812, 2695, 2199,  190,
        2009, 2592,  433,  684, 8578,  225,  231,  385, 3032, 2603, 4114,
        5213, 1135, 3441, 1468, 2205, 3301],
    name: 'Medium Popular',
    mode: 'markers',
    type: 'scatter'
};


var data = [trace1,trace2,trace3];

var layout = {
    title: 'Likes vs Comments',
    font: {
        size: 12
    },
    yaxis: {
        range: [0, 9000],
        title: {
          text: 'Likes',
          font: {
            family: 'Courier New, monospace',
            size: 18,
            color: '#7f7f7f'
          }
        }
    },
    xaxis: {
        range: [0, 2000],
        title: {
          text: 'Comments',
          font: {
            family: 'Courier New, monospace',
            size: 18,
            color: '#7f7f7f'
          }
        }
    }
};

Plotly.newPlot('scatter1', data, layout, {
    responsive: true,

});
