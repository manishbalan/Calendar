import React from "react";
import {getDate} from './helper'
import moment from "moment";

const Caledar = ({ date }) => {
    // getting current month and year
    const currentMonthName = moment(date).format("MMMM");
    const currentYear = new Date(date).getFullYear();;

    return (
            <div className="tableContainer">
                <table celled="true" padded={"true"} className="calender-date">
                    <thead>
                        <tr>
                            <th colSpan={7}>
                                <h2 className="month-name">{currentMonthName} {currentYear}</h2>
                            </th>
                        </tr>
                        <tr>
                            <th>Su</th>
                            <th>Mo</th>
                            <th>Tu</th>
                            <th>We</th>
                            <th>Th</th>
                            <th>Fr</th>
                            <th>Sa</th>
                        </tr>
                        </thead>
                        <tbody>
                        {getDate(date)}
                    </tbody>
                </table>
            </div>
    )
}


export default Caledar;