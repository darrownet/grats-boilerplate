import {FormEvent} from "react";


interface IFormData {
  description: string;
  url: string;
}
export function getFormData (formEvent:FormEvent):IFormData {
  return Array.prototype.slice.call(formEvent.target)
    .filter(el => el.name)
    .reduce((form, el) => ({
      ...form,
      [el.name]: el.value,
    }), {});
};
