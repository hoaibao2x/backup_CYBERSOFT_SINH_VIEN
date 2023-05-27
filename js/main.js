/**
 * Lấy điểm trung bình lưu vào mảng điểm 
 *  Danh sách sv trên 5
 *  Đếm sinh viên giỏi
 *  Tìm kiếm sinh viên điểm cao nhất/ thấp nhất
 *  Sắp xếp điểm tăng dần
 */

var diemTB = [];

function layDiemTB() {
    var tdELE = document.querySelectorAll('.td-scores');
    for (var i = 0; i < tdELE.length; i++) {
        var num = Number(tdELE[i].innerHTML);
        diemTB.push(num);
    }
    console.log(diemTB);
}
layDiemTB();

/**Đếm sinh viên giỏi 
 * 
 * Khối 1: Input
 *              mảng dtb, loaiSV(Hàm xếp loại)
 * 
 * Khối 2: Các bước xử lý
 * B1: Xếp loại sv (hàm xepLoai(diemtb) => return loai (giỏi, khá, trung bình))
 * B2: So sánh loại sinh viên => Đếm sinh viên loại giỏi
 * 
 * Khối 3: Output
 *              soSVGioi
 * 
 */

function xepLoai(dtb) {
    // dtb của 1 sinh viên
    if (9 <= dtb && dtb <= 10) {
        return 'Giỏi';
    } else if (7 <= dtb && dtb < 9) {
        return 'Khá';
    } else if (dtb >= 0 && dtb < 7) {
        return 'Trung bình';
    } else {
        return '';
    }
}

// Main function
function demSVGioi() {
    var countGioi = 0;
    for (var i = 0; i < diemTB.length; i++) {
        // Lấy từng điểm trung bình và đem từng điểm đi xếp loại
        // console.log(diemTB[i]);
        var loai = xepLoai(diemTB[i]);
        // console.log(loai);
        if (loai == 'Giỏi') {
            countGioi++;
        }
    }
    document.querySelector('#soSVGioi').innerHTML = countGioi;
}
document.querySelector('#btnSoSVGioi').onclick = demSVGioi;

/**Danh sách sinh viên trên 5 
 * 
 * Khối 1: Input
 *          mảng dtb
 * 
 * Khối 2: các bước xử lý
 * B1: Duyệt mảng
 * B2: So sánh trên 5 (dtb > 5)
 *      => Dựa vào vị trí (index) => vị trí thẻ tr (rows[i])
 *      => cells[2] => tên của sinh viên có điểm trên 5
 *      => Lưu danh sách tên trong biến content += 'tên sinh viên'
 * 
 * Khối 3: Output
 *          danh sách sinh viên cps dtb > 5
 * 
 */

function timSVTren5() {
    var tBody = document.querySelector('#tblBody');
    var content = '';
    for (var i = 0; i < diemTB.length; i++) {
        if (diemTB[i] > 5) {
            var tenSV = tBody.rows[i].cells[2].innerHTML;

            content += tenSV + ' - ' + diemTB[i] + '<br>';
        }
    }
    document.querySelector('#dsDiemHon5').innerHTML = content;
}
document.querySelector('#btnSVDiemHon5').onclick = timSVTren5;



/**Tìm sinh viên điểm cao nhất 
 * find(), findIndex()
 * 
 * Thuật toán tìm kiếm (linear Search)
 * Giả sử phần tử đầu tiên là số lớn nhất
 *      var viTri = 0
 *      var max = array[0]
 * Kiểm chứng
 *      Duyệt mảng (i = 1)
 *          max < array[i]
 *              Có số lớn hơn max => Lưu số lớn hơn vào max
 *              viTri = i
 *              max = array[i]
 * 
 */

function timMax() {
    // Giả sử số đầu tiên là số lớn nhất
    var viTri = 0;
    var max = diemTB[0];
    // Kiểm tra với các số còn lại trong mảng
    for (var i = 1; i < diemTB.length; i++) {
        if (max < diemTB[i]) {
            // Nếu có số lớn hơn max
            // Lưu giá trị mới vào max
            max = diemTB[i];
            viTri = i;
        }
    }
    console.log(max, viTri);
    var tBody = document.querySelector('#tblBody');
    var tenSV = tBody.rows[viTri].cells[2].innerHTML;
    document.querySelector('#svGioiNhat').innerHTML = tenSV + ' ' + max;
}
document.querySelector('#btnSVCaoDiemNhat').onclick = timMax;


function timMin() {
    var viTri = 0;
    var min = diemTB[0];
    for (var i = 1; i < diemTB.length; i++) {
        if (diemTB[i] < min) {
            min = diemTB[i];
            viTri = i;
        }
    }
    console.log(min, viTri);
    var tBody = document.querySelector('#tblBody');
    var tenSV = tBody.rows[viTri].cells[2].innerHTML;
    document.querySelector('#svYeuNhat').innerHTML = tenSV + ' ' + min;
}
document.querySelector('#btnSVThapDiemNhat').onclick = timMin;



/**Sắp xếp điểm tăng dần 
 * 
 * Thuật toán sắp xếp (bubble short - thuật toán nổi bọt)
 * Số nhỏ bên trái(đầu mảng) - số lớn bên phải (cuối mảng)
 * => Đem các giá trị lớn về cuối mảng
 * 
 * i -> 5
 * vòng lớn (for i = 0; i < array.length -1) {
 *      lặp lại nhièu lần code của for nhỏ
 * 
 *      Duyệt mảng nhiều lần
 *      vòng nhỏ (for j) {
 *          Đem từng số có giá trị lớn về cuối mảng
 *          Một lần chạy hết vòng nhỏ chỉ đem về 1 số lớn ở cuối mảng
 *          So sánh 2 số liền kề
 *              Hoán đổi số lớn nằm bên phải, số nhỏ nằm bên trái
 *      }
 * }
 * 
 */
function sapXepTang() {
    var diemTB2 = [];
    for (var i = 0; i < diemTB.length - 1; i++) {
        for (var j = 0; j < diemTB.length; j++) {
            // for(var k = 0)
            if (diemTB[j] > diemTB[j + 1]) {
                // Nếu vị trí j+1 có giá trị nhỏ hơn j
                // => Hoán chuyển vị trí 
                // Temp chứa tạm giá trị
                var temp = diemTB[j];
                diemTB[j] = diemTB[j + 1];
                diemTB[j + 1] = temp;
            }
        }
    }

    for (var i = 0; i < diemTB.length; i++) {
        diemTB2.push(diemTB[i]);
    }

    document.querySelector('#dtbTang').innerHTML = diemTB2;
}
document.querySelector('#btnSapXepTang').onclick = sapXepTang;




/**Sau khi sắp xếp mảng gốc (ban đầu) bị thay đổi
 *  = > Sai tên sinh viên
 * 
 * Copy mảng gốc => mảng copy
 * => Chỉ sắp xếp trên mảng copy => Mảng ban đầu được giữ nguyên
 * 
 */

/**Gán giá trị
 * 
 * Tham trị: Gán giá trị (number, string, boolean)
 *              => Không ảnh hưởng biến ban đầu
 * Tham chiếu: Gán địa chỉ ô nhớ (array, object)
 *              => Thay đổi cả biến ban đầu
 * 
 * => Copy giá trị => Đem từng giá trị của biến cũ lưu qua biến mới
 * 
 */

var pets = ['🐶', '🐹'];
var pets2 = [];

for (var i = 0; i < pets.length; i++) {
    pets2.push(pets[i]);
}

pets2.push('🐱');
console.log(pets);
console.log(pets2);

