<!-- .slide: data-state="title" -->
# D3 
Reading Data

>> Speaker Notes:
In a real project, you would want to load your data from an external file or database. D3 has some excellent functions to help you with that.

---

# External Data

<ul>
	<li class="fragment">d3 AJAX</li>
	<li class="fragment">`.csv`, `.html`, `.json`, `.text`, `tsv`, `.xml`</li>
	<li class="fragment">Handle with callback</li>
</ul>

>> Speaker Notes:
- D3 offers a variety of methods to deal with data import and the nice thing is that it will take care of parsing the data automatically for you.

- You can import data in many formats including the popular JSON format and once you import the information is easily accessible.
 
- Once you import the data, you can use that data in a callback to create your chart.
 
I've already got a pretty complicated data file in our javascript folder. It's a JSON file that has a weather forecast for the next few days every three hours.  I got the data from a site called open weather map, which you can find at this URL.

http://openweathermap.org/

Understanding JSON data can be pretty complex, so I usually use a site called jsoneditoronline.org to visualize json data. Let's copy and paste that.
http://jsoneditoronline.org/

https://db.tt/YN8GdygEkE

# Conclusion
d3 makes reading data extremely simple. It will automatically parse the data for you from most formats.

d3.json('js/data/forecast.json', function(d) {
  var temperatures = [],
      dates = [],
      height = 400,
      width = 600;

var tempColor,
    temperatures,
    yScale,
    xScale,
    colors,
    tooltip,
    myChart;

  for (var i = 0; i < d.list.length; i++) {
    temperatures.push(d.list[i].main.temp);
  }

  yScale = d3.scaleLinear()
    .domain([0, d3.max(temperatures)])
    .range([0,height]);

  xScale = d3.scaleBand()
    .domain(temperatures)
    .paddingInner(.3)
    .paddingOuter(.1)
    .range([0, width])

  colors = d3.scaleLinear()
    .domain([0, temperatures.length *.33,
                temperatures.length *.66,
                temperatures.length
                ])
    .range(['#B58929', '#C61C6F',
            '#268BD2', '#85992C'])

  tooltip = d3.select('body')
    .append('div')
    .style('position', 'absolute')
    .style('padding', '0 10px')
    .style('background', 'white')
    .style('opacity', 0);

  myChart = 
    d3.select('#viz').append('svg')
      .attr('width', width)
      .attr('height', height)
      .selectAll('rect').data(temperatures)
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
      tooltip.transition().duration(200)
        .style('opacity', .9)
      tooltip.html(d)
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
});
