let favbook = "yaarm";
let guess = prompt("Please guess your fav book");


while (true) {
    if (guess == "quit") {
        document.write("You quit.")
        break;
    }
    if (favbook == guess) {
        document.write("Congratulations");
        break;
    }

    else {
        guess = prompt("Please try again");
    }
}