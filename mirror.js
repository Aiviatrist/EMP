var woah= localStorage.getItem("name");
document.getElementById("lol").innerHTML="Look at yourself, don't you look beautiful "+woah+"?";

Webcam.set({
width:700,
height:600,
img_format:"png",
png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach(camera);