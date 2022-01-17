import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import { useField } from "formik";
import CustomInput from "./CustomInput";
import CustomSelectCountry from "./CustomSelectCountry";

const InputPhone = ({ label, placeholder, ...props }) => {
    const [{ onChange, ...field }, meta, helpers] = useField(props);
    const { setValue } = helpers;

    const handleChange = (value) => {
        setValue(value);
    };
    return (
        <div>
            <label
                htmlFor="phone"
                className="block text-sm font-medium text-white sm:text-gray-700 dark:text-white after:content-['*'] after:ml-0.5 after:text-red-500"
            >
                {label}
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
                <PhoneInput
                    placeholder={placeholder}
                    international
                    countryCallingCodeEditable={false}
                    error={
                        field.value
                            ? isValidPhoneNumber(field.value)
                                ? undefined
                                : "Invalid phone number"
                            : "Phone number required"
                    }
                    inputComponent={CustomInput}
                    limitMaxLength
                    className="bg-gray-300 focus:bg-white focus:ring-primary-mn-blue dark:focus:ring-primary-mn-blue-light
                    focus:border-primary-mn-blue block w-full pl-4 sm:text-sm border-gray-300 rounded-md"
                    countrySelectComponent={CustomSelectCountry}
                    {...field}
                    {...props}
                    onChange={handleChange}
                    numberInputProps={{
                        required: meta.touched && meta.error ? true : false,
                    }}
                />
            </div>
            {meta.touched && meta.error ? (
                <span className="text-xs text-red-500">{meta.error}</span>
            ) : null}
        </div>
    );
};

export default InputPhone;
