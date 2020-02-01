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
var para = document.createElement("P");                       // Create a <p> node
var t = document.createTextNode("This is a paragraph.");      // Create a text node
para.appendChild(t);                                          // Append the text to <p>
document.getElementById("calendar").appendChild(para);