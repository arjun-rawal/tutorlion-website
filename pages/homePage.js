import { useState, useEffect } from "react";

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="home">
      {isLoading ? (
        <div className="loading-indicator"></div>
      ) : (
        <>
          <div className="animated-text">
            <h1>
              <span className="animated-word tutor">Lion</span>
              <span className="animated-word lion">Tutor</span>
            </h1>
          </div>
          <div className="scroll-indicator">⌄</div>
        </>
      )}

      <style jsx>{`
        .home {
          background-color: #f57905;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          overflow: hidden;
        }

        .loading-indicator {
          width: 100px;
          height: 100px;
          border: 5px solid white;
          border-top-color: transparent;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }
        .animated-text {
          display: flex;
          justify-content: center;
          align-items: center;
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          transform: translateY(-50%);
        }

        .animated-word {
          font-size: 72px;
          font-family: "Arial", sans-serif;
          color: white;
          opacity: 0;
          position: absolute;
        }

        .tutor {
          color: #000000;
          left: 0;
          animation: slideInLeft 1s forwards;
        }

        .lion {
          right: 0;
          animation: slideInRight 1s forwards;
        }

        @keyframes slideInLeft {
          0% {
            opacity: 0;
            transform: translateX(-100%);
          }
          100% {
            opacity: 1;
            left: 50%;
          }
        }

        @keyframes slideInRight {
          0% {
            opacity: 0;
            transform: translateX(100%);
          }
          100% {
            opacity: 1;
            right: 50%;
          }
        }

        .scroll-indicator {
          position: absolute;
          font-size: 80px;
          bottom: 100px;
          width: 30px;
          height: 30px;
          color: white;
          transform: translateY(50%);
          animation: bounce 1s infinite alternate;
        }
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes bounce {
          0% {
            transform: translateY(50%);
          }
          50% {
            transform: translateY(90%);
          }
          100% {
            transform: translateY(50%);
          }
        }
      `}</style>
    </div>
  );
};

export default HomePage;
