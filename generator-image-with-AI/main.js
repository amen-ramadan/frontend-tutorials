const api = "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";
const inp = document.getElementById("inp");
const images = document.querySelector(".images");

const getImage = async () => {
  // make a request to open AI API
  // configure API
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${api}`
    },
    body: JSON.stringify({
      "prompt": inp.value,
      "n": 3,
      "size": "256x256"
    })
  };

  // documentation for OpenAI on how to use image generation
  const res = await fetch("https://api.openai.com/v1/images/generations", options);

  // parse the response as JSON
  const data = await res.json();
  const listImages = data.data;
  images.innerHTML = "";
  listImages.map(photo => {
    const container = document.createElement("div")
    images.append(container)
    const img = document.createElement("img")
    container.append(img)
    img.src = photo.url;

  });
};

// // add event listener to button

///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////


// const getImage = async () => {
//   try {
//     // make a request to open AI API
//     // configure API
//     const options = {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         "Authorization": `Bearer ${api}`
//       },
//       body: JSON.stringify({
//         "prompt": inp.value,
//         "n": 3,
//         "size": "256x256"
//       })
//     };

//     // documentation for OpenAI on how to use image generation
//     const res = await fetch("https://api.openai.com/v1/images/generations", options);

//     // check for successful response
//     if (!res.ok) {
//       throw new Error(`HTTP error! Status: ${res.status}`);
//     }

//     // parse the response as JSON
//     const data = await res.json();

//     // check if data is undefined
//     if (!data || !data.data) {
//       throw new Error('Invalid response data');
//     }

//     const listImages = data.data;
//     images.innerHTML = "";

//     listImages.map(photo => {
//       const container = document.createElement("div")
//       images.append(container)
//       const img = document.createElement("img")
//       container.append(img)
//       img.src = photo.url;
//     });
//   } catch (error) {
//     console.error("Error:", error.message);
//   }
// };

