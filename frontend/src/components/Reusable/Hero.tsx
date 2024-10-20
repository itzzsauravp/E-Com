interface HeroComponentProps {
  img: string;
  textOnImage?: string;
}

const Hero: React.FC<HeroComponentProps> = ({ img, textOnImage }) => {
  return (
    <div className="flex justify-center sm:max-md:hidden bg-slate-200">
      <div className="relative">
        <img src={img} alt="hero image" className="object-cover" />
        <h1 className="absolute text-white text-4xl bottom-14 left-10 uppercase">
          {textOnImage}
        </h1>
      </div>
    </div>
  );
};

export default Hero;
