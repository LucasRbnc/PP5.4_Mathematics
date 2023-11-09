"use strict";
let velocity_screen = document.getElementById('velocity_screen');
const simulation_context = velocity_screen.getContext('2d');
function draw_object(canvas, context, center, radius) {
    let centerX = Math.floor(center[0]);
    let centerY = Math.floor(center[1]);
    if (centerX == 300 || centerY == 300) {
        centerX = -centerX;
        centerY = -centerY;
    }
    let r = radius;
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
    context.arc(centerX, centerY, r, 0, 2 * Math.PI, false);
    context.fillStyle = 'white';
    context.fill();
}
function update_coord(coords, v, t) {
    coords[0] = Math.floor(coords[0] + v[0] * t);
    coords[1] = Math.floor(coords[1] + v[1] * t);
}
let start_button = document.getElementById('start_button');
start_button.onclick = function () {
    let velocity_input = document.getElementById("vel");
    let velocity = parseFloat(velocity_input.value);
    let angle_input = document.getElementById("angle");
    let angle = parseFloat(angle_input.value);
    let center = [0, 0];
    let v = [0, 0];
    let t = 0; // initial time
    let r = 10; //circle radius
    let dt = 200; //time interval (ms)
    v[0] = velocity * Math.cos(Math.PI * angle / 180);
    v[1] = velocity * Math.sin(Math.PI * angle / 180);
    setInterval(function () {
        // coordinate update
        t = (t + dt) / dt;
        update_coord(center, v, t);
        draw_object(velocity_screen, simulation_context, center, r);
    }, dt);
};
