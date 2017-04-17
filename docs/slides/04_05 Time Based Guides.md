<!-- .slide: data-state="title" -->
# D3 
Time Guides

>> Speaker Notes:
Time based guides are a little different and more complicated than regular guides, so let's dig into how they work.

---

# Creating a Guide

<ul>
	<li class="fragment">`scaleTime()`</li>
	<li class="fragment">Date based domain</li>
	<li class="fragment">Special ticks</li>
	<li class="fragment">Group elements</li>
</ul>

>> Speaker Notes:
- The method for time scales is called scaleTime

- It's a bit different from other scales in that it expects a date or time based domain. That's perfect for our purposes because we need 

  var temperatures = [],
      dates = [],

  var   tempColor,
        yScale,
        yAxisValues,
        yAxisTicks,
        yGuide,
        xScale,
        xAxisValues,
        xAxisTicks,
        xGuide,
        colors,
        tooltip,
        myChart;

  for (var i = 0; i<d.list.length; i++) {
    temperatures.push(d.list[i].main.temp);
    dates.push(new Date(d.list[i].dt_txt));
  }

  xAxisValues = d3.scaleTime()
  .domain([dates[0], dates[(dates.length-1)]])
  .range([0, width]);

  xAxisTicks = d3.axisBottom(xAxisValues)
  .ticks(d3.timeDay.every(1))

  xGuide = d3.select('#viz svg').append('g')
    .attr('transform', 'translate(20, ' + (height) + ')')
    .call(xAxisTicks)


