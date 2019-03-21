trace1 = {
  x:['Positive Reactions', 'Negative Reactions', 'Number of Likes','Number of Shares','Number of Comments'],
  y:[339.46, 18.2, 2695.28,468.94,387.26],
  name:'McDonald\'s',
  type: 'bar'
}
trace2 ={
  x:['Positive Reactions', 'Negative Reactions', 'Number of Likes','Number of Shares','Number of Comments'],
  y:[122.38, 4.78, 395.26,258.72,175.12],
  name:'KFC',
  type: 'bar'
}
trace3 ={
  x:['Positive Reactions', 'Negative Reactions', 'Number of Likes','Number of Shares','Number of Comments'],
  y:[257.3, 7.66, 784.3,280.38,301.82],
  name:'Burger King',
  type: 'bar'
}
trace4 ={
  x:['Positive Reactions', 'Negative Reactions', 'Number of Likes','Number of Shares','Number of Comments'],
  y:[345.88, 8.72, 1917.54,436.08,344.12],
  name:'Wendy\'s',
  type: 'bar'

}
trace5 ={
  x:['Positive Reactions', 'Negative Reactions', 'Number of Likes','Number of Shares','Number of Comments'],
  y:[25.14, 0.86, 133.86,122.16,37.42],
  name:'Hardee\'s',
  type: 'bar'
}
trace6 ={
    x:['Positive Reactions', 'Negative Reactions', 'Number of Likes','Number of Shares','Number of Comments'],
    y:[73, 1.34, 1338.38,39.04,23.06],
    name:'Quiznos',
    type: 'bar'
}

data = [trace1, trace2,trace3,trace4,trace5,trace6]
var layout = {
    title: 'Histrogram of Average Reactions',
    font: {
        size: 12
    },
    yaxis: {
        range: [0, 1000],
    },

    barmode: 'group'
  };
    Plotly.newPlot('hist1', data, layout);
