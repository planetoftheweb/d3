<!-- .slide: data-state="title" -->
# D3 
Events

>> Speaker Notes:
Events are an integral part to building interactivity, so d3 provides its own way of handling events. That allows it to monitor events in places it needs to, like selections. You call events with the on methods and then using traditional javascript event calls.

---

# Managing Events

<ul>
	<li class="fragment">`on(EVT)` handler</li>
	<li class="fragment">`mouseout`, `mouseover`, etc.</li>
	<li class="fragment">Modify properties</li>
	<li class="fragment">Target with`this`</li>
</li>
</ul>

>> Speaker Notes:

https://github.com/mbostock/d3/wiki/Selections#on

  .on("mouseover", function(d) {
    d3.select(this)
      .style('opacity', .5)
  })

  .on("mouseout", function(d) {
    d3.select(this)
      .style('opacity', 1)
  })

Changing the color is pretty easy,

  var tempColor;

  .on('mouseover', function(d) {
    tempColor = this.style.fill;
    d3.select(this)
      .style('opacity', .5)
      .style('fill', 'yellow')
  })

  .on('mouseout', function(d) {
    d3.select(this)
      .style('opacity', 1)
      .style('fill', tempColor)
  })

# Conclusion
Events are pretty easy to understand, so I'm not going to go much further than this. We'll have other opportunities to work with events in later movies. By the way, if you're curious about JavaScript events in general, make sure you checkout my course JavaScript: Events
