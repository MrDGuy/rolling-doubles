roll_1 = randint(1,6)
roll_2 = randint(1,6)
adventure.add_to_textlog("Roll 1: " + roll_1)
adventure.add_to_textlog("Roll 2: " + roll_2)

if roll_1 == roll_2:
    adventure.add_to_textlog("You rolled doubles!")
else:
    adventure.add_to_textlog("You did not roll doubles")
