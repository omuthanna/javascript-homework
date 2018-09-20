var random_results;
var lost = 0;
var win = 0;
var numAdd = 0
var picturesDiv = [

];


//-------------------//
var startGame = function(){
    $(".crystals").empty();
    var screen = [
        'assets/images/p1.png',
        'assets/images/p2.jpg',
        'assets/images/p3.jpg',
        'assets/images/p4.jpg'

    ];
    random_results = Math.floor(Math.random() * 32 + 61)
$("#results").html('Random Results: '+ random_results);

for (var i=0; i<4; i++){
    var randomNumber = Math.floor(Math.random() * 11 + 1);    
    var crystal = $("<div>");
    
    
    crystal.attr({
        "class": 'crystal',        
        "data-randomNum": randomNumber
    });
    crystal.css({
        "background-image":"url("+screen[i]+")",
        
        //"background-color":"red"
    })
    console.log(screen[i]);
    //$(":image").css("background-color", "red");
    $(".crystals").append(crystal);    
   //$(".crystals").append(randomNumber);
   $('#counter').html(numAdd);
   //$(".crystals").append(picturesDiv);
   
    

   
}
}
startGame();

$(document).on('click',".crystal", function(){    
    var num = parseInt($(this).attr('data-randomNum'));
    numAdd += num;
    if (numAdd > random_results){
        lost ++;
        $("#lossing").html('Lost: '+lost);
        numAdd = 0;
        startGame();
    }
    else if (numAdd === random_results) {
        win ++;
        $("#wining").html('Wins: '+win);
        numAdd = 0;
        startGame();
        
    }
    console.log(numAdd);
    $('#counter').html('Points:  '+numAdd);
})