export const fileToBlob = (file: File) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onloadend = () => {
      const blob = new Blob([reader.result as string | ArrayBuffer], { type: file.type });
      resolve(blob);
    };

    reader.onerror = reject;

    reader.readAsArrayBuffer(file);
  });
};