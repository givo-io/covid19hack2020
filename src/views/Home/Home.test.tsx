import React from "react";
import { render } from '@testing-library/react';
import Home from "./Home";

test('Home init test', () => {
  const { getByText } = render(<Home />);
  const el = getByText(/Home/i)
  expect(el).toBeInTheDocument();
});