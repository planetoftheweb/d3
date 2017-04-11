var bardata = [];
    for (var i = 0; i<50; i++) {
      bardata.push(Math.random() * 30);
    }
var height = 400,
    width = 600,
    barWidth = 50,
    barOffset = 5,
    tempColor;

var yScale = d3.scaleLinear()
    .domain([0, d3.max(bardata)])
    .range([0,height]);

var xScale = d3.scaleBand()
    .domain(bardata)
    .paddingInner(.3)
    .paddingOuter(.1)
    .range([0, width])

var colors = d3.scaleLinear()
    .domain([0, bardata.length *.33,
                bardata.length *.66,
                bardata.length
                ])
    .range(['#B58929', '#C61C6F',
            '#268BD2', '#85992C'])

var myChart = 
d3.select('#viz').append('svg')
  .attr('width', width)
  .attr('height', height)
.selectAll('rect').data(bardata)
  .enter().append('rect')
    .attr('fill', function(d, i) {
      return colors(i)
    })
    .attr('width', function(d) {
      return xScale.bandwidth();
    })
    .attr('height', 0)
    .attr('x', function(d) {
      return xScale(d);
    })
    .attr('y', height)
    
    .on('mouseover', function(d) {
      tempColor = this.style.fill;
      d3.select(this)
        .style('fill', 'yellow')
    })

    .on('mouseout', function(d) {
      d3.select(this)
        .style('fill', tempColor)
    });


myChart.transition()
  .attr('height', function(d) {
    return yScale(d);
  })
  .attr('y', function(d) {
    return height - yScale(d);
  })
  .delay(function(d, i) {
    return i * 20;
  })
  .duration(1000)
  .ease(d3.easeBounceOut)