
/*
    Khai báo prototype:

*/

//es5: 
function Product(id, name) {
    this.id = id;
    this.name = name;
    this.price = 0;
    this.img = '';
    this.showInfo = function () {
        console.log('id', this.id);
        console.log('name', this.name);
        console.log('price', this.price);
        console.log('img', this.img);
    }
}
let prod = new Product(1,'nguyễn văn a');
console.log('prod',prod)
//es6
class ProductES6 {
    id = '';
    name = '';
    price = '';
    img = '';
    constructor(id,name) {
        this.id = id;
        this.name = name
    }
    // showInfo = () => {

    // }
    //Khai báo phương thức cách 1 : Tạo 1 thuộc tính gán nó = hàm
    showInfo = function () {
        console.log('id', this.id);
        console.log('name', this.name);
        console.log('price', this.price);
        console.log('img', this.img);
    }
    //Khai báo phương thức không cần chữ function
    // showInfo () {
    //     console.log('id',this.id);
    //     console.log('name',this.name);
    //     console.log('price',this.price);
    //     console.log('img',this.img);
    // }
}

let prd = new ProductES6(1,'Nguyễn Văn Tèo');
console.log('prd',prd)

// prd.showInfo();
// function showInfo() {

// }

/*
    Hướng đối tượng là gì (OOP)? Hướng đối tượng có mấy tính chất
    - Hướng đối tượng là 1 phương pháp lập trình giải quyết các vấn đề sát với thế giới thực
    - Hướng đối tượng có 4 tính chất:
        + Tính trừu tượng(Abstraction): Mô phỏng dữ liệu ở thế giới thực thành các thuộc tính (đặc tính) và phương thức (hành động) vào trong lập trình.
        + Tính chất đóng gói (Encapsolution): Các thuộc tính (biến) và phương thức (hàm) phải thông qua đối tượng thì mới truy xuất được. // Javascript không hổ trợ Accessmodifier (giới hạn thuộc tính và phương thức có thể truy xuất được hoặc không cho phép truy xuất - getter setter ).        
        + Tính kế thừa (Inheristance): Khi định nghĩa 1 lớp đối tượng (class) thì ta được phép kế thừa 1 lớp đối tượng khác thông qua từ khoá extends (Lớp được kế thừa sẽ sở hữu các phương thức và thuộc tính từ lớp cha).
        + Tính đa hình (Polymorphism): Javascript không hổ trợ tính đa hình (Nếu muốn có tính năng này => dùng typescript một bộ ngôn ngữ nâng cao của javascript).

*/


/*
    Ví dụ về kế thừa trong es6

*/

class NguoiDung {
    ma='';
    hoTen ='';
    taiKhoan ='';
    matKhau ='';
    email ='';
    soDienThoai ='';
    constructor(maNguoiDung,tenNguoiDung) {
        this.ma = maNguoiDung;
        this.tenNguoiDung = tenNguoiDung;
    }
    dangNhap() {
        console.log('Đăng nhập');
    }
    dangKy() {
        console.log('Đăng ký');
    }
}
let nd = new NguoiDung();
console.log('nd',nd);

class SinhVien extends NguoiDung {
    diemToan = 0;
    diemLy = 0 ;
    diemHoa = 0;
    constructor(maNguoiDung,tenNguoiDung) {
        //Gọi lại hàm mà nó kế thừa.
        // super là hàm constructor của hàm cha  
        super(maNguoiDung,tenNguoiDung);
    }
    xepLoai = function () {
        console.log('xếp loại')
    }
    dangNhap() { //overide method
        console.log('Chúc mừng sinh viên '+ this.tenNguoiDung + 'đã đăng nhập thành công !');
        //Trong trường hợp muốn gọi thêm phương thức đăng nhập của hàm cha
        super.dangNhap();
    }
}
let sv = new SinhVien(1,'Tèo');
console.log('sv',sv);
sv.dangNhap();


class GiangVien extends NguoiDung {
    danhSachLopDangDay = [];
    constructor(maNguoiDung,tenNguoiDung) {
        super(maNguoiDung,tenNguoiDung);
    }
}

let gv = new GiangVien(2,'Minh');
console.log('gv',gv);






// var number = 1;
// console.log(number);

// var number = function () {
//     console.log('123');
// }

// number();





class SinhVienDemo {

    ma = 0;//number
    ten = '';//string

    constructor() {

    }
    
    showInfo = function () {
        console.log('show info')
    }
}

// let sv1 = new SinhVienDemo();
// sv1.showInfo();

class child extends SinhVienDemo {
    constructor() {
        super();
    }
    
    showInfo () {
        console.log('show child');
        super.showInfo();
    }
}
var sv2 = new child();
sv2.showInfo();
