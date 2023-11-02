function startadventure(){

    alert("You find yourself at a crossroads in the forest. You can go 'left' or 'right'.");

// First choice
const choice1 = prompt("Which way will you choose? 'left'(a) or 'right'(b)");

if (choice1 === "a"){
  // Branch 1
  alert("You follow the path to the left and discover a hidden entrance within a tree.");
  const choice2 = prompt("Do you want to enter the tree(a) or continue on the path(b)");

  if (choice2 === "a") {
    // Branch 1.1
    alert("You found a precious diamond!");
    const choice3 = prompt("Will you take the diamond(a), or leave it(b)?");

    if (choice3 === "a") {
      // Ending 1
      alert("You take the diamond which unleashes a trap door. You fall into the void! You've reached ending 1.");
    } else if (choice3 === "b") {
      // Ending 2
      alert("A mysterious being appears in front of you. It tells you to follow them to another realm. You've reached ending 2.");
    } else {
      alert("Invalid choice. The game ends here.");
    }

  } else if (choice2 === "b") {
    // Branch 1.2
    alert("You continue on the path and see something in the distance.");
    const choice3 = prompt("You come to a bridge. Do you 'cross'(a) it or 'turn back'(b)?");

    if (choice3 === "a") {
      // Ending 3
      alert("You cross the bridge and find a magical kingdom. You've reached ending 3.");
    } else if (choice3 === "b") {
      // Ending 4
      alert("You decide to go under the bridge. You've encountered a troll! You've reached ending 4.");
    } else {
      alert("Invalid choice. The game ends here.");
    }

  } else {
    alert("Invalid choice. The game ends here.");
  }

} else if (choice1 === "b") {
  // Branch 2
  alert("You take the path to the right and encounter a Sphinx guarding a pyramid.");
  const choice2 = prompt("Will you solve the Sphinx's riddle(a) or turn back(b)?");

  if (choice2 === "a") {
    // Branch 2.1
    alert("You solve the riddle and the Sphinx lets you enter the pyramid!");
    const choice3 = prompt("You enter the pyramid and find a Minotaur! What will you do? 'fight'(a) him or 'run'(b)?");

    if (choice3 === "a") {
      // Ending 5
      alert("You defeat the Minotaur and release his prisoners! You've reached ending 5.");
    } else if (choice3 === "b") {
      // Ending 6
      alert("You ran from the Minotaur, but he caught you. You died! You've reached ending 6.");
    } else {
      alert("Invalid choice. The game ends here.");
    }

  } else if (choice2 === "b") {
    // Branch 2.2
    alert("You decide to run away from the Sphinx. You get lost in the desert!");
    const choice3 = prompt("You see something in the distance. It looks like theres water! Do you go towards it(a) or stop and rest(b)?");

    if (choice3 === "a") {
      // Ending 7
      alert("It was just a mirage! You collapse from exhaustion.");
    } else if (choice3 === "b") {
      // Ending 8
      alert("After you've rested, you see a set of footprints in the sand...");
    } else {
      alert("Invalid choice. The game ends here.");
    }

  } else {
    alert("Invalid choice. The game ends here.");
  }

} else {
  alert("Invalid choice. The game ends here.");
}
}
