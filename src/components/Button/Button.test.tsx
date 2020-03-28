import React from "react";
import { render } from '@testing-library/react';
import Button from "./Button";

test('Button init test', () => {
  const { getByText } = render(<Button />);
  const el = getByText(/Button/i)
  expect(el).toBeInTheDocument();
});