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
      .then((jsonBody: Dog) => setDog((dog) => [jsonBody, ...dog]));
  };

  if (dog.length > 0) {
    return (
      <div>
        <h1>Dog app</h1>
        <img src={dog[0].message} alt={"#"} width="300px" />
        <hr />
        <button onClick={handleGetDog}>Get another dog</button>
        <p>
          your last dogs:{" "}
          {dog.slice(1).map((dg) => (
            <li key={dg.message}>
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
