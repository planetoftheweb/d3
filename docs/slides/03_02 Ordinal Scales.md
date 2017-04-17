<!-- .slide: data-state="title" -->
# D3 
Ordinal Scales

>> Speaker Notes:

Sometimes, the order of the data has a certain relevance to the type of information you need to plot, and d3 provides a number of ordinal scales to take care of that. Let's take a look.

---

# Using Ordinal Scales

<ul>
	<li class="fragment">Linear vs Ordinal Scales</li>
	<li class="fragment">`scaleBand()`</li>
	<li class="fragment">`padding()`, `paddingInner()`, `paddingOuter`</li>
	<li class="fragment">Properties: `bandwidth()`, etc </li>
</ul>

>> Speaker Notes:# Introduction

# Introduction
The difference between a linear and an ordinal scale is like the difference between an unordered list and an ordered list. When you have values that have some inherent order, you use an ordinal scale, so in a traditional bar chart, the horizontal axis is often used to compare some data over a period of time, so the relationship between the items.

D3 provides a number of different types of ordinal scales you can use to plot your data. The simplest is a band scale, and the method for using those is called scaleBand(). This method allows you to create regular bar charts from data.

Just like before we'll need to specify a domain and range, but then we'll need to also specify a couple of additional methods to control the spacing  in between our bars.

Once we set up our scale, we can use a some properties and methods available to control properties of the bars like the width of the bars with the  bandwidth() method.

For more information, check out the documentation for more info and some additional ordinal scales. https://github.com/d3/d3/blob/master/API.md#ordinal-scales

![](https://db.tt/hcce4er1ih "Ordinal Scales")

Alright, so lets do this. in this case our domain is going to be an array of values from 0 to how many values we want, which in this case is the length of our data array. d3 has its own range function to help us create that.

Rangebands allow you to visually space different values. It takes three values. First is the range of values you want to spread out the data in, then an optional space between the bars and some padding on each side. Let's just do the range for now.

To control the spacing between the tabs you add the two optional numbers. The first number is the padding in between. It's a ratio so it gets a number from 0 to 1, 0 meaning no padding, and 1 meaning 100% of the space available. .5 would make the padding equal to the width of the bars.

# Conclusion
Ordinal scales are really useful to set up content that requires and ordered relation.

```
var bardata = [12, 78, 45, 15];
var height = 400,
		width = 600,
		barWidth = 50,
		barOffset = 5;

var yScale = d3.scaleLinear()
		.domain([0, d3.max(bardata)])
		.range([0,height]);

var xScale = d3.scaleBand()
	.domain(bardata)
	.paddingInner(0.3)
	.paddingOuter(0.1)
	.range([0, width])

d3.select('#viz').append('svg')
	.attr('width', width)
	.attr('height', height)
	.style('background', '#C9D7D6')
.selectAll('rect').data(bardata)
	.enter().append('rect')
		.style('fill', '#C61C6F')
		.attr('width', function(d) {
			return xScale.bandwidth();
		})
	.attr('height', function(d) {
		return yScale(d);
	})
	.attr('x', function (d) {
		return xScale(d);
	})
	.attr('y', function (d) {
		return height - yScale(d);
	})
```