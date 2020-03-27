import React from "react";
import { render } from '@testing-library/react';
import CreateAccount from "./CreateAccount";

test('CreateAccount init test', () => {
const { getByText } = render(<CreateAccount />);
const el = getByText(/CreateAccount/i)
expect(el).toBeInTheDocument();
});