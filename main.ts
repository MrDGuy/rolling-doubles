let roll_1 = randint(1, 6)
let roll_2 = randint(1, 6)
adventure.addToTextlog("Roll 1: " + roll_1)
adventure.addToTextlog("Roll 2: " + roll_2)
if (roll_1 == roll_2) {
    adventure.addToTextlog("You rolled doubles!")
} else {
    adventure.addToTextlog("You did not roll doubles")
}

