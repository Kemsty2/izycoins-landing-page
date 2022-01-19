import {
  UserIcon,
  AtSymbolIcon,
  AcademicCapIcon,
  BriefcaseIcon,
} from "@heroicons/react/solid";
import InputField from "./InputField";
import InputPhone from "./InputPhone";
import InputSelect from "./InputSelect";

const ContactForm = () => {
  return (
    <>
      <InputField
        id="firstname"
        label="First Name"
        type="text"
        icon={UserIcon}
        name="firstname"
        placeholder="Enter your name"
      />
      <InputField
        id="surname"
        label="Surname"
        type="text"
        icon={UserIcon}
        name="surname"
        placeholder="Enter your surname"
      />

      <InputField
        id="email"
        label="Email"
        type="email"
        icon={AtSymbolIcon}
        name="email"
        placeholder="Enter your email"
      />

      <InputPhone
        label="Phone"
        placeholder="Enter your phone"
        id="phone"
        name="phone"
      />

      <InputSelect
        id="sector"
        label="Sector"
        icon={BriefcaseIcon}
        name="sector"
        options={[
          { value: "", label: "Choose Your Sector" },
          { value: "Personal Investment", label: "Personal Investment" },
        ]}
      />

      <InputSelect
        id="position"
        label="Position"
        icon={AcademicCapIcon}
        name="position"
        options={[
          { value: "", label: "Choose Your Position" },
          { value: "Individual", label: "Individual" },
        ]}
      />
    </>
  );
};

export default ContactForm;
