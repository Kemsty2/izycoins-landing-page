import * as Yup from "yup";
import { isValidPhoneNumber } from "react-phone-number-input";

export const newsletterValidationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required")
    //https://help.instapage.com/hc/en-us/articles/360036003074-Business-email-validation
    .matches(
      "^(?!.+@(google|yahoo|outlook|hotmail|msn)..+)(.+@.+..+)$",
      "Please enter a business email"
    ),
  firstname: Yup.string()
    .max(100, "Must be 100 characters or less")
    .required("First Name is required!"),
  phone: Yup.string()
    .required("Phone is required")
    .test("phoneFormat", "Please enter a valid phone number", (value) => {
      return value && isValidPhoneNumber(value);
    }),
  surname: Yup.string()
    .max(100, "Must be 100 characters or less")
    .required("Surname is required!"),
  sector: Yup.string()
    .oneOf(
      ["Asset Management", "Hedge Funds", "Family Office", "Others"],
      "Choose a valid sector"
    )
    .required("Sector is Required"),
  position: Yup.string()
    .oneOf(
      ["Portfolio Manager", "Fund Manager", "CE0 / CIO", "Investors"],
      "Choose a valid position"
    )
    .required("Position is Required"),
});

function isCorporateEmail(value) {
  return false;
}
