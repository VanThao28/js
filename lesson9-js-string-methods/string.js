var str = "Việt nam vô địch , vô địch";
        var leng = str.length;
        document.getElementById('thu').innerHTML= "số ký tự là : " +leng;

//xem chuỗi
            var arr = str.split(" ");
            var text = "";
            for( var i = 0; i < arr.length;i++){
                text += arr[i];
                var lng = text.length;
            }
            document.getElementById('thu-chuoi').innerHTML="chuỗi có bao nhiêu từ: " +lng;

// tìm từ trùng lặp
//chuyển từ chuỗi sang mảng
//so sánh các mảng
            var strlap = str.toLocaleLowerCase().split(" ");
            var trung1;
            var strtim='';
            var thu='';
            for ( var i = 0; i < strlap.length; i++){
                trung1 = 1;
                for( var j = i + 1; j < strlap.length; j++){
                    if( strlap[i] == strlap[j]){
                        trung1++;
                    }
                }
                if (strtim.indexOf(strlap[i]) == -1){
                    thu += strlap[i] + ' lặp: ' + trung1 + ' lần'+'</br>';
                }
                strtim += strlap[i];
            }
             document.getElementById('thu-tu').innerHTML=thu;
//những ký tự trùng lặp,lặp bao nhiêu lần
    //tìm và xóa các khoảng trắng
            var strcase = str.toLocaleLowerCase().replace(/ /g,'');//toLocaleLowerCase() là phương thức chuyển chữ hoa thành chữ thường,replace()thay đổi biểu thức về giá trị mới
            var trung;
            var strtmp = '';
            var result = '';
            for (var i = 0; i < strcase.length; i++){
                trung = 1;//i đếm ký tự đầu của mảng strcase;
                for (var j = i + 1; j < strcase.length -1 ; j++){
                    if (strtmp.indexOf(strcase[j]) == -1 && strcase[i] == strcase[j]){
                        trung++;//nếu mảng i khác j thì đếm tiếp
                    }
                }
                if (strtmp.indexOf(strcase[i]) == -1){//nếu mảng không tồn tại thì sẽ in ra màn hình
                    result += strcase[i] + ' lặp: ' + trung + ' lần'+'</br>';
                }
                strtmp += strcase[i];//duyệt từng từ của mảng strcase gán vào str tmp;
            }
            document.getElementById('thu-trung').innerHTML = result;