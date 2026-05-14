import close from "../assets/icons/close.svg";
import face from "../assets/images/face.png";
import whiteshield from "../assets/icons/whiteshield.svg";
import camera from "../assets/icons/camera.svg";
import light from "../assets/icons/light.svg";
import { useNavigate } from "react-router-dom";


const FaceVerification = () => {

  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">

      {/* Card */}
      <div className="relative h-[720px] w-[500px] overflow-hidden rounded-[32px] bg-black shadow-2xl">

        {/* Background Image */}
        <img
          src={face}
          alt="verification"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/10" />

        {/* Close */}
        <button className="absolute right-5 top-5 z-20 flex h-[42px] w-[42px] items-center justify-center rounded-full bg-[#F1ECFF] cursor-pointer" onClick={() => navigate("/verification")}>
          <img src={close} alt="" />
        </button>

        {/* Face Scan Circle */}
        <div className="absolute left-1/2 top-[110px] z-20 h-[300px] w-[300px] -translate-x-1/2 rounded-full border-[3px] border-white/60">

          {/* Scan Markers */}
          <div className="absolute left-1/2 top-0 h-[6px] w-[30px] -translate-x-1/2 rounded-full bg-white" />

          <div className="absolute bottom-0 left-1/2 h-[6px] w-[30px] -translate-x-1/2 rounded-full bg-white" />
        </div>

        {/* Look Straight Pill */}
        <div className="absolute left-1/2 top-[220px] z-20 -translate-x-1/2 rounded-full bg-white/30 px-6 py-3 backdrop-blur-md">
          <p className="text-sm font-medium text-white">
            Look straight
          </p>
        </div>

        {/* Instructions */}
        <div className="absolute bottom-[200px] left-1/2 z-20 w-full -translate-x-1/2 px-8 text-center text-white">
          <h2 className="text-[24px] font-semibold">
            Keep your face within the frame
          </h2>

          <p className="mt-2 text-sm text-white/80">
            Center your face and wait for the scan to start
          </p>
        </div>

        {/* Privacy Pill */}
        
        <div className="absolute bottom-[120px] left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 rounded-full bg-white/20 px-5 py-3 backdrop-blur-md">
          <img
            src={whiteshield}
            alt=""
            className="h-4 w-4"
          />

          <p className="text-sm text-white">
            Used only for verification
          </p>
        </div>
        {/* Bottom Controls */}
        <div className="absolute bottom-[28px] left-1/2 z-20 flex -translate-x-1/2 items-center gap-5">

          <button className="flex h-[52px] w-[52px] items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur-md">
            <img
              src={camera}
              alt=""
              className="h-[22px] w-[22px]"
            />
          </button>
          {/* Capture */}
          <button className="flex h-[74px] w-[74px] items-center justify-center rounded-full border-[4px] border-white bg-white/10">
            <div className="h-[44px] w-[44px] rounded-full bg-white" onClick={() => navigate("/verification-success")} />
          </button>


          <button className="flex h-[52px] w-[52px] items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur-md">
            <img
              src={light}
              alt=""
              className="h-[22px] w-[22px]"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FaceVerification;