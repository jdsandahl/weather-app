import React from 'react';
import { cleanup, render } from '@testing-library/react';
import ForecastList from '../../components/forecast-list';

const forecasts = [
    {
        date: 123,
        description: 'date1',
        icon:'icon1',
        temperature: {
            max: 999,
        },
    },
    {
        date: 456,
        description: 'date2',
        icon: 'icon2',
        temperature: {
            max: 888,
        },
    },
];

afterEach(cleanup);

describe("ForecastList", () => {
    const forecasts = [
        {
            date: 123,
            description: "date1",
            icon: "icon1",
            temperature: {
                max: 999,
            },
        },
        {
            date: 456,
            description: "date2",
            icon: "icon2",
            temperature: {
                max: 888,
            },
        },
    ];

    it("renders correctly to match ForecastList snapshot", () => {
        const { asFragment } = render(<ForecastList forecasts={ forecasts } />);
    
        expect(asFragment).toMatchSnapshot();
    });

    xit("renders the correct amount of ForecastSummary component props", () => {

    });
});