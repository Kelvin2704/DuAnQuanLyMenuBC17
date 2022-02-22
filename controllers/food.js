import { Menu } from "../models/Menu.js";
import { MonAn } from "../models/MonAn.js";
import { DANH_SACH_MON_AN } from "../util/settings.js";

let menu = new Menu();

//load localstora vào .danhsachmonan của menu
menu.layDanhSachMonAn();

document.getElementById("btnThemMon").onclick = function () {
  //Lấy giá trị người dùng đứa vào đối tượng món ăn
  let mon = new MonAn();

  let arrInput = document.querySelectorAll(
    "#foodForm input,#foodForm select, #foodForm textarea"
  );
  for (let input of arrInput) {
    //Lấy ra id và value của từng thẻ input
    //<input id='maMon' value='123' />
    // let id = input.id;
    // let value = input.value;
    let { id, value } = input;
    mon[id] = value;
  }

  console.log("monAn", mon);
  console.log(arrInput);

  for (let key in mon) {
    // {maMon:'1',tenMon:'Cơm chiên',...}
    if (key === "khuyenMai") {
      let tagGiaKhuyenMai = document.querySelector("li#giaKhuyenMai span");
      tagGiaKhuyenMai.innerHTML = mon.tinhGiaKhuyenMai();
    }
    if (key === "maTinhTrang") {
      //Cách 1:
      // let tenTinhTrang ='';
      // if(mon[key] === 0) {
      //     tenTinhTrang = 'Hết';
      // } else {
      //     tenTinhTrang = 'Còn';
      // }
      //Cách 2:
      let tenTinhTrang = mon[key] == 0 ? "Hết" : "Còn";
      document.querySelector("li#tenTinhTrang span").innerHTML = tenTinhTrang;
    }
    if (key === "hinhAnh") {
      document.querySelector("img#imgMonAn").src = mon[key];
    }
    // var tag = document.querySelector('p'); //undefine
    // tag.innerHTML
    if (document.querySelector(`li#${key} span`)) {
      let spanValue = document.querySelector(`li#${key} span`);
      spanValue.innerHTML = mon[key];
    }
  }
  menu.themMonAn(mon);
  menu.luuDanhSachMonAn();
};




