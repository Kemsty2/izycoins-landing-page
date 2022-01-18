import { useMemo, useCallback } from "react";
import { getCountryCallingCode } from "react-phone-number-input/input";
import getUnicodeFlagIcon from "country-flag-icons/unicode";

const DIVIDER_STYLE = {
  fontSize: "1px",
  backgroundColor: "currentColor",
  color: "inherit",
};

function getSelectedOption(options, value) {
  for (const option of options) {
    if (!option.divider && option.value === value) {
      return option;
    }
  }
}

function CountrySelect({ value, onChange, options, ...rest }) {
  const onChange_ = useCallback(
    (event) => {
      const value = event.target.value;
      onChange(value === "ZZ" ? undefined : value);
    },
    [onChange]
  );

  // "ZZ" means "International".
  // (HTML requires each `<option/>` have some string `value`).
  return (
    <select
      {...rest}
      value={value || "ZZ"}
      onChange={onChange_}
      className="PhoneInputCountrySelect bg-gray-300 pl-4 pr-12 sm:text-sm"
    >
      {options.map(({ value, label, divider }) => (
        <option
          key={divider ? "|" : value || "ZZ"}
          value={divider ? "|" : value || "ZZ"}
          disabled={divider ? true : false}
          style={divider ? DIVIDER_STYLE : undefined}
        >
          {label} +{getCountryCallingCode(value)}
        </option>
      ))}
    </select>
  );
}

export default function CustomSelectCountry({
  value,
  options,
  className,
  iconComponent: Icon,
  getIconAspectRatio,
  unicodeFlags,
  ...rest
}) {
  const selectedOption = useMemo(() => {
    return getSelectedOption(options, value);
  }, [options, value]);

  return (
    <div className="PhoneInputCountry">
      <CountrySelect {...rest} value={value} options={options} />

      {/* Either a Unicode flag icon. */}
      {unicodeFlags && value && (
        <div className="PhoneInputCountryIconUnicode">
          {getUnicodeFlagIcon(value)}
        </div>
      )}

      {/* Or an SVG flag icon. */}
      {!(unicodeFlags && value) && (
        <Icon
          country={value}
          label={selectedOption && selectedOption.label}
          aspectRatio={unicodeFlags ? 1 : undefined}
        />
      )}

      <div className="PhoneInputCountrySelectArrow" />
    </div>
  );
}
