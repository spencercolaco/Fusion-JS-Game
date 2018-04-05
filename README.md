Objective
  Create a game that is relaxing, yet mentally stimulating, that will provide people a nice break from their day-to-day.

Proposal One
  A connect the dots style game with pleasing colors and progressively more challenging levels.

Pseudo Code
  Use .css to render the dots at different x and y positions, css to render lines between the dots you choose to connect and .js to create click events that tell the .css what to do. Most likely will use divs to render the dots in.

Proposal Two
  Create a Simon-style game with better quality, modern (maybe even trendy) sounds that are oriented more towards relaxation.

Pseudo Code
  Create a set of buttons with click events that will trigger sounds that must === a preset pattern for each level.

Proposal Three
  A mine sweeper game that is visually pleasing and when you lose it prompts you to donate to a charity of your choosing. If you win you can still donate. The high score board is who has donated the most money. It does not keep score of winning or losing the game. Periodic prizes such as gift cards will be given out at random to the top 100 people on the monthly score board.

Pseudo Code
  Create a clickable table that when clicked uncovers what is underneath. Append + 1 to surrounding tables of each "mine." If a surrounding table === 0 then uncover that table.

  * All of these should utilize ambient music that is pleasing.

Proposal Four
  A typing game that utilizes the kickflip API where you have to guess the trick in the video shown. You type the name of the trick and if you get it right it advances you to the next level.

Peudo Code
  Detect whether input === a hidden string with the name of the trick. If it does then you go to the next page, "/level2" for example and try the next one.

Proposal Five
  Use the Twillio API to create a phone tag game where if you don't 'pass' the voicemail to someone else within one hour you get a text message that you lost the game. If someone chooses you and you've already passed the voicemail to someone else that day then you win.

Pseudo Code
  Need to read the documentation on Twilio's site to fully understand if this is possible. I think one problem might arise with the need to store data on a server as far as whether or not someone has been called that day. It would go something like: if xuser times called === 1 set condition winner. Twilio will pass info back to the server when a user sends a call out to check if user sent the call out within one hour. If this doesnt happen a voicemail is sent to the last user indicating that he or she has lost.
