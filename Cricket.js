var aRR = []
var aRR2 = []


TeaM_Score = [];
TeaM_Score2 = [];



Players = {
    P1: [],
    P2: [],
    P3: [],
    P4: [],
    P5: [],
    P6: [],
    P7: [],
    P8: [],
    P9: [],
    P10: []
};

Players2 = {
    P1: [],
    P2: [],
    P3: [],
    P4: [],
    P5: [],
    P6: [],
    P7: [],
    P8: [],
    P9: [],
    P10: []
};



var min = 0;
var max = 7;
Counter = 1;
Counter2 = 1;
Score = 1;
Score2 =1;
ball_count = 0;

var x;
var x2;

TotaL_Score = [];
TotaL_Score2 = [];



function shuffle1() {
    
    Player = document.getElementById("T0" + Counter)
    var team01 = document.getElementById("score1");
    var random = Math.floor(Math.random() * (max - min) + min)
    Player.value += random + " ";
    ball_count++;   
    console.log(ball_count);


    if (aRR.length<60 ) {
        aRR.push(random);
        TeaM_Score.push(random);}
       
    if (Counter < 10) {
        document.getElementById("team2").disabled = true;
    }
    else{
        document.getElementById("team2").disabled = false;
    }

    if (aRR.length == 6 || random == 0 || Counter == 11) {
        Players["P" + Score] = aRR;
        TotaL_Score.push(eval(Players["P" + Score].join('+')))
        console.log("out")
        aRR = []
        Counter++;
        Score++;
        }

    var HigheSt_score = [...TotaL_Score].sort((a, b) => b - a)
    var x = TotaL_Score.indexOf(HigheSt_score[0])
    console.log(HigheSt_score)
    console.log(`The Man of the match is Player : ${x + 1}`)

    var total = TeaM_Score.reduce((currentTotal, ball) => {
        return ball + currentTotal
    }, 0)

    team01.value = total;
    var team1 = localStorage.setItem('Team1', TotaL_Score);

}



function shuffle2() {

    Player2 = document.getElementById("T1" + Counter2)
    var team02 = document.getElementById("score2");
    var random = Math.floor(Math.random() * (max - min) + min);
    Player2.value += random + " ";

    
    if (aRR2.length< 60 ) {
        aRR2.push(random);
        TeaM_Score2.push(random);
    }

    if (Counter2 < 10) {
        document.getElementById("team1").disabled = true;
    
    } else {
         document.getElementById("team1").disabled = false;
    }

    if (aRR2.length == 6 || random == 0 || Counter2 == 11) {
        Players2["P" + Score2] = aRR2;
        TotaL_Score2.push(eval(Players2["P" + Score2].join('+')))
        console.log("out")
        aRR2 = []
        Counter2++;
        Score2++;
        }

    var HigheSt_score2 = [...TotaL_Score2].sort((a, b) => b - a)
     x2 = TotaL_Score2.indexOf(HigheSt_score2[0])
    console.log(HigheSt_score2)
    console.log(`The Man of the match is Player : ${x2 + 1}`)


    var total2 = TeaM_Score2.reduce((currentTotal, ball) => {
        return ball + currentTotal
    }, 0)

        team02.value = total2;
    var team2 = localStorage.setItem('Team2', TotaL_Score2);


}


 function result() {

     var Json = { TotaL_Score,  TotaL_Score2, }
     console.log(Json);

     let xhr = new XMLHttpRequest();

     xhr.open('POST', "http://localhost:6060/CricketGame")

     xhr.setRequestHeader('Content-Type', 'application/json')

     xhr.send(JSON.stringify(Json));

    }






// if (aRR>aRR2){
//     alert ("Team1 is the winner")
// }else{
//     alert("Team2 is the winner")
// }