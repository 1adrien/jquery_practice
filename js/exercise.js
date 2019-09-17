/**
 * Javascript/jQuery Exercises: Selecting Things In The DOM!
 * Answer the following questions.
 * Remember to 
 */

/**
 * Question 1:
 * When, button 1 is clicked, select all paragraphs on the page with jQuery, and changed the color to blue.
 */
 
 $('#button1').on('click', function(){
 	$('p').css('color', 'blue');

 });

/**
 * Question 2:
 * When button 1 is clicked, select all <h2> elements on this page, and change the text to say your name.
 */

$('#button1').on('click', function(){
 	$('h2').text('Adrien');

 });

/**
 * Question 3:
 * When button 1 is clicked, select the ordered list item that has the class "falseFact". 
 * Using jQuery change the content to read "True Fact".
 */

$('#button1').on('click', function(){
 	$('.falseFact').text('True fact');
 });

/**
 * Question 4: 
 * When button 2 is clicked, change the background color of the whole page to "pink"
 */

$('#button2').on('click', function(){
 	$('body').css('background-color','pink');
 });

/**
 * Question 5:
 * When button 2 is clicked, change the color of all h2's to "green"
 */

$('#button2').on('click', function(){
 	$('h2').css('color','green');
 });

/**
 * Question 6:
 * When button 2 is clicked, change the html content of all "blockquotes" to be "<span>no quote</span>"
 */

$('#button2').on('click', function(){
 	$('blockquote').html('<span>no quote</span>');
 });



/**
 * Question 7:
 * When button 3 is clicked, change the text in the header's h1 tag to read "jQuery Ninja"
 */

$('#button3').on('click', function(){
 	$('h1').text('jQuery Ninja');
 });

/**
 * Question 8:
 * Have the following code execute when button 3 is clicked. Write a JavaScript comment with a description of what happened. 
 * $('.city').attr('src', 'http://lorempixel.com/g/500/400/food');
 */

$('#button3').on('click', function(){
 	$('.city').attr('src', 'http://lorempixel.com/g/500/400/food'); // this changed the src attribute of the image with the class city to another image
 });

/**
 * Question 9:
 * When button 3 is clicked, select all paragraphs on the page and change the color to blue and font to Georgia.
 * Bonus: Try to do this with only one jQuery call. $('selector').css({'property': 'value', 'property': 'value'});
 */

$('#button3').on('click', function(){
 	$('p').css({'color': 'blue', 'font-family': 'Georgia'})

 });


 /**
 * Question 10 (BONUS):
 * When button 3 is clicked, perform any type of animation of the page.
 */

$('#button3').on('click', animatefirst() );


function animatefirst() {
	$('h1').animate({
 		"opacity":"0.3",
 		"font-size": "50px"
 	}, 2000, function(){
 		$('h1').prepend('Grant is Cool As A ');
 	});
}
