function writeTweet()
{
  var randIndex;
  var sentence;
  var intro = ["Have you ever wondered", "Why is it that", "What comes to mind when", "At the end of the tunnel"];
  var body = ["the sky", "you live", "our conscious", "the future", "life"];
  var end = ["is mysterious.","to die."];
  randIndex = randomUpTo(3,0);
  sentence = intro[randIndex];
  randIndex = randomUpTo(4,0);
  sentence += body[randIndex];
  randIndex = randomUpTo(1,0);
  sentence += end[randIndex];
  document.getElementById("tweet").innerHTML = sentence;
}

//Generates a random whole number between 0 and max (inclusive)
function randomUpTo(max)
{
  return Math.floor(Math.random() * (max+1));
}
