import React from 'react';
import { cleanup, render } from '@testing-library/react';
import ForecastList from '../../components/forecast-list';
import moment from 'moment';

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
        
        const testDate1 = moment(123456789).format('ddd Do MMM');
        const testDate2 = moment(456).format('ddd Do MMM');

        expect(getAllByText(testDate1)).toBeTruthy();
        expect(getAllByText(testDate1)).toHaveLength(1);

        expect(getAllByText(testDate2)).toBeTruthy();
        expect(getAllByText(testDate2)).toHaveLength(1);
    });
});