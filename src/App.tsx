import { useState } from "react";
import UploadImage from "./pages/UploadImage";
import Stylings from "./pages/Stylings";

function App() {
  const [step, setStep] = useState(0);
  const [originalImg, setOriginalImg] = useState<File | null>(null);
  const [imgUrl, setImgUrl] = useState<string | null>(null);

  return (
    <>
      {step === 0 && (
        <UploadImage
          setStep={setStep}
          setImgUrl={setImgUrl}
          setOriginalImg={setOriginalImg}
        />
      )}
      {step === 1 && (
        <Stylings
          imgUrl={imgUrl as string}
          setStep={setStep}
          originalImg={originalImg}
        />
      )}
    </>
  );
}

export default App;
