d3.selectAll(".day-high .temp")
  .data([45, 78, 77, 66, 76])
  .html(function(d, i) {
    if(i==0) {
      return '<strong class="text-muted" style="font-size: 2rem">' + d + '</strong>';
    } else {
      if (d >= 77) {
        return '<strong class="text-danger">' + d + '</strong>';
      } else {
        return '<strong>' + d + '</strong>';
      }
    }
  })