var canvas = document.querySelector('.game');
var context = canvas.getContext('2d');

var grid = 16;
var count = 0;

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

var snake = {
  x: getRandomInt(0, 25) * grid,
  y: getRandomInt(0, 25) * grid,

  dx: grid,
  dy: 0,

  cells: [],

  maxCells: 4
};

var enemy = {
  x: 160,
  y: 160,

  dx: 0,
  dy: grid,

  cells: [],

  maxCells: 1
}
var apple = {
  x: 320,
  y: 320
};

function loop() {
  requestAnimationFrame(loop);

  if (++count < 7) {
    return;
  }

  count = 0;
  context.clearRect(0, 0, canvas.width, canvas.height);

  snake.x += snake.dx;
  snake.y += snake.dy;

  enemy.x += enemy.dx;
  enemy.y += enemy.dy;

  if (snake.x < 0) {
    snake.x = canvas.width - grid;
  }
  else if (snake.x >= canvas.width) {
    snake.x = 0;
  }

  if (snake.y < 0) {
    snake.y = canvas.height - grid;
  }
  else if (snake.y >= canvas.height) {
    snake.y = 0;
  }

  snake.cells.unshift({ x: snake.x, y: snake.y });

  if (enemy.x < 0) {
    enemy.x = canvas.width - grid;
  }
  else if (enemy.x >= canvas.width) {
    enemy.x = 0;
  }

  if (enemy.y < 0) {
    enemy.y = canvas.height - grid;
  }
  else if (enemy.y >= canvas.height) {
    enemy.y = 0;
  }

  enemy.cells.unshift({ x: enemy.x, y: enemy.y });


  setTimeout(function () {
    var rnd = getRandomInt(1, 8)
    switch (rnd) {
      case 1:
        if (enemy.dx === 0) {
          enemy.dx = -grid;
          enemy.dy = 0;
        }
        break;
      case 2:
        if (enemy.dy === 0) {
          enemy.dy = -grid;
          enemy.dx = 0;
        }
        break;
      case 3:
        if (enemy.dx === 0) {
          enemy.dx = grid;
          enemy.dy = 0;
        }
        break;
      case 4:
        if (enemy.dy === 0) {
          enemy.dy = grid;
          enemy.dx = 0;
        }
        break;

    }
  }, getRandomInt(2500, 7500))

  if (snake.cells.length > snake.maxCells) {
    snake.cells.pop();
  }

  if (enemy.cells.length > enemy.maxCells) {
    enemy.cells.pop();
  }

  context.fillStyle = 'blue';
  context.fillRect(apple.x, apple.y, grid - 1, grid - 1);

  context.fillStyle = 'green';
  snake.cells.forEach(function (cell, index) {

    context.fillRect(cell.x, cell.y, grid - 1, grid - 1);

    if (cell.x === apple.x && cell.y === apple.y) {
      snake.maxCells++;

      apple.x = getRandomInt(0, 25) * grid;
      apple.y = getRandomInt(0, 25) * grid;
    }

    for (var i = index + 1; i < snake.cells.length; i++) {

      if (cell.x === snake.cells[i].x && cell.y === snake.cells[i].y) {
        snake.x = 160;
        snake.y = 160;
        snake.cells = [];
        snake.maxCells = 4;
        snake.dx = grid;
        snake.dy = 0;

        apple.x = getRandomInt(0, 25) * grid;
        apple.y = getRandomInt(0, 25) * grid;
      }
    }
  });
  context.fillStyle = 'red';
  enemy.cells.forEach(function (cell, index) {
    context.fillRect(cell.x, cell.y, grid - 1, grid - 1);
  });
}

document.addEventListener('keydown', function (e) {

  if (e.key === 'a' && snake.dx === 0) {
    snake.dx = -grid;
    snake.dy = 0;
  }
  else if (e.key === 'w' && snake.dy === 0) {
    snake.dy = -grid;
    snake.dx = 0;
  }
  else if (e.key === 'd' && snake.dx === 0) {
    snake.dx = grid;
    snake.dy = 0;
  }
  else if (e.key === 's' && snake.dy === 0) {
    snake.dy = grid;
    snake.dx = 0;
  }
});

requestAnimationFrame(loop);