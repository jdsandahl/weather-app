import React from 'react';
import { cleanup, render } from '@testing-library/react';
import ForecastList from '../../components/forecast-list';

afterEach(cleanup);

describe("ForecastList", () => {
    const forecasts = [
        {
            date: 123456789,
            description: "date1",
            icon: "200",
            temperature: {
                max: 999,
            },
        },
        {
            date: 456,
            description: "date2",
            icon: "200",
            temperature: {
                max: 888,
            },
        },
    ];

    it("renders correctly to match ForecastList snapshot", () => {
        const { asFragment } = render(<ForecastList forecasts={ forecasts } />);
    
        expect(asFragment()).toMatchSnapshot();
    });

    it("renders the correct amount of ForecastSummary component props", () => {
        const { getAllByTestId } = render (<ForecastList forecasts={ forecasts } />);

        expect(getAllByTestId("date-id")).toHaveLength(2);
        expect(getAllByTestId("icon-id")).toHaveLength(2);
        expect(getAllByTestId("temperature-id")).toHaveLength(2);
        expect(getAllByTestId("description-id")).toHaveLength(2);
    });

    it("renders the correct dates and in the correct format", () => {
        const { getAllByText } = render (<ForecastList forecasts={ forecasts } />);

        expect(getAllByText('Fri 2nd Jan')).toBeTruthy();
        expect(getAllByText('Fri 2nd Jan')).toHaveLength(1);

        expect(getAllByText('Thu 1st Jan')).toBeTruthy();
        expect(getAllByText('Thu 1st Jan')).toHaveLength(1);
    });
});