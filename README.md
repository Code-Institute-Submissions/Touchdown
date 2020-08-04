# **<span><p style="text-align: center;">TOUCHDOWN</p></span>** <span><img height="150px" style="text-align: center" src="assets/images/winning.webp" alt="running cartoon"></span>
## Touchdown is a fun, user-friendly and interactive memory game created using HTML, CSS and Javascript. 
## The game encourages the user to memorise a sequence of flashing plays, and then click on the corresponding sequence. The game maintains a strong theme of American Football.

## As the user progresses they will gain points and attempt to complete all 10 rounds. The difficulty can be changed which will alter the speed in which the play-cards are shown.

### **Website/Game on GitHub Pages:** https://danielbradford.github.io/Touchdown/

### **Website/Game via QR Code** (Scan with device camera):
<img src="assets/images/qrcode.png" alt="QR Code">

### **Creation and Design**

### **Behaviour Driven Development vs Test Driven Development or Acceptance Test Driven Development**

For the creation of Touchdown, it was imperitive to focus on the the style of development. 
As the project is a game and it's success is highly dependant on the user experience it was evident that Behaviour Driven Development (**BDD**) was a priority.
This is because it is highly interactive and has much more variance within the parameters of the user experience.

According to <a href="https://dzone.com/articles/a-few-benefits-you-get-by-doing-bdd" alt="link to zone">D-ZONE</a>,The benefits of using BDD are:

* **High visibility** By using a language understood by all, everyone gets strong visibility into the project’s progression.
* **High business value** BDD puts great importance on the business value and needs. By setting priorities with the client, based on the value it provides, developers are able to provide a better result because they have a strong understanding of how the client thinks. By focusing on the value, no useless features are built.
* **The ubiquitous language**. As mentioned earlier, the ubiquitous language is understandable by all the members of the team, which reduces misconceptions and misunderstanding and makes it easier for new members to join the working process.
* **Software development meets user need** By focusing on the business’s needs, you get satisfied users, and that implies a happy business, of course. With BDD, as its name says, you focus on the behavior, which has a stronger impact than the implementation itself. 
* **More confidence from the developers' side** Teams using BDD are in general much more confident that they won’t break the code, and have better predictability when it comes to their work.
* **Lower costs** By improving the quality of the code, you are basically reducing costs of maintenance and minimizing the project’s risks.

Link:(https://dzone.com/articles/a-few-benefits-you-get-by-doing-bdd) 

### **UX - STRATEGY:**

The strategy of Touchdown as a game is to provide a fun and interactive game for the user to enjoy.
The strategy can be can be outlined in more detail by looking at the goals of the user and the provider which in this project are very similar.

**_BUSINESS GOALS OF GAME_**

- To provide a fun, interactive and enjoyable game to the user
- To encourage the user and be open to feedback about the game and how it can be improved.

**_USER GOALS OF GAME_**

- To play the game of Touchdown:
- To have fun
- To interact with the game
- To challenge themselves
- To enjoy their time playing the game
- To be updated on their progress
- To give feedback about the game and their experience

**_WHO IS THE USER?_**

- The ideal user for Touchdown:
  - Aged 4 +
  - Wants to play a fun game
  - Enjoys Memory Games
  - Likes American Football
  - Wants to improve their memory
  - Likes giving feedback

### **UX - SCOPE:**

After establishing the strategy for the website/game, the next thing to consider were the boundaries.
Staying within the realms of scope allowed a more realistic approach whilst incorporating targets and time pressures.

**What do the NEW users want?**

- New users of Touchdown want to know what the game is and how to play it.
- They want to have fun and interact with a game that will test their memory and update them on their progress in a fun and enjoyable way.

**What do the RETURNING users want?**

- Returning users may want to play the game but at a harder difficulty setting.

- The game meets the needs of clients looking for an enjoyable interactive gaming experience. This project has the potential to develop into a larger game with deeper complexity.
  For Example, Multi - Player (vs. Mode, Score/Leader board)

**USER STORIES**

1. As a new user of Touchdown, I want to easily navigate the site:
1. As a new user of Touchdown, I want to understand how to play the game.
1. As a new user of Touchdown, I want to select my preferred difficulty level.
1. As a new user of Touchdown, I want to give feedback to the creator and rate the game.
1. As a new user of Touchdown, I want to have fun with an interactive game.
1. As a user of Touchdown, I want to be updated on my progress in the game.
1. As a user of Touchdown, I want to know if i am losing.
1. As a user of Touchdown, I want to know if i am winning.
1. As a user of Touchdown, I want to know how many lives i have left.
1. As a user of Touchdown, I want to know how many points i have scored.
1. As a user of Touchdown, I want to know if i have completed the game.
1. As a user of Touchdown, I want to know if i have lost the game.

### **UX - STRUCTURE:**

The next plane to approach was Structure. What the game will do and and the external factors that might affect it.
This allowed an insight into the user experience and how a visitor gets from the start of the game to the end.

**Here is the link to the structural sitemap:**
<a  href="https://github.com/DanielBradford/Touchdown/blob/701a6d73c3e9e8e02a7deb3246667f04d6e02e18/assets/documents/wireframes/TOUCHDOWN%20SITEMAP.pdf" target="_blank">SITEMAP</a>

**What does the game do/ How does it work?**

- The user will be presented with buttons to start, restart or replay the game.
- There will be a grid of cards titled as 'play types' including Run, Rush, Kick and Pass.
- The game will flash/highlight one of four cards in a sequence.
- After the sequence has been displayed, the user must select the sequence in that exact order.
- If the user is correct, a success image and sound effect will play, the progress bar will update and they will proceed to the next round whilst gaining 3 points.
- If the user is wrong, an incorrect image and sound effect will play and they will lose 1 of 3 lives, lose 5 points and start again at round 1.
- If they reach round 10, a Touchdown image and sound effect will play and they will have completed the game and achieved 'TOUCHDOWN'. An alert box will then present them with their total points score. This is the points gained multiplied by number of lives remaining.

### **UX - SKELETON:**

The skeleton of this project was designed and established using Lucid Chart (https://www.lucidchart.com/).

- Although the mobile first method is recommended and heavily supported by bootstrap, i went via the desktop first approach to fully realise the initial game idea.
- In future, the mobile first method may be more suitable due to societies increase in mobile gaming activity.

### **Wireframe Designs**

#### **Desktop:**

- <a href="https://github.com/DanielBradford/Touchdown/blob/701a6d73c3e9e8e02a7deb3246667f04d6e02e18/assets/documents/wireframes/TOUCHDOWN%20-%20MAIN%20PAGE.pdf" target="_blank">Home / Main Game Page</a>
- <a href="https://github.com/DanielBradford/Touchdown/blob/701a6d73c3e9e8e02a7deb3246667f04d6e02e18/assets/documents/wireframes/SELECT%20DIFFICULTY%20MODAL.pdf" target="_blank">Select Difficulty Modal</a>
- <a href="https://github.com/DanielBradford/Touchdown/blob/701a6d73c3e9e8e02a7deb3246667f04d6e02e18/assets/documents/wireframes/HOW%20TO%20PLAY%20MODAL.pdf" target="_blank">How to Play Modal</a>
- <a href="https://github.com/DanielBradford/Touchdown/blob/701a6d73c3e9e8e02a7deb3246667f04d6e02e18/assets/documents/wireframes/CONTACT%20US%20MODAL.pdf" target="_blank">Contact Us Modal</a>

### **UX - SURFACE:**

The final element to consider was the surface plane of UX design. This is the look and feel of the website.
Below are some screen shots of the website:

## **Style / Theme**

- The theme of the game is American Football. In particular the offensive side of the game. This includes the play actions that allow a team to score points in a game.
- While maintaining this theme i made the follwoing stylistic choices:
  - Stadium Color Scheme: rgb(27, 143, 27), white and gold(#6f5306)
  - For the interactive elements i used brighter colours e.g. Buttons and flash/highlight function. This enhances the user experience and presents a more playful environment.
    Some colours were altered throughout during Accessibiltiy testing as some colours were not suitable in contrast to others.
  - The 2 fonts used were: Bungee Inline and Montserrat. <a href="https://fonts.google.com/specimen/Montserrat?query=mon&sidebar.open=true&selection.family=Bungee+Inline|Montserrat" target="_blank">MORE INFO HERE</a>
  - Bungee Inline gave a retro gaming style to the project and Montserrat complimented this in a more subtle style.
    All images and icons used are Amercian Football related and were sourced free and legally.
- Sound Effects and Audio clips used are all sports related and have been utilised to enhance the gaming experience for the user.
- They also convey auditory feedback of progress to the user.

## **Main Page**
<img src="https://github.com/DanielBradford/Touchdown/blob/master/assets/images/screenshots/ScreenshotMain.png" alt="screenshot of landing page">

## **Features**

### **Repeating Features**

### The following features are repeated across the game/website allowing a consistent design format for the user to feel comfortable and familiar;

**Header**

- **Title/Icon** is clearly displayed in a user-friendly and stylish format. On loading there is a short CSS animation. The football icon rotates until the game is started.
- **Menu/Navbar** is clear and accessible. When hovered over the links are highlighted in green and the cursor point changes accordingly. e.g. How to Play has a '?' cursor pointer.
  - Difficulty opens a modal that allows the difficulty level to be set.
  - How to Play? - Lists the rules and explaination of the game via a modal
  - Contact Us - Displays an email contact form (linked through Email.JS) for the user to submit.

**Main/Game Area**

- **Reset Button:** Reloads the page (User is reminded via an alert that progress will be lost)
- **Start Game Button:** starts the game
- **Replay Button:** Replays the current sequence (User is reminded via an alert that the replay will a cost -3 points.)
- **Play Action Cards:** Each card represents a different play option in American Football; Kick, Pass, Run and Rush. The cards will flash in a randomised sequence. Starting at one and building up to 10.

**Status information**

- **Round:** Displays the current round of the game
- **Lives:** Displays the amount of lives left using red heart icons (FontAwesome)
- **Points:** Displays the current total of points gained/lost

**Footer**

- **Social Media Icons:** These icons when clicked take the user (on a new page) to the corresponding website for that social media
- **Rate this game link:** This opens the contact us modal where the user can rate the game

### **Select Difficulty Modal**

<img src="https://github.com/DanielBradford/Touchdown/blob/master/assets/images/screenshots/ScreenshotSelectDifficulty.png" alt="screenshot of difficulty modal">

The user is invited to select the difficulty of the game.
The difficulty corresponds to the speed in which the cards are flashed.

**Rookie Radio Button** - This is the slowest/easiest setting. (_Default_)

**Veteran Radio Button** - This is the medium/average speed setting.

**MVP Radio Button** - This is the hardest/fastest speed setting.

Underneath is a brief explanation of the difficulty levels.

### **How To Play Modal**
<img src="https://github.com/DanielBradford/Touchdown/blob/master/assets/images/screenshots/ScreenshotHowToPlay.png" alt="screenshot of how to play modal">


**List of Instructions and Rules**

This is an ordered list of game instructions and rules. It explains how the game is played and what happens in each stage of the game.

### **Contact Us Modal**

<img src="https://github.com/DanielBradford/Touchdown/blob/master/assets/images/screenshots/ScreenshotContactUs.png" alt="screenshot of Contact Us modal">

**Data Entry Form** - This invites the user to enter their information and give feedback about the game.

  - First Name - This field is validated to ensure an entry is made.
  - Last Name - This field is validated to ensure an entry is made.
  - Email - This field is validated to ensure an entry is made and a valid email address is entered.
  - Star Rating - 5 stars can be selected to rate the game out of 5. (commit 35f956045f07541b8154fb4a6e01c196c59d62dc)
  - Text Area - For the user to write a brief feedback message about the game.

  **Close Button** - This button dismisses the modal.

  **Send Button** - This button holds an onclick function that enables the EmailJS API. This collects all of the inputted data and sends via email to the owner/creator. The completion and sending of this form gives the owner/creator user feedback on the game.

## API Development and Implementation:

Using the EmailJS API allowed me to provide a link of communication between the user and the creator. This channel allows for rating and feedback for the game which is detremental to future improvements and developments to the game and the site.

Here are the commit records for the EmailJS Implementation:

    commit 309f14518fcf47b6e3267aef3f7ba596c91e45ae
    Author: Daniel Bradford <danielbradford@hotmail.co.uk>
    Date:   Wed Jul 29 12:49:51 2020 +0000

    Send Email function added to use EmailJS API and include form input data

    commit afc1d56babffdb97b4a4189aeb4c39e7d7fc743a
    Author: Daniel Bradford <danielbradford@hotmail.co.uk>
    Date:   Wed Jul 29 12:48:19 2020 +0000

    Script added to enable EmailJS API

Here is a screenshot of the template created and utilised within the API:

<img src="https://github.com/DanielBradford/Touchdown/blob/d6edf4d6cb51f0949ef0f8914bc849cb3b1a76f5/assets/images/screenshots/ScreenshotEmailTemplate.png" alt="screenshot of EmailJS template">

Here is a screenshot of the method to test this template and funcionality of the API:

<img src="https://github.com/DanielBradford/Touchdown/blob/d6edf4d6cb51f0949ef0f8914bc849cb3b1a76f5/assets/images/screenshots/ScreenshotEmailTest.png" alt="screenshot of EmailJS test email">


## **Future Features**

- Scoreboard that records your score permanantly and compares with other players.
- Multi-player function for local play
- Currency system to pay to upgrade levels or buy back lives
- GDPR Compliance for information given by users in the form. A Legal requirement as well as user privacy.

## **Hardware Used**

- ### **MacBook Pro (Retina, 13-inch, Mid 2014)**

## **Technologies Used**

- ### **Gitpod** - https://gitpod.io/
- ### **HTML / HTML5**
  - Used to create the structure of the pages
- ### **CSS / CSS3**
  - Used to style the elements and customise layout. e.g. Color Schemes, design elements
- ### **Bootstrap Version 4 - 4.5**
  - Used mainly for responsive design and layout. Other elements used were Tables and Modals
- ### **Javascript (Incl. ES6)**
  - Used for logic and functionality of Touchdown
- ### **JQuery**
  - Used to enhance the interactivity
- ### **Font Awesome** - v5.10.0 https://fontawesome.com/
  - All icons used in this project were from Font Awesome
- ### **Lighthouse Analytics** (DevTools)
  - This was used to analayse the performance, accessiblity, best practices and SEO scores of the site.
- ### **WAVE** - https://wave.webaim.org/ (Accessibility Testing)

## **Testing**

### Please refer to <a href="https://github.com/DanielBradford/Touchdown/blob/master/testing.md" target="_blank">TESTING.md</a> for a full testing breakdown

## **Deployment**

This project was **developed** using a <a href="https://gitpod.io/" target="_blank">GITPOD IDE</a>, committed to git and pushed to <a href="https://github.com/" target="_blank">GitHub</a> using the built in terminal feature.

- To add:
  - git add "filename"
- To commit:
  - git commit "filename" -m "unique message for commit"
- To push:
  - git push

This project was **deployed** using GitHub Pages.

To deploy this page to GitHub Pages from its GitHub repository, the following steps can be taken:

1. Log into GitHub (https://github.com/DanielBradford).
1. From the list of repositories on the screen, select **DanielBradford/Touchdown**
1. From the menu items near the top of the page, select _**Settings**_
1. Scroll down to the _**GitHub Pages**_ section
1. Under Source click the drop-down menu labelled None and select _**Master Branch**_
1. On selecting Master Branch the page is **automatically refreshed**, the website is now deployed.
1. Scroll back down to the GitHub Pages section to _retrieve the link_ to the deployed website.
1. At the moment of submitting this Milestone project the Development Branch and Master Branch are identical.

### **To run locally:**

To clone this project from GitHub:

1. Follow this link to the <a href="https://github.com/DanielBradford/Touchdown" target="_blank">Project GitHub repository</a>.
1. Under the repository name, click **"Clone or download"**.
1. In the Clone with HTTPs section, copy the clone URL for the repository.
1. In your local IDE open Terminal/Git Bash.
1. Change the current working directory to the location where you want the cloned directory to be made.
1. Type git clone, and then paste the URL you copied in Step 3.
   - **e.g. "git clone https://github.com/DanielBradford/Touchdown"**
1. Press _**Enter**_. Your local clone will be created.
1. To cut ties with this GitHub repository, type git remote rm origin into the terminal.

**Further reading and troubleshooting on <a href="https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository" target="_blank">cloning a repository from GitHub here.</a>**

## **Credits**

- Unsplash for Images
- ZAPSPLAT for Audio Effects (https://www.zapsplat.com/)
- DLPNG for png files (https://dlpng.com/)
- Research for game logic in javascript:
    * Web Dev Junkie (https://www.youtube.com/watch?v=W0MxUHlZo6U)
    * Ania Kubow (https://www.youtube.com/watch?v=tjyDOHzKN0w)
- Inspiration and Structural guidance for the README.md file was taken from:
    * https://github.com/AJGreaves/portrait-artist/blob/master/README.md
    * https://github.com/Code-Institute-Solutions/StudentExampleProjectGradeFive/blob/master/README.md
