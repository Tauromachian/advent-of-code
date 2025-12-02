function rotateLeft(barrel, amount) {
  const result = barrel - amount;

  if (result < 0) {
    return 100 + result;
  }

  if (result === 100) return 0;

  return result;
}

function rotateRight(barrel, amount) {
  const result = barrel + amount;

  if (result > 100) {
    return result - 100;
  }

  if (result === 100) return 0;

  return result;
}

(function start() {
  let password = 0;
  let barrel = 50;

  process.argv.forEach((arg) => {
    if (arg.includes("L")) {
      const number = Number(arg.replace("L", ""));

      barrel = rotateLeft(barrel, number);
    }

    if (arg.includes("R")) {
      const number = Number(arg.replace("R", ""));

      barrel = rotateRight(barrel, number);
    }

    if (barrel == 0) {
      password++;
    }
  });

  console.log(password);
})();
