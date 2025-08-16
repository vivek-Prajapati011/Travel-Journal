import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./component/Header";
import data from "./data";
import Card from "./component/Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container">
        <Header />
        <div>
          {data.map((item) => (
            <Card
              key={item.id}
              title={item.title}
              location={item.location}
              imageUrl={item.imageUrl}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
