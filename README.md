# Card Color Guessing Game
## Objective
This project implements a card guessing game using Node.js. The goal of the game is for users to match all pairs of cards. The game will feature 36 cards (6x6 grid), and users select two cards at a time. If the cards match, they remain open; if they do not match, they will flip back to hide their contents. The game is won when all cards are successfully matched.

## 1. Features
1. Dynamic Card Setup
- The game starts with the cards set dynamically in random positions. The contents of the cards are hidden until the user selects them.
- There are 36 cards in total (18 pairs), displayed in a 6x6 grid.
- Once a match is found, the matched cards will stay open, while non-matching cards will flip back over after a short delay.

## 2. Reset Functionality
- Users can reset the game at any time, which shuffles the cards and hides all contents.
- A reset button will be provided to restart the game from scratch.

## 3. Winning Pop-up
When the player successfully matches all cards, a pop-up message will appear to congratulate the player on winning the game.

## Technologies
- Nodejs : Server Side
- Javascript : Dynamic Functionality
- HTML : Layout
- CSS : Styling

# Interface UI
![image](https://github.com/user-attachments/assets/6e4cae58-b445-4f51-b592-2b2f63b0a2c1)


# Installation & Setup
## Prerequisites
Ensure you have the following installed:

Node.js (version >= 14)
npm (Node Package Manager)

# Steps to Set Up the Game Locally
### Clone the repository:
 Clone the repository:
   
     bash 
        git clone https://github.com/your-repository-url/card-guessing-game.git

### Run the Project On the Terminal:
      
      bash: 
          node server.js

### Server Path 
    
    bash: 
    Server running on http://localhost:3000


# File Structure

![image](https://github.com/user-attachments/assets/56dc1f9f-c93f-4e1b-8718-adfa42e38981)

# How to Play
1. Start the Game:

    - On page load, the cards will be shuffled and hidden.
    - Select two cards to reveal their contents.

2. Matching Cards:
   
  - If the two selected cards match, they will stay visible.
  - If they don’t match, they will flip back after a short delay.

3. Win the Game:

   - Continue matching pairs until all cards are revealed.
   - A winning pop-up will be displayed when all pairs are matched.

4. Reset:

- Use the reset button to shuffle and start a new game at any time.

 # Contacts 
   - Email: nhlakaniphoradebe337@gmail.com
   - github: AlsonAfrica
