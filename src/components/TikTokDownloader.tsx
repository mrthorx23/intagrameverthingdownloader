import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Download, Link } from "lucide-react";
import { toast } from "sonner";

const TikTokDownloader = () => {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    if (!url.includes("tiktok.com")) {
      toast.error("Please enter a valid TikTok URL");
      return;
    }

    setLoading(true);
    try {
      // In a real implementation, you would call your backend API here
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate API call
      toast.success("Download started!");
    } catch (error) {
      toast.error("Failed to download video");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md space-y-4 animate-fade-in">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold text-center">TikTok Video Downloader</h1>
        <p className="text-sm text-gray-500 text-center">
          Download your favorite TikTok videos in seconds!
        </p>
      </div>

      <div className="relative">
        <Input
          type="url"
          placeholder="Paste TikTok URL here"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="pr-10"
        />
        <Link className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
      </div>

      <Button
        className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
        onClick={handleDownload}
        disabled={loading}
      >
        {loading ? (
          "Downloading..."
        ) : (
          <>
            <Download className="mr-2" size={20} />
            Download Video
          </>
        )}
      </Button>
    </div>
  );
};

export default TikTokDownloader;