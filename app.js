let currentStep = 0;
const steps = [
  "Step 1: Welcome to your app creation journey!",
  "Step 2: Define your app's purpose.",
  "Step 3: Choose main features.",
  "Step 4: Confirm and generate."
];

function renderStep() {
  document.getElementById('step-content').innerText = steps[currentStep];
}

function nextStep() {
  if (currentStep < steps.length - 1) {
    currentStep++;
    renderStep();
  }
}

function prevStep() {
  if (currentStep > 0) {
    currentStep--;
    renderStep();
  }
}

window.onload = renderStep;
