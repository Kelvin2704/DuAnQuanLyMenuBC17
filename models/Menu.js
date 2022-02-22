//Trong models không được sử dụng các thao tác dom từ giao diện

import { DANH_SACH_MON_AN } from "../util/settings.js";
import { MonAn } from "./MonAn.js";

export class Menu {
  danhSachMonAn = [];

  constructor() {}
  themMonAn = function (monAn) {
    // {maMon:'', tenMon: ''}
    this.danhSachMonAn.push(monAn);
  };
  luuDanhSachMonAn = function () {
    let sDanhSachMonAn = JSON.stringify(this.danhSachMonAn);
    localStorage.setItem(DANH_SACH_MON_AN, sDanhSachMonAn);
  };
  //lấy danh sách món ăn để dùng cho food list
  layDanhSachMonAn = function () {
    if (localStorage.getItem(DANH_SACH_MON_AN)) {
      let sDanhSachMon = localStorage.getItem(DANH_SACH_MON_AN);
      this.danhSachMonAn = JSON.parse(sDanhSachMon);
    }
  };
  
  renderTableMonAn = function (selector) {
    let html = "";
    for (let i = 0; i < this.danhSachMonAn.length; i++) {
      //mỗi lần duyệt lấy ra 1 object món ăn
      let monAnPrototype = new MonAn();

      let monAn = this.danhSachMonAn[i];
      monAn = { ...monAnPrototype, ...monAn };
      html += `
      <tr>
          <td>${monAn.maMon}</td>
          <td>${monAn.tenMon}</td>
          <td>${monAn.loaiMon}</td>
          <td>${monAn.giaMon}</td>
          <td>${monAn.khuyenMai}</td>
          <td>${monAn.tinhGiaKhuyenMai()}</td>
          <td>${monAn.maTinhTrang}</td>
          <td>
            <button class="btn btn-danger" onclick="xoaMonAn('${
              monAn.maMon
            }')">Xóa</button>
            <button data-toggle="modal" data-target="#exampleModal" class="btn btn-primary" onclick="chinhSuaMon('${
              monAn.maMon
            }')">Chỉnh sửa</button>
          </td>
      </tr>
      `;
    }
    document.querySelector(selector).innerHTML = html;
  };
  xoaMonAn = function (maMon) {
    //cách 1: tìm index món ăn trong danhSachMonAn và xử lý xóa
    // let index = this.danhSachMonAn.findIndex((mon) => mon.maMon === maMon);
    // if (index !== 1) {
    //   this.danhSachMonAn.splice(index, 1);
    // }
    //cách 2:
    this.danhSachMonAn = this.danhSachMonAn.filter(
      (mon) => mon.maMon !== maMon
    );
  };

  layThongTinMonAn = function (maMon) {
    return this.danhSachMonAn.find((monAn) => monAn.maMon === maMon);
  };

  capNhatMonAn = function (maMon, monAnCapNhat) {
    //monAnUpdate là thằng trong this.danhSachMonAn
    let monAnUpDate = this.layThongTinMonAn(maMon);
    if (monAnUpDate) {
      for (let key in monAnUpdate) {
        monAnUpDate[key] = monAnCapNhat[key];
      }
    }
  };

  filterMonAn = function (loaiMon) {
    let result = this.danhSachMonAn;
    if (loaiMon !== "all" && loaiMon) {
      result = this.danhSachMonAn.filter((mon) => mon.loaiMon === loaiMon);
    }
    return result;
  };
}
