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
  const [selectedImage, setSelectedImage] = useState<string>(imgUrl);

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
      <div className="w-screen grow px-6 py-2 flex flex-row items-center justify-around">
        <img
          src={selectedImage}
          alt="selected"
          className="w-[800px] h-[600px] object-contain rounded-md"
        />
        <div className="w-[250px] h-full flex flex-col">
          <div className="flex flex-col">
            <div
              className={[
                "uppercase",
                selectedImage === imgUrl ? " text-orange-500" : "",
              ].join(" ")}
            >
              Original Photo
            </div>
            <img
              src={imgUrl}
              alt="original"
              className={[
                "w-[250px] h[200px] object-contain rounded-md",
                selectedImage === imgUrl ? "ring-4 ring-orange-500" : "",
              ].join(" ")}
              onClick={() => setSelectedImage(imgUrl)}
            />
          </div>
          {stylingsImgs.map((img) => (
            <div className="flex flex-col">
              <div
                className={[
                  "uppercase",
                  selectedImage === img.url ? " text-orange-500" : "",
                ].join(" ")}
              >
                {img.style}
              </div>
              <img
                key={img.url}
                src={img.url}
                alt="styling"
                className={[
                  "w-[250px] h[200px] object-contain rounded-md",
                  selectedImage === img.url ? "ring-4 ring-orange-500" : "",
                ].join(" ")}
                onClick={() => setSelectedImage(img.url)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Stylings;
