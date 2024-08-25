const Video = () => {
  return (
    <div>
      <div className="max-w-[1100px] mx-auto">
        <div className="px-4  max-w-[1100px] mx-auto pt-10">
          <h2 className="text-xl px-4 text-[22px] md:px-0 pb-5 font-semibold ">
            Quench your thirst for fashion with House of Diagram.
          </h2>
        </div>
      </div>
      <div className="max-w-[1100px] px-4 mx-auto">
        <iframe
          className="w-[100%] h-[550px]"
          src="https://www.youtube.com/embed/BFlR9bbMrmY"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Video;
