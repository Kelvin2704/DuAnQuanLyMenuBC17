export class MonAn {
    maMon = '';
    tenMon = '';
    loaiMon = ''; //Lưu mã loại khi người dùng chọn
    giaMon = 0;
    khuyenMai = 0;
    maTinhTrang = '';
    hinhAnh = '';
    moTa = '';

    constructor () {

    }
    tinhGiaKhuyenMai = function() {
        //input: giá gốc (this.giaMon), phần trăm (this.khuyenMai)
        //output: number => số tiền sau khi tính toán
        let giaKM = Number(this.giaMon) - (Number(this.giaMon) * Number(this.khuyenMai) / 100);
        return giaKM;
    }
}