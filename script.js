var quotes = [
    "Only when we are brave enough to explore the darkness will we discover the infinite power of our light. ~Brene Brown",
    "We cultivate love when we allow our most vulnerable and powerful selves to be deeply seen and known, and when we honor the spiritual connection that grows from that offering with trust, respect, kindness and affection. ~Brene Brown",
    "You are imperfect, you are wired for struggle, but you are worthy of love and belonging. ~Brene Brown",
    "Courage starts with showing up and letting ourselves be seen. ~Brene Brown",
    "Vulnerability is the birthplace of innovation, creativity and change. ~Brene Brown",
    "Because true belonging only happens when we present our authentic, imperfect selves to the world, our sense of belonging can never be greater than our level of self-acceptance. ~Brene Brown",
    "Vulnerability sounds like truth and feels like courage. Truth and courage aren't always comfortable, but they're never weakness. ~Brene Brown",
    "If we can share our story with someone who responds with empathy and understanding, shame cannot survive. ~Brene Brown",
    "The dark does not destroy the light; it defines it. It's our fear of the dark that casts our joy into the shadows. ~Brene Brown",
    "Faith is a place of mystery, where we find the courage to believe in what we cannot see and the strength to let go of our fear of uncertainty. ~Brene Brown",
    "If you trade your authenticity for safety, you may experience the following: anxiety, depression, eating disorders, addiction, rage, blame, resentment, and inexplicable grief. ~Brene Brown",
    "Perfectionism is a self destructive and addictive belief system that fuels this primary thought: If I look perfect, and do everything perfectly, I can avoid or minimize the painful feelings of shame, judgment, and blame. ~Brene Brown",
    "If you want to make a difference, the next time you see someone being cruel to another human being, take it personally. Take it personally because it is personal! ~Brene Brown",
    "Healthy striving is self-focused: 'How can I improve?'. Perfectionism is other-focused: 'What will they think?'. ~Brene Brown",
    "It is not the critic who counts; not the man who points out how the strong man stumbles, or where the doer of deed could have done them better. The credit belongs to the man who is actually in the arena, whose face is married by dust and sweat and blood; who strives valiantly... who at the best knows in the end the triumph of high achievement, and who at the worst, if he fails, at least fails while daring greatly. ~Theodore Roosevelt",
    "Do not fear to be eccentric in opinion, for every opinion now accepted was once eccentric. ~Bertrand Russell"
];

var currentIndex;
var displayedQuote;

function newQuote() { // Generate random quote from list
    var index = Math.floor(Math.random() * quotes.length);
    displayedQuote = quotes[index];

    currentIndex = index;
    $('#quote').html(displayedQuote);
}

function tweetQuote() { // Twitter API to tweet quote
    var quoteToTweet = quotes[currentIndex];
    window.open("https://twitter.com/intent/tweet?text=" + quoteToTweet + " " + "~Brené Brown- Random Quote Machine");
}

$("#generate").click(function() {
    newQuote();
});

$("#twitter").click(function() {
    tweetQuote();
});
