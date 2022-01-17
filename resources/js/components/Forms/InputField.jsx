import { useField } from "formik";

const InputField = ({ label, icon: Icon, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <label
        htmlFor={props.id || props.name}
        className="block text-sm font-medium text-white sm:text-gray-700 dark:text-white after:content-['*'] after:ml-0.5 after:text-red-500"
      >
        {label}
      </label>
      <div className="mt-1 relative rounded-md shadow-sm">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Icon className="w-4 h-4" />
        </div>
        <input
          {...field}
          {...props}
          required={meta.touched && meta.error ? true : false}
          className="bg-gray-300 focus:bg-white focus:ring-primary-mn-blue dark:focus:ring-primary-mn-blue-light
                    focus:border-primary-mn-blue block w-full pl-10 pr-12 sm:text-sm border-gray-300 rounded-md
                    required:border-red-500 required:text-red-600 focus:required:border-red-500 focus:required:ring-red-500"
        />
      </div>
      {meta.touched && meta.error ? (
        <span className="text-xs text-red-500">{meta.error}</span>
      ) : null}
    </div>
  );
};
export default InputField;
