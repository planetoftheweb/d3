<!-- .slide: data-state="title" -->
# D3 
Attributes &amp; CSS

>> Speaker Notes:
In addition to appending, inserting and removing HTML you can also control any HTML attributes within your selections. You can use this to style your selections with CSS you've pre-written. This is so important in d3 that it provides a few special methods to take care it, so lets take a look.

---

# Modifying Attributes &amp; CSS

<ul>
	<li class="fragment">`style()` CSS Styles</li>
	<li class="fragment">`classed()` toggle classes</li>
	<li class="fragment">`attr()` any attribute</li>
	<li class="fragment">`property()` any property</li>
</ul>

>> Speaker Notes:

# Introduction

Style, of course, lets you add style attributes, which would be the same as using the style tag in html.

Classed allows you to toggle classes on and off, so if an element already had a number of classes, you can ask for d3 to turn a class on or off.

Attribute lets you access any attribute, not just classes.

Finally property lets you access a property, most of the time, it work just like attribute.



```
d3.selectAll("tr:nth-child(4) .day-high")
  .append('span')
  .text(' ')
  .append('span')
  .html('hot')

//  .style('background','red')
//  .style('padding','3px')
//  .style('color','white')
//  .style('border-radius','5px')

  .classed('label label-danger', true)

  .classed('label-danger', false)
  .classed('label-warning', true)
  ;

d3.select('h2 span')
  .classed('small', false)

d3.selectAll('tr')
  .insert('td',':first-child')
  .append('input')
  .attr('type', 'checkbox')
  .property('checked', true)
```

# Conclusion
D3 provides lots of methods for working with HTML properties and attributes...plus a few ways of managing your styles.
