import React from "react";
import { render } from '@testing-library/react';
import ContributionListItem from "./ContributionListItem";

test('ContributionListItem init test', () => {
  const { getByText } = render(<ContributionListItem />);
  const el = getByText(/ContributionListItem/i)
  expect(el).toBeInTheDocument();
});