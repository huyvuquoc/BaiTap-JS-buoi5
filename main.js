
//BÀI 1
/**
 * Input: Nhập vào điểm chuẩn hội đồng, điểm 3 môn, khu vực và đối tượng
 * Handle: - Tạo biến diemChuan, diemMon1, diemMon2, diemMon3, khuVuc, diemKhuVuc, doiTuong, diemDoiTuong, diemTongKet
 *         - Viết hàm tính điểm khu vực:
 *          + case "A": diemKhuVuc = 2
 *          + case "B": diemKhuVuc = 1
 *          + case "C": diemKhuVuc = 0.5
 *          + case "X": diemKhuVuc = 0
 *          + default in ra chưa đúng khu vực
 *         - Viết hàm tính điểm đối tượng:
 *          + case "1": diemDoiTuong = 2.5
 *          + case "2": diemDoiTuong = 1.5
 *          + case "3": diemDoiTuong = 1
 *          + case "0": diemDoiTuong = 0
 *          + default in ra chưa đúng đối tượng
 *         - Viết hàm tính điểm tổng kết:
 *          + diemTongKet = diemMon1 + diemMon2 + diemMon3 + diemKhuVuc + diemDoiTuong
 *         - Viết onlick function:
 *          + lấy giá trị user nhập
 *          + gọi hàm tính diemKhuVuc
 *          + gọi hàm tính diemDoiTuong
 *          + gọi hàm tính diemTongKet
 *         - Xử lý kết quả và in ra
 * Output: xuất ra sinh viên đã đậu hoặc rớt và điểm tổng kết
 */

 var getEle = function(id) {
    return document.getElementById(id);
}
// Tính điểm khu vực
var tinhDiemKhuVuc = function(khuVuc) {
    var diemKhuVuc;
    switch(khuVuc) {
        case "A": 
            diemKhuVuc = 2;
            xuatLoiKhuVuc.innerHTML ='';
            break;
        case "B":
            diemKhuVuc = 1;
            xuatLoiKhuVuc.innerHTML ='';
            break;
        case "C":
            diemKhuVuc = 0.5;
            break;
        case "X":
            diemKhuVuc = 0;
            break;
        default:
            xuatLoiKhuVuc.innerHTML = 'Khu vực chưa đúng. Vui lòng nhập lại';
            break;
    }
    return diemKhuVuc;
}

// Tính điểm đối tượng
var tinhDiemDoiTuong = function(doiTuong) {
    var diemDoiTuong;
    switch(doiTuong) {
        case 1: 
            diemDoiTuong = 2.5;
            xuatLoiDoiTuong.innerHTML = '';
            break;
        case 2:
            diemDoiTuong = 1.5;
            xuatLoiDoiTuong.innerHTML = '';
            break;
        case 3:
            diemDoiTuong = 1;
            xuatLoiDoiTuong.innerHTML = '';
            break;
        case 0:
            diemDoiTuong = 0;
            xuatLoiDoiTuong.innerHTML = '';
            break;
        default:
            xuatLoiDoiTuong.innerHTML = 'Đối tượng chưa đúng. Vui lòng nhập lại';
    }
    return diemDoiTuong;
}

// Tính điểm tổng sinh viên
var tinhDiemTongKet = function(diemMon1, diemMon2, diemMon3, diemKhuVuc, diemDoiTuong) {
    var diemTongKet = diemMon1 + diemMon2 + diemMon3 + diemKhuVuc + diemDoiTuong;
    return diemTongKet;
}

var btnSubmit = getEle('btnSubmit');
var xuatLoiKhuVuc = getEle('xuatLoiKhuVuc');
var xuatLoiDoiTuong = getEle('xuatLoiDoiTuong');
var xuatDauRot = getEle('xuatDauRot');
var xuatDiem = getEle('xuatDiem');

