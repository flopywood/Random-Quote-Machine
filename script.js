var quotes = [
    "Owning our story can be hard but not nearly as difficult as spending our lives running from it. Embracing our vulnerabilities is risky but not nearly as dangerous as giving up on love and belonging and joy—the experiences that make us the most vulnerable. Only when we are brave enough to explore the darkness will we discover the infinite power of our light.",
    "We cultivate love when we allow our most vulnerable and powerful selves to be deeply seen and known, and when we honor the spiritual connection that grows from that offering with trust, respect, kindness and affection.",
    "You are imperfect, you are wired for struggle, but you are worthy of love and belonging.",
    "Courage starts with showing up and letting ourselves be seen.",
    "Vulnerability is the birthplace of innovation, creativity and change.",
    "Because true belonging only happens when we present our authentic, imperfect selves to the world, our sense of belonging can never be greater than our level of self-acceptance.",
    "Vulnerability sounds like truth and feels like courage. Truth and courage aren't always comfortable, but they're never weakness.",
    "If we can share our story with someone who responds with empathy and understanding, shame cannot survive.",
    "The dark does not destroy the light; it defines it. It's our fear of the dark that casts our joy into the shadows.",
    "Faith is a place of mystery, where we find the courage to believe in what we cannot see and the strength to let go of our fear of uncertainty.",
    "If you trade your authenticity for safety, you may experience the following: anxiety, depression, eating disorders, addiction, rage, blame, resentment, and inexplicable grief.",
    "To love someone fiercely, to believe in something with your whole heart, to celebrate a fleeting moment in time, to fully engage in a life that doesn’t come with guarantees – these are risks that involve vulnerability and often pain. But, I’m learning that recognizing and leaning into the discomfort of vulnerability teaches us how to live with joy, gratitude and grace.",
    "Perfectionism is a self destructive and addictive belief system that fuels this primary thought: If I look perfect, and do everything perfectly, I can avoid or minimize the painful feelings of shame, judgment, and blame.",
    "If you want to make a difference, the next time you see someone being cruel to another human being, take it personally. Take it personally because it is personal!",
    "Healthy striving is self-focused: 'How can I improve?'. Perfectionism is other-focused: 'What will they think?'"
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
