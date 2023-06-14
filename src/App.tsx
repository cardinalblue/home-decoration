import { useState } from "react";
import camera from "./assets/camera.svg";

function App() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImageUrl(imageUrl);
    }
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="w-[512px] h-[512px] flex justify-center items-center bg-gray-300 rounded-md">
        {imageUrl ? (
          <img className="" src={imageUrl} alt="Image" />
        ) : (
          <label htmlFor="img">
            <img src={camera} alt="camera" />
            <input
              className="hidden"
              type="file"
              id="img"
              accept="image/*"
              capture="environment"
              onChange={(e) => handleOnChange(e)}
            />
          </label>
        )}
      </div>
    </div>
  );
}

export default App;
