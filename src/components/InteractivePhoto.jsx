import { motion, useMotionValue, useTransform } from 'framer-motion';
import { User } from 'lucide-react';

const InteractivePhoto = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct * 200);
    y.set(yPct * 200);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{
        width: 300,
        height: 300,
        display: 'flex',
        placeItems: 'center',
        placeContent: 'center',
        borderRadius: 30,
        backgroundColor: 'var(--card-bg)',
        perspective: 800,
        cursor: 'grab',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        style={{
          width: '100%',
          height: '100%',
          borderRadius: 30,
          backgroundColor: 'var(--bg-color)',
          border: '2px solid var(--primary-green)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          rotateX: rotateX,
          rotateY: rotateY,
          boxShadow: '0 20px 50px rgba(16, 185, 129, 0.2)',
        }}
      >
          {/* Placeholder for user image */}
        <div style={{
            width: '90%',
            height: '90%',
            borderRadius: '25px',
            overflow: 'hidden',
            position: 'relative',
            background: 'linear-gradient(135deg, var(--secondary-green), var(--bg-color))',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
           <User size={120} color="var(--primary-green)" strokeWidth={1} />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default InteractivePhoto;
