import React from "react";
import { render } from '@testing-library/react';
import AppBar from "./AppBar";

test('AppBar init test', () => {
  const { getByText } = render(<AppBar />);
  const el = getByText(/AppBar/i)
  expect(el).toBeInTheDocument();
});