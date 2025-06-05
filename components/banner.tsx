const Banner = () => {
  return (
    <div className="h-[700px] xl:h-[500px] bg-cover bg-center bg-[url('/banner.jpg')] relative">
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-24 bg-black/60">
        {/* <div className="absolute inset-0 flex flex-col items-center justify-center gap-24 bg-gradient-to-b from-primary to-black/80"> */}
        <h3 className="xl:text-5xl text-4xl font-semibold text-white text-center font-title">
          Por qué elegir nuestros servicios
        </h3>
      </div>
    </div>
  );
};

export default Banner;
