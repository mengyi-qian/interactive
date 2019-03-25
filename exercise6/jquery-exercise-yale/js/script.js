/*

Instructions:

---- PART 1 ----
Start by removing the Yale School of Art crest (#crest).

Instead let's add a blue gradient to the whole page by applying the "gradient" class to the body.

Let's also show the traffic light (#status).

---- PART 2 ----
Now, to make things a little more complicated, let's activate the "T-R-A-F-F-I-C L-I-G-H-T" button:

When the user clicks the "T-R-A-F-F-I-C L-I-G-H-T" button (#button), change the text of traffic light (#status) to read "GO".
Let's also change the background color of the traffic light (#status) to green.

The light needs to turn on and off, so when the user clicks the button again, revert all of the above.
So the traffic light should read "STOP" and its background color should be red.

Let's add a image too. Show the user an animated image when it's safe to cross. So when the traffic light is green, reveal our flying pigeon (#pigeon).
The pigeon should fade out slowly when the button is toggled to "STOP" and the traffic light should go back to red.

---- PART 3 ... Advanced ----
If you're comfortable with all this, let's try one more thing...
Let's make the traffic light turn on and off on its own in 5 second intervals.

Hint: You'll need to create a variable that stores the status of the light.
And you'll also need to learn about the JavaScript function "setInterval".

Every 10 seconds, check the status of the light and turn it either on or off along with all the effects.
Of course the button should also still work.

*/


/////////////////////////////////////////////////////////////

$(document).ready(function(){


// PART 1

      $('#crest').hide();

      $('body').addClass('gradient');

      $('#status').show();

// PART 2

      var stop = true;

      console.log('BY DEFAULT STOP IS: ' + stop);

      $('#button').click(function(){
        changeLights();
      });

// PART 3

      function changeLights() {

        // if stop is true
        if (stop == true){
          // then turn it green and change it to go
          $('#status').css('background', 'green');
          $('#status').html('GO');
          // show the pigeon
          $('#pigeon').show();
          // then change stop to be false
          stop = false;
        }

        // otherwise (if stop is false)
        else {
          // turn it to red and change it to stop
          $('#status').css('background', 'red');
          $('#status').html('STOP');
          // fade out the pigeon slowly
          $('#pigeon').fadeOut('slow');
          // then change stop to be true
          stop = true;
        }

        console.log('WE CLICKED AND STOP IS: ' + stop);

      }

      setInterval(function(){
        console.log('something is happening');
        changeLights();
      }, 10000);

    });
