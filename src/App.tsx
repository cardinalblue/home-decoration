import { useState } from "react";
import Header from "./components/Header";

function App() {
  const [step, setStep] = useState(0);
  const [imgUrl, setImgUrl] = useState("");

  return (
    <div className="h-screen bg-[url('./assets/background.svg')]">
      <Header />
    </div>
  );
}

export default App;
