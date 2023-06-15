import { useState } from "react";
import UploadImage from "./pages/UploadImage";
import Loading from "./pages/Loading";

function App() {
  const [step, setStep] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [imgUrl, setImgUrl] = useState<string | null>(null);

  return (
    <>
      {isLoading && <Loading />}
      {step === 0 && <UploadImage setStep={setStep} setImgUrl={setImgUrl} />}
    </>
  );
}

export default App;
