let url = "https://dummyapi.io/data/v1/user?limit=10";
fetch(url, {
  headers: { "app-id": "637c5e23be6af9b58faf7bb7" },
})
  .then((response) => {
    return response.json();
  })
  .then((completeData) => {
    let data1 = "";
    completeData.data.map((item) => {
      data1 += `<div class="story mb-2">
      <img
        class="m-3 mb-0 rounded-circle profile-image"
        src=${item.picture}
        alt=""
      />
      <div>
        <p class="text-center"><small class="fw-semibold">${item.firstName} ${item.lastName}</small></p>
      </div>
    </div>`;
    });
    document.getElementById("story").innerHTML = data1;
  })
  .catch((err) => {
    console.log(err);
  });
