import { Toaster } from "@/components/ui/toaster";
import { Download, User, Image, Video, Database, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "sonner";

const Index = () => {
  const [url, setUrl] = useState("");
  
  const downloadMedia = async (type: string) => {
    if (!url) {
      toast.error("Please enter an Instagram URL");
      return;
    }

    // Validate Instagram URL
    if (!url.includes('instagram.com')) {
      toast.error("Please enter a valid Instagram URL");
      return;
    }

    try {
      // Simulate download process
      toast.loading("Starting download...");
      
      // In a real implementation, this would be an API call to your backend
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Create a dummy download for demonstration
      const dummyData = `data:text/plain;charset=utf-8,${encodeURIComponent('Instagram content')}`;
      const downloadLink = document.createElement('a');
      downloadLink.href = dummyData;
      downloadLink.download = `instagram-${type}-${Date.now()}.txt`;
      
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);

      toast.success(`${type} downloaded successfully!`);
    } catch (error) {
      console.error('Download error:', error);
      toast.error("Failed to download. Please try again.");
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Solar System background with animation */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/50 via-black to-black"></div>
        {/* Centered Solar System */}
        <div className="solar-system absolute right-[-25%] top-1/2 transform -translate-y-1/2">
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

      <div className="container min-h-screen flex items-center justify-center px-4 relative z-10">
        <div className="w-full max-w-4xl p-8 bg-white/10 backdrop-blur-xl rounded-lg shadow-xl border border-white/20">
          <h1 className="text-3xl font-bold text-white mb-8 text-center">Instagram Utility Hub</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Profile Picture Downloader */}
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" className="h-32 flex flex-col items-center justify-center gap-4 hover:bg-white/10">
                  <User className="w-8 h-8" />
                  <span>Download Profile Picture</span>
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-black/90 border-white/20">
                <DialogHeader>
                  <DialogTitle className="text-white">Download Profile Picture</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 mt-4">
                  <Input
                    placeholder="Enter Instagram profile URL"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  />
                  <Button 
                    onClick={() => downloadMedia('profile-picture')}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                  >
                    Download
                  </Button>
                </div>
              </DialogContent>
            </Dialog>

            {/* Image Downloader */}
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" className="h-32 flex flex-col items-center justify-center gap-4 hover:bg-white/10">
                  <Image className="w-8 h-8" />
                  <span>Download Images</span>
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-black/90 border-white/20">
                <DialogHeader>
                  <DialogTitle className="text-white">Download Images</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 mt-4">
                  <Input
                    placeholder="Enter Instagram post URL"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  />
                  <Button 
                    onClick={() => downloadMedia('images')}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                  >
                    Download
                  </Button>
                </div>
              </DialogContent>
            </Dialog>

            {/* Video Downloader */}
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" className="h-32 flex flex-col items-center justify-center gap-4 hover:bg-white/10">
                  <Video className="w-8 h-8" />
                  <span>Download Videos</span>
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-black/90 border-white/20">
                <DialogHeader>
                  <DialogTitle className="text-white">Download Videos</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 mt-4">
                  <Input
                    placeholder="Enter Instagram video URL"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  />
                  <Button 
                    onClick={() => downloadMedia('video')}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                  >
                    Download
                  </Button>
                </div>
              </DialogContent>
            </Dialog>

            {/* Data Extractor */}
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" className="h-32 flex flex-col items-center justify-center gap-4 hover:bg-white/10">
                  <Database className="w-8 h-8" />
                  <span>Extract Profile Data</span>
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-black/90 border-white/20">
                <DialogHeader>
                  <DialogTitle className="text-white">Extract Profile Data</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 mt-4">
                  <Input
                    placeholder="Enter Instagram profile URL"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  />
                  <Button 
                    onClick={() => downloadMedia('profile-data')}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                  >
                    Extract Data
                  </Button>
                </div>
              </DialogContent>
            </Dialog>

            {/* Private Profile Viewer */}
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" className="h-32 flex flex-col items-center justify-center gap-4 hover:bg-white/10">
                  <Lock className="w-8 h-8" />
                  <span>View Private Profiles</span>
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-black/90 border-white/20">
                <DialogHeader>
                  <DialogTitle className="text-white">View Private Profiles</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 mt-4">
                  <Input
                    placeholder="Enter private profile URL"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  />
                  <Button 
                    onClick={() => downloadMedia('private-profile')}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                  >
                    View Profile
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;