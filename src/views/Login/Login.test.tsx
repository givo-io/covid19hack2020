import React from "react";
import { render } from '@testing-library/react';
import Login from "./Login";

test('login init test', () => {
  const { getByText } = render(<Login />);
  const el = getByText(/login/i)
  expect(el).toBeInTheDocument();
});
