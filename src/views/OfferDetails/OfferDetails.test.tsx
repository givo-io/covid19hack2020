import React from "react";
import { render } from '@testing-library/react';
import OfferDetails from "./OfferDetails";

test('OfferDetails init test', () => {
const { getByText } = render(<OfferDetails />);
const el = getByText(/OfferDetails/i)
expect(el).toBeInTheDocument();
});