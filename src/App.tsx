import { useState } from "react";

interface Dog {
  message: string;
  status: string;
}

function App() {
  const [dog, setDog] = useState<Dog[]>([]);

  const handleGetDog = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((jsonBody: Dog) => setDog((dog) => [...dog, jsonBody]));
  };

  if (dog.length > 0) {
    return (
      <div>
        <h1>Dog app</h1>
        <img src={dog[dog.length - 1].message} alt={"#"} width="300px" />
        <hr />
        <button onClick={handleGetDog}>Get another dog</button>
        <p>
          your last dogs:{" "}
          {dog.slice(-6, -1).map((dg, index) => (
            <li key={index}>
              <img src={dg.message} alt={"#"} width="50px" />
            </li>
          ))}
        </p>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Dog app</h1>
        <p>
          Click the button to trigger a <code>fetch</code> that gets a random
          dog from an API!
        </p>
        <button onClick={handleGetDog}>Get dog</button>
      </div>
    );
  }
}

export default App;

// interface Joke {
//   id: number;
//   type: string;
//   setup: string;
//   punchline: string;
// }

// function App() {
//   const [joke, setJoke] = useState<Joke>();

//   // const handleGetJoke = async () => {
//   //   const response = await fetch(
//   //     "https://jokestemp.neillbogie.repl.co/jokes/general/random"
//   //   );
//   //   const jsonBody: Joke[] = await response.json();
//   //   setJoke(jsonBody[0]);
//   // };

//   const handleGetJoke = () => {
//     fetch("https://jokestemp.neillbogie.repl.co/jokes/general/random")
//       .then((response) => response.json())
//       .then((jsonBody: Joke[]) => setJoke(jsonBody[0]));
//   };

//   if (joke) {
//     return (
//       <div>
//         <h1>Joke app</h1>
//         <details>
//           <summary>{joke.setup}</summary>
//           <p>{joke.punchline}</p>
//         </details>
//         <hr />
//         <button onClick={handleGetJoke}>Get another joke</button>
//       </div>
//     );
//   } else {
//     return (
//       <div>
//         <h1>Joke app</h1>
//         <p>
//           Click the button to trigger a <code>fetch</code> that gets a random
//           joke from an API!
//         </p>
//         <button onClick={handleGetJoke}>Get joke</button>
//       </div>
//     );
//   }
// }

// export default App;
