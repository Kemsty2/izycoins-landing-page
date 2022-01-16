import { forwardRef } from "react";

const CustomInput = forwardRef((props, ref) => (
    <input
        {...props}
        ref={ref}
        id="phone"
        name="phone"
        type="tel"
        className="bg-gray-300 focus:bg-white focus:ring-primary-mn-blue dark:focus:ring-primary-mn-blue-light
    focus:border-primary-mn-blue block w-full sm:text-sm border-gray-300 rounded-md
    required:border-red-500 required:text-red-600 focus:required:border-red-500 focus:required:ring-red-500"
    />
));

export default CustomInput;
