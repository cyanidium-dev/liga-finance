import { ErrorMessage, Field, FormikErrors, FormikTouched } from "formik";
import MaskedInput from "react-text-mask";

interface Values {
  [fieldName: string]: string;
}

interface CustomizedInputProps {
  fieldName: string;
  placeholder: string;
  errors: FormikErrors<Values>;
  touched: FormikTouched<Values>;
  as?: string | typeof MaskedInput;
  wrapperClassName?: string;
  fieldClassName?: string;
  mask?: string | RegExp | (string | RegExp)[];
  autocomplete?: string;
  inputType?: string;
}

const labelStyles = "relative flex flex-col w-full";
const fieldStyles =
  "relative w-full h-full px-6 py-[13px] placeholder-white border-[1.5px] border-white rounded-full bg-transparent outline-none text-14light transition duration-300 ease-out";
const fieldWrapperStyles =
  "relative before:content-[''] before:absolute before:top-[-2.5px] before:left-[-2px] before:rounded-[8px] before:w-[calc(100%+5px)] before:h-[calc(100%+5px)] before:blur-[2px] before:transition before:duration-300 before:ease-out before:will-change-transform";
const errorStyles = "absolute bottom-[-19px] right-0 text-10light text-darkRed";

export default function CustomizedInput({
  errors,
  touched,
  fieldName,
  placeholder = "",
  as,
  wrapperClassName = "",
  fieldClassName = "",
  mask = "",
  autocomplete = "on",
  inputType = "text",
}: CustomizedInputProps) {
  return (
    <label className={labelStyles}>
      <div
        className={`${fieldWrapperStyles} ${wrapperClassName} ${
          errors[fieldName] && touched[fieldName]
            ? "before:bg-red"
            : "before:bg-transparent focus-within:before:bg-greenKhaki"
        }`}
      >
        <Field
          as={as}
          mask={mask}
          name={fieldName}
          type={inputType}
          autoComplete={autocomplete}
          placeholder={placeholder}
          className={`${fieldStyles} ${fieldClassName} ${
            errors[fieldName] && touched[fieldName]
              ? "border-red"
              : "border-grey focus-within:border-green"
          }`}
        ></Field>
      </div>
      <ErrorMessage
        name={fieldName}
        component="p"
        className={errorStyles}
      ></ErrorMessage>
    </label>
  );
}
