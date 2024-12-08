import FloatingElements from "@/components/FloatingElements";
import TikTokDownloader from "@/components/TikTokDownloader";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Solar System background with animation */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/50 via-black to-black"></div>
        {/* Left Solar System */}
        <div className="solar-system absolute left-0 top-0 w-1/2 h-full">
          <div className="sun"></div>
          <div className="mercury-orbit">
            <div className="mercury"></div>
          </div>
          <div className="venus-orbit">
            <div className="venus"></div>
          </div>
          <div className="earth-orbit">
            <div className="earth"></div>
          </div>
          <div className="mars-orbit">
            <div className="mars"></div>
          </div>
        </div>
        {/* Right Solar System */}
        <div className="solar-system absolute right-0 top-0 w-1/2 h-full">
          <div className="sun"></div>
          <div className="mercury-orbit">
            <div className="mercury"></div>
          </div>
          <div className="venus-orbit">
            <div className="venus"></div>
          </div>
          <div className="earth-orbit">
            <div className="earth"></div>
          </div>
          <div className="mars-orbit">
            <div className="mars"></div>
          </div>
        </div>
        {/* Stars background */}
        <div className="stars absolute inset-0" 
          style={{
            background: `radial-gradient(2px 2px at 20px 30px, #eee, rgba(0,0,0,0)),
                        radial-gradient(2px 2px at 40px 70px, #fff, rgba(0,0,0,0)),
                        radial-gradient(2px 2px at 50px 160px, #ddd, rgba(0,0,0,0)),
                        radial-gradient(2px 2px at 90px 40px, #fff, rgba(0,0,0,0)),
                        radial-gradient(2px 2px at 130px 80px, #fff, rgba(0,0,0,0)),
                        radial-gradient(2px 2px at 160px 120px, #ddd, rgba(0,0,0,0))`
          }}>
        </div>
      </div>
      <FloatingElements />
      <div className="container min-h-screen flex items-center justify-center px-4 relative z-10">
        <div className="w-full max-w-md p-6 bg-white/10 backdrop-blur-xl rounded-lg shadow-xl border border-white/20">
          <TikTokDownloader />
        </div>
      </div>
    </div>
  );
};

export default Index;