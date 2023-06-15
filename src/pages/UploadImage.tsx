import { useRef } from "react";
import Header from "../components/Header";
import camera from "../assets/camera.svg";
import chair from "../assets/chair.svg";
import lamp from "../assets/lamp.svg";

interface InputFieldProps {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  setImgUrl: React.Dispatch<React.SetStateAction<null | string>>;
}

function UploadImage({ setStep, setImgUrl }: InputFieldProps) {
  const labelRef = useRef<HTMLLabelElement>(null);

  const handleUploadImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImgUrl(imageUrl);
    }
    setStep(1);
  };

  const handleClickButton = () => {
    if (labelRef.current) {
      labelRef.current.click();
    }
  };

  return (
    <div className="h-screen flex flex-col items-center justify-start gap-[100px] bg-[url('./assets/background.svg')]">
      <Header />
      <div className="relative w-[700px] h-[625px] flex flex-col justify-center items-center gap-12 rounded-md bg-white">
        <label
          ref={labelRef}
          htmlFor="img"
          className="w-4/5 h-3/5 border-2 border-dashed flex items-center justify-center cursor-pointer"
        >
          <img src={camera} alt="camera" />
          <input
            className="hidden"
            type="file"
            id="img"
            accept="image/*"
            capture="environment"
            onChange={handleUploadImage}
          />
        </label>
        <button
          className="w-[452px] h-[70px] text-semibold text-white bg-[#CC7541] text-xl uppercase rounded-lg"
          onClick={handleClickButton}
        >
          Upload Your Photo Here!
        </button>
        <img
          src={chair}
          alt="chair"
          className="w-[220px] absolute bottom-[80px] left-[-120px]"
        />
        <img
          src={lamp}
          alt="lamp"
          className="w-[150px] absolute top-[80px] right-[-80px]"
        />
      </div>
    </div>
  );
}

export default UploadImage;
