import React from 'react';
import { render, screen } from '@testing-library/react';

import { CustomButton } from '@/components';

const Component = <CustomButton>Test Button</CustomButton>;

// example test, illustrating path aliases working in Jest after configuration
describe('CustomButton', () => {
  it('renders the content correctly', () => {
    render(Component);
    const buttonText = screen.getByText(/test button/i);
    expect(buttonText).toBeInTheDocument();
  });
});
