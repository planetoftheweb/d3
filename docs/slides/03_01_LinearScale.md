<!-- .slide: data-state="title" -->
# D3 
Linear Scales

>> Speaker Notes:
Now we have a barchart, but it doesn't look great. It would be nice to make it fit our space better. We'll start by using linear scales to control the amount of vertical space this chart takes up.

---

# Using Linear Scales

<ul>
	<li class="fragment">`scaleLinear()`</li>
	<li class="fragment">`domain()`</li>
	<li class="fragment">`range()`</li>
	<li class="fragment">Statistics: `min()`, `max()`, etc </li>
</ul>

>> Speaker Notes:# Introduction

A scale is a method that allows us to redefine data so that it fits a certain range of values. The simplest type of scale is the linearScale...it's known as a continuous scale because it  maps a serial set of input values to output values. We can use that in our table to make sure our data grows to fit  a specific range.

The domain is an array of values you feed to your scale. It defines original values being modified.

The range is  another array you feed to a linearScale.

We can also use statistical methods to parse our domain for information that we'll need like figuring out the maximum value in our data. There are plenty of other statistical functions you can find at this URL.







With scales, you identify two values. The domain is the original information in the chart, Here the domain or original values need to go from 0 to the maximum value in our data. To get that we'll use another utility function from d3 called max. It will find the maximum value in our data.

The next thing we need is to specify the range. In this case, it will go from 0 to our container, which is the height of our chart.

We'll need to now add these values in a couple of places. First we'll remap our height so that it returns the data adjusted by our scale.

# Conclusion
In order to adjust our width, we'll need to use a different kind of scale than what we did in the previous movie...and that's called an ordinal scale, we'll tackle that in the next video.


var bardata = [ 20, 30, 40, 15 ];
var height = 400,
    width = 600,
    barWidth = 50,
    barOffset = 5

var yScale = d3.scaleLinear()
    .domain([0, d3.max(bardata)])
    .range([0, height]);

d3.select('#viz').append('svg')
  .attr('width', width)
  .attr('height', height)
  .style('background', '#C9D7D6')
.selectAll('rect').data(bardata)

.enter().append('rect')
  .style('fill', '#C61C6F')

  .attr('width', barWidth)

  .attr('height', function (d) {
    return yScale(d);
  })

  .attr('x', function (d, i) {
    return i*(barWidth + barOffset);
  })

  .attr('y', function (d) {
    return height - yScale(d);
  })

