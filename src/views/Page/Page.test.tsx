import React from "react";
import { render } from '@testing-library/react';
import Page from "./Page";

test('Page init test', () => {
  const { getByText } = render(<Page>Test Page</Page>);
  const el = getByText(/Page/i)
  expect(el).toBeInTheDocument();
});