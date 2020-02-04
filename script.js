window.onload = function () {

    window.currentCalDate = new Date();
    window.createTable = function (nextDate) {
        let todayDate = new Date();
        let newDate;

        let table = document.createElement("table");
        table.setAttribute("class", "cal-table");

        let tableRow = document.createElement("tr");
        tableRow.setAttribute("id", "table-row");
        table.appendChild(tableRow);

        let emptyTableHeader = document.createElement("th");
        emptyTableHeader.setAttribute("id", "empty-table-header");
        table.appendChild(emptyTableHeader);

        let sectionCalendar = document.getElementById("calendar");
        sectionCalendar.appendChild(table);

    }
}
