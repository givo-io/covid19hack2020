import React from "react";
import { render } from '@testing-library/react';
import FilterButton from "./FilterButton";

test('FilterButton init test', () => {
  const { getByText } = render(<FilterButton />);
  const el = getByText(/FilterButton/i)
  expect(el).toBeInTheDocument();
});