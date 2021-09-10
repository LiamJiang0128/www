let imgArr = ["image1.jpeg", "image2.jpeg", "image3.jpeg", "image4.jpeg", "image5.jpeg"];
let img_index = 0;
function  ChangeImgs() {
    //建立一個數組儲存照片的路徑
    let img = document.getElementsByTagName("img")[0];
    img.src = imgArr[img_index];
    img_index++;
    img_index%=imgArr.length;
}

