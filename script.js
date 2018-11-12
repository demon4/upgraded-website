document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

$(window).fancy_scroll({
    animation: "bounce", // bounce (like on iOS), or glow (like on Android 4.0+)
    bounceDistance: 10
});

$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    if(scroll >= 1800){
        $("#fixed").fadeIn();
    }else{
        $("#fixed").fadeOut();

    }
});

var quotes = [
    ["It is the supreme art of the teacher to awaken joy in creative expression and knowledge.", "Albert Einstein"],
    ["We cannot solve our problems with the same thinking we used when we created them.", "Albert Einstein"],
    ["Try not to become a man of success, but rather try to become a man of value.", "Albert Einstein"],
    ["The true sign of intelligence is not knowledge but imagination.","Albert Einstein"],
    ["Only two things are infinite, the universe and human stupidity, and I'm not sure about the former.","Albert Einstein"],
    ["Look deep into nature, and then you will understand everything better.","Albert Einstein"],
    ["Life is like riding a bicycle. To keep your balance, you must keep moving.","Albert Einstein"],
    ["The only source of knowledge is experience.","Albert Einstein"],
    ["If you can't explain it simply, you don't understand it well enough.","Albert Einstein"],
    ["Information is not knowledge.","Albert Einstein"],
    ["Be yourself; everyone else is already taken.", "Oscar Wilde"],
    ["There is nothing permanent except change", "Heraclitus"],
    ["Ever tried. Ever Failed. No matter. Try Again. Fail again. Fail better", "Samuel Beckett"],
    ["The only true wisdom is in knowing you know nothing", "Socrates"],
    ["I know nothing except the fact of my ignorance", "Socrates"],
    ["It is during our darkest moments that we must focus to see the light", "Aristotle"],
    ["The roots of education are bitter, but the fruit is sweet", "Aristotle"], 
    ["Quality is not an act, it is a habit", "Aristotle"],
    ["Pleasure in the job puts perfection in the work", "Aristotle"],
    ["There is no great genius without some touch of madness", "Aristotle"],
    ["The worst form of inequality is to try to make unequal things equal", "Aristotle"],
    ["At his best, man is the noblest of all animals", "Aristotle"],
    ["The aim of the wise is not to secure pleasure, but to avoid pain", "Aristotle"],
    ["Those that know, do. Those that understand, teach", "Aristotle"],
    ["It hurts because it mattered", "John Green"]
];
function get_rnd(max){
    return (Math.floor(Math.random() * max));
}
$( document ).ready(function() {
    window.innerWidth = window.outerWidth;
    var compatible = [];
    for(var i = 0; i < quotes.length; i++){ // try all quotes
        $("mark.quote").text(quotes[i][0]);
        $("mark.author").text(quotes[i][1]); 
        var acc_width = $(".grid").width() - ($("mark.quote").width() + $("mark.author").width());
        if(acc_width <= 100 && acc_width < 0){
            continue;
        }  
        else
        {
            compatible.push([quotes[i][0], quotes[i][1]]);
        }
    }    
    if($(".grid").width() - ($("mark.quote").width() + $("mark.author").width()) <= 100){ // checks if the screen is too small to fit a quote
        $(".header").empty();
    }
    
    var rnd_int = get_rnd(compatible.length);
    if($( window).width() >= 530){
        $("mark.quote").text(compatible[rnd_int][0]);
        $("mark.author").text(compatible[rnd_int][1]);
    }
    
    
    var inits = new TypeIt('.header, h1', { 
        cursor: false,
        lifeLike: true,
        autoStart: true,
        speed: 100,
        startDelay: 100
    });
    
});

