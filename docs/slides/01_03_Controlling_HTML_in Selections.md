<!-- .slide: data-state="title" -->
# D3 
Modifying Elements

>> Speaker Notes:
Although selecting content is important, but it's what you do with it that makes an impact. So lets take a look at some of the methods that allow you to act upon content.

---

# Modifying Selections

<ul>
	<li class="fragment">`text()` modify text</li>
	<li class="fragment">`html()` modify html</li>
	<li class="fragment">`append()` appends elements</li>
	<li class="fragment">`insert()` inserts elements</li>
	<li class="fragment">`remove()` deletes elements</li>
</ul>

>> Speaker Notes:
We've already seen the text element, which is the simplest way to change the text of an element, but doesn't allow you use HTML, so if you need to do that you'll need to use the HTML method, which lets you use complex tags better.

The append method lets you add another element to the last child of the current selection. 

The insert method is a bit more precise, it allows you to add an element to a more specific position within the selection.


# Introduction


```
d3.selectAll("tr:nth-child(even) .day-high .temp")
  .html('<strong class="text-danger">hot</strong>');
```

So if we wanted to add a span at the end of the first item, we could do it like this:

```
d3.selectAll("tr:nth-child(1) .day-high")
  .html('<strong class="text-danger">hot</strong>')
  .append('span')
  .html(' today');
```

If you want to add an element at a certain position in a selection, you can use the insert method instead of append. This method will insert an element, but it also takes a second parameter that lets you specify where it goes.

```
d3.selectAll("tr:nth-child(1) .day-high")
  .html('<strong class="text-danger">hot</strong>')
  .insert('span',':first-child')
  .html('today ');
```

The second parameter can be something like first-child, nth-child or just a tag. If the selector you specify doesn't match anything, then it works just like append.

Of course, if you can append and insert, you can also remove. To do that, you first use one of the select methods to target and element and then use remove to take it out.

```
  d3.selectAll("tr:nth-child(5)")
 	 .remove();
```

# Conclusion
Mastering HTML within selections is another way to control how d3 does its magic. There's just a few methods to master, but like with a lot of things, it's a good idea to spend some time practicing how it works because they might not always do what you expect them to do. You can more information about all of d3's selection methods at this URL

https://github.com/d3/d3/blob/master/API.md#modifying-elements