import Image from 'next/image';
import { StaticImageData } from 'next/image';

interface GradientBackProps {
  image: string | StaticImageData;
}

export const GradientBack = ({ image }: GradientBackProps) => {
  return (
    <div className="absolute inset-0 z-0">
      <Image
        src={image}
        alt="Background"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0))'
        }}
      ></div>
    </div>
  );
}
