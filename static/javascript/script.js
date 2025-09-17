// Animated background with moving circles
const canvas = document.getElementById('bgCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const colors = ["#ff9a9e", "#fad0c4", "#a1c4fd", "#c2e9fb", "#fbc2eb", "#a18cd1"];
const circles = [];

for (let i = 0; i < 40; i++) {
  circles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 6 + 2,
    dx: (Math.random() - 0.5) * 1.5,
    dy: (Math.random() - 0.5) * 1.5,
    color: colors[Math.floor(Math.random() * colors.length)]
  });
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  circles.forEach(c => {
    ctx.beginPath();
    ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
    ctx.fillStyle = c.color;
    ctx.fill();

    c.x += c.dx;
    c.y += c.dy;

    if (c.x + c.r > canvas.width || c.x - c.r < 0) c.dx *= -1;
    if (c.y + c.r > canvas.height || c.y - c.r < 0) c.dy *= -1;
  });
  requestAnimationFrame(animate);
}
animate();

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
