(() => {
  const recommendation = document.querySelector("[data-language-recommendation]");
  if (recommendation) {
    const prefersChinese = (navigator.language || "").toLowerCase().startsWith("zh");
    recommendation.textContent = prefersChinese
      ? "建议继续使用中文 / Chinese recommended"
      : "English is recommended / 建议继续使用英文";
  }

  document.querySelectorAll("[data-current-year]").forEach((node) => {
    node.textContent = String(new Date().getFullYear());
  });
})();
