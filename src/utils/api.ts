import Replicate from 'replicate';

const replicate = new Replicate({
  auth: import.meta.env.VITE_REPLICA_API_TOKEN,
});

// const output = await replicate.run(
//   "jagilley/controlnet-canny:aff48af9c68d162388d230a2ab003f68d2638d88307bdaf1c2f1ac95079c9613",
//   {
//     input: {
//       image: "..."
//     }
//   }
// );

export const fetchStylingImage = async (image: File) => {
  const styles = ['Luxury', 'Industrial', 'Scandinavian', 'Muji'];
  for (const style of styles) {
    const output = await replicate.run(
      "jagilley/controlnet-canny:aff48af9c68d162388d230a2ab003f68d2638d88307bdaf1c2f1ac95079c9613",
      {
        input: {
          image: image,
          prompt: style,
          num_outputs: 1,
          num_interface_steps: 25,
          guidance_scale: 7.5,
        }
      }
    );
    console.log(output);
  }
}