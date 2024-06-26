"use strict";
// 17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print
// a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end
// of your program.
// Start with the updated guest list from Exercise 16
let guests = ["Atiq", "Aadil", "Athar", "Azhar", "Sameer", "Owais"];
// Print invitation messages to each person on the list
for (let guest of guests) {
    console.log(`Dear ${guest}, you are invited to dinner.`);
}
// Inform people about the limited space for only two guests
console.log("\nUnfortunately, the new dinner table won't arrive in time, and we can only invite two people for dinner.");
// Remove guests from the list until only two names remain
while (guests.length > 2) {
    let removedGuest = guests.pop();
    console.log(`Sorry, ${removedGuest}, we can't invite you to dinner.`);
}
// Print a message to each of the two people still on your list
for (let guest of guests) {
    console.log(`Dear ${guest}, you're still invited to dinner.`);
}
// Remove the last two names from your list to have an empty list
guests.pop();
guests.pop();
// Print the list to make sure it's empty
console.log(guests);
