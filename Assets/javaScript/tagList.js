let url2 = "https://dummyapi.io/data/v1/tag?limit=10";
fetch(url2, {
  headers: { "app-id": "637c5e23be6af9b58faf7bb7" },
})
  .then((response) => {
    return response.json();
  })
  .then((completeData) => {
    let data1 = "";
    completeData.data.map((item) => {
      data1 += `
      <div class="col">
                  <button class="hashtag m-3 badge border-0 p-2">
                    ${item}
                  </button>
                </div>
              </div>`;
    });
    document.getElementById("Hashtag").innerHTML = data1;
  })
  .catch((err) => {
    console.log(err);
  });
