import { useTranslation } from "next-i18next";

const ProgressBar = ({
  steps,
  currentStep,
}: {
  steps: Array<{ title: string; step: number; width: string }>;
  currentStep: number;
}) => {
  const { t } = useTranslation(["progress"]);
  return (
    <div className="row pt-4 mb-4 justify-content-center">
      <div className="col-10 p-sm-2 col-md-8 position-relative d-flex justify-content-center align-items-center">
        {steps.map((item, key) => (
          <div
            className={`d-flex align-items-center ${
              item.step === 3 ? "flex-grow-0" : "flex-grow-1"
            }`}
            key={item.step}
          >
            <div
              className={`number-circle ${
                currentStep === item.step ? "number-active" : ""
              } d-flex align-items-center justify-content-center font-weight-bold`}
            >
              <div
                className={`stage ${currentStep === item.step ? "active" : ""}`}
              >
                <div
                  className={`app-text mt-5 ${item.width} ${
                    currentStep === item.step ? "bold" : ""
                  }`}
                >
                  {t(item.title)}
                </div>
              </div>
            </div>

            {steps.length - 1 !== key ? (
              <div
                className={`line-bar flex-grow-1 ${
                  currentStep === item.step ? "line-bar-active" : ""
                }
                ${item.step === 1 ? "-first" : ""}`}
              ></div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;
