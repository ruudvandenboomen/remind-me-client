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
  const BASE_URL = useRuntimeConfig().public.apiUrl;
  const result = await $fetch(`${BASE_URL}/events`, {
    headers: event.headers,
  });
  return events.parse(result);
});
