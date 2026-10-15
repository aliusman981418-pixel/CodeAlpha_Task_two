(() => {
  const form = document.querySelector("#quiz-form");
  const result = document.querySelector("#result");
  if (!form || !result) return;

  const answers = {
    q1: "b",
    q2: "c",
    q3: "a",
    q4: "b",
    q5: "c"
  };

  const explanations = [
    "Urgent threats are a common pressure tactic. Verify through a known official route.",
    "A familiar display name or logo is not proof. Check the complete address and confirm independently.",
    "One-time codes should not be shared. Contact support through a channel you already trust.",
    "Change the password on the genuine site, secure active sessions if available, and notify support.",
    "Verify payment or bank-detail changes using a known phone number or approved procedure."
  ];

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    let score = 0;
    for (const [question, answer] of Object.entries(answers)) {
      if (data.get(question) === answer) score += 1;
    }

    const message = score === 5
      ? "Excellent! You recognized all five safe responses."
      : score >= 3
        ? "Good progress. Review the explanations below and practice the Stop, Check, Confirm habit."
        : "Review the training pages, then try again. When unsure, stop and verify independently.";

    result.className = `result-box ${score >= 4 ? "good" : "review"}`;
    result.replaceChildren();

    const heading = document.createElement("strong");
    heading.textContent = `Your score: ${score}/5`;
    const summary = document.createElement("p");
    summary.textContent = message;
    const list = document.createElement("ol");
    explanations.forEach((explanation) => {
      const item = document.createElement("li");
      item.textContent = explanation;
      list.appendChild(item);
    });
    result.append(heading, summary, list);
  });

  form.addEventListener("reset", () => {
    result.className = "result-box";
    result.replaceChildren();
    const heading = document.createElement("strong");
    heading.textContent = "Your result will appear here.";
    const summary = document.createElement("p");
    summary.textContent = "Complete all five questions to see your score and feedback.";
    result.append(heading, summary);
  });
})();
