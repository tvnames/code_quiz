function countDown() {
    //display first question
    displayQuestion(randomPool[questionIndex]);
    timer.textContent = quizTime;

    //set coundown by 1-second intervals
    var timerInterval = setInterval(function() {
        
        //set condition for clearing interval, when questions run out or when timer reaches 0
        if((quizTime <= 0) || (questionIndex>=(randomPool.length))) {
            clearInterval(timerInterval);
            
            //deletes the quiz area to prevent further attempts at answering
            quizArea.innerHTML = "";
            player = prompt("Game over! your final score is " + quizTime + "! Enter your name:");
            //add player to hiscores ony if the player entered a non-empty name or didn't choose cancel
            addPlayer((player !== null) && (player !== ""));
            //local storage
            storePlayer();
            //display player on hiscores
            displayPlayer();
            
            //prompt to ask if play again, if yes then refresh page, if no then simply hide timer
            if (confirm("Play Again?")) {
                location.reload();
            } else {
                timer.style.display = "none";
                return;
            }
        }
        quizTime--;
        if (quizTime<=10) {
            timer.setAttribute("style","color:red");
        }
        timer.textContent = quizTime;

    }, 1000);
}