let imgArr = ["images/image1.jpeg", "images/image2.jpeg", "images/image3.jpeg", "images/image4.jpeg", "images/image5.jpeg"];
let img_index = 0;
function  ChangeImgs() {
    //建立一個數組儲存照片的路徑
    let img = document.getElementsByTagName("img")[0];
    img.src = imgArr[img_index];
    img_index++;
    img_index%=imgArr.length;
}

