import z from "zod";

export const managementValidation = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 3 characters ." })
    .max(50, { message: "Name cannot be longer than 50 characters." }),
  image: z.string().url({ message: "Image must be a valid URL." }),
  position: z.string(),
});
