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
Afterwards a result box will show informing user their score of the quiz. Score will be tallied and sent on a API PATCH Request to the leaderboard.
Exit button will appear to head back to browse page.



In this section, you should go over the different parts of your project, and describe each in a sentence or so.
 
### Existing Features

(ALL pages)
Features1 - Responsive navbar with the use of Hamburger menu that slides a vertical navbar across the screen when clicked.


(Homepage)
Feature1 - Shortcut cards to the quiz topics. This allows users to click a topic of interest alr from the home page (not available in Mobile view)
Feature2 - Browse button that leads to the browsing trivia page. 

Feature3 - Navbar is hoverable and leads to different pages of the website 

(Browse page)
Feature1 - Cards are responsive with button to take them to the quiz topic 

(Quiz Page)
Feature1 - Playable quiz With timer and scorekeeper. 
Feature2 - When answer is clicked it will indicate green and when answer is wrong it will indicate red 
Feature3 - Next button to go to next question
Feature4 - If timer runs out user cant select question hence allows user experience to be more fun and entertaining 
Feature5 - Orange line that represents the timer to have a feel when time is running out 
this allows better user experience as they dont have to look at the timer they can see where the line is
Feature6 - Once quiz is done score is tallied to show user what they scored. Scored will be sent through a PATCH request API to update the person's score. Users can keep track of the highest scores. Only if they are logged in to the websit
Logged off users will play anonymously and will not end up at the leaderboard.

(Leaderboard page)
Feature1 - Displays the objects from the database as well as their highest score.
Feature2 - Lottie animations next to header. develop sense of achieivement.
Feature3 - scores can be updated or new users can be implemented and posted to the leaderboard 
leaderboard will reflect the number of objects in the DB





- Feature 1 - allows users X to achieve Y, by having them fill out Z
- ...

In addition, you may also use this section to discuss plans for additional features to be implemented in the future:

### Features Left to Implement
- Another feature idea

## Technologies Used
- used jquery for login and sign up validation. https://jquery.com/  
- used restdb to store login details and score for the quiz to diplay the leaderboard. https://restdb.io/
- used lottie animation to show Sign up successful. https://lottiefiles.com/web-player?lottie_url=https%3A%2F%2Fassets2.lottiefiles.com%2Fpackages%2Flf20_niyfyoqs.json
In this section, you should mention all of the languages, frameworks, libraries, and any other tools that you have used to construct this project. For each, provide its name, a link to its official site and a short sentence of why it was used.

## Testing

For any scenarios that have not been automated, test the user stories manually and provide as much detail as is relevant. A particularly useful form for describing your testing process is via scenarios, such as:

1. Contact form:
    1. Go to the "Contact Us" page
    2. Try to submit the empty form and verify that an error message about the required fields appears
    3. Try to submit the form with an invalid email address and verify that a relevant error message appears
    4. Try to submit the form with all inputs valid and verify that a success message appears.
1. Sign Up form: 
    1. Go to the "Sign up" page
    2. Try to submit the empty form, an error message about the required fields appears
    3. Try to submit the form with an invalid email address and verify that a relevant error message appears
    4. Try to type password and re enter password, if password word does not match. error message will show
    5. when trying to input less than 8 characters for password, en error will appear
    6. When email does not have @, an error message will appear.
    7. Try to submit the form with all inputs valid and verify that a success message appears.
1. Sign in form:
    1. Go to the "Login" page
    2. Try to submit the empty form and verify that an error message about the fields will appear.
    3. Try to submit the form with an invalid username or password, an error message will appear
    4. Try to submit the form with all inputs valid and verify that a success message appears.
    5. If password is less than 8 characters, error message will appear.
In addition, you should mention in this section how your project looks and works on different browsers and screen sizes.

You should also mention in this section any interesting bugs or problems you discovered during your testing, even if you haven't addressed them yet.
-normalize.css does not work as intended so we removed from some of the html pages.
If this section grows too long, you may want to split it off into a separate file and link to it from here.

## Credits

### Content
- The text for section Y was copied from the [Wikipedia article Z](https://en.wikipedia.org/wiki/Z)

### Media
- The photos used in this site were obtained from ...

### Acknowledgements

- I received inspiration for this project from X
