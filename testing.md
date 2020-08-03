# **<p style="text-align: center;"> Testing <i class="fa fa-cogs"></i></p>**

HTML VALIDATION - https://validator.w3.org/

- All HTML written in this project has been submitted for validation via the above software.
- ALL pages returned the vaildation that "Document checking completed. No errors or warnings to show."

CSS VALIDATION - https://jigsaw.w3.org/css-validator/

- All CSS written in this project has been submitted for validation via the above software.
  <img src="https://github.com/DanielBradford/bamboo-fitness/blob/master/assets/images/TESTING%20SCREENSHOTS/CSS%20-%20Validation.png" alt="CSS Validation">

### **Client Story Testing:**

1. As a new user of Touchdown, I want to easily navigate the site:

   - The navigation menu, displayed in the top-right corner of the screen, allows the user to navigate throughout the site.

   <img src="https://github.com/DanielBradford/Touchdown/blob/b46fa48f7d303a42bab270d5c04126052526b47d/assets/images/screenshots/ScreenshotMenu.png" alt="screenshot of navigation menu">

1. As a new user of Touchdown, I want to understand how to play the game.

   - When "How to Play" is selected, the user is presented with a modal containing a list of instructions and rules for the game:

   <img src="https://github.com/DanielBradford/Touchdown/blob/master/assets/images/screenshots/ScreenshotHowToPlay.png" alt="screenshot of Contact Us modal">

1. As a new user of Touchdown, I want to select my preferred difficulty level.

   - When "Difficulty" is selected, the user is presented with a modal containing 3 options to be selected. Each one corresponding to an increasing difficulty:

    <img src="https://github.com/DanielBradford/Touchdown/blob/master/assets/images/screenshots/ScreenshotSelectDifficulty.png" alt="screenshot of difficulty modal">

1. As a new user of Touchdown, I want to easily navigate the site, so I can give feedback to the creator and rate the game.

   - When "Contact Us" is selected, the user is presented with a modal containing a data submission form. They can use this to rate the game and give feedback via an EmailJS API.

   <img src="https://github.com/DanielBradford/Touchdown/blob/master/assets/images/screenshots/ScreenshotContactUs.png" alt="screenshot of Contact Us modal">

1. As a new user of Touchdown, I want to have fun with an interactive game.

   **In Game Play (Card flashing):** When the Start Game button is clicked, the cards flash in a random sequences which progresses each round.
   When the card 'flashes' its border changes to a gold color and then stops. A sound effect is also played. (ping.mp3)

   <img src="https://github.com/DanielBradford/Touchdown/blob/master/assets/images/screenshots/ScreenshotFlash.png" alt="screenshot of in game play">

   This was tested personally and professionally.
   I played the game and found it personally enjoyable. I also introduced the game to family and friends to gain feedback on the game.
   Below are some quotes on the game feedback:

   "_Fun and playful_" - anon (**4/5 stars**)

   "_Happy and light but challenging on faster difficulty setting_" - anon (**4/5 stars**)

   "_Easy but fun_" - anon (**3/5 stars**)

1. As a user of Touchdown, I want to be updated on my progress in the game.

   **In Game Play (Progress Status):** The users game progress is displayed using a progress bar (Bootstrap) and round counter. As they progress the bar fills up in yellow and the round count increases. (Correct answer = 10% progression)
   This is the screenshot of the progress bar:
   <img src="https://github.com/DanielBradford/Touchdown/blob/97cbac45363df0b1bd73f32c25363abbfa6004bc/assets/images/screenshots/ScreenshotProgressBar.png" alt="screenshot of progress bar">
   This is the screenshot of the Round Count display:
   <img src="https://github.com/DanielBradford/Touchdown/blob/97cbac45363df0b1bd73f32c25363abbfa6004bc/assets/images/screenshots/ScreenshotRoundStatus.png" alt="screenshot of round count">

1. As a user of Touchdown, I want to know if am losing.

   **In Game Play (Wrong Answer):** If the user answers incorrectly a negative sound effect (boo.mp3) is played and a cartoon cross is displayed on the screen (losing.webp).
   This is the screenshot of when the user answers incorrectly:

   <img src="https://github.com/DanielBradford/Touchdown/blob/master/assets/images/screenshots/ScreenshotWrong.png" alt="screenshot of wrong answer">

1. As a user of Touchdown, I want to know if am winning.

   **In Game Play (Correct Answer):** If the user answers correctly a positive sound effect (woo.mp3) is played and a cartoon image is displayed on the screen (winning.webp).
   This is the screenshot of when the user answers correctly:

   <img src="https://github.com/DanielBradford/Touchdown/blob/master/assets/images/screenshots/ScreenshotCorrect.png" alt="screenshot of correct answer">

1. As a user of Touchdown, I want to know how many lives i have left.

   **In Game Play (Lives Status):** During the game the number of lives is clearly displayed below the game play area.
   The lives are symbolised with red hearts. 1 heart = 1 life. This is the screenshot of full lives:

   <img src="https://github.com/DanielBradford/Touchdown/blob/master/assets/images/screenshots/ScreenshotLivesStatus.png" alt="screenshot of lives status">

1. As a user of Touchdown, I want to know how many points i have scored.

   **In Game Play (Points Status):** During the game the current points count is clearly displayed below the game play area (lower right corner).
   The points increase by 3 per round and decrease by 5 when the user answers incorrectly. This is the screenshot of the points display:
     
   <img src="https://github.com/DanielBradford/Touchdown/blob/97cbac45363df0b1bd73f32c25363abbfa6004bc/assets/images/screenshots/ScreenshotPointsStatus.png" alt="screenshot of points status">

1. As a user of Touchdown, I want to know if i have completed the game.

   **In Game Play (TOUCHDOWN):** If the user completes all 10 rounds, a positive sound effect (touchdown.mp3) is played and a cartoon image is displayed on the screen (touchdown.webp).
   This is the screenshot of when the user completes the game:

   <img src="https://github.com/DanielBradford/Touchdown/blob/122f20513a4b31a5538974972bde423468500f47/assets/images/screenshots/ScreenshotTouchdown.png" alt="screenshot of touchdown">

1. As a user of Touchdown, I want to know if i have lost the game.
**In Game Play (GAME OVER):** If the user fails to win, a negative sound effect (gameOver.mp3) is played and an alert box is displayed on the screen.
This is the screenshot of when the user fails to win:

<img src="https://github.com/DanielBradford/Touchdown/blob/122f20513a4b31a5538974972bde423468500f47/assets/images/screenshots/ScreenshotGameOver.png" alt="screenshot of gameover">

## Logical Testing (MANUAL) of all functions and elements:

### **MAIN GAME PAGE**
This is the main landing page the user sees when the screen has loaded. An intro sound plays on loading (intro.mp3).

<img src="https://github.com/DanielBradford/Touchdown/blob/master/assets/images/screenshots/ScreenshotMain.png" alt="screenshot of main page">

### **TITLE & ICON**

**Test**: 
Verify the sizing of the box adjusts from desktop > tablet > mobile and that no over flow distorts the layout:
    
**Expectation**:
CSS Key Frames Animation should initiates
Ball Icon in title should continue rotating until game is started.

**RESULT**:    
* Through testing the bootstrap settings and media queries were modified to improve this.
* CSS Key Frames Animation initiates
* Ball Icon in title continues rotating until game is started.

### **MENU / NAVIGATION Bar**

1. Verify that the sizing of the navigation bar adjusts with screen size changes:
     - I made the navigation menu adapt to all screen sizes. For mobile a hamburger button is used. 
1. Verify that the menu drops down and that the menu text is clear and visible.
     - I had difficulties during accessbility testing but found a color to make this work.
1. Hover over the navigation links and verify the CSS styling changes
     - Some CSS styling choices were changed during testing due to accessbility/contrast issues
1. Click on each of the navigation links and verify that it opens the corresponding modals
     - During testing i found all links to modals worked correctly.
1. Repeat verification of functionality and responsiveness on my mobile phone and tablet.

### **Contact Us / Feedback Form** 
1. Click "Send" with empty input fields to verify the form will NOT submit and reminds the user the inputs need to be made 2. Purposely enter an INVALID email address in email input to verify the form validation reminds user to enter VALID email address. 3. Click Send with VALID inputs to verify the form window closes at completion. 4. Click Close button to verify the pop-up window closes correctly. 5. Verify the form is visible and functional in tablet and mobile. ## EmailJS API Testing:
    
### **"Restart" Button**

1. Hover on button to verify CSS styling causes color change to allow user to see selection before clicking
1. Click button to verify the restart check is initiated.
   - A confirmation box should be displayed to confirm the user wants to restart and reminds them all progress will be reset.

   RESULT:
     <img src="https://github.com/DanielBradford/Touchdown/blob/d71fa5712e62d9da2bad03a39e57a57d1c4c1d63/assets/images/screenshots/ScreenshotRestart.png" alt="screenshot of restart check">
1. Click the ok button to verify the game is restarted:
    EXPECTATION:
    - status displays should reset and update
    - Restart sound should play
    - Arrays/Sequences should reset
    - Ball Icon should continue rotating

    RESULT: 
   - All status displays are reset and updated.
   - Restart sound is played (restart.mp3)
   - All game sequences/arrays are reset
   - Ball Icon in title continues rotating

### **"Start Game" Button**

1. Hover on button to verify CSS styling causes color change to allow user to see selection before clicking
   - All styles are correct and corresponding with the CSS styles set
1. Click button to verify the game starts.
   - The game starts on the click of this button and all pointer actions are stopped and started in the correct places.
   - The cards individually flash for the user to remember.
   - RESULT:
     <img src="https://github.com/DanielBradford/Touchdown/blob/d71fa5712e62d9da2bad03a39e57a57d1c4c1d63/assets/images/screenshots/ScreenshotFlash.png" alt="screenshot of card flashing">

### **"Replay" Button**

1. Hover on button to verify CSS styling causes color change to allow user to see selection before clicking
1. Click Replay button to verify the replay confirmation box is presented to the user.
   * RESULT:
   <img src="https://github.com/DanielBradford/Touchdown/blob/d71fa5712e62d9da2bad03a39e57a57d1c4c1d63/assets/images/screenshots/ScreenshotReplay.png" alt="screenshot of replay confirmation">
1. Click confirm button to verify the current game sequence is replayed.


### **Footer**
  1. Hover over the icons to verify the hover color change is applied
  2. Click each of the Social Media Icons and verify the user is taken to the corresponding websites.
  3. Verfiy the icons are visible
     - During testing i altered the color of the icons to give a higher contrast rating to make them more visible
  4. Hover over each social media icon and confirm colour and size transitions expected.
  5. Click "Return to Top" link to verify the user is returned to top of current page.
  6. Reduce and expand width of window to verify that the footer is responsive and looks good on all device widths.

## Jasmine Testing (AUTOMATED) of Javascript Functions:

## API Development, Implementation and Testing:
Using the EmailJS API allowed me to provide a link of communication between the user and the creator. This channel allows for rating and feedback for the game which is detremental to future improvements and developments to the game and the site.

Here is a screenshot of the template created and utilised within the API:

<img src="https://github.com/DanielBradford/Touchdown/blob/d6edf4d6cb51f0949ef0f8914bc849cb3b1a76f5/assets/images/screenshots/ScreenshotEmailTemplate.png" alt="screenshot of EmailJS template">

Here is a screenshot of the method to test this template and funcionality of the API:

<img src="https://github.com/DanielBradford/Touchdown/blob/d6edf4d6cb51f0949ef0f8914bc849cb3b1a76f5/assets/images/screenshots/ScreenshotEmailTest.png" alt="screenshot of EmailJS test email">

Here is a screenshot of an examplary email recieved:

<im src="https://github.com/DanielBradford/Touchdown/blob/12bb437a1a9056353f53a23729e9ae428a7c84ea/assets/images/screenshots/ScreenshotEmailRecieved.png" alt="screenshot of email recieved through EmailJS API">


## Development Issues / De-bugging:

### **POINTER EVENT CONTROL** (during gameplay)

During the development of the game it was evident the user could still select cards, and click on buttons during the game.
This created bugs in the gameplay. This was resolved by controlling the pointer events during gameplay. Git commit record below:

    commit 255cbc605fe96a4320d8d8084ce720001d1d239b
    Author: Daniel Bradford <danielbradford@hotmail.co.uk>
    Date:   Sun Jul 26 15:00:51 2020 +0000

    User pointer events blocked while main function is called. prevents cheating or confusion.

### **LOGIC ISSUES** (JAVASCRIPT)

During the development of the logic.js file, there were bugs/issues with the logic of the game.
The initial plan was to start with 3 lives. If the user answered incorrectly they would remain on the same round but lose one life.
This concept of remaining on the same round had issues within the game logic.
After re-analysing the game design and user stories i simplified the logic and introduced a points system.
If the player was incorrect, they would lose a life, start at round one and lose 5 points.
This concept eliminated the issue and resolved the bug. Git commit record below:

    commit 2a0035f71ad0828a2789474837eea568c3756962
    Author: Daniel Bradford <danielbradford@hotmail.co.uk>
    Date:   Tue Jul 28 15:42:37 2020 +0000

    Selection/answer comparisson bug fixed. Full restart to the begining prevents issues with selection matching answer.

### **RESPONSIVE DESIGN** (Bootstrap and Media Queries)

As in any project, responsive design is an extremely important factor.
I used a combination of Bootstrap features and Media Queries to ensure the game is responsive on all screen-sizes.
Git commit below:

    commit 715d250faa712b8b097e42bdb1cecf2542b2a080
    Author: Daniel Bradford <danielbradford@hotmail.co.uk>
    Date:   Wed Jul 29 18:42:43 2020 +0000

    Stylistic changes to layout, font and image sizes matching responsive design needs

### **ACCIDENTAL FOLDER DELETION** (Git)

During the development of the game, the screenshots folder in images was accidentally deleted.
This was then recovered using GIT CHECKOUT (commit number) -- (path):

<img src="https://github.com/DanielBradford/Touchdown/blob/master/assets/images/screenshots/ScreenshotGitCheckout.png" alt="Git Checkout Screenshot">


### **SELECT DIFFICULTY BUG**

During the development of the select diffculty feature there were issues in getting the user selection to be applied to the game. This took a combination
of modifying the logic.js file and the html elements in index.html.

    commit b53f510d86955dd13dbf71073a55140c3edbddb5
    Author: Daniel Bradford <danielbradford@hotmail.co.uk>
    Date:   Wed Jul 29 11:39:43 2020 +0000

    Fixed difficulty selection bug and added a modal to the menu options


## **Development Tools Testing**

From using the technologies of Wave and Lighthouse i was able to check the performance and accessiblity of the website. By utilizing this in DevTools i was able to generate reports for both desktop and mobile.
By analysing these rerports i was able to make alterations in both the HTML and CSS code to improve the accessiblity of the site.

**Performance**

- In initial reports the website had an average Performance rating of **74**.
- I changed changed the appropriate .jpg & .png files into webp format to minimise memory usage and speed up loading and rendering times.
- I streamlined the style.css file to lessen the data being loaded. (commit 988437bcb814fe1235dfb5ecc33d9eae2832bae2)
- By making these changes the current Performance rating is now (on average) **91**

**Accessibility**

- In initial reports the website had an average Accessibility rating of **84**
- I altered color schemes of text vs. background to maximise the contrast score allowing information to be more visible to a wider group of users with accessiblity issues.
- I resized icons and images to make them more visible
- I re-assessed background image choices for their contrast score (commit aaec109f844de9865edeea2d8415630d683557d9)
- By making these changes the current Performance rating is now (on average) **100**

**Best Practices**

- In initial reports the website had an average Best Practices Score of **88**
- I added meta tags, alt tags, and aria labels (commit c8e0752bba88a3db1f15b682f667785c412515bb)
- By making these changes the current Best Practices rating is now (on average)**100**

**Search Engine Optimisation**

- In initial reports the website had an average SEO rating of **98**
- I added in some META tags to give more information about the websites content and creator.
- By making these changes the current SEO rating is now **100**

**Lighthouse Desktop Report:**
<img src="https://github.com/DanielBradford/Touchdown/blob/master/assets/images/screenshots/LighthouseScreenshot.png" alt="MAIN GAME Page - LIGHTHOUSE REPORT">

## Further Testing

I completed further testing by asking family and friends to play the game and give me feedback.
This stage of testing allowed me to understand a more realistic client/user impression of the game and guided me to altering some stylistic choices. e.g. bigger text in places and more breathing space between elements.
