let currentScoreOne = 0
let currentScoreTwo = 0


function teamOneClick(){
    currentScoreOne++
    drawOne()
}

function teamTwoClick(){
    currentScoreTwo++
    drawTwo()
}

function resetScore(){
    if (currentScoreOne > 0) {
        let currentScoreOne = 0
        console.log(currentScoreOne);
    }
    if (currentScoreTwo > 0) {
        let currentScoreTwo = 0
        console.log(currentScoreTwo);
    }
    drawReset()
}

function drawOne(){
    let teamOneScore = document.getElementById("team-one-score")
    teamOneScore.innerText = currentScoreOne
}

function drawTwo(){
    let teamTwoScore = document.getElementById("team-two-score")
    teamTwoScore.innerText = currentScoreTwo
}

function drawReset(){
    let oneReset = document.getElementById("team-one-score")
    oneReset.innerText = 0

    let twoReset = document.getElementById("team-two-score")
    twoReset.innerText = 0
}

