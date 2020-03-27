import React from "react";
import { render } from '@testing-library/react';
import OfferList from "./OfferList";

test('OfferList init test', () => {
  const { getByText } = render(<OfferList />);
  const el = getByText(/OfferList/i)
  expect(el).toBeInTheDocument();
});