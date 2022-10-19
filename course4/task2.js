let runner = "Sandrius";

let position = 6;

let medal;

if (position === 1) {
  medal = "Auksas";
} else if (position === 2) {
  medal = "Sidabras";
} else if (position === 3) {
  medal = "Bronza";
} else {
  medal = "medinis nebent sitam duxui";
}

console.log(
  `Jusu begikas kurio vardas ${runner} uzeme ${position} vieta ir iskovojo ${medal} medali`
);
