let url4 = "https://dummyapi.io/data/v1/tag/water/post?limit=100";
fetch(url4, {
  headers: { "app-id": "637c5e23be6af9b58faf7bb7" },
})
  .then((response) => {
    return response.json();
  })
  .then((completeData) => {
    console.log(completeData);
    let data1 = "";
    completeData.data.map((item) => {
      data1 += `<div class=" bg-white rounded-top">
      <div class="d-flex">
        <!--awner profile -->
        <div>
          <img
            class="m-3 rounded-circle border-0 nav-image"
            src=${item.owner.picture}
            alt=""
          />
        </div>
        <div>
          <h1 class="fs-6 fw-bold mt-3 mb-0">${item.owner.firstName}${item.owner.lastName}</h1>
          <p class="fst-italic m-0 mb-3 text-muted">${item.publishDate}</p>
        </div>
        <span class="w-75">
          <i
            class="float-end me-3 mt-3 fa-solid fa-ellipsis-vertical"
          ></i>
        </span>
      </div>
      <!--Feed post -->
      <div class="post m-auto text-center">
        <img
          class="w-100 h-100 rounded-4"
          src=${item.image}
          alt=""
        />
      </div>
      <!--Feed icons -->
      <div>
        <div>
          <span
            ><button class="border-0 bg-white">
              <i
                class="ms-5 mt-3 me-2 mb-1 fa-regular fa-heart text-danger"
              ></i>
            </button>
          </span>
          <span
            ><button class="border-0 bg-white">
              <i class="mt-3 me-2 mb-1 fa-regular fa-comment-dots"></i>
            </button>
          </span>
          <span>
            <button class="border-0 bg-white">
              <i class="mt-3 me-2 mb-1 fa-solid fa-share"></i>
            </button>
          </span>
        </div>
        <div class="d-flex ms-5">
          liked by <b class="ms-2 me-2 mb-0"> You </b> and
          <p class="ms-2 me-2 mb-0">${item.likes}</p>
          <b>Others</b>
        </div>
      </div>
      <!--POST TAG------------------------------ -->
      <div class="d-flex mt-0 bg-white">
        <span class="ms-5"><b>tags:</b></span>
        <span class="post-hashtag m-auto badge p-2">${item.tags[0]}</span>
        <span class="post-hashtag m-auto badge p-2">${item.tags[1]}</span>
        <span class="post-hashtag m-auto badge p-2">${item.tags[2]}</span>
      </div>
      <div class="d-flex mt-0 bg-white">
        <div class="mt-1">
          <b class="ms-5 me-2">${item.owner.firstName}${item.owner.lastName}:</b> ${item.text}
        </div>
      </div>
    </div>
    <!-- comments------------------------------ -->
    <div id="comments" class=" mt-0"></div> 
    <hr>`;
    });
    document.getElementById("post").innerHTML = data1;
  })
  .catch((err) => {
    console.log(err);
  });

// ----------------------
// --------------------------------
// ----------------------
// --------------------------------
// ----------------------
// --------------------------------
