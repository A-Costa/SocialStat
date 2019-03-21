trace1 = {
  x:['McDonald\'s','KFC','Burger King','Wendy\'s','Hardee\'s','Quiznos'],
  y:[387.26,175.12,301.82,344.12,37.42,23.06],
  name:'McDonald\'s',
  type: 'bar'
}
    data = [trace1]
var layout = {
    title: 'Histrogram of Average Comments',
    font: {
        size: 12
    },
    showlegend: true
};
    Plotly.newPlot('hist3', data, layout);
