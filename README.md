# History buff quiz #

The history buff quiz is a light-hearted quiz testing the users knowledge of some well-known and perhaps some not so well know facts on history. It is intended for entertainment and educational purposes. The quiz covers many topics in history such as the Russian Soviet era, Henry VIII's reign, the Roman empire and American political history.  

This project was built for the purpose of the project 2 submission for the Code Institute full stack software development diploma. This project is still under development.

The site can be found [here](https://bgcg.github.io/project2/).

## UX ##

### Audience ###

For users who want to test their History knowledge and learn more about historical facts. 

### User goals ###

* Current user goals: To remember these historical facts by repitions through the games. Due to the randomisation of questions with each gameplay, the user will have a high probability of seeing at least a few new questions with each gameplay. 

* New user goals: To test their knowledge on history and have some fun with it.

### Accessibility ###

Dark text is overlayed on a white background or light text overlayed on dark background to enhance readability of the text. The image used for the backgrounnd image for decorative purposes only.

### Responsive design ###

This game was built with repsonsive design in mind using media queries to make it compatible for screen sizes of various smartphones, tablets, laptop and desktop.

## Design ##

### Imagery ###

The quiz has a background of ruins of a castle to represent the subject of the quiz.

### Color Scheme ###

 Dark tones (grey and black) used to represent the perhaps lack of colors of items in the past. 


### Typography ###

Laila font was used for the answer, next, start and restart buttons as it has a appearance reminisent of old scripts of historial texts. 
I used Alexandria font as the header and question elements as this gives a slight contrast with Laila, emphasising this is a light-hearted quiz, although perhaps about serious subjects in history. 

## Features ## 

**Start button:**

The start button is clickable and takes you to the first question.

**Question display:** 

The question is displayed with four options, when the button is clicked it will alert the user whether their response was wrong/invalid. A description below the option buttons will display the right answer with a small explaination. 

The questions are randomised when the game starts which means at every game play event there is a high probability that the user will be present with some new questions.

**Clickable interactivity:** 

When the option buttons are clicked they will turn green and change text to 'Correct!' when the question is answered correctly or the button will turn red and display the text 'Wrong' when the answer is incorrect. 

**Next:**

The next button when clicked will display a new question with four options. The color of the buttons will be refreshed to white. 

**Refresh:**

After 5 questions, a page will come up with a restart button so the user can restart the game if they wish - which will take them back to the start page. 

## Testing ##
 
### Troubleshooting and optimisation ###

The main areas that required the most troubleshooting and optimisation in this project was constructing the loops to iterate through each question. To iterate through the question I initially had a for loop to iterate through the questions which had an inner forEach loop to iterate through the options. The for loop was critical to the functionality of the forEach loop as the forEach loop would reference the iterator specified in the for loop. Unfortunately this caused some issues such as the loop repeating many times in the gameplay, ultimately resulting in the browser crashing (even though I had specified an end point conditional). Therefore, I had to opt for a different approach whereby I preserved the forEach for the questions but took away the for loop and created a global 'i' variable that I would use throughout the code and would be iterated and have a controlled stop point as determined by an if conditional statement in the showNextQuestion function regulating the number of iterations. I believe as in each question presented we also need to iterate through the options which add the number of looping that occurs which mean I need to set my end point to 20 to iterate through 5 questions to account for the increased number of loops. 

### Key points ###

* Passed through HTML validator and no errors were found
* Passed through CSS validator and no errors were found
* Tested on Javascript JShint quality control tool 
* Generated a lighthouse report using Dev Tools which yielded an excellent accessibility score
* I confirm that the feedback alerted to the user is correct (i.e. question correct answers are accurate)
* I confirmed that this quiz looks good in multiple devices using Chrome Developer tools 

## Debugging ##

My quiz background image wasn't appearing intially - I found removal of the intial '/' in the path in the url() in the background image selector in the css code solved this issue. Further troubleshooting of bugs will be discussed in the 'troubleshotting and optimisation' in the testing section. 

## Deployment ##

This site is hosted on GitHub pages by adhering to the following steps; 

* Go to settings in project repositry
* Click on pages 
* Set branch to 'main' 

The site can be found [here](https://bgcg.github.io/project2/).

## Technologies used ##
 
* HTML
* CSS 
* Javascript

### Libraries and frameworks ###

* Google fonts for fonts Laila and Alexandria 
* Am I responsive for the screenshots in the introduction to this README
* Jshint Javascript validator 
* Jigsaw CSS validator 
* W3C HTML validator
* The web hosting service GitHub was used to deploy this site

## Credits ##

### Content ###

When starting this project, I sought some inspiration on how to approach how to build an online quiz. I found the youtube video from [Web Dev Simplified](https://www.youtube.com/watch?v=riDzcEQbX6k&t=1172s) very informative on how to approach building an online quiz. I took a different approach in a multiple areas but did use the following code to randomise the questions: `sortQuestions = questions.sort(() => Math.random() - 0.5);`. 

My main areas of troubleshotting were the iteration through the options to make the correct options appear in the button elements. I found the [stack overflow](https://stackoverflow.com/questions/23177484/how-to-loop-through-questions) post really helpful and the following [youtube video](https://www.youtube.com/watch?v=RswgVWKJRLM) iterate through options; which advised using the .forEach method of iterating through each element. In the troubleshooting and optimisation above I descirbed opting for a different approach to using a for loop where declared a global `i` variable for my iteration - I found this [stack overflow](https://stackoverflow.com/questions/23177484/how-to-loop-through-questions) post in helping me achieve this. 

To select all my option buttons I made use of the querySelectorAll selector; I found the [folkstalk](https://www.folkstalk.com/2022/09/event-listener-to-elements-with-class-with-code-examples.html) post helpful in learning how to use this selector.  

When the user moved to the next question, I wanted the button to refresh its color back to white (as if you user clicked on the button it would either be red or green and stay that way through the game unless I refreshed it. I found the following post helpful on [bobbyhadz](https://bobbyhadz.com/blog/javascript-change-button-color-onclick) helpful in me achieving this.

When the quiz ended I wanted the page to refresh when the user pressed the 'Restart' button. I found the following [stack overflow](https://stackoverflow.com/questions/29884654/button-that-refreshes-the-page-on-click) post helpful. 

### Images ### 

The background image was provided by [pexels.com](https://www.pexels.com/photo/grayscale-photo-of-brick-building-9480102/) taken by the contributor Lisa Fotios.

### People ###

For my mentor for her feedback and tutor support at code institute for pointers on how to solve specific issues with the code. My fiance Benjamin Bland, who studied History at University, for input into good questions to use in the quiz and to check to ensure they were accurate. 

