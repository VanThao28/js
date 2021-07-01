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