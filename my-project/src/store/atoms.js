import { atom } from "jotai";

export const stepAtom = atom(1);
export const formDataAtom = atom({
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  company: "",
  size: "small",
  industry: "",
  role: "",
});
