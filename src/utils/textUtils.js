import idx from "nth-indexof";

export const cleanCaption = caption => {
  if (caption.indexOf("#") < 0) {
    return caption;
  }

  return caption.substr(0, idx(caption, "#", 2));
};
