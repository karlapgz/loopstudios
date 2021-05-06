let screenWidth = screen.width;
let img1 = document.getElementById("img1"),
    img2 = document.getElementById("img2"),
    img3 = document.getElementById("img3"),
    img4 = document.getElementById("img4"),
    img5 = document.getElementById("img5"),
    img6 = document.getElementById("img6"),
    img7 = document.getElementById("img7"),
    img8 = document.getElementById("img8");


if(screenWidth <= 414) {
    img1.src = 'images/mobile/image-deep-earth.jpg';
    img2.src = 'images/mobile/image-night-arcade.jpg';
    img3.src = 'images/mobile/image-soccer-team.jpg';
    img4.src = 'images/mobile/image-grid.jpg';
    img5.src = 'images/mobile/image-from-above.jpg';
    img6.src = 'images/mobile/image-pocket-borealis.jpg';
    img7.src = 'images/mobile/image-curiosity.jpg';
    img8.src = 'images/mobile/image-fisheye.jpg';

}