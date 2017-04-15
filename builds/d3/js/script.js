d3.json('js/data/forecast.json', function(d) {

  var temperatures = [],
      height = 400,
      width = 600;

  var   tempColor,
        yScale,
        xScale,
        colors,
        tooltip,
        myChart;

  for (var i = 0; i<d.list.length; i++) {
    temperatures.push(d.list[i].main.temp);
  }

  yScale = d3.scaleLinear()
    .domain([0, d3.max(temperatures)])
    .range([0,height]);

  xScale = d3.scaleBand()
    .domain(temperatures)
    .paddingInner(.1)
    .paddingOuter(.1)
    .range([0, width])

  colors = d3.scaleLinear()
    .domain([0, 65, d3.max(temperatures)])
    .range(['#FFFFFF', '#2D8BCF', '#DA3637'])

  tooltip = d3.select('body')
    .append('div')
    .style('position', 'absolute')
    .style('padding', '0 10px')
    .style('background', 'white')
    .style('opacity', 0);

  myChart = d3.select('#viz').append('svg')
    .attr('width', width)
    .attr('height', height)
    .selectAll('rect').data(temperatures)
    .enter().append('rect')
      .attr('fill', colors)
      .attr('width', function(d) {
        return xScale.bandwidth();
      })
      .attr('height', 0)
      .attr('x', function(d) {
        return xScale(d);
      })
      .attr('y', height)
      
      .on('mouseover', function(d) {
        tooltip.transition().duration(200)
          .style('opacity', .9)
        tooltip.html(
          '<div style="font-size: 2rem; font-weight: bold">' +
            d + '&deg;</div>'
        )
          .style('left', (d3.event.pageX -35) + 'px')
          .style('top', (d3.event.pageY -30) + 'px')
        tempColor = this.style.fill;
        d3.select(this)
          .style('fill', 'yellow')
      })

      .on('mouseout', function(d) {
        tooltip.html('')
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

}); // json import
