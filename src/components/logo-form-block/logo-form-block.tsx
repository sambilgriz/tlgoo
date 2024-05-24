import Image from 'next/image';
import images from '@/src/assets/images';
import styles from './logo-form-block.module.css';

const LogoFormBlock = () => {
  return (
    <div className="flex flex-col items-center justify-center mb-4">
      <Image src={images.squarelogo} alt="Logo" width={80} height={80} />
      <span className={`text-white text-6xl font-bold ${styles.movingPatternTaxi} text-outline-black text-shadow-outline`}>Goober</span>
      <span className="text-black tracking-[0.5em] text-sm">TAXI SERVICE</span>
    </div>
  );
}

export default LogoFormBlock;