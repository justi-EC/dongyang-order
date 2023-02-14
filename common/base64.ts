import * as imgToBase64 from "react-native-image-base64";

export const imgToBase64Code = async (url: string) => {
  return await imgToBase64.getBase64String(url);
};
