
// Particles

const TTL = 1000;

function animateParticle(particle, physics, startTime, currentTime) {
    if (currentTime - startTime > TTL) {
        particle.remove();
        return;
    }

    const position = {
        x: physics.position.x + physics.velocity.x,
        y: physics.position.y + physics.velocity.y,
    }
    const velocity = {
        x: physics.velocity.x,
        y: physics.velocity.y + physics.gravity,
    }

    particle.style.transform = `translate(${position.x}px, ${position.y}px)`;
    particle.style.opacity = 1 - (currentTime - startTime) / TTL;

    requestAnimationFrame((timestamp) => animateParticle(particle, { ...physics, position, velocity }, startTime, timestamp));
}

document.addEventListener('mousemove', (event) => {
    for (let i = 0; i < 2; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.left = `${event.pageX}px`;
        particle.style.top = `${event.pageY}px`;

        const angle = Math.random() * Math.PI * 2;
        const physics = {
            position: { x: 0, y: 0 },
            velocity: { x: 10 * Math.random() * Math.cos(angle), y: 10 * Math.random() * Math.sin(angle) },
            gravity: 1 / 2,
        };

        document.getElementById('overlay').appendChild(particle);
        requestAnimationFrame((t) => animateParticle(particle, physics, t));
    }
})

document.addEventListener('touchmove', (event) => {
    for (const touch of event.touches) {
        for (let i = 0; i < 3; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            particle.style.left = `${touch.pageX}px`;
            particle.style.top = `${touch.pageY}px`;

            const angle = Math.random() * Math.PI * 2;
            const physics = {
                position: { x: 0, y: 0 },
                velocity: { x: 10 * Math.random() * Math.cos(angle), y: 10 * Math.random() * Math.sin(angle) },
                gravity: 1 / 2,
            };

            document.getElementById('overlay').appendChild(particle);
            requestAnimationFrame((t) => animateParticle(particle, physics, t));
        }
    }
})

document.addEventListener('click', (event) => {
    for (let i = 0; i < 18; i++) {

        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.left = `${event.pageX}px`;
        particle.style.top = `${event.pageY}px`;

        const angle = i / 18 * Math.PI * 2;
        const physics = {
            position: { x: 0, y: 0 },
            velocity: { x: 10 * Math.random() * Math.cos(angle), y: 10 * Math.random() * Math.sin(angle) },
            gravity: 1 / 2,
        };

        requestAnimationFrame((t) => animateParticle(particle, physics, t));

        document.getElementById('overlay').appendChild(particle);
    }
})