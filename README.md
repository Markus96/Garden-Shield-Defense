Rationale
Project Introduction
"Garden Shield Defense" is an exciting and strategic tower defense game designed for users of all ages. The primary goal of this project is to provide an entertaining platform where players can test their strategic planning and defensive skills to protect their garden from waves of pests.

The primary objective of this project was to create an interactive, easily navigable, and fun tower defense game using HTML, CSS, and JavaScript.

Motivation and Inspiration
The motivation behind creating "Garden Shield Defense" stems from the desire to offer a fun and interactive way for people to engage in strategic thinking. In today's digital age, finding enjoyable and intellectually stimulating content is crucial. This project aims to fill that niche by combining elements of traditional tower defense games with modern web-based interactivity.

The aim was to create a defense game that provides a new, enjoyable, and challenging interactive experience, offering features unique to "Garden Shield Defense," such as customizable garden layouts and various types of defensive plants.

I drew inspiration from popular tower defense games like "Plants vs. Zombies" and classic strategy games, aiming to create a game that not only entertains but also challenges players' strategic planning abilities.

Background Information
Tower defense games have always been a popular pastime for both recreational and educational purposes. However, many existing digital tower defense games lack engaging interfaces or adaptive difficulty levels that keep users motivated. Recognizing the potential to innovate in this space, "Garden Shield Defense" was conceived to offer a fresh take on tower defense games by leveraging web technologies to create a responsive and dynamic user experience.

The development of "Garden Shield Defense" took around 8 weeks, with a significant portion of the time spent on navigation and plant placement mechanics. Due to the game layout being intricate and interaction-heavy, I wanted to ensure smooth gameplay and intuitive controls.

What initially seemed like a straightforward project presented unforeseen challenges, requiring innovative solutions and extensive research.

Project Scope and Limitations
The scope of the project includes the development of the web-based game with the aforementioned features, focusing on usability and accessibility. Known limitations include:

Game Balance: Balancing the difficulty and progression of the game can be challenging and may require continuous adjustments based on user feedback.

Browser Compatibility: While efforts have been made to ensure cross-browser compatibility, some features may not work optimally on all browsers.

Problem Statement
The primary problem that "Garden Shield Defense" aims to address is the lack of engaging, strategic tower defense games that are both challenging and accessible. Many tower defense games either become repetitive quickly or do not adequately cater to users with different skill levels. Additionally, there is a need for games that can be easily played within a web browser without extensive setup or downloads.

Proposed Solution
"Garden Shield Defense" proposes a web-based tower defense game with the following key features:

Customizable Garden Layouts: Players can design their garden defense layout, adding a layer of strategy to the game.

Diverse Plant Defenses: The game includes various types of plants, each with unique defensive capabilities.

Progressive Difficulty: The game offers increasing levels of difficulty, ensuring long-term engagement and challenge.

Accessibility Features: The game includes features designed to be accessible to visually impaired users, ensuring inclusivity.

Benefits and Advantages
"Garden Shield Defense" offers several advantages over existing tower defense games:

Strategic Depth: Enhances strategic planning and problem-solving skills in a fun, interactive manner.

User Engagement: The customizable garden layouts and diverse plant defenses keep players engaged longer.

Accessibility: Designed with accessibility in mind, making it playable by a broader audience.

Ease of Use: Runs directly in web browsers without the need for additional installations or plugins.

Future Versions
Ideas for future enhancements to "Garden Shield Defense" include:

Expanded Plant Types: Introducing more plant types with unique abilities to keep the game challenging.

Multiplayer Mode: Allowing players to compete against friends or other users online.

Expanded Storyline: Adding a storyline and missions to enhance the gaming experience.

Additional Accessibility Features: Continuous improvements to make the game more accessible to users with various disabilities.

Overhaul the design for a more modern and visually appealing user experience.

Summary
"Garden Shield Defense" is an innovative and strategic tower defense game designed to provide a fun and challenging experience for users while enhancing their strategic planning skills. By addressing the need for engaging and accessible tower defense games, "Garden Shield Defense" stands out with its interactive gameplay, customizable garden layouts, and focus on inclusivity. The project not only offers immediate benefits to players but also has the potential for future enhancements that will keep it relevant and enjoyable.

<br>
User Stories
User Story 1:
As a first-time visitor, I want to quickly understand the game objective and how to play, so I can decide whether or not I wish to play.

User Story 2:
As a first-time player, I want to easily identify and navigate between the game components, so that I can enjoy playing the game without being hindered.

