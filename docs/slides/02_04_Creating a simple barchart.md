<!-- .slide: data-state="title" -->
# D3 
Creating SVGs

>> Speaker Notes:
Now that we've learned how to work with SVG, it's time to create a more realistic project using what we've learned so far.

---

# Sub-selections

<ul>
	<li class="fragment">Target DOM</li>
	<li class="fragment">`append()`  elements</li>
	<li class="fragment">`attr()`, `style()`, etc.</li>
</ul>

>> Speaker Notes:

We're going to start with our default template that links to the CSS and javascript file and we'll start by declaring a new array called bardata. We'll put some sample information in there.

  var bardata = [ 20, 30, 45, 15 ];

Now, lets go ahead and append an svg graphic to our graphic id.

  d3.select('#graphic').append('svg')

and we'll add some attributes

	.attr('width', 600)
	.attr('height', 400)
	.style('background', '#93A1A1')

Now, we'll create a rectangle that uses our data

  .selectAll('rect').data(bardata)
  .enter().append('rect')

Excellent, we'll add a class of bar to each of the rects

	.style('fill', '#C61C6F')

Alright now, lets go ahead and give them a width

		.attr('width', 50)

For the height, lets use the values in the data like we've done before.

    .attr('height', function (d) {
      return d;
    })

Now we need to position these, we can use the x and y position attributes, but we'll need to offset them for each of our pieces of data. Lets start with the y first, since its easier.

Since we set the width of each bar to 50, we need to make sure each of the values is at least 50 plus some offset to put space in between the bars.


  .attr('x', function (d, i) {
    return i*55;
  })

You know that when we use a function, we can get each piece of data from our array by passing it to the function. We're using this D variable here to pass it,  if you add another argument, then d3 automatically passes the index of the array and we can use that to set our offset.

As you can see, right now our data is appearing from the top. The reason for that is the weird y coordinate system that happens in computers. We're used to seeing a coordinate system that starts with a 0, 0 position on the bottom left. But computers have a coordinate system that have a 0,0 on the top left. So we have to reverse things.

	.attr('y', function (d) {
		return 400-d;
	})


# Conclusion
Now our graphic looks right and it has some data. There's a lot of ways we could improve this though, so lets pick that up in the next video

```
var bardata = [ 20, 30, 45, 15 ];
var height = 400,
		width = 600,
		barWidth = 50,
		barOffset = 5

d3.select('#graphic').append('svg')
	.attr('width', width)
	.attr('height', height)
	.style('background', '#C9D7D6')
.selectAll('rect').data(bardata)
.enter().append('rect')
	.style('fill', '#C61C6F')
	.attr('width', barWidth)
	.attr('height', function (d) {
		return d;
	})
	.attr('x', function (d, i) {
		return i*(barWidth + barOffset);
	})
	.attr('y', function (d) {
		return height - d;
	})
```