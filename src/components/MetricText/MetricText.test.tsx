import React from "react";
import { render } from '@testing-library/react';
import MetricText from "./MetricText";

test('MetricText init test', () => {
  const { getByText } = render(<MetricText />);
  const el = getByText(/MetricText/i)
  expect(el).toBeInTheDocument();
});