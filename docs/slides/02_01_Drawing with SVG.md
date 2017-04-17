<!-- .slide: data-state="title" -->
# D3 
Understanding SVGs

>> Speaker Notes:
Although d3 can handle and work with either HTML or SVG graphics, when you're working with d3, you'll often want to use SVG graphics instead of HTML. SVG stands for Scalable Vector Graphics and it definitely has some advantages, so let's dig into it.

---

# SVG Graphics

<ul>
	<li class="fragment">`HTML` shapes lacking</li>
	<li class="fragment">`XML` format</li>
	<li class="fragment">Style through `CSS`</li>
	<li class="fragment">Easy to create</li>
	<li class="fragment">Scriptable</li>
</ul>


>> Speaker Notes:

HTML is really good at letting us draw rectangles, and maybe circles, but not so good at other shapes. The main reason we pick SVG is because you can draw complex curves and shapes with an HTML-like language and that's our next point.

SVG is an XML based format...just like HTML so it also looks a lot like HTML. It uses beginning and ending tags, plus attributes so it's easy to read and write. If you're used to writing HTML, then SVG will be really easy to pick up.

This is really awesome, you can access DOM elements in SVG just like you would in CSS and apply CSS-like styles.

You can create complex SVG graphics with programs like Adobe Illustrator and then use them in your regular HTML pages.

This probably goes without saying or you probably wouldn't be reading this, but the interesting thing is not just that SVG graphics are scriptable, it's how easily they are scriptable using javascript. Since they are accessible using the same methods and properties as the rest of the DOM, you can attach events, animate them and do pretty much whatever you can do with javascript with an SVG graphic.

# Conclusion
Learning how to work with them in d3 is going to give you the tools to not just display SVG graphics, but make them fully interactive.
