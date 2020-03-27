import React from "react";
import { render } from '@testing-library/react';
import AccountSettings from "./AccountSettings";

test('AccountSettings init test', () => {
const { getByText } = render(<AccountSettings />);
const el = getByText(/AccountSettings/i)
expect(el).toBeInTheDocument();
});