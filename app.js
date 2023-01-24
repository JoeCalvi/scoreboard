let currentScoreOne = 0
let currentScoreTwo = 0

function teamOneClick(){
    currentScoreOne++
    drawOne()
}

function drawOne(){
    let teamOneScore = document.getElementById("team-one-score")
    teamOneScore.innerText = currentScoreOne
}

function teamTwoClick(){
    currentScoreTwo++
    drawTwo()
}

function drawTwo(){
    let teamTwoScore = document.getElementById("team-two-score")
    teamTwoScore.innerText = currentScoreTwo
}

function resetScore(){
    
    currentScoreOne = 0
    currentScoreTwo = 0

    drawOne() 
    drawTwo() 
}


