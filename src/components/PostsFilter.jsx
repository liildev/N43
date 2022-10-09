import React from "react";
import Input from "./UI/Input/Input";
import Select from "./UI/Select/Select";

export default function PostsFilter({ filter, setFilter }) {
  return (
    <div>
      <Input
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
        placeholder={"Search"}
      />

      <Select
        defaultValue={"Sort"}
        value={filter.sort}
        onChange={(sort) => setFilter({ ...filter, sort: sort })}
        options={[
          { value: "title", name: "By title" },
          { value: "body", name: "By body" },
        ]}
      />
    </div>
  );
}
