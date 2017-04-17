# Introduction
Let's improve our bar graph to highlight our temperatures a bit better.

    .domain(temperatures)
    .paddingInner(.3)

  colors = d3.scaleLinear()
    .domain([0, 65,
              d3.max(temperatures)])
    .range(['#FFFFFF',
            '#2D8BCF',
            '#DA3637'])

      .attr('fill', colors)

        tooltip.html(
          '<div style="font-size: 2rem; font-weight: bold">' + d + '&deg;</div>'
        )

      .on('mouseout', function(d) {
        tooltip.html('')

# Conclusion
By making the colors track our temperatures, we've created a chart that is more meaningful and we've also improved things by changing the HTML for our rollovers.