User Story 3:
As a strategy enthusiast, I want to be able to customize my garden layout, so that I can create the most effective defense strategy.

User Story 4:
As a casual player, I want to be able to adjust the difficulty level, so that I can enjoy playing the game at my own pace.

User Story 5:
As a returning player, I want to be able to beat my previous score, so that I can challenge myself.

<br> 
Design
Colour Scheme
I wanted to keep the color scheme vibrant and nature-inspired to fit the garden theme. The primary colors are greens and browns with highlights of vibrant colors to represent different plant types.

<br>

Typography
A clear and friendly font is essential for a game interface, so I opted to use two Google Fonts that complement each other well.

Lobster for the header and main titles.

<br>
Roboto for the game content and instructions.

Wireframes
Desktop


Tablet


Mobile


<br>
Features
Favicon
For "Garden Shield Defense," I designed the favicon to be a shield with a garden icon in the center, representing the game's theme.


The Navbar
The navbar is designed for easy navigation, with links to the home page, game instructions, and about page.

The navbar contains:

"Garden Shield Defense" - Which is a link to the welcome page (confirming if the user wants to return home and lose game progress).

The Welcome Page
The landing page provides clear instructions about how to play and the point-scoring system. The layout is uncluttered, and the instructions are concise.


The input field for the player to input their name or initials is in focus when the page loads so the player can immediately start playing. When the player starts typing, the "Start Game" button appears, and on click (or by pressing enter) the game page is launched.


The Game Page

The game page displays a garden grid where players can place different types of defensive plants to protect against incoming pests. The game mechanics include placing plants, upgrading them, and managing resources efficiently.

The focus is on intuitive controls and smooth gameplay, allowing players to easily place and upgrade plants.

Customizing Garden Layout
Players can design their garden layout by selecting and placing plants strategically. The game provides various plant types, each with unique defensive capabilities.


Managing Resources
Players must manage resources efficiently to build and upgrade their defenses. Resources can be collected over time or through defeating pests.


Progressive Difficulty
The game includes multiple levels of increasing difficulty, ensuring long-term engagement and challenge.


Accessibility Features
"Garden Shield Defense" includes features designed to be accessible to visually impaired users, ensuring inclusivity. The design is simple, with clear contrast and large clickable areas to enhance usability for all players.

<br>
Technologies
Languages
HTML, CSS, and JavaScript

Frameworks, Libraries, and Programs
JQuery for simpler event listeners.
Sweet Alert 2 to replace browser alerts.
Balsamiq for wireframes.
EmailJS to send player scores by email.
As the design layout is simple, I did not need to use any frameworks such as Bootstrap or Tailwind to achieve the desired layout.

<br>
Deployment and Development
Deployment
The site is deployed using GitHub Pages - here.

To Deploy the site using GitHub Pages:

Open the project in GitHub.
Navigate to "Settings".
Select "Pages" in the sidebar.
Choose the branch to deploy from (e.g., main) and save.
Development
To set up the project locally:

Clone the repository:
bash
Copy code
git clone https://github.com/your-github-username/garden-shield-defense.git
Open the project directory:
bash
Copy code
cd garden-shield-defense
Open index.html in your web browser.
<br>
Testing
Functionality Testing
Game Mechanics: Ensured that plants can be placed and upgraded correctly, and that pests are attacking as expected.
Score Tracking: Verified that scores are correctly calculated and displayed.
Resource Management: Checked that resources are being correctly collected and spent.
Progressive Difficulty: Tested that the difficulty increases appropriately with each level.
User Testing
Conducted user testing sessions with players of different skill levels to gather feedback and make improvements to the game.

Accessibility Testing
Used accessibility testing tools to ensure the game is accessible to visually impaired users.

Browser Compatibility
Tested the game on various browsers to ensure compatibility and smooth performance.

<br>
Credits
Content
Game concept and design by [Your Name].
Plant and pest icons designed by [Icon Designer's Name] (if applicable).
Media
Sound effects sourced from [Free Sound Library].
Code
[Resource Name] for guidance on game mechanics (if applicable).
Acknowledgements
Special thanks to [Mentor's Name] for guidance and feedback throughout the development process.

<br>
Conclusion
"Garden Shield Defense" is a strategic tower defense game that offers an engaging and challenging experience for players of all ages. By focusing on usability, accessibility, and strategic depth, it stands out as a unique and enjoyable game in the web-based tower defense genre. Future enhancements will continue to improve the game, ensuring it remains a fun and engaging platform for strategic thinking and entertainment.
