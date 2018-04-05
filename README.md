
![alt text](https://imgur.com/a/FvAUu "Bubbles")


# Amoeba
***

## Objective

Absorb all other like-color bubbles to win the game. But watch out, as you absorb you grow!

## Play the Game Here:

http://#/

## Motivation

Create a relaxing game a user can play for a short amount of time to serve as a break from their day-to-day hustle.

<!-- ## Prototype Main Screen

![example main screen](https://github.com/LillianChernin/bible-verse-guessing-game/blob/master/example-main-screen.png) -->


## Tech

Built with HTML, CSS, and JavaScript.


### User Persona 1
***
#### John Techsome

Age: 35  

Works hard in the tech industry.

Lives in San Francisco, CA.



##### Goals

-Get a 2 minute break here and there.

-Have fun!


##### Motivations

-Has a job that requires a lot of mental energy.

-Works on the 15th floor and can't go walk around the block as often as he would like.


##### Likes

-Happy hour after work.

-Gaming.

-Aesthetically pleasing things.


##### Dislikes  

-Stressful things besides his own job.

-His own job (sometimes).

-Trying to get AJAX to work.


### User Persona 2  

***  

#### Janice Nightrider


Age: 26

Works for her sister's friend's startup.

Lives in Portland, OR.


##### Goals

-Be successful at her job.

-Have something fun in her pocket because a ping pong table won't fit in there.


##### Motivations  

-Doesn't want to get burnt out because she works hard.

-Has the personality where she does better with frequent, short breaks.


##### Likes  

-Her job.

-Going to Steampunkcon every year.

-Blowing bubbles.


##### Dislikes

-Technology issues.

-Current political situation.


### User Persona 3  
***  
#### Becky Ovficepahrti


Age: 21

Intern at a financial company.

Lives in New York, NY.  


##### Goals

-Wants to be CEO someday and always be sure to go the extra mile.

-Work hard, play hard.


##### Motivations

-Needs to remind herself to relax periodically.

-Wants to always stay on top of things.


##### Likes  

-Networking opportunities.

-Happy hour.

-Fun mobile games.


##### Dislikes  

-Waiting for public transit.

-Technology that is not intuitive.  


### MVP User Stories  
***  

As a user I should be able to move the main bubble around.

..be able to see other bubbles rendered.

..be able to absorb other like-color bubbles.

..be able to win the game once all like-colored bubbles are absorbed.


### Stretch Goals User Stories
***

As a user I should see my bubble grow as I absorb them.

..see all the bubbles moving at random.

..see animations when my bubble absorbs others.

..see more bubbles as the difficulty progresses.

..see a beautiful UI.


<!-- Objective
  Create a game that is relaxing, yet mentally stimulating, that will provide people a nice break from their day-to-day, but not seek to replace normal 15 minute breaks. -->

<!-- Proposal One
  A connect the dots style game with pleasing colors and progressively more challenging levels.

Pseudo Code
  Use .css to render the dots at different x and y positions, css to render lines between the dots you choose to connect and .js to create click events that tell the .css what to do. Most likely will use divs to render the dots in. -->

<!-- Proposal Two
  Create a Simon-style game with better quality, modern (maybe even trendy) sounds that are oriented more towards relaxation.

Pseudo Code
  Create a set of buttons with click events that will trigger sounds that must === a preset pattern for each level. -->

<!-- Proposal Three
  A mine sweeper game that is visually pleasing <!--and when you lose it prompts you to donate to a charity of your choosing. If you win you can still donate. The high score board is who has donated the most money. It does not keep score of winning or losing the game. Periodic prizes such as gift cards will be given out at random to the top 100 people on the monthly score board.-->

<!-- Pseudo Code
  Create a clickable table that when clicked uncovers what is underneath. Append + 1 to surrounding tables of each "mine." If a surrounding table === 0 then uncover that table.

Proposal Six
  Create a game where you send your bubble to absorb other bubbles that are the same color as yours. Your bubble grows as you absorb and the levels get more dense as you progress.

Pseudo Code
  use css to create the bubbles and JS to move them around. -->

<!-- * Proposal Seven
  Don't touch your computer or mobile for two minutes. You win the game by not touching your computer for two minutes, while looking at a randomly selected gif of a serene scene with ambient sounds and music playing (chris zabriskie). Once you've watched for two minutes - you win!

* Pseudo Code
  Set a timer for two minutes and if cursor movement === 0 and keydown === 0 during that duration of time, then you win. If not then you lose and have to play again. CSS will set the background-image (hopefully as a GIF) and HTML5 will play an ambient track. JS will detect mouse movement and keydown. Very simple, and very zen.

  * Copy: Put your headphones on. Just relax. Don't touch anything. Its safe to close your eyes.
  * Sounds: It starts with just ambient sounds such as waves crashing or wind blowing with birds chirping, and after 30 seconds ambient music slowly comes on.

  * All of these should utilize ambient music that is pleasing. -->

<!-- Proposal Four
  A typing game that utilizes the kickflip API where you have to guess the trick in the video shown. You type the name of the trick and if you get it right it advances you to the next level.

Peudo Code
  Detect whether input === a hidden string with the name of the trick. If it does then you go to the next page, "/level2" for example and try the next one. -->

<!-- Proposal Five
  Use the Twilio API to create a phone tag game where if you don't 'pass' the voicemail to someone else within one hour you get a text message that you lost the game. If someone chooses you and you've already passed the voicemail to someone else that day then you win.

Pseudo Code
  Need to read the documentation on Twilio's site to fully understand if this is possible. I think one problem might arise with the need to store data on a server as far as whether or not someone has been called that day. It would go something like: if xuser times called === 1 set condition winner. Twilio will pass info back to the server when a user sends a call out to check if user sent the call out within one hour. If this doesn't happen a voicemail is sent to the last user indicating that he or she has lost. -->

  <!-- Proposal Spyfall
    Use Twilio to create a text-based spyfall game. -->
