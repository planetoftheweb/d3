d3.selectAll("tr:nth-child(4) .day-high")
  .append('span')
  .html('hot')

  // .style('background', 'red')
  // .style('padding', '3px')
  // .style('margin-left', '3px')
  // .style('border-radius', '3px')
  // .style('color', 'white')

  .classed('label label-danger', true)
  .classed('label-danger', false)
  .classed('label-warning', true)
  .style('margin-left', '3px')

d3.select('h2 span')
  .classed('small', false)

d3.selectAll('tr')
  .insert('td', ':first-child')
  .append('input')
  .attr('type', 'checkbox')
  .property('checked', true)