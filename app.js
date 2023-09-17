const getData = document.querySelector(".getData");
const body = document.querySelector("body");
const ad = document.querySelector(".ad")
const soyad = document.querySelector(".soyad")
const id = document.querySelector(".id")
const password = document.querySelector(".password")

getData.addEventListener("submit", function (e) {
    e.preventDefault()
  console.log("salam");
  let obj={};
  obj.ad=ad.value;
  obj.soyad=soyad.value;
  obj.id=id.value;
  obj.password=password.value;
  console.log(obj)
  axios.post("https://ali-ju8t.onrender.com/users/",obj);
});