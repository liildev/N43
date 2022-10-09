import React from "react";

export default function Select({ defaultValue, value, onChange, options }) {
  return (
    <select value={value} onChange={(e) => onChange(e.target.value)}>
      <option disabled>{defaultValue}</option>

      {options.map((option) => (
        <option key={option.value} value={option.value}>{option.name}</option>
      ))}
    </select>
  );
}
