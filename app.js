const steps = [
  "Step 1: Welcome to your app creation journey!",
  "Step 2: Define your app's purpose.",
  "Step 3: Choose main features.",
  "Step 4: Confirm and generate."
];

let currentStep = 0;

function renderStep() {
  const stepContent = document.getElementById('step-content');
  stepContent.innerText = steps[currentStep];
}

document.getElementById('next-btn').addEventListener('click', () => {
  if (currentStep < steps.length - 1) {
    currentStep++;
    renderStep();
  }
});

document.getElementById('back-btn').addEventListener('click', () => {
  if (currentStep > 0) {
    currentStep--;
    renderStep();
  }
});

window.onload = renderStep;
