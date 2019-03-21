trace1 = {
  x:['McDonald\'s','KFC','Burger King','Wendy\'s','Hardee\'s','Quiznos'],
  y:[468.94,258.72,280.38,436.08,122.16,39.04],
  name:'McDonald\'s',
  type: 'bar'
}
    data = [trace1]
var layout = {
    title: 'Histrogram of Average Shares',
    font: {
        size: 12
    }
};
    Plotly.newPlot('hist2', data, layout);
