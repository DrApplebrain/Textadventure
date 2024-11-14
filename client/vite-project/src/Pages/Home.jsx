import { Link } from "react-router-dom";
import { useEffect, useMemo, useState, useRef, useCallback } from "react";
import "../Styles/Home.css";

const Home = () => {
  const steps = useMemo(() => [
    { id: "step-1", text: "TIA - KI Text-Adventure" },
    {
      id: "step-2",
      text: "Entdecke wilde Welten voller einzigartiger Erlebnisse und Geschichten.",
      image: "/Images/image-1.png",
      imagePosition: "left",
    },
    {
      id: "step-3",
      text: "Unsere KI erschafft für dich Geschichten, die lebendig werden und wachsen.",
      image: "/Images/image-2.png",
      imagePosition: "right",
    },
    {
      id: "step-4",
      text: "Entdecke das Unbekannte, reise durch die Zeit und finde wahre Wunder.",
      image: "/Images/image-3.png",
      imagePosition: "left",
    },
    {
      id: "step-5",
      text: "Starte dein Spiel und lass dich von der Magie der Abenteuer mitreißen.",
      image: "/Images/image-5.png",
      imagePosition: "right",
    },
  ], []);

  const [currentStep, setCurrentStep] = useState(0);
  const [visibleStep, setVisibleStep] = useState(0);
  const typing = useRef(false);

  const nextStep = useCallback(() => {
    const nextStepIndex = currentStep + 1;
    if (nextStepIndex < steps.length) {
      setCurrentStep(nextStepIndex);
    }
    setTimeout(() => {
      setVisibleStep(nextStepIndex);
    }, 1000);
  }, [currentStep, steps.length]);

  const typeWriter = useCallback((element, text, delay, callback) => {
    let i = 0;
    typing.current = true;
    const interval = setInterval(() => {
      if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
      } else {
        clearInterval(interval);
        typing.current = false;
        callback();
      }
    }, delay);
  }, []);

  useEffect(() => {
    const element = document.getElementById(steps[currentStep].id);
    if (element && !typing.current) {
      setVisibleStep(currentStep);
      typeWriter(element, steps[currentStep].text, 50, nextStep);
    }
  }, [steps, currentStep, typeWriter, nextStep]);

  return (
    <main className="main-home">
      <div className="tutorial">
        {steps.map((step, index) => (
          <div key={index} className="tutorial-step">
            {step.image && step.imagePosition === "left" && (
              <img
                src={step.image}
                alt={`Step ${index + 1}`}
                className="tutorial-image left"
                style={{ opacity: index <= visibleStep ? 1 : 0 }}
              />
            )}
            <p id={step.id} className="tutorial-text"></p>
            {step.image && step.imagePosition === "right" && (
              <img
                src={step.image}
                alt={`Step ${index + 1}`}
                className="tutorial-image right"
                style={{ opacity: index <= visibleStep ? 1 : 0 }}
              />
            )}
          </div>
        ))}
        {visibleStep === steps.length && (
            <Link to="/stories">
              <button className="home-button">Starte dein Abenteuer</button>
            </Link>
          )}
      </div>
    </main>
  );
};

export default Home;