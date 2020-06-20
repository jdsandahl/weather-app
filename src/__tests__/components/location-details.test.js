import React from 'react';
import { render } from '@testing-library/react';
import LocationDetails from '../../components/location-details';

it('renders correct className applied to the element containing city and location text', () => {
    const { getByText } = render (
        <LocationDetails city="Manchester" country="UK" />
    );

    expect(getByText("Manchester, UK")).toHaveClass("location-details");
}); 