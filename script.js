const tabs = document.querySelectorAll(".install-tab");
const codeBlocks = document.querySelectorAll(".code-block");
const copyStatus = document.querySelector(".copy-status");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((item) => {
      item.classList.remove("active");
      item.setAttribute("aria-selected", "false");
    });

    codeBlocks.forEach((block) => {
      block.classList.remove("active");
      block.hidden = true;
    });

    tab.classList.add("active");
    tab.setAttribute("aria-selected", "true");

    const target = document.getElementById(tab.dataset.target);
    target.hidden = false;
    target.classList.add("active");
    copyStatus.textContent = "";
  });
});

document.querySelectorAll(".copy-button").forEach((button) => {
  button.addEventListener("click", async () => {
    const status =
      button.closest(".install-method")?.querySelector(".copy-status") ??
      copyStatus;

    try {
      await navigator.clipboard.writeText(button.dataset.copy);
      status.textContent = "Copied to clipboard";
      window.setTimeout(() => {
        status.textContent = "";
      }, 1800);
    } catch {
      status.textContent = "Could not copy";
    }
  });
});
