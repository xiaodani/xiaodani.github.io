import React from "react";

const Games: React.FC = () => {
  // Game URLs (update these in one place)
  const gameUrls = {
    swordAndSupper: "https://www.reddit.com/r/SwordAndSupperGame",
    yahoo100RTK: "https://yahoo-mbga.jp/game/12012510"
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold mb-12 text-center">Game Projects</h1>

      {/* Sword and Supper */}
      <section className="mb-16">
        <div className="flex flex-col md:flex-row gap-6 items-center mb-8">
          <img
            src="/images/sword-and-supper.png"
            alt="Sword and Supper"
            className="w-full md:w-72 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => window.open(gameUrls.swordAndSupper, "_blank")}
          />
          <div>
            <h2 className="text-2xl font-semibold mb-2">Sword and Supper</h2>
            <p className="text-gray-700 mb-4">
              A web-based Reddit-hosted rogue-like RPG. <br />
              Players will go through a series of random encounters and have to beat enemies to level up and progress.
            </p>
            <a 
              href={gameUrls.swordAndSupper} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-rose-500 text-white rounded hover:bg-rose-600 transition-colors"
            >
              Play Game
            </a>
          </div>
        </div>
      </section>

      {/* Yahoo100RTK */}
      <section className="mb-16">
        <div className="flex flex-col md:flex-row gap-6 items-center mb-8">
          <img
            src="/images/100RTK_main.jpg"
            alt="Yahoo100RTK"
            className="w-full md:w-72 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => window.open(gameUrls.yahoo100RTK, "_blank")}
          />
          <div>
            <h2 className="text-2xl font-semibold mb-2">Yahoo100RTK</h2>
            <p className="text-gray-700 mb-4">
              A gacha game based on Romance of the Three Kingdoms. <br />
              Collect and upgrade historical generals, build armies, and face off other players in a series of weekly events
            </p>
            <a 
              href={gameUrls.yahoo100RTK} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            >
              Play Game
            </a>
          </div>
        </div>
      </section>

      {/* Add more games here */}
    </div>
  );
};

export default Games;