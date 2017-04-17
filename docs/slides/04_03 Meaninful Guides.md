<!-- .slide: data-state="title" -->
# D3 
Simple Guides

>> Speaker Notes:
A guide in d3 provides a way to show meaningful information next to your chart.

---

# Creating a Guide

<ul>
	<li class="fragment">Regular scales</li>
	<li class="fragment">`axisTop`, `axisRight`, 		`axisBottom`, `axisLeft `</li>
	<li class="fragment">Tick methods</li>
	<li class="fragment">Group elements</li>
</ul>

>> Speaker Notes:

- To create a guide you create a scale just like you did for the bars and although most of the time the data you send to the scale is similar, sometimes it has to be modified a bit.
 
- Next you'll need to use one of the methods for defining in what position your scale should go.

- Once you have a scale, you define how the tickmarks will work inside that scale with a number of methods. To learn 
 
- You'll also need to make sure your chart is in a group and that your ticks are separate from that group as well.
 

  yScale = d3.scaleLinear()
    .domain([0, d3.max(temperatures)])
    .range([0,height]);
...
```
  yAxisValues = d3.scaleLinear()
    .domain([0, d3.max(temperatures)])
    .range([height, 0]);

  yAxisTicks = d3.axisLeft(yAxisValues)
    .ticks(10)
```

```
  myChart = d3.select('#viz').append('svg')
    .attr('width', width)
    .attr('height', height)
    .append('g')
```

```
  yGuide = d3.select('#viz svg').append("g")
    .attr('transform', 'translate(20, 0)')
    .call(yAxisTicks)
```
  myChart.transition()


## Conclusion
Simple guides are helpful and help your charts make more sense. D3 provides a number of methods that take care of building them. If you want to learn more about guides. Take a look at this URL https://github.com/d3/d3/blob/master/API.md#axes-d3-axis in the D3 documentation.