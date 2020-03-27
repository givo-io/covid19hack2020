import React from "react";
import { render } from '@testing-library/react';
import AddOffer from "./AddOffer";

test('AddOffer init test', () => {
const { getByText } = render(<AddOffer />);
const el = getByText(/AddOffer/i)
expect(el).toBeInTheDocument();
});