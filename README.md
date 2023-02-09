# Assignment-2-ID--MengTeck--Haniel
# Insight.Com

Unleash your inner trivia master with Insight, the ultimate general knowledge quiz website. With four different categories, history, geography, sports, and food. You can put your general knowledge to the test in a fun and engaging way by challenging yourself. The best part of it, then? You can participate with others from across the globe and view your position on the scoreboard. Test your knowledge to discover how you compare to the rest of the world.

 
## Design Process
This website is for anyone that is keen to learn something new through fun trivia. We chose a minimalistic design that is easy to navigate and feel the neat and efficiency of the user experience. Choosing the Background of a mountain brings the clean and natural look into life. This website allows users to enlighten themselves about trivial facts about the world. The website sums it up into 4 different genres. Food , History, Geography and Sports. 4 general topics that at least one topic can spark an interest in digging deeper into insight. We chose the color palettes of White and brown. as well as orange, as a color to contrast the other colors.


Wireframes
- Normal: https://xd.adobe.com/view/d42337ff-2184-489f-85df-73f8bf0ab0d1-8170/
- Mobile: https://xd.adobe.com/view/b5e8c81d-a6cc-4056-90d9-792d30e7a75c-e0bb/
## Features
First we have the Homepage. It is a welcome page to Welcome users to Insight.com  Youll find the navbar and icons hoverable linking to their respective pages. A big button that says Browse to Browse for the topics available for trivia, and if user is on a wide screen they fill find shortcuts to the topics on the middle right of the screen. The homepage shows responsiveness as the width decreases. The shortcuts will eventually not be displayed and navbar will be hidden to a hamburger menu feature. that can easily access the navbar when clicked. this navbar concept is included in all pages

clicking on the browse page will result in changing to the Browse.html. the browse page has 4 cards on flexbox which holds the 4 different genres of trivia as well as a description to describe specifically what the topic is about. Each card has a button that will lead them to take the quiz (....quiz.html) all cards and buttons are hoverable. The page is also responsive flex wraping as the width of the screen shortens the background stays fixed and stuck to the screen as you scroll down. 

Quiz page is the page where the user will take the quiz. Having previously chosen a genre the genre will appear on the screen. with a Button(Start Quiz) to prompt the user to take to quiz once its clicked, The rules of the quiz will show. Prompting them to Conitinue or Exit the quiz which will lead them back to the Browse page. if Continued the quiz will commence. with a given Timer per qn. 
Timer will start as soon as Continue button is pressed. The Question will show and 4 possible answers will appear. User can click on an answer and if answer is correct it will indicate Correct with the answer turning green and a Next Button will appear prompting user to click for Next Question. If the answer clicked is wrong, the chosen answer will indicate itself Wrong with turning red and the correct answer will show so that the user will see the correct answer. if The timer runs out the correct answer will appear indicating that the person is out of time and has to move on to the next question. clicking the Next Question button will result in Changing question and resetting the timer. process is repeated till finishing all questions. 
Afterwards a result box will show informing user their score of the quiz. Score will be tallied and sent on a API to the leaderboard.
Exit button will appear to head back to browse page.



In this section, you should go over the different parts of your project, and describe each in a sentence or so.
 
### Existing Features
- Feature 1 - allows users X to achieve Y, by having them fill out Z
- ...

In addition, you may also use this section to discuss plans for additional features to be implemented in the future:

### Features Left to Implement
- Another feature idea

## Technologies Used

In this section, you should mention all of the languages, frameworks, libraries, and any other tools that you have used to construct this project. For each, provide its name, a link to its official site and a short sentence of why it was used.

- [JQuery](https://jquery.com)
    - The project uses **JQuery** to simplify DOM manipulation.


## Testing

For any scenarios that have not been automated, test the user stories manually and provide as much detail as is relevant. A particularly useful form for describing your testing process is via scenarios, such as:

1. Contact form:
    1. Go to the "Contact Us" page
    2. Try to submit the empty form and verify that an error message about the required fields appears
    3. Try to submit the form with an invalid email address and verify that a relevant error message appears
    4. Try to submit the form with all inputs valid and verify that a success message appears.

In addition, you should mention in this section how your project looks and works on different browsers and screen sizes.

You should also mention in this section any interesting bugs or problems you discovered during your testing, even if you haven't addressed them yet.

If this section grows too long, you may want to split it off into a separate file and link to it from here.

## Credits

### Content
- The text for section Y was copied from the [Wikipedia article Z](https://en.wikipedia.org/wiki/Z)

### Media
- The photos used in this site were obtained from ...

### Acknowledgements

- I received inspiration for this project from X
