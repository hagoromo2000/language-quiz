export const generateRandomNumber = () => Math.floor(Math.random() * 1001);

export const encrypt = (id: number): string => {
  return btoa(id.toString());
};

export const decrypt = (encryptedId: string): number => {
  return parseInt(atob(encryptedId));
};
