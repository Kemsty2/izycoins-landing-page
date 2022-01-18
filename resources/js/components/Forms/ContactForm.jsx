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
          { value: "Asset Management", label: "Asset Management" },
          { value: "Hedge Funds", label: "Hedge Funds" },
          { value: "Family Office", label: "Family Office" },
          { value: "Personal Investment", label: "Personal Investment" },
          { value: "Others", label: "Others" },
        ]}
      />

      <InputSelect
        id="position"
        label="Position"
        icon={AcademicCapIcon}
        name="position"
        options={[
          { value: "", label: "Choose Your Position" },
          { value: "Portfolio Manager", label: "Portfolio Manager" },
          { value: "Fund Manager", label: "Fund Manager" },
          { value: "CEO / CIO", label: "CEO / CIO" },
          { value: "Investors", label: "Investors" },
          { value: "Individual", label: "Individual" },
          { value: "Other", label: "Other" },
        ]}
      />
    </>
  );
};

export default ContactForm;
