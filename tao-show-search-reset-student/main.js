// //tạo dữ liệu cho bảng
// var list = [
//     [1,'thao',5],
//     [2,'hung',3],
//     [3,'phuong',9],
//     [4,'long',7],
//     [5,'viet',4],
// ];
// //show bảng
// function show() {
//     var table1 = "";
//     //tạo vòng lặp đếm dữ liệu đẩy vào mảng của bảng
//     //length là độ dài của mảng đã khai báo
//     for (var  i = 0; i < list.length ;i++){
//         table1 += "<tr>"
//                     +"<td>" +list[i][0] +"</td>"
//                     +"<td>" +list[i][1] +"</td>"
//                     +"<td>" +list[i][2] +"</td>"
//                 +"</tr>";
//     }
//     //đẩy mảng có dữ liệu vào bảng gốc
//     table =     "<table cellspacing='0' border='1px'>"
//                     +"<tr>"
//                         +"<th>stt</th>"
//                         +"<th>name</th>"
//                         +"<th>point</th>"
//                     +"</tr>"
//                     + table1
//                 + "</table>";
//     //in ra màn hình bảng khi click button show
//     document.getElementById("talbe").innerHTML = table;//lấy dữ liệu của bảng đổ lên thẻ p[id='talbe' tỏng html]
// }
