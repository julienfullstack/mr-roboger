Describe: beepBoop()

Test: "It should return an array of numbers from 0 to the user's inputted number"
Code: beepBoop(0);
Expected Output: [0]


Test: "It should return an array of numbers from 0 to the user's inputted number"
Code: beepBoop(2);
Expected Output: [0,2]

Test: "It should replace numbers that contain a "1" with "Beep"
Code: beepBoop(1)
Expected Output: [0,"Beep"]

Test: "It should replace numbers that contain a "2" with "Boop"
Code: beepBoop(2)
Expected Output: [0, "Beep", "Boop"]

Test: "It should replace numbers that contain a "3" with "on't you be my neighbor?"
Code: beepBoop(3)
Expected Output: [0, "Won't you be my neighbor?"]

Test: "It should return an error message if the user input is not a number"
Code: beepBoop(hello);
Expected Output: Sorry, your input is not a number!

Test: "It should replace all digits of numbers that contain a "3" with "Boop"
Code: beepBoop(30)
Expected Output: [0, "Boop", "Boop"]


<!-- NOTES

an array to count from 0 to positive integers +1 to the value

6 [0, 1, 2, 3, 4, 5, 6]

[0, beep,boop, won't you be my neighbhor, 4, 5, 6]

Create "add +1 to a var = 0" based on the number in the array, 
A = number in integer 
loop i = A times - -->
