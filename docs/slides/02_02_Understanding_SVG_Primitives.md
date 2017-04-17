<!-- .slide: data-state="title" -->
# SVG 
Primitives

>> Speaker Notes:
The most basic shapes in any graphic languages are called primitives, so let's take a look at how we can create graphics using the basics.

---

# Creating Primitives

<ul>
	<li class="fragment">`<svg>` tag</li>
	<li class="fragment">Use `style` declarations</li>
	<li class="fragment">`rect`, `circle`, `line`, `text`, `polyline` </li>
	<li class="fragment">`g` creates groups</li>
	<li class="fragment">`xlink:href` create instance</li>
</ul>

>> Speaker Notes:



# Introduction

To create an SVG graphic, you can use the SVG tag, which looks just like any other HTML tag. Just like any other tag, you can assign this tag attributes and typically for a graphic, you specify the width and height of our canvas.

Just like with any other HTML tag, we can add a style attribute, which will let us control how it looks.

The main primitives are rect, for rectangles, circle for ovals and circles, line, text, and the poly line primitive, which creates a polygon.

You can also group elements by using the G tag and you can assign a group an ID so that you can refer to it later.

If you want to refer to reuse an element with an id, you can use the xlink href attribute, which lets you create an element that is a copy

# Conclusion
 If you know HTML, drawing things with SVG is really not a big deal. The main thing is to learn the right tags, attributes and special styles. You can do that at [this URL](https://developer.mozilla.org/en-US/docs/Web/SVG).

```
<svg width="600" height="400"
  style="background: #93A1A1;">

	<line x1="0" y1="200" x2="600" y2="200"
		style="stroke: #268BD2; stroke-width:40px;" />

	<rect
		x="200" y="100"
		width="200" height="200"
		style="fill: #CB4B19;" />

	<circle cx="300" cy="200" r="50"
		style=" fill: #840043;" />

	<text x="10" y="390"
		font-family="sans-serif"
		font-size="25"
		fill="white">SVG graphics</text>

	<g id="triangle">
		<polyline points="10 35, 30 10, 50 35"
		style=" fill: #F7B330;"/>
	</g>

	<use xlink:href="#triangle" x="30" y="0"
		style="fill: #cfc;" />
</svg>
```