import Navbar from "@/components/navbar";
import { useState, useEffect } from "react";

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Navbar />
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
              <span className="catchphrase">For Students, By Students</span>
            </div>
            <div className="scroll-indicator">⌄</div>
          </>
        )}

        <style jsx>{`
          .home {
            background-color: #ececec;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            overflow: hidden;
          }
          .catchphrase {
            font-size: 24px;
            font-family: "Arial", sans-serif;
            color: #ba797d;
            opacity: 1;
            margin-top: 10px;
            animation: fadeIn 1s forwards;
            margin-top: 60px;
          }
          .loading-indicator {
            width: 10vw;
            height: 10vw;
            border: 5px solid white;
            border-top-color: transparent;
            border-radius: 50%;
            animation: spin 1s linear infinite;
          }
          .animated-text {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            text-align: center;
          }

          .animated-word {
            font-size: 75px;
            font-family: "Arial", sans-serif;
            color: white;
            opacity: 0;
            position: absolute;
          }

          .tutor { 
            color: #01468a;
            left: 0;
            animation: slideInLeft 1s forwards;
          }

          .lion {
            right: 0;
            color: #e67220;
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
            font-size: 8vw;
            bottom: 20%;
            width: 5vw;
            height: 5vw;
            color: #d9b99b;
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
    </>
  );
};

export default HomePage;
