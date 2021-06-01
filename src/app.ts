interface Bird {
  type: 'bird';
  flyingSpeed: number;
}

interface Horse {
  type: 'horse';
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed = 0;
  switch (animal.type) {
    case 'bird': {
      speed = animal.flyingSpeed;
      break;
    }
    case 'horse': {
      speed = animal.runningSpeed;
      break;
    }
    default: {
      break;
    }
  }

  console.log(`Moving at speed: ${speed}`)
}

moveAnimal({ type: 'bird', flyingSpeed: 10 });
