$(function(){
    var listStudent  = [
        [1,'thao',5],
        [2,'phong',8],
        [3,'duy',4],
        [4,'long',7],
        [5,'quynh',10],
        [6,'hang',5],
        [7,'chung',8],
        [8,'hai',4],
        [9,'phuoc',7],
        [10,'truong',10],
        [11,'anh duc',5],
        [12,'hau',8],
        [13,'phu',4],
        [14,'quy',7],
        [15,'anh tu',10],
    ];
   // var table = "";
    // for(var i = 0; i < listStudent.length; i++){
    //     table += "<tr>"
    //                 +"<td>" +listStudent[i][0] +"</td>"
    //                 +"<td>" +listStudent[i][1] +"</td>"
    //                 +"<td>" +listStudent[i][2] +"</td>"
    //             +"</tr>";
    // }
    // var tableshow = "<table id='my-table'>"
    //                     +"<tr>"
    //                         +"<th>STT</th>"
    //                         +"<th>Name</th>"
    //                         +"<th>Point</th>"
    //                     +"</tr>"
    //                     +table
    //                 +"</table>";
    //                 console.log(listStudent);
    //     $("#showTable").html(tableshow);
            $('a.a').click(function(){
            var tableshow = "<table id='my-table'>"
            +"<tr>"
                +"<th>STT</th>"
                +"<th>Name</th>"
                +"<th>Point</th>"
            +"</tr>"
                for (var i = 0; i < 5; i++){
                    table = listStudent[i];
                        for(var j = 2; j < table.length; j++){
                            tableshow += "<tr>"
                                        +"<td>" +table[0] +"</td>"
                                        +"<td>" +table[1] +"</td>"
                                        +"<td>" +table[2] +"</td>"
                                        +"</tr>";
                        }
                }
         tableshow += "</table>";
            $("#showTable").html(tableshow);
            console.log(table);
        });
        $('a.b').click(function(){
            var tableshow = "<table id='my-table'>"
            +"<tr>"
                +"<th>STT</th>"
                +"<th>Name</th>"
                +"<th>Point</th>"
            +"</tr>"
                for (var i = 5; i < 10; i++){
                    table = listStudent[i];
                        for(var j = 2; j < table.length; j++){
                            tableshow += "<tr>"
                                        +"<td>" +table[0] +"</td>"
                                        +"<td>" +table[1] +"</td>"
                                        +"<td>" +table[2] +"</td>"
                                        +"</tr>";
                        }
                }
         tableshow += "</table>";
            $("#showTable").html(tableshow);
            console.log(table);
        });
        $('a.c').click(function(){
            var tableshow = "<table id='my-table'>"
            +"<tr>"
                +"<th>STT</th>"
                +"<th>Name</th>"
                +"<th>Point</th>"
            +"</tr>"
                for (var i = 10; i < 15; i++){
                    table = listStudent[i];
                        for(var j = 2; j < table.length; j++){
                            tableshow += "<tr>"
                                        +"<td>" +table[0] +"</td>"
                                        +"<td>" +table[1] +"</td>"
                                        +"<td>" +table[2] +"</td>"
                                        +"</tr>";
                        }
                }
         tableshow += "</table>";
            $("#showTable").html(tableshow);
        });
});
//còn thiếu pre và run chưa bắt sự kiện
function reset() {
    location.reload() //reset loading lại trang
}
var input, filter, table, tr, td, i, txtValue;
function search() {
    input = document.getElementById("my-text");
    filter = input.value.toUpperCase();
    table = document.getElementById("my-table");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {      
        td = tr[i].getElementsByTagName("td")[1];
        if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
        } else {
            tr[i].style.display = "none";
        }
        }       
    }
}
// soft by name
var rows,switching,x,y,shouldswitch;
function Sort(){
    table = document.getElementById("my-table");
    switching = true;
    while(switching){
        switching = false;
        rows = table.rows;
        for(i = 1; i < (rows.length -1); i++){
            shouldswitch = false;
            x = rows[i].getElementsByTagName("td")[1];
            y = rows[i + 1].getElementsByTagName("td")[1];
            if(x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()){
                shouldswitch = true;
                break;
            }
        }
        if(shouldswitch){
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
}
// soft by point
function point(){
    table = document.getElementById("my-table");
    switching = true;
    while(switching){
        switching = false;
        rows = table.rows;
        for(i = 1; i < (rows.length -1); i++){
            shouldswitch = false;
            x = rows[i].getElementsByTagName("td")[2];
            y = rows[i + 1].getElementsByTagName("td")[2];
            if(x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()){
                shouldswitch = true;
                break;
            }
        }
        if(shouldswitch){
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
}
