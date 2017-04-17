<!-- .slide: data-state="title" -->
# D3 
Queueing Selections

>> Speaker Notes:
We've been doing things on existing DOM elements. On a real project, you usually create these elements programmatically.  D3, lets you create a placeholder for the elements and then queue up commands for them.

---

# Sub-selections

<ul>
	<li class="fragment">`enter()`</li>
	<li class="fragment">Sub-selections</li>
	<li class="fragment">`exit()`</li>
</ul>

>> Speaker Notes:

The enter method changes the way the data method works. Once you use enter, you are no longer appending things to the current selection, you're placing them into something d3 calls a sub-selection. 

Once you use enter, you are no longer appending things to the current selection, you're placing them into a sub-selection, which allows us to isolate elements we want to work with and then act upon them.

If you need to exit that sub-selection, you can use exit.

Let's take a look at how enter allows you to create a simpler version of our table.

# Conclusion
Selecting things before they exist takes some getting used to, but learning to work with sub-selections is a critical skill when building complex d3 graphics.

```
var mydata = [
  { date: '3/31/2017', low: 87, high: 68 }, 
  { date: '04/01/2017', low: 64, high: 85 }, 
  { date: '04/02/2017', low: 65, high: 89 }, 
  { date: '04/03/2017', low: 69, high: 90 }, 
  { date: '04/04/2017', low: 65, high: 88 }
];

d3.select('tbody')
  .selectAll('tr')
  .data(mydata)
  .enter().append('tr')
  .html(function(d) {
    return  '<th scope="row">' + d.date + 
            '</th><td>' + d.low + 
            '</td><td>' + d.high + '</td>';
  });
```