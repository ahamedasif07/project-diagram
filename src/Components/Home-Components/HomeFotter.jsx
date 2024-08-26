import fachbook from "../../../public/images/diagram-home-page/facebook 1.png";
import instra from "../../../public/images/diagram-home-page/instagram 1.png";
import linkdin from "../../../public/images/diagram-home-page/linkedin 1.png";

const HomeFotter = () => {
  return (
    <div className="max-w-[1100px] pt-5 mx-auto">
      <div className="pt-8">
        <h2 className="text-center">About Us</h2>
        <p className="text-center mt-3 max-w-[700px] text-[14px] text-gray-700 pb-5 mx-auto">
          Diagram is a fashion brand that strives to create clothing that is not
          only stylish but also fashion-forward, versatile and affordable. Our
          mission is to empower individuals to express themselves through their
          clothing while feeling comfortable and confident.
        </p>
      </div>
      <div className="py-8">
        <h2 className="text-[18px] md:text-left text-center text-gray-700 pb-3 px-4">
          Join The Diagram ARMY
        </h2>
        <div className="flex flex-col md:flex-row justify-between items-center pb-4 px-4">
          <div>
            <input
              className="px-3 py-2 border-2 border-black"
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="flex pt-4 md:py-0 gap-3">
            <img
              className="bg-black w-[25px] h-[25px] rounded-full border-2 border-black"
              src={fachbook}
              alt=""
            />
            <img
              className="bg-black w-[25px] h-[25px] rounded-full border-2 border-black"
              src={instra}
              alt=""
            />
            <img
              className="bg-black w-[25px] h-[25px] rounded-full border-2 border-black"
              src={linkdin}
              alt=""
            />
          </div>
        </div>
        <hr />
        <div className="flex gap-4 px-4 items-center pt-6 py-">
          <h5 className="text-[8px] text-gray-700">2024, Diagram</h5>
          <h5 className="text-[8px] text-gray-700">Refund policy</h5>
          <h5 className="text-[8px] text-gray-700">Terms of service</h5>
          <h5 className="text-[8px] text-gray-700">Contact information</h5>
        </div>
      </div>
    </div>
  );
};

export default HomeFotter;
