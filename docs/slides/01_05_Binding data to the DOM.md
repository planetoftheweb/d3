<!-- .slide: data-state="title" -->
# D3 
Binding Simple Data

>> Speaker Notes:
Now that we have a good understanding of how selections, content and attributes, it's time to add some data to the mix. Data can be added in a number of ways, but in this video, I'll show you the simplest way to add simple information using using the data method.

---

# Modifying Attributes &amp; CSS

<ul>
	<li class="fragment">`data()` joins data</li>
	<li class="fragment">Callback access</li>
	<li class="fragment">Index available</li>
</ul>

>> Speaker Notes:

The data method joins the current selection with some information.
The data method takes an array of elements. Normally, the first piece of data is assigned to the first element, the second one to the second element and so on and so forth.

You can pass the data to a function or a callback. This function can inherit the data passed down to it.

In addition to the data, you also have access to an index, which can be used as well as the data to manage what D3 is doing.

# Conclusion
The data method is quite powerful. Being able to bind data to DOM elements is one of the things that make D3 and excellent visualization library.

```
var mydata = [45, 60, 85, 90, 77, 60];

d3.selectAll(".day-high .temp")
  .data(mydata)
  .html(function(d, i) {
    if (i==0) {
      return '<strong class="text-muted" style="font-size: 2rem">' + d + '</strong>';
    } else {
      if (d >= 78) {
        return '<strong class="text-danger">' + d + '</strong>';
      } else {
        return '<strong class="text-success">' + d + '</strong>';      
      }
    }
  });


