const SHIFT_AMOUNT = 3; // この数値だけ数字をシフトする

export const encrypt = (id: number): string => {
  // idを文字列に変換してBase64エンコード
  return btoa(id.toString());
};

export const decrypt = (encryptedId: string): number => {
  // Base64デコードして整数に変換
  return parseInt(atob(encryptedId));
};
