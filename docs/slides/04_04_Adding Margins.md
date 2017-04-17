# intro

To make our graphic look better, we'll have to take a look at how to add margins. You could try to figure this out by yourself, but there's actually a convention people use when working with d3 graphics and it works pretty well.

http://bl.ocks.org/mbostock/3019563

So, the way you do margins is to create a new object that hold the values and then adjust the margins of the rest of the graph.

```
  var temperatures = [],
      margin = { top: 0, right: 30, bottom: 30, left: 20 }
      height = 400 - margin.top - margin.bottom,
      width = 600 - margin.left - margin.right;
```

Then, we need to add these margins to where the chart is drawn.


```
  myChart = d3.select('#viz').append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height +  margin.top + margin.bottom)
    .append('g')
    .attr('transform',
      'translate(' + margin.left + ', ' + margin.top + ')')
```

Afterwards you need to move the graph, so you can do that with a transform command.

# conclusion
This margin convention makes it super easy to add guides to your existing chart.