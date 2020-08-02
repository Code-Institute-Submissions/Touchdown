## **Testing**

HTML VALIDATION - https://validator.w3.org/

- All HTML written in this project has been submitted for validation via the above software.
- ALL pages returned the vaildation that "Document checking completed. No errors or warnings to show."

CSS VALIDATION - https://jigsaw.w3.org/css-validator/

- All CSS written in this project has been submitted for validation via the above software.
  <img src="https://github.com/DanielBradford/bamboo-fitness/blob/master/assets/images/TESTING%20SCREENSHOTS/CSS%20-%20Validation.png" alt="CSS Validation">

### **Client Story Testing:**

1. As a new user of Touchdown, I want to easily navigate the site, so I can can understand how to play the game.
1. As a new user of Touchdown, I want to easily navigate the site, so I can can select my preferred difficulty level.
1. As a new user of Touchdown, I want to easily navigate the site, so I can give feedback to the creator and rate the game.
1. As a new user of Touchdown, I want to have fun with an interactive game.
1. As a user of Touchdown, I want to be updated on my progress in the game.
1. As a user of Touchdown, I want to know if am losing.
1. As a user of Touchdown, I want to know if am winning.
1. As a user of Touchdown, I want to know how many lives i have left.
1. As a user of Touchdown, I want to know how many points i have scored.
1. As a user of Touchdown, I want to know if i have completed the game.
1. As a user of Touchdown, I want to know if i have lost the game.

## Logical Testing (MANUAL) of all functions and elements:

### **MAIN GAME PAGE**

  - **TITLE and ICON**
    1. Verify the sizing of the box adjusts from desktop > tablet > mobile and that no over flow distorts the layout:
       - _During testing i decided to remove the wing (stadium) images from mobile to allow more space.
  - **MENU / Navigation Bar** 
    1. Verify that the sizing of the navigation bar adjusts with screen size changes:
        
        * I made the navaigation menu condense for both tablet and mobile screen sizes.* 
    2. Verify that the menu drops down and that the menu text is clear and visible.
    
        * I had difficulties during testing but found a method to make this work_ 3. Hover over the navigation links and verify the CSS styling changes
        * Some styling choices were changed during testing due to accessbility/contrast issues* 4. Click on each of the navigation links and verify that it takes the user to the corresponding pages
        * During testing i found the home button did not function. This issue was corrected_ 5. Repeat verification of functionality and responsiveness on my mobile phone and tablet.

  - **"Restart" Button**
  1. Hover on button to verify CSS styling causes color change to allow user to see selection before clicking 
  1. Click button to verify the enquiry form is displayed via a modal.

  - **"Start Game" Button**
  1. Hover on button to verify CSS styling causes color change to allow user to see selection before clicking 
  1. Click button to verify the enquiry form is displayed via a modal.

  - **"Replay" Button**

  1. Hover on button to verify CSS styling causes color change to allow user to see selection before clicking 
  1. Click button to verify the enquiry form is displayed via a modal.

  - **Enquiry Form**
    1. Click "Send" with empty input fields to verify the form will NOT submit and reminds the user the inputs need to be made
    2. Purposely enter an INVALID email address in email input to verify the form validation reminds user to enter VALID email address.
    3. Click Send with VALID inputs to verify the form window closes at completion.
    4. Click Close button to verify the pop-up window closes correctly.
    5. Verify the form is visible and functional in tablet and mobile.
  - **Footer**
    1. Hover over the icons to verify the hover color change is applied
    2. Click each of the Social Media Icons and verify the user is taken to the corresponding websites.
    3. Verfiy the icons are visible
       - During testing i altered the color of the icons to give a higher contrast rating to make them more visible
    4. Hover over each social media icon and confirm colour and size transitions expected.
    5. Click "Return to Top" link to verify the user is returned to top of current page.
    6. Reduce and expand width of window to verify that the footer is responsive and looks good on all device widths.

## Jasmine Testing (AUTOMATED) of Javascript Functions:

## Development Issues:

### POINTER EVENT CONTROL (during gameplay)

    commit 255cbc605fe96a4320d8d8084ce720001d1d239b
    Author: Daniel Bradford <danielbradford@hotmail.co.uk>
    Date:   Sun Jul 26 15:00:51 2020 +0000

    User pointer events blocked while main function is called. prevents cheating or confusion.

## LOGIC ISSUES WITH JAVASCRIPT:
    commit 2a0035f71ad0828a2789474837eea568c3756962
    Author: Daniel Bradford <danielbradford@hotmail.co.uk>
    Date:   Tue Jul 28 15:42:37 2020 +0000

    Selection/answer comparisson bug fixed. Full restart to the begining prevents issues with selection matching answer.

## RESPONSIVE DESIGN
    commit 715d250faa712b8b097e42bdb1cecf2542b2a080
    Author: Daniel Bradford <danielbradford@hotmail.co.uk>
    Date:   Wed Jul 29 18:42:43 2020 +0000

    Stylistic changes to layout, font and image sizes matching responsive design needs

## ACCIDENTAL FOLDER DELETION
During the development the screenshots folder in images was accidentally deleted. 
This was then recovered using GIT CHECKOUT (commit number) -- (path):

<img src="https://github.com/DanielBradford/Touchdown/blob/master/assets/images/screenshots/ScreenshotGitCheckout.png" alt="Git Checkout Screenshot">


## **Development Tools Testing**

From using the technologies of Wave and Lighthouse i was able to check the performance and accessiblity of the website. By utilizing this in DevTools i was able to generate reports for both desktop and mobile.
By analysing these rerports i was able to make alterations in both the HTML and CSS code to improve the accessiblity of the site.

**Performance**

- In initial reports the website had an average Performance rating of **74**.
- I changed changed the appropriate .jpg & .png files into webp format to minimise memory usage and speed up loading and rendering times.
- I streamlined the style.css file to lessen the data being loaded. (commit 988437bcb814fe1235dfb5ecc33d9eae2832bae2)
- By making these changes the current Performance rating is now (on average) **89**

**Accessibility**


- In initial reports the website had an average Accessibility rating of **84**
- I altered color schemes of text vs. background to maximise the contrast score allowing information to be more visible to a wider group of users with accessiblity issues.
- I resized icons and images to make them more visible
- I re-assessed background image choices for their contrast score (commit aaec109f844de9865edeea2d8415630d683557d9)
- By making these changes the current Performance rating is now (on average) **100**

**Best Practices**

- In initial reports the website had an average Best Practices Score of **88**
- I added meta tags, alt a and aria labels (commit c8e0752bba88a3db1f15b682f667785c412515bb)
- By making these changes the current Best Practices rating is now (on average)**100**

**Search Engine Optimisation**

- In initial reports the website had an average SEO rating of **98**
- I added in some META tags to give more information about the websites content and creator.
- By making these changes the current SEO rating is now **100**

**DESKTOP REPORT SCREENSHOTS**
Lighthouse Desktop Reports:

- Home/Landing Page:
  <img src="https://github.com/DanielBradford/Touchdown/blob/add9281d8914e3c58c0033b89eedf4051eb55c43/assets/images/screenshots/LighthouseScreenshot.png" alt="MAIN GAME Page - LIGHTHOUSE REPORT">

## Further Testing

I completed further testing by asking family and friends to play the game and give me feedback.
This stage of testing allowed me to understand a more realistic client/user impression of the game and guided me to altering some stylistic choices. e.g. bigger text in places and more breathing space between elements.
