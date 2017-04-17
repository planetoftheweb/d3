var bardata = [];
for (var i = 0; i < 50; i++) {
    bardata.push(Math.round(Math.random() * 1200+300));
}

bardata.sort(function compareNumbers(a, b) {
  return a - b;
});

var height = 400,
    width = 600;

var yScale = d3.scale.linear()
    .domain([0, d3.max(bardata)])
    .range([0, height]);

var xScale = d3.scale.ordinal()
    .domain(d3.range(0, bardata.length))
    .rangeBands([0, width], 0.1, 0);

var colors = d3.scale.linear()
    .domain([0, bardata.length*.33, bardata.length*.66, bardata.length])
    .range(['#FFB832','#E40074', '#268BD2', '#96B52D']);

var tooltip = d3.select("body").append("div")
    .style("position", "absolute")
    .style("padding", "0 10px")
    .style("background", "white")
    .style("opacity", 0)


d3.select('#graphic').append('svg')
  .attr('width', width)
  .attr('height', height)
  .style("cursor", "pointer")

.selectAll('rect').data(bardata)
	.enter().append('rect')

  .attr('fill', function(d, i) {
		return colors(i);
	})

	.attr('width', xScale.rangeBand())

  .attr('height', function (d) {
    return yScale(d);
  })

  .attr('x', function (d,i) {
      return xScale(i);
  })

  .attr('y', function (d) {
    return height - yScale(d);
  })

 .on("mouseover", function(d) {
	 d3.select(this)
	 .transition().duration(200)
	 .style('opacity', .5)

	 tooltip.transition().duration(200)
		.style("opacity", .9);

	 tooltip.html(d)
		.style("left", (d3.event.pageX -35) + "px")
		.style("top", (d3.event.pageY - 30) + "px");
	})

 .on("mouseout", function(d) {
	 d3.select(this)
	 .transition().duration(500)
	 .style('opacity', 1)

	tooltip.transition()
		.duration(1000)
		.style("opacity", 0)
 })
