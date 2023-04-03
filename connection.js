var container = document.querySelector("#container");

// untuk manggil gambar
var panorama = new PANOLENS.ImagePanorama("gambar/foto1.jpg");
var panorama2 = new PANOLENS.ImagePanorama("gambar/foto2.jpg");
var panorama3 = new PANOLENS.ImagePanorama("gambar/foto3.jpg");
var panorama4 = new PANOLENS.ImagePanorama("gambar/foto4.jpg");

var viewer = new PANOLENS.Viewer({ container: container });
viewer.add(panorama, panorama2, panorama3, panorama4); // menambahkan variabel panorama dengan fungsi add

// // menambahkan infospot
// var infospot = new PANOLENS.Infospot(350, PANOLENS.DataImage.Info);
// infospot.position.set(0, 1000, 3000);
// panorama.add(infospot); //panorama ditambahkan ke infospot

// // infospot.addEventListener("click", function () {
// //   viewer.setPanorama(panorama2);
// // });

// infospot.addEventListener("click", function () {
//   onButtonClick(panorama2);
// });

var textureLoader = new THREE.TextureLoader();
var customInfospot = textureLoader.load("gambar/more.png", function () {
  var infospot = new PANOLENS.Infospot(250, "gambar/more.png");
  infospot.position.set(0, 1500, 3000);
  infospot.addEventListener("click", function () {
    onButtonClick(panorama2);
  });
  panorama.add(infospot);
});

var customInfospot = textureLoader.load("gambar/more.png", function () {
  var infospot = new PANOLENS.Infospot(250, "gambar/more.png");
  infospot.position.set(0, 1500, 3000);
  infospot.addEventListener("click", function () {
    onButtonClick(panorama3);
  });
  panorama2.add(infospot);
});

var customInfospot = textureLoader.load("gambar/more.png", function () {
  var infospot = new PANOLENS.Infospot(250, "gambar/more.png");
  infospot.position.set(0, 1500, 3000);
  infospot.addEventListener("click", function () {
    onButtonClick(panorama4);
  });
  panorama3.add(infospot);
});

var customInfospot = textureLoader.load("gambar/more.png", function () {
  var infospot = new PANOLENS.Infospot(250, "gambar/more.png");
  infospot.position.set(0, 1500, 3000);
  infospot.addEventListener("click", function () {
    onButtonClick(panorama);
  });
  panorama4.add(infospot);
});

var bar = document.querySelector("#bar");

function onProgressUpdate(event) {
  var percentage = (event.progress.loaded / event.progress.total) * 100;
  bar.style.width = percentage + "%";
  if (percentage >= 100) {
    bar.classList.add("hide");
    setTimeout(function () {
      bar.style.width = 0;
    }, 1000);
  }
}

function onButtonClick(targetPanorama) {
  bar.classList.remove("hide");
  viewer.setPanorama(targetPanorama);
}
panorama.addEventListener("progress", onProgressUpdate);
panorama2.addEventListener("progress", onProgressUpdate);
