export const fetcher = async (args: string) => {
  const response = await fetch(args);
  return await response.json();
};
