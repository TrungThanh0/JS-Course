
var so = 10 ;
function countDown(){
        so--;
        if (so != 0){
            document.getElementById("dongho").innerHTML = so ;
            setTimeout("countDown()",1000);
        } else {        
                document.getElementById('dongho').innerHTML = 'Het Thoi Gian';
            }
        }
        countDown();

function donghohientai () {
    var today = new Date();
    var gio = today.getHours();
    var phut = today.getMinutes();
    var giay = today.getSeconds();
    var thongtin   = gio + " : " +phut + " : "+giay ;
    setTimeout("donghohientai()",1000);
    document.getElementById('time').innerHTML = "Bay Gio La : " + thongtin ;

}donghohientai();




