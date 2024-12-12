function simulateMotion() {
    const angle = parseFloat(document.getElementById("angle").value) * (Math.PI / 180);
    const speed = parseFloat(document.getElementById("speed").value);
    const gravity = parseFloat(document.getElementById("gravity").value);

    const canvas = document.getElementById("projectileCanvas");
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const timeInterval = 0.02;
    const velocityX = speed * Math.cos(angle);
    const velocityY = speed * Math.sin(angle);

    let time = 0;
    let x = 0, y = 0;
    const points = [];

    do {
        x = velocityX * time;
        y = (velocityY * time) - (0.5 * gravity * time * time);
        if (y >= 0) {
            points.push({ x, y });
        }
        time += timeInterval;
    } while (y >= 0);

    const maxRange = points[points.length - 1].x;
    const maxHeight = Math.max(...points.map(p => p.y));

    const scaleX = canvas.width / (maxRange || 1.1);
    const scaleY = canvas.height / (maxHeight || 1.1);

    function drawPath() {
        ctx.save();
        ctx.translate(0, canvas.height);
        ctx.scale(1, -1);

        ctx.beginPath();
        ctx.moveTo(points[0].x * scaleX, points[0].y * scaleY);

        for (const point of points) {
            ctx.lineTo(point.x * scaleX, point.y * scaleY);
        }
        ctx.strokeStyle = "blue";
        ctx.lineWidth = 2;
        ctx.stroke();

        ctx.restore();
    }

    function drawMetrics() {
        ctx.font = "14px Arial";
        ctx.fillStyle = "#333";
        ctx.fillText(`Range: ${maxRange.toFixed(2)} m`, 10, 20);
        ctx.fillText(`Max Height: ${maxHeight.toFixed(2)} m`, 10, 40);
        ctx.fillText(`Time of Flight: ${(points.length * timeInterval).toFixed(2)} s`, 10, 60);
    }

    function animateBall() {
        let currentIndex = 0;

        function drawFrame() {
            if (currentIndex < points.length) {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                drawPath();
                drawRuler(ctx, canvas, maxRange, scaleX);
                drawMetrics();

                const point = points[currentIndex];
                ctx.beginPath();
                ctx.arc(point.x * scaleX, canvas.height - point.y * scaleY, 5, 0, 2 * Math.PI);
                ctx.fillStyle = "red";
                ctx.fill();
                currentIndex++;
                requestAnimationFrame(drawFrame);
            }
        }
        drawFrame();
    }

    function drawRuler(ctx, canvas, maxRange, scaleX) {
        const numDivisions = 10;
        const divisionLength = maxRange / numDivisions;

        ctx.strokeStyle = "#000";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(0, canvas.height - 5);
        ctx.lineTo(canvas.width, canvas.height - 5);
        ctx.stroke();

        ctx.font = "10px Arial";
        ctx.fillStyle = "black";
        for (let i = 0; i <= numDivisions; i++) {
            const x = i * divisionLength * scaleX;
            ctx.beginPath();
            ctx.moveTo(x, canvas.height - 5);
            ctx.lineTo(x, canvas.height - 15);
            ctx.stroke();
            ctx.fillText((i * divisionLength).toFixed(1), x - 10, canvas.height - 20);
        }
    }

    drawPath();
    animateBall();
}