const canvas = document.getElementById('board');
const ctx = canvas.getContext('2d');

// Устанавливаем размеры холста
ctx.canvas.width = COLS * BLOCK_SIZE;
ctx.canvas.height = ROWS * BLOCK_SIZE;

// Устанавливаем масштаб
ctx.scale(BLOCK_SIZE, BLOCK_SIZE);

let board = new Board();

function play() {  
  board.reset();  
  // наглядное представление матрицы игрового поля
  console.table(board.grid);  
  let piece = new Piece(ctx);
  piece.draw();
  
  board.piece = piece;
}

