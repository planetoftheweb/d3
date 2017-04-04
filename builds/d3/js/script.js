d3.selectAll("tr:nth-child(1) .day-high .temp")
  .html("<strong>hot</strong>")
  .insert('span', 'strong')
  .html('today ');

  d3.selectAll('tr:nth-child(3)')
    .remove();