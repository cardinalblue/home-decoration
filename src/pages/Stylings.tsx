import axios from "axios";
import { useEffect, useState } from "react";
import { fileToBlob } from "../utils/api";
import Loading from "./Loading";

interface StylingsProps {
  imgUrl: string;
  originalImg: File | null;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

interface StylingsImgType {
  url: string;
  style: string;
}

function Stylings({ imgUrl, originalImg }: StylingsProps) {
  const [stylingsImgs, setStylingsImgs] = useState<StylingsImgType[]>([]);
  const [isFetching, setIsFetching] = useState(false);

  const generateImagesWithStyles = async (imageFile: File) => {
    setIsFetching(true);
    const form = new FormData();
    const image = (await fileToBlob(imageFile)) as File;
    form.append("image", image);

    const { data }: { data: StylingsImgType[] } = await axios.post(
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
    console.log(data);
  };

  useEffect(() => {
    if (!originalImg) return;
    generateImagesWithStyles(originalImg);
  }, [originalImg]);

  return isFetching ? (
    <Loading />
  ) : (
    <div className="w-screen h-full flex flex-col gap-5 bg-[#E8E4E1]">
      <div className="w-full px-5 flex justify-between text-white font-semibold">
        <button className="w-[124px] h-[54px] uppercase bg-[#5B6B62] rounded-lg">
          Back
        </button>
        <button className="w-[124px] h-[54px] uppercase bg-[#CC7541] rounded-lg">
          Next
        </button>
      </div>
      <div className="w-screen px-6 py-2 flex flex-row items-center justify-center gap-10">
        <img
          src={imgUrl}
          alt="original"
          className="w-[800px] h-[600px] object-contain"
        />
        <div className="w-[250px] flex flex-col">
          <img src={imgUrl} alt="original" className="object-contain" />
          {stylingsImgs.map((img) => (
            <img
              key={img.url}
              src={img.url}
              alt="styling"
              className="object-contain"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Stylings;
