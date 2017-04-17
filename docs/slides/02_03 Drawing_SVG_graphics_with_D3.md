<!-- .slide: data-state="title" -->
# D3 
Creating SVGs

>> Speaker Notes:
Creating a graphic using the XML format really teaches us how SVG draws things. D3 is going to make use of these graphics extensively, so let's take a look at how we could regenerate a few of our primitives using d3.

---

# Creating SVGs

<ul>
	<li class="fragment">Target DOM</li>
	<li class="fragment">`append()`  elements</li>
	<li class="fragment">`attr()`, `style()`, etc.</li>
</ul>

>> Speaker Notes:
Creating an SVG graphic is pretty easy. To get started, just create a  DOM element and use D3's selection methods to target that element.

Once you have that, you can use methods like append or insert to add items into that element.

The elements you add can be SVG elements like rects or circles or any other SVG element and you can use any of D3's methods like attribute or style to add properties, styles or classes to those elements.

# Introduction

d3.select('#chart')
	.append('svg')
		.attr('width', 600)
		.attr('height', 400)
		.style('background', '#93A1A1')
	.append("rect")
		.attr('x', 200)
		.attr('y', 100)
		.attr('height', 200)
		.attr('width', 200)
		.style('fill', '#CB4B19')
	.append('circle')
		.attr('cx', 300)
		.attr('cy', 200s
		.attr('r', 50)
		.style('fill', '#840043')


# Conclusion
We don't really need to go any further than this. The rest of the primitives or even more complicated graphics would be more of the same. In the real world, a lot of really complex D3 layouts are generated using these pretty simple commands and techniques.
