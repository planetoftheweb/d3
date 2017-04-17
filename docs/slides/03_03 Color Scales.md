# Introduction
Right now, our chart uses a single color and sometimes, that's perfectly acceptable, but d3 has a few functions that can help us use color to make our data a little more meaningful.

Lets start by making the height of our data be more meaningful by mapping it to a range of colors. We can do that by creating a scale that works with color values.

var colors = d3.scale.linear()
    .domain([0, d3.max(bardata)])
    .range(['#FFB832', '#C61C6F']);

  .attr('fill', function(d) {
		return colors(d);
	})

If you want to make horizontal position of the bar meaningful, you can modify the colorscale so that it uses the number of elements in our data as the domain

var colors = d3.scale.linear()
    .domain([0, bardata.length])
    .range(['#FFB832', '#C61C6F']);

And then use the index of the color.

  .attr('fill', function(d, i) {
		return colors(i);
	})

If we want to create a more colorful list we can modify our scale to add more values.

var colors = d3.scale.linear()
    .domain([0, bardata.length*.33, bardata.length*.66, bardata.length])
    .range(['#B58929','#C61C6F', '#268BD2', '#85992C']);

You can use the values there to spread the values out.

So we can see these a bit better, lets modify our data so that the bardata array generates a bunch of random information.

var bardata = [];
for (var i = 0; i < 100; i++) {
    bardata.push(Math.random() * 30);
}

I think this table will look nicer without the background so lets get rid of it.

  .style('background', '#C9D7D6')



# Conclusion
The ability to control how color works in our barchart makes it no just more visually appealing, but also more informative.
