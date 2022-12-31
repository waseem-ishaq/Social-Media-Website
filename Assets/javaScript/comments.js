let url3 =
  "https://dummyapi.io/data/v1/post/60d21af267d0d8992e610b8d/comment?limit=10";
fetch(url3, {
  headers: { "app-id": "637c5e23be6af9b58faf7bb7" },
})
  .then((response) => {
    return response.json();
  })
  .then((completeData) => {
    let data1 = "";
    completeData.data.map((item) => {
      data1 += `<div class="d-flex bg-white rounded-bottom">
      <div>
        <img
          class="m-3 mt-4 rounded-circle border-0 nav-image"
          src=${item.owner.picture}
          alt=""
        />
      </div>
      <div class="h-auto">
        <div class="mt-3"><b>${item.owner.firstName} ${item.owner.lastName}</b></div>
        <div class="mb-2">${item.message}</div>
      </div>
      <div class="w-100">
        <span class="me-3 mt-3 float-end text-muted"
          >${item.publishDate}</span
        >
      </div>
    </div>`;
    });
    document.getElementById("comments").innerHTML = data1;
  })
  .catch((err) => {
    console.log(err);
  });
