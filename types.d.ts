import { links } from "./lib/data";

type LinkName = (typeof links)[number]['name']

// type SendEmail = {
//   text: string | FormDataEntryValue
// }