const HeroBanner = ({ content }) => {
  const { name, image } = content;

  return (
    <div className="relative w-full h-[400px] rounded-lg overflow-hidden mb-12">
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-8">
        <h1 className="text-white text-5xl font-bold leading-tight">{name}</h1>
      </div>
    </div>
  );
};

export default HeroBanner;
