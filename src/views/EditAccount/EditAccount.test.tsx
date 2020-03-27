import React from "react";
import { render } from '@testing-library/react';
import EditAccount from "./EditAccount";

test('EditAccount init test', () => {
const { getByText } = render(<EditAccount />);
const el = getByText(/EditAccount/i)
expect(el).toBeInTheDocument();
});