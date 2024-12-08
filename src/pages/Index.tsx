import FloatingElements from "@/components/FloatingElements";
import TikTokDownloader from "@/components/TikTokDownloader";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/20 to-secondary/20">
      <FloatingElements />
      <div className="container min-h-screen flex items-center justify-center px-4">
        <div className="w-full max-w-md p-6 bg-white/80 backdrop-blur-lg rounded-lg shadow-xl">
          <TikTokDownloader />
        </div>
      </div>
    </div>
  );
};

export default Index;