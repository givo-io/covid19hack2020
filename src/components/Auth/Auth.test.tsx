import React from "react";
import { render } from '@testing-library/react';
import Auth from "./Auth";

test('Auth init test', () => {
  const { getByText } = render(<Auth />);
  const el = getByText(/Auth/i)
  expect(el).toBeInTheDocument();
});