// wakeDog
function wakeDog(name, breed) {
  const wake = `Wake ${name} the ${breed}`;
  console.log(wake);
  return wake;
}

// leashDog
function leashDog(name, breed) {
  const leash = `Leash ${name} the ${breed}`;
  console.log(leash);
  return leash;
}
// walkToPark
function walkToPark(name, breed) {
  const walk = `Walk to the park with ${name} the ${breed}`;
  console.log(walk);
  return walk;
}

// throwFrisbee
function throwFrisbee(name, breed) {
  const frisbee = `Throw the frisbee for ${name} the ${breed}`;
  console.log(frisbee);
  return frisbee;
}

// walkHome
function walkHome(name, breed) {
  const walk = `Walk home with ${name} the ${breed}`;
  console.log(walk);
  return walk;
}

// unleashDog
function unleashDog(name, breed) {
  const unleash = `Unleash ${name} the ${breed}`;
  console.log(unleash);
  return unleash;
}

const routine = [
  wakeDog,
  leashDog,
  walkToPark,
  throwFrisbee,
  walkHome,
  unleashDog,
];

// Lastly, create the function called exerciseDog that will take in two arguments:
function exerciseDog(dogName, dogBreed) {
    return routine.map(action => action(dogName, dogBreed))
}

// dogName
// dogBreed
// The function's implementation should

// Iterate over the routine Array
// Call each function in the array and
// pass the dogName and dogBreed received by exerciseDog() to the function as they are called
// capture the result of each function's call
// return an Array of all those functions' return values
