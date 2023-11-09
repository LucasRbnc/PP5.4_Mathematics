"use strict";
let my_screen = document.getElementById('game_screen');
const context = my_screen.getContext('2d');
let start_button = document.getElementById('start_button');
let cordX = my_screen.width / 2;
let cordY = 0;
function draw_circle(canvas, context, cordX, cordY) {
    const radius = my_screen.height / 5;
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
    context.arc(cordX, cordY, radius, 0, 10 * Math.PI, false);
    context.fillStyle = 'red';
    context.fill();
    console.log(cordX, cordY);
}
start_button.onclick = function () {
    cordX = Math.floor(Math.random() * 300);
    setInterval(function () { draw_circle(my_screen, context, cordX, cordY); }, 200);
    draw_circle(my_screen, context, cordX, cordY);
    let velocity_input = document.getElementById("vel");
    let velocity = parseFloat(velocity_input.value);
    let angle_input = document.getElementById("angle");
    let angle = parseFloat(angle_input.value);
    let radians = (angle * Math.PI / 180);
    let v = [0, 0];
    let t = 0; // initial time
    let r = 10; //circle radius
    let dt = 800; //time interval (ms)
    v[0] = velocity * Math.cos(Math.PI * angle / 180);
    v[1] = velocity * Math.sin(Math.PI * angle / 180);
    let input_vel = cordX += velocity * Math.cos(radians);
    let input_ang = cordY += velocity * Math.sin(radians);
    setInterval(function () {
        // coordinate update
        t = (t + dt) / dt;
        draw_circle(my_screen, context, cordY, r);
    }, dt);
};
