

let board;


const rowCount = 21;
const columnCount = 19;
const tileSize = 32;
const boardWidth = columnCount * tileSize;
const boardHeight = rowCount * tileSize;
let context;

let blueGhostImage;
let orangeGhostImage;
let pingGhostImage;
let redGhostImage;

let pacmanUpImage;
let pacmanDownImage;
let pacmanLeftImage;
let pacmanRightImage;

let wallImage;



window.onload = function() {
  board = document.getElementById("board");
  board.height = boardHeight;
  board.width = boardWidth;
  context = board.getContext("2d");


  loadImages();
}



function loadImages() {
  wallImage = new Image();
  wallImage.src = 'images/wall.png'

  blueGhostImage = new Image();
  blueGhostImage.src = 'images/blueGhost.png'
  orangeGhostImage = new Image();
  orangeGhostImage.src = 'images/orangeGhost.png'
  pingGhostImage = new Image();
  pingGhostImage.src = 'images/pinkGhost.png'
  redGhostImage = new Image();
  redGhostImage.src = 'images/redGhost.png'


  pacmanUpImage = new Image();
  pacmanUpImage.src = 'images/pacmanUp.png'
  pacmanDownImage = new Image();
  pacmanDownImage.src = 'images/pacmanDown.png'
  pacmanLeftImage = new Image();
  pacmanLeftImage.src = 'images/pacmanLeft.png'
  pacmanRightImage = new Image();
  pacmanRightImage.src = 'images/pacmanRight.png'

}



let walls = new Set();
let ghosts = new Set();
let foods = new Set();

let pacman;



const tileMap = [
  "XXXXXXXXXXXXXXXXXXX",
  "X        X        X",
  "X XX XXX X XXX XX X",
  "X                 X",
  "X XX X XXXXX X XX X",
  "X    X       X    X",
  "XXXX XXXX XXXX XXXX",
  "OOOX X       X XOOO",
  "XXXX X XXrXX X XXXX",
  "O       bpo       O",
  "XXXX X XXXXX X XXXX",
  "OOOX X       X XOOO",
  "XXXX X XXXXX X XXXX",
  "X        X        X",
  "X XX XXX X XXX XX X",
  "X  X     P     X  X",
  "XX X X XXXXX X X XX",
  "X    X   X   X    X",
  "X XXXXXX X XXXXXX X",
  "X                 X",
  "XXXXXXXXXXXXXXXXXXX"
];


function loadMap() {
  walls.clear();
  ghosts.clear();
  foods.clear();
}









class block {
  constructor(image, x, y, width, height) {
    this.image = image;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
}














