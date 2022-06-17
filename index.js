// var button = document.querySelectorAll(".btn-active");
// for (var i = 0; i < button.length; i++) {
//   let index = i;
//   if (i == 0) {
//     button[i].classList.add("active");
//   }
//   button[i].addEventListener("click", function () {
//     for (var j = 0; j < button.length; j++) {
//       if (index != j) {
//         button[j].classList.remove("active");
//       } else {
//         button[j].classList.add("active");
//       }
//     }
//   });
// }
document.getElementById("bai1").focus();

document.getElementById("bai1").onclick = function () {
  var Bai1 = document.getElementById("content1");
  Bai1.style.display = "block";

  // var Bai1 = document.getElementById("bai1");
  // Bai1.innerHTML = "📖Bài 1";

  var Bai1 = document.getElementById("content2");
  Bai1.style.display = "none";
  var Bai1 = document.getElementById("content3");
  Bai1.style.display = "none";
  var Bai1 = document.getElementById("content4");
  Bai1.style.display = "none";
  var Bai1 = document.getElementById("content5");
  Bai1.style.display = "none";
};
// function Bai1() {
//     var Bai1 = document.getElementById("content1");
//     Bai1.style.display = "block";
// }
document.getElementById("bai2").onclick = function () {
  var Bai2 = document.getElementById("content2");
  Bai2.style.display = "block";
  // var Bai2 = document.getElementById("bai2");
  // Bai2.innerHTML = "📖Bài 2";

  var Bai2 = document.getElementById("content1");
  Bai2.style.display = "none";
  var Bai2 = document.getElementById("content3");
  Bai2.style.display = "none";
  var Bai2 = document.getElementById("content4");
  Bai2.style.display = "none";
  var Bai2 = document.getElementById("content5");
  Bai2.style.display = "none";
};
document.getElementById("bai3").onclick = function () {
  var Bai3 = document.getElementById("content3");
  Bai3.style.display = "block";
  // var Bai3 = document.getElementById("bai3");
  // Bai3.innerHTML = "📖Bài 3";
  var Bai3 = document.getElementById("content1");
  Bai3.style.display = "none";
  var Bai3 = document.getElementById("content2");
  Bai3.style.display = "none";
  var Bai3 = document.getElementById("content4");
  Bai3.style.display = "none";
  var Bai3 = document.getElementById("content5");
  Bai3.style.display = "none";
};
document.getElementById("bai4").onclick = function () {
  var Bai4 = document.getElementById("content4");
  Bai4.style.display = "block";
  // var Bai4 = document.getElementById("bai4");
  // Bai4.innerHTML = "📖Bài 4";
  var Bai4 = document.getElementById("content1");
  Bai4.style.display = "none";
  var Bai4 = document.getElementById("content2");
  Bai4.style.display = "none";
  var Bai4 = document.getElementById("content3");
  Bai4.style.display = "none";
  var Bai4 = document.getElementById("content5");
  Bai4.style.display = "none";
};
// document.getElementById("bai5").onclick = function () {
//   var Bai5 = document.getElementById("content5");
//   Bai5.style.display = "block";
//   // var Bai5 = document.getElementById("bai5");
//   // Bai5.innerHTML = "📖Bài 5";
//   var Bai5 = document.getElementById("content1");
//   Bai5.style.display = "none";
//   var Bai5 = document.getElementById("content2");
//   Bai5.style.display = "none";
//   var Bai5 = document.getElementById("content3");
//   Bai5.style.display = "none";
//   var Bai5 = document.getElementById("content4");
//   Bai5.style.display = "none";
// };

