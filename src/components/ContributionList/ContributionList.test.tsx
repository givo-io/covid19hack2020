import React from "react";
import { render } from '@testing-library/react';
import ContributionList from "./ContributionList";

test('ContributionList init test', () => {
  const { getByText } = render(<ContributionList />);
  const el = getByText(/ContributionList/i)
  expect(el).toBeInTheDocument();
});