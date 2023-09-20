import { z } from "zod";

const events = z.array(
  z.object({
    _id: z.string(),
    date: z.string(),
    description: z.string(),
    daysUntilBirthday: z.number(),
  })
);

export default defineEventHandler(async (event) => {
  const result = await $fetch("http:localhost:4000/api/events");

  return events.parse(result);
});