function tinhDiemTB(num1, num2, num3) {
  var Diem1 = Number(document.getElementById(num1).value);
  var Diem2 = Number(document.getElementById(num2).value);
  var Diem3 = Number(document.getElementById(num3).value);
  var doiTuong = document.getElementById("DoiTuong").value;
  var khuVuc = document.getElementById("KhuVuc").value;
  var diemSan = Number(document.getElementById("inputNumSan").value);
  var tinhDiemTB = 0;
  tinhDiemTB = Diem1 + Diem2 + Diem3;
  if (doiTuong === "1") {
    tinhDiemTB = tinhDiemTB;
  } else if (doiTuong === "2") {
    tinhDiemTB += 2.5;
  } else if (doiTuong === "3") {
    tinhDiemTB += 1.5;
  } else if (doiTuong === "4") {
    tinhDiemTB += 1;
  }
  if (khuVuc === "1") {
    tinhDiemTB = tinhDiemTB;
  } else if (khuVuc === "2") {
    tinhDiemTB += 2;
  } else if (khuVuc === "3") {
    tinhDiemTB += 1;
  } else if (khuVuc === "4") {
    tinhDiemTB += 0.5;
  }
  if (tinhDiemTB >= diemSan) {
    document.getElementById("txtB1").innerHTML =
      "Bạn đã đậu." + "Tổng điểm:" + tinhDiemTB;
  } else {
    document.getElementById("txtB1").innerHTML =
      "Bạn đã rớt." + "Tổng điểm:" + tinhDiemTB;
  }
  if (Diem1 <= 0 || Diem2 <= 0 || Diem3 <= 0) {
    document.getElementById("txtB1").innerHTML =
      "Bạn đã rớt. Do có điểm nhỏ hơn hoặc bằng 0";
  }
}
document.getElementById("btnB1").onclick = function () {
  tinhDiemTB("inputNum1B1", "inputNum2B1", "inputNum3B1");
};
function TinhTienDien() {
  var dien = Number(document.getElementById("num2B2").value);
  var ten = document.getElementById("num1B2").value;

  var TongDien = 0;

  if (dien >= 0 && dien <= 50) {
    TongDien = dien * 500;
  } else if (dien > 50 && dien <= 100) {
    TongDien = 25000 + (dien - 50) * 650;
  } else if (dien > 100 && dien <= 200) {
    TongDien = 57500 + (dien - 100) * 850;
  } else if (dien > 200 && dien <= 350) {
    TongDien = 142500 + (dien - 200) * 1100;
  } else if (dien > 350) {
    TongDien = 307500 + (dien - 350) * 1300;
  }
  document.getElementById("txtB2").innerHTML =
    "Họ tên:" + ten + " ; " + "Tiền điện:" + TongDien;
}
document.getElementById("btnB2").onclick = function () {
  TinhTienDien("num2B2", "num1B2");
};
function Thue(thuNhapnam, nguoi) {
  var thue = 0;
  var phantram = 0;
  var thuNhapConLai = 0;

  if (thuNhapnam <= 60000000) {
    thuNhapConLai = thuNhapnam;
    phantram = 0.05;
  } else if (thuNhapnam > 60000000 && thuNhapnam <= 120000000) {
    phantram = 0.1;
  } else if (thuNhapnam > 120000000 && thuNhapnam <= 210000000) {
    phantram = 0.15;
  } else if (thuNhapnam > 210000000 && thuNhapnam <= 384000000) {
    phantram = 0.2;
  } else if (thuNhapnam > 384000000 && thuNhapnam <= 624000000) {
    phantram = 0.25;
  } else if (thuNhapnam > 624000000 && thuNhapnam <= 960000000) {
    phantram = 0.3;
  } else if (thuNhapnam > 960000000) {
    phantram = 0.35;
  }
  thue = (thuNhapnam - 4000000 - nguoi * 1600000) * phantram;
  return thue;
}

function ThueThuNhapCaNhan() {
  var ten1 = document.getElementById("num1B3").value;
  var thuNhapnam = Number(document.getElementById("num2B3").value);
  var nguoi = Number(document.getElementById("num3B3").value);
  var thue = 0;

  thue = Thue(thuNhapnam, nguoi);

  document.getElementById("txtB3").innerHTML =
    "Họ tên: " + ten1 + " ; " + "Thuế thu nhập cá nhân: " + thue;
}
document.getElementById("btnB3").onclick = function () {
  ThueThuNhapCaNhan();
};
