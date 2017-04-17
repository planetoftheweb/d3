<!-- .slide: data-state="title" -->
# D3 
Basic Selections

>> Speaker Notes:
In order to do anything with D3, you'll need to learn how to select elements. D3 has it's own set of selection methods that are a lot like jQuery and Javascript selection methods. To get started, we'll look at how to make selections using the traditional DOM, which if you have some experience working with CSS, should be something you're familiar with.

---

# Selecting the DOM

<ul>
	<li class="fragment">DOM  Access</li>
	<li class="fragment">`select(STR)`</li>
	<li class="fragment">`selectAll(STR)`</li>
	<li class="fragment">`STR` CSS selectors</li>
	<li class="fragment">Chain action methods</li>
</ul>

>> Speaker Notes:

D3 comes with selectors for DOM elements. The DOM, is the Document Object Model, or the structure of any HTML page. If you've used CSS before, you should be familiar with how to target DOM elements by using CSS selectors.

There are two d3 methods for selecting DOM elements. The first is select and then a string of selectors. Select will choose thse first element in the DOM that matches the CSS selector string you specify.

SelectAll will return something like an array of elements. It's not exactly an array, but it works like one. Once you have a selection, it can be automatically acted upon by passing other D3 methods. One such method is the .text method which replaces the text of the element with whatever you type in there

The String is any CSS selector you're used to using to target element. So this is just like using querySelector or querySelectorAll in CSS or the $ sign selector in jQuery.

This only selects the elements, in order to do something with them, you'll need to use a variety of methods that D3 provides. The nice thing about d3 is that you can chain these selectors together to form complex commands. 

```	
d3.select(".temp").text("hot!");
d3.selectAll(".temp").text("hot!");
d3.selectAll(".day-high .temp").text("hot!");
d3.selectAll("tr:nth-child(1) .day-high .temp").text("hot!");
d3.selectAll("tr:nth-child(even) .day-high .temp").text("hot!");

```

Unlike with JavaScript arrays, the nth child selector is not 0 indexed, so element number 3 is the third element. This selector can be quite powerful when used together with d3.

# Conclusion
Selecting elements is one of the key principles of d3. The two d3 selection methods combined with CSS's own nth child selectors allows a laser like focus to get elements you want to act upon.
