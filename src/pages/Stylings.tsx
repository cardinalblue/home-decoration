import axios from "axios";
import { useEffect, useState } from "react";
import { fileToBlob } from "../utils/api";
import Loading from "./Loading";

interface StylingsProps {
  imgUrl: string;
  originalImg: File | null;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

function Stylings({ setStep, imgUrl, originalImg }: StylingsProps) {
  const [stylingsImgs, setStylingsImgs] = useState<any[]>([]);
  const [isFetching, setIsFetching] = useState(false);

  const generateImagesWithStyles = async (imageFile: File) => {
    setIsFetching(true);
    const form = new FormData();
    const image = (await fileToBlob(imageFile)) as File;
    form.append("image", image);

    const { data }: { data: any } = await axios.post(
      "https://explore-sticker-ai-api.dumdumgenius.com/controlnet-canny",
      form,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    setIsFetching(false);
    setStylingsImgs(data);
    console.log("data", data);
  };

  useEffect(() => {
    if (!originalImg) return;
    generateImagesWithStyles(originalImg);
  }, [originalImg]);

  return isFetching ? (
    <Loading />
  ) : (
    <div>
      {stylingsImgs.map((img) => (
        <img src={img.url} alt="styling" />
      ))}
    </div>
  );
}

export default Stylings;
