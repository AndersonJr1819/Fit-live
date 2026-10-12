document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  if (!form) return;

  const cepInput = document.getElementById("cep");
  const enderecoInput = document.getElementById("endereco");
  const bairroInput = document.getElementById("bairro");
  const cidadeInput = document.getElementById("cidade");
  const estadoSelect = document.getElementById("estado");
  const senhaInput = document.getElementById("senha");
  const confirmarSenhaInput = document.getElementById("confirmar-senha");
  const nascimentoInput = document.getElementById("nascimento");
  const celularInput = document.getElementById("celular");
  const termosCheckbox = document.getElementById("termos");

  let abortController = null;

  if (celularInput) {
    celularInput.addEventListener("input", (e) => {
      let value = e.target.value.replace(/\D/g, "");
      if (value.length > 11) value = value.slice(0, 11);
      
      if (value.length > 6) {
        value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`;
      } else if (value.length > 2) {
        value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
      } else if (value.length > 0) {
        value = `(${value}`;
      }
      e.target.value = value;
    });
  }

  if (cepInput) {
    cepInput.addEventListener("input", (e) => {
      let value = e.target.value.replace(/\D/g, "");
      if (value.length > 8) value = value.slice(0, 8);
      if (value.length > 5) {
        value = `${value.slice(0, 5)}-${value.slice(5)}`;
      }
      e.target.value = value;
    });

    cepInput.addEventListener("blur", async () => {
      const cleanCep = cepInput.value.replace(/\D/g, "");
      if (cleanCep.length !== 8) return;

      if (abortController) {
        abortController.abort();
      }
      abortController = new AbortController();

      try {
        const response = await fetch(`https://viacep.com.br/ws/${cleanCep}/json/`, {
          signal: abortController.signal
        });

        if (!response.ok) throw new Error("Erro na rede");

        const data = await response.json();
        if (data.erro) {
          return;
        }

        if (enderecoInput && data.logradouro) enderecoInput.value = data.logradouro;
        if (bairroInput && data.bairro) bairroInput.value = data.bairro;
        if (cidadeInput && data.localidade) cidadeInput.value = data.localidade;
        
        if (estadoSelect && data.uf) {
          for (let option of estadoSelect.options) {
            if (option.value === data.uf) {
              estadoSelect.value = data.uf;
              break;
            }
          }
        }
      } catch (error) {
        if (error.name !== "AbortError") {
        }
      }
    });
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let isValid = true;

    if (senhaInput && confirmarSenhaInput) {
      if (senhaInput.value !== confirmarSenhaInput.value) {
        confirmarSenhaInput.setCustomValidity("As senhas não coincidem.");
        isValid = false;
      } else {
        confirmarSenhaInput.setCustomValidity("");
      }
    }

    if (nascimentoInput) {
      const birthDate = new Date(nascimentoInput.value);
      const today = new Date();
      if (birthDate > today) {
        nascimentoInput.setCustomValidity("A data de nascimento não pode estar no futuro.");
        isValid = false;
      } else {
        nascimentoInput.setCustomValidity("");
      }
    }

    if (termosCheckbox && !termosCheckbox.checked) {
      termosCheckbox.setCustomValidity("Você deve aceitar os Termos de Uso e a Política de Privacidade.");
      isValid = false;
    } else if (termosCheckbox) {
      termosCheckbox.setCustomValidity("");
    }

    if (!form.checkValidity() || !isValid) {
      form.reportValidity();
      return;
    }

    window.location.href = "../index.html";
  });

  if (senhaInput) {
    senhaInput.addEventListener("input", () => senhaInput.setCustomValidity(""));
  }
  if (confirmarSenhaInput) {
    confirmarSenhaInput.addEventListener("input", () => confirmarSenhaInput.setCustomValidity(""));
  }
  if (nascimentoInput) {
    nascimentoInput.addEventListener("input", () => nascimentoInput.setCustomValidity(""));
  }
  if (termosCheckbox) {
    termosCheckbox.addEventListener("change", () => termosCheckbox.setCustomValidity(""));
  }
});