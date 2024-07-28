## Project Introduction
### Garden Flower Defense
### Description

 An exciting and strategic tower defense game designed for users of all ages. The primary goal of this project is to provide an entertaining platform where players can test their strategic planning and defensive skills to protect their garden from waves of pests.
Objective=Create an interactive, easily navigable, and fun tower defense game using HTML, CSS, and JavaScript.

## Motivation and Inspiration
### Motivation 

Offer a fun and interactive way for people to engage in strategic thinking. The project aims to fill the niche of enjoyable and intellectually stimulating content by combining traditional tower defense elements with modern web-based interactivity.
Inspiration=Popular tower defense games like "Plants vs. Zombies" and classic strategy games.

## Background Information

### Background

Tower defense games are popular for recreational and educational purposes, yet many existing games lack engaging interfaces or adaptive difficulty levels. "Garden Flower Defense" offers a fresh take by leveraging web technologies for a responsive and dynamic user experience.

## Development 

### Enemy Pathing

I had issues where the enemy pathing would not work and when i tried to use random roads it would make the roads look weird and sometimes would spawn multiple roads so you would notknow what road to use. I also had issues where the road would not spawn all together.

![alt text](<Road not loading issue.PNG>) ![alt text](<img/Road not loading issue.PNG>)


### Solution

After some research I found a program called Tiled, would we let me create my own map using free assets of a website called itch.io. This Allowed me to create my own path and using waypoints which was being used before, but make it based off my own map. Which made the enemies follow the path flawlessyly making the game looks better

### Animation 

I wanted a bird to be the enemy, so I used a crow I found on itch.io and made the script so that the bird would look like it is flying. Which I think adds to the over immersion of the game. I also used the same code to create an explosion like effect when the flower shot at the enemy, to give the game a more finished look.

![alt text](<Crow.PNG>) ![alt text](<img/crow.png>)

![alt text](<Crow.PNG>) ![alt text](<img/explosion.png>)



## How I intended and how it turned out


![alt text](<Crow.PNG>) ![alt text](<img/Menu Wireframe.PNG>)
![alt text](<Crow.PNG>) ![alt text](<img/Menu Wireframe.PNG>)

The menu I wanted to keep nice and simple with a help pop out explaining on what to do and also a background of the map the game takes place on. I added the zoom out feature to make the menu look more professional and engaging. I also added some background music to get the user my engaged. 

All in all I think that the menu turned out what I wanted it to look lik. If I had more time I would have added a mute button for the music, as some users might not have liked it.

![alt text](<Crow.PNG>) ![alt text](<img/Game Wireframe.PNG>)
![alt text](<Crow.PNG>) ![alt text](<img/Game.PNG>)

I wanted the user to get right into the action, so the game starts straigh away. I also wanted to keep the interface nice and simple with the the coins and seeds being to the right and the send score at the button.

I think that this simple design looks great and with the added featers of the crop being animated and the explosion. It has turned out really good.


## Project Scope and Limitations
### Scope

Development of the web-based game focusing on usability and accessibility.
Limitations=Game Balance: Balancing the difficulty and progression of the game can be challenging and may require continuous adjustments based on user feedback. Browser Compatibility: While efforts have been made to ensure cross-browser compatibility, some features may not work optimally on all browsers.

## Problem Statement
### Problem

Address the lack of engaging, strategic tower defense games that are both challenging and accessible. Many existing games either become repetitive quickly or do not adequately cater to users with different skill levels.

## Bugs
The game interface has several issues related to styling, functionality, and integration of background images and emojis. The key problems include:
1. CSS Styles Not Being Picked Up:
   - The menu background image does not display correctly.
   - The zoom-out animation for the background image causes formatting issues.
2. Hearts and Coins Emojis Not Displayed Correctly:
   - The health and money display is not showing the heart and coin emojis properly.
3. Game Over Condition:
   - The game over functionality is not correctly implemented.

## Steps to Reproduce
1. Open the main menu.
2. Observe the background image and zoom effect.
3. Start the game and observe the health and money display.
4. Trigger the game over condition and observe the game over behavior.

## Expected Behavior
1. The background image should display correctly with a smooth zoom-out effect.
2. The heart and coin emojis should be displayed correctly next to the health and money values.
3. The game should display "GAME OVER" and show the email form when health reaches zero.

## Actual Behavior
1. The background image does not display correctly.
2. The heart and coin emojis are missing or not displayed properly.
3. The game over behavior is not functioning as intended.

## Fixes
CSS Styles Not Being Picked Up=Problem: The background image does not display correctly, and the zoom-out animation causes formatting issues.
Solution=Update the CSS to ensure the background image displays correctly and the zoom-out animation works smoothly.

## Testing 

I used W3schools to validate the code and Github enterprise for the java code. I also used Google Chromes and Microsoft edge Deve tools

![HTML Validation](<img/HTML Validation.PNG>)

![CSS Validation](<img/CSS validation.PNG>)



## Functional Testing

|Function|On platform|Works good| Fails|
|--------|-----------|----------|------|
|Logotype to home|browsers *| Yes |      |
|nav Home|browsers * |Yes|      |
|nav Gallery| browsers * |Yes |      |
|nav Contact |browsers *|Yes|      |
|Wiki-link in tips on index |  browsers *|Yes |      |
|<h4>The footer social-media links</h4>|
|X|browsers *|Yes||
|Instagram|browsers *|Yes||
|Facebook|browsers *|Yes||
Browsers *: Google Chrome, Oprah, Firefox, Microsoft Edge.
-----------------------------------
## Deployment


- The site was built on gitpod and deployed to GitHub pages.



Live site adress: [Garden Flower Defence](https://markus96.github.io/Garden-Shield-Defense/)

-----------------------------------

## Credits 

-I got the idea for the responsive navigation bar using W3S [Responsive Navigation bar](https://www.w3schools.com/howto/howto_js_topnav_responsive.asp)

-The slide show I got support from W3S [W3S Slide show](https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+CSE101+2/courseware/be0e510a3aca4bccb6e0bba4cf7cf06b/d533998456514d97a88ce691537e00a6/)

-The form I got support with from the love running Code institute [The Code Institute Responsive Form](https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+CSE101+2/courseware/be0e510a3aca4bccb6e0bba4cf7cf06b/d533998456514d97a88ce691537e00a6/)

-The pop up newsletter I got help from W3S  [How TO - Popup](https://www.w3schools.com/howto/howto_js_popup.asp)

-----------------------------------

## Conclusion
The "Garden Flower Defense" project successfully creates an engaging and strategic tower defense game designed to challenge and entertain players of all ages. By combining elements of traditional tower defense gameplay with modern web technologies, the project aims to offer a dynamic and interactive experience.

Despite the project's achievements, several issues have been identified that impact the overall user experience. These include problems with CSS styling, emoji display, and the implementation of the game over functionality. Addressing these issues is crucial for enhancing the game's visual appeal and ensuring a smooth and enjoyable gameplay experience.

The identified problems, such as the incorrect display of background images and emojis, as well as the malfunctioning game over condition, highlight areas where further refinement and debugging are needed. By focusing on resolving these issues, the project can better meet its goal of providing a seamless and immersive gaming experience.

Overall, "Garden Flower Defense" has the potential to stand out in the realm of web-based tower defense games. With ongoing improvements and adjustments, it is well-positioned to deliver a compelling and fun interactive experience that engages players and tests their strategic skills.