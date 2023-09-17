const getData = document.querySelector(".submit");
const body = document.querySelector("body");

getData.addEventListener("click", function () {
  console.log("salam");
  axios("https://ali-ju8t.onrender.com/users/").then((res) => {
    console.log(res.data);

    let arr = res.data;

    for (let i = 0; i < arr.length; i++) {
      console.log(arr[i].LastName);
      body.innerHTML += `<h3>${arr[i].LastName}</h3>`;
    }
  });
});