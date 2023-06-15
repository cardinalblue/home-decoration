import { useState } from "react";
import UploadImage from "./pages/UploadImage";

function App() {
  const [step, setStep] = useState(0);
  const [imgUrl, setImgUrl] = useState<string | null>(null);

  return (
    <>
      {step === 0 && <UploadImage setStep={setStep} setImgUrl={setImgUrl} />}
      {step === 1 && <img src={imgUrl as string} />}
    </>
  );
}

export default App;
