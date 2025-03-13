"use client";
import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import RangeInput from "./RangeInput";
import RadioButtonGroup from "./RadioButtonGroup";
import { options } from "./calculationOptions";

export default function CostsCalculator() {
  const t = useTranslations("homePage.calculator");
  const [employees, setEmployees] = useState(30);
  const [operations, setOperations] = useState(3);
  const [ownershipForm, setOwnershipForm] = useState("tov");
  const [estimatedCost, setEstimatedCost] = useState(0);

  const rangeInputData = [
    {
      label: t("employees"),
      maxValue: 150,
    },
    {
      label: t("operations"),
      maxValue: 10,
    },
  ];

  useEffect(() => {
    const currentOption = options.find(
      (option) => option.value === ownershipForm
    );
    if (currentOption) {
      setEstimatedCost(currentOption.formula(employees, operations));
    }
  }, [employees, operations, ownershipForm]);

  return (
    <>
      <ul className="flex flex-col sm:flex-row gap-4">
        {rangeInputData.map(({ label, maxValue }, idx) => (
          <RangeInput
            key={idx}
            label={label}
            maxValue={maxValue}
            value={idx === 0 ? employees : operations}
            handleChange={(newValue: number | number[]) => {
              const value = Array.isArray(newValue) ? newValue[0] : newValue;
              if (idx === 0) setEmployees(value);
              else setOperations(value);
            }}
          />
        ))}
        <RadioButtonGroup
          handleChange={setOwnershipForm}
          selectedValue={ownershipForm}
        />
      </ul>
      <div className="mt-4 px-[14px] xl:px-4 py-[17px] xl:py-[21px] rounded-[6px] bg-black text-16reg leading-none text-center">
        {t("estimatedCost")}
        {estimatedCost}
        {t("hrnPerMonth")}
      </div>
    </>
  );
}
