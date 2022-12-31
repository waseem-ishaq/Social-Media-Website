let url1 = "https://dummyapi.io/data/v1/user?limit=10";
fetch(url1, {
  headers: { "app-id": "637c5e23be6af9b58faf7bb7" },
})
  .then((response) => {
    return response.json();
  })
  .then((completeData) => {
    let data1 = "";
    completeData.data.map((item) => {
      data1 += `
      <div class="d-flex user">
                <div>
                  <img
                    class="m-3 rounded-circle border-0 nav-image"
                    src=${item.picture}
                    alt=""
                  />
                </div>
                <div>
                  <h1 class="fs-6 fw-bold mt-4 mb-0">${item.firstName} ${item.lastName}</h1>
                  <p class="fst-italic m-0 text-muted">Hii...!</p>
                </div>
              </div>`;
    });
    document.getElementById("activeUsersProfiles").innerHTML = data1;
  })
  .catch((err) => {
    console.log(err);
  });