btnSubmit.onclick = function() {
    // Lấy giá trị người dùng nhập
    var diemChuan = parseInt(getEle('ipDiemChuan').value);
    var diemMon1 = parseInt(getEle('ipDiemMon1').value);
    var diemMon2 = parseInt(getEle('ipDiemMon2').value);
    var diemMon3 = parseInt(getEle('ipDiemMon3').value);
    var khuVuc = getEle('ipKhuVuc').value;
    var doiTuong = parseInt(getEle('ipDoiTuong').value);
    // console.log(diemChuan, diemMon1, diemMon2, diemMon3, khuVuc, doiTuong);

    var diemKhuVuc = tinhDiemKhuVuc(khuVuc);
    var diemDoiTuong = tinhDiemDoiTuong(doiTuong);

    var diemTongKet = tinhDiemTongKet(diemMon1, diemMon2, diemMon3, diemKhuVuc, diemDoiTuong);

    // console.log(diemKhuVuc, typeof(diemKhuVuc));
    // console.log(diemDoiTuong, typeof(diemDoiTuong));
    // console.log(diemTongKet);

    // Xử lý kết quả và in ra
    if(typeof(diemKhuVuc)=="undefined" || typeof(diemDoiTuong)=="undefined") {
        xuatDauRot.innerHTML = '';
        xuatDiem.innerHTML = '';
    } else if(diemTongKet >= diemChuan) {
        xuatDauRot.innerHTML = 'Sinh viên đã đậu.';
        xuatDiem.innerHTML = 'Tổng số điểm đạt được là ' + diemTongKet;
    }
    else {
        xuatDauRot.innerHTML = 'Sinh viên đã rớt.';
        xuatDiem.innerHTML = 'Tổng số điểm đạt được là ' + diemTongKet;
    }
}


//BÀI 2
/**
 * Input: Nhập vào tên và số KW tiêu thụ
 * Handle: - tạo biến ten, soKW
 *         - Cách tính tiền điện dựa theo đề bài:
 *          + 50KW đầu: 500d/KW - từ KW 1 - 50 giá 500d
 *          + 50KW kế: 650d/KW - từ KW 51 - 100 giá 650d
 *          + 100KW kế: 850d/KW - từ KW 101 - 200 giá 850d
 *          + 150KW kế: 1100d/KW - từ KW 201 - 350 giá 1100d
 *          + còn lại: 1300d/KW - từ KW 351 trở lên giá 1300d
 *         - Viết hàm tính tiền điện:
 *          + nếu soKW <= 50 thì tienDien = soKW*500
 *          + nếu soKW >= 51 && soKW <= 100 thì tienDien = 50*500 + (soKW-50)*650
 *          + nếu soKW >= 101 && soKW <= 200 thì tienDien = 50*500 + 50*650 + (soKW-100)*850
 *          + nếu soKW >= 201 && soKW <= 350 thì tienDien = 50*500 + 50*650 + 100*850 + (soKW-200)*1100
 *          + nếu soKW >= 351 thì tienDien = 50*500 + 50*650 + 100*850 + 150*1100 + (soKW-350)*1300
 * Output: xuất ra tên và tiền điện 
 */

var getEle = function(id) {
    return document.getElementById(id);
}

var tinhTienDien = function(soKW) {
    var tienDien = 0;

    if(soKW <= 50) {
        tienDien = soKW*500;
    } else if(soKW >= 51 && soKW <= 100) {
        tienDien = 50*500 + (soKW-50)*650;
    } else if(soKW >= 101 && soKW <= 200) {
        tienDien = 50*500 + 50*650 + (soKW-100)*850;
    } else if(soKW >= 201 && soKW <= 350) {
        tienDien = 50*500 + 50*650 + 100*850 + (soKW-200)*1100;
    } else if(soKW >= 351) {
        tienDien = 50*500 + 50*650 + 100*850 + 150*1100 + (soKW-350)*1300;
    }
    return tienDien;
}

var xuatTien = getEle('xuatTien');

var btnTinhTienDien = getEle('btnTinhTienDien');


btnTinhTienDien.onclick = function() {
    var ten = getEle('ipTen').value;
    var soKW = getEle('ipSoKW').value;
    
    if(soKW < 0) {
        xuatTien.innerHTML = 'Điện năng tiêu thụ phải lớn hơn 0. Vui lòng nhập lại.';
    } else {
        var tienDien = tinhTienDien(soKW);
        xuatTien.innerHTML = 'Chủ hộ ' + ten + ' phải trả ' + tienDien.toLocaleString() + 'VND';
    }
    
}