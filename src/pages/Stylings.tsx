import { useEffect, useState } from "react";
import { fetchStylingImage } from "../utils/api";

interface StylingsProps {
  imgUrl: string;
  originalImg: File | null;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

function Stylings({ setStep, imgUrl, originalImg }: StylingsProps) {
  const [stylingsImgs, setStylingsImgs] = useState<string[]>([]);
  useEffect(() => {
    fetchStylingImage(originalImg as File).then((res) => {
      console.log(res);
      //   setStylingsImgs(res);
    });
  }, [originalImg]);

  return (
    <div>
      {stylingsImgs.map((img) => (
        <img src={img} alt="styling" />
      ))}
    </div>
  );
}

export default Stylings;
