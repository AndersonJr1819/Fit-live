document.addEventListener("DOMContentLoaded", () => {
  const editButtons = document.querySelectorAll("main > section button");
  const saveButton = document.querySelector('main > section[aria-label="Aviso de segurança e ações"] button');

  editButtons.forEach(button => {
    button.addEventListener("click", () => {
      const section = button.closest("section");
      if (!section) return;

      const dds = section.querySelectorAll("dd");
      const isEditing = button.textContent.trim() === "Salvar";

      if (!isEditing) {
        button.textContent = "Salvar";
        dds.forEach(dd => {
          const currentText = dd.textContent.trim();
          if (currentText !== "••••••••") {
            const input = document.createElement("input");
            input.type = "text";
            input.value = currentText;
            input.style.width = "100%";
            input.style.padding = "4px 8px";
            input.style.font = "inherit";
            dd.textContent = "";
            dd.appendChild(input);
          }
        });
      } else {
        button.textContent = "Editar";
        dds.forEach(dd => {
          const input = dd.querySelector("input");
          if (input) {
            dd.textContent = input.value;
          }
        });
      }
    });
  });

  if (saveButton) {
    saveButton.addEventListener("click", () => {
      alert("Aviso: Alterações salvas");
    });
  }
});