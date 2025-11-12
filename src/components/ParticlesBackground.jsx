import React, { useEffect, useRef} from 'react'

const ParticlesBackground = () => {
  const canvasRef = useRef(null);

  useEffect(( ) => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    let particlesArray = [];
    const numberOfParticles = 50;
    const colors = ['rgba(255,255,255,0.5)', 'rgba(255,255,255,0.7)', 'rgba(255,255,255,0.9)'];

    // Particle class
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = Math.random() * 3 + 1;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.directionX = (Math.random() - 0.5);
        this.directionY = (Math.random() - 0.5);
      }
      drawParticles( ){
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        context.shadowBlur = 10;
        context.shadowColor = this.color;
        context.fillStyle = this.color;
        context.fill();
      }
      updateParticles( ){
        this.x += this.directionX;
        this.y += this.directionY;
        // Bounce off edges
        if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
          this.directionX = -this.directionX;
        } 
        if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
          this.directionY = -this.directionY;
        }
        this.drawParticles( );  
      }
    }
    function createParticles( ){
      particlesArray = [];
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
      }
    }
    function handleResize( ){
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      createParticles( );
    }
    handleResize( );
    window.addEventListener('resize', handleResize);
    let animationId;
    function animate( ){
      context.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].updateParticles();
      }
      animationId = requestAnimationFrame(animate);
    }
    animate( );
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
    }
  },[])
  return (
    <canvas ref={canvasRef} className='absolute top-0 left-0 w-full h-full pointer-events-none z-0'></canvas>
  )
}

export default ParticlesBackground