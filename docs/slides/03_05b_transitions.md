<!-- .slide: data-state="title" -->
# D3 
Transitions

>> Speaker Notes:
In D3, you create animations through something called transitions.

---

# Creating Transitions

<ul>
	<li class="fragment">`transition()` sets up</li>
	<li class="fragment">`duration()` control speed</li>
	<li class="fragment">`delay()` add time</li>
</ul>

>> Speaker Notes:

In their simplest form, a transition is a way of animating a selection.

There are a few other methods associated with transitions. For example, you can add a duration method that lets you modify how long the transition takes. By default, they will last 250 milliseconds.

You can also specify a delay, so that the transition doesn't start right away.


I want to animate the bars so that they appear individually. So, I'll also need to make some changes to make that happen.

    .attr('height', 0)
    .attr('x', function(d) {
      return xScale(d);
    })
    .attr('y', height)

 I'm also going to set this chart as a variable, so we can access the transition of the elements as they're built.

  var myChart = d3.select('#chart')

Now, underneath our current chart, we'll
  myChart.transition()

Now we can isolate what we want to change about our animation

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
     .ease('elastic')

# Conclusion
Including transitions adds a whole other level of fun and makes your charts come to live. It's already making our animation look even cooler.


```
var bardata = [];
    for (var i = 0; i<40; i++) {
      bardata.push(Math.random() * 15);
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

var myChart = d3.select('#viz').append('svg')
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
        .transition().duration(500)
        .style('fill', 'yellow')
    })

    .on('mouseout', function(d) {
      d3.select(this)
        .transition()
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
    .ease(d3.easeBounceOut);
    
```