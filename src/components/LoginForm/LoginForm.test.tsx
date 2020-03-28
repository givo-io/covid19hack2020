import React from "react";
import { render, fireEvent, screen } from '@testing-library/react';
import LoginForm from "./LoginForm";

test('LoginForm init test', () => {
  render(<LoginForm />);
  const user = screen.getByLabelText(/username/i)
  const pwd = screen.getByLabelText(/password/i)

  fireEvent.change(user, {
    target: {value: 'testUser'},
  });

  fireEvent.change(pwd, {
    target: {value: 'testPassword'},
  });

  expect(user).toHaveValue("testUser");
  expect(pwd).toHaveValue("testPassword");
});