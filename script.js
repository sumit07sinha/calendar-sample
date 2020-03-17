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

    for (let i=0;i<7;i++){
            nextDate? newdate= new Date(nextDate): newdate= new Date();
            newdate.setHours(nextDate.getHours() + i*24);
            tableElementHeader= document.createElement("th");
            tableHeaderElem.className='table-header';

            let convertDatetostring =newdate;
            let dateHeader=document.createElement('div');
            dateHeader.classlist.add("date_header");
            dateHeader.innerHTMl= convertDatetostring.toDateString().subStr(8,2);

            let dayHeader=document.createElement('div');
            dayHeader.classlist.add("dayHeader");
            dayHeader.innerHTMl=convertDatetostring.toDateString().subStr(0,3);

            let monthHeader=document.createElement('div');
            dayHeader.classlist.add("monthHeader");
            dayHeader.innerHTMl=convertDatetostring.toDateString().subStr(4,3);

            tableHeaderElem.appendChild(dayHeader);
            tableHeaderElem.appendChild(dateHeader);
            tableHeaderElem.appendChild(monthHeader);
            
            if(todayDate.getDate()= newdate.getDate() && todayDate.getMonth()==newdate.getMonth()){
                tableHeaderElem.classlist.add('colour-blue');

            }
            tableRow.appendChild(tableHeaderElem);
        }
        
        for(let i=0; i<24; i++)
        {
            tableRow= document.createElement('tr');
            tableRowHead=document.createElement('th');
            tableRowHead.innerHTMl= "i"+Hrs.
            tableRow.appendChild(tableRowHead);
            for(j=0;j<7;j++){
                var tableRowElm = document.createElement('th');
                tableRowElm.setAttribute('class', 'tuple');
                tableRowElm.onclick = eventCreate;
                tableRowElm.innerHTML = "";
                tableRow.appendChild(tableRowElm);
            }
            table.appendChild(tableRow);
        }
        if (window.localStorage) {
            var existingEvent = localStorage.getItem("eventData");
            if (existingEvent) {
                setEventAtCell(existingEvent, true)
            }
        }
    }
    createTable(new Date());
 }
