const primeFactor = num => {
  while (num % 2 == 0) {
    console.log(2);
    num = num / 2;
  }

  for (let i = 3; i * i <= num; i = i + 2) {
    while (num % i == 0) {
      console.log(i);
      num = num / i;
    }
  }
  if (num > 2) console.log(num);
};

primeFactor(24);
