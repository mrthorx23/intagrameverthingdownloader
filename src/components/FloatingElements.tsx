import { Code, Hash, Terminal, Wifi } from "lucide-react";

const FloatingElements = () => {
  const elements = [
    { icon: Code, delay: "0s" },
    { icon: Hash, delay: "1s" },
    { icon: Terminal, delay: "2s" },
    { icon: Wifi, delay: "3s" },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {elements.map((Element, index) => (
        <div
          key={index}
          className="absolute animate-float opacity-10"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: Element.delay,
          }}
        >
          <Element.icon size={32} />
        </div>
      ))}
    </div>
  );
};

export default FloatingElements;