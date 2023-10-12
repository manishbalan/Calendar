import moment from "moment";

// function to check and grey out previous & next months visible dates
const isExtraDays = (week, date) => {
    if (week === 0 && date > 10) {
        return true;
    } else if (week === 5 && date < 10) {
        return true;
    } else if (week === 4 && date < 10) {
        return true;
    } else {
        return false;
    }
};

//function to check current date
const isCurrentDate = (date1, date2) => {
    return moment(date1).format("DD") === date2
}

//function to get all days by week
export const getDate = (date) => {
    const month = new Date(date).getMonth();;
    const year = new Date(date).getFullYear();;
    var calendar = [];

    const startDate = moment([year, month])
        .clone()
        .startOf("month")
        .startOf("week");

    const endDate = moment([year, month]).clone().endOf("month");

    const day = startDate.clone().subtract(1, "day");

    // looping a month by a week
    while (day.isBefore(endDate, "day")) {
        calendar.push(
            Array(7)
                .fill(0)
                .map(() => day.add(1, "day").clone().format("DD"))
        );
    }

    if (calendar.length > 0) {
        return calendar.map((week, index) => (
            <tr key={'row-' + index} className="calender-row">
                {week.map((day, ind) => (
                    <td key={'col-' + ind} className="calender-col">
                        <span className="day-value">
                            {isExtraDays(index, day) ? (
                                <span className="isDates-grey">{day}</span>
                            ) : (
                                isCurrentDate(date, day) ? (<span className="current-date">{day}</span>) : day
                            )}
                        </span>
                    </td>
                ))}
            </tr>
        ));
    }
};