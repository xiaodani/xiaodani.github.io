import React, { useEffect, useState } from "react";

function Typewriter({
  text,
  active,
  speed = 5
}: {
  text: string;
  active: boolean;
  speed?: number;
}) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    if (!active) {
      setDisplayed("");
      return;
    }

    let i = 0;
    let timeout: NodeJS.Timeout;

    const type = () => {
      setDisplayed(text.slice(0, i));
      i++;

      if (i <= text.length) {
        timeout = setTimeout(type, speed);
      }
    };

    type();

    return () => clearTimeout(timeout);
  }, [active, text, speed]);

  return (
    <div className="p-4 border rounded bg-white min-h-[120px] text-gray-800">
      {displayed}
    </div>
  );
}

export default Typewriter;