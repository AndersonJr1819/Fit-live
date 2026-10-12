document.addEventListener("DOMContentLoaded", () => {
  const ordersData = [
    {
      id: "001",
      title: "Pedido #001",
      itemsText: "Frango grelhado + arroz integral + brócolis, Cheesecake de amora",
      itemsList: [
        { name: "Frango grelhado + arroz integral + brócolis", qty: 1, price: 21.50 },
        { name: "Cheesecake de amora", qty: 1, price: 21.50 }
      ],
      date: "12/04/2025",
      time: "11:30",
      datetimeAttr: "2025-04-12T11:30",
      status: "Em entrega",
      total: 43.00,
      image: "../assets/img/Frango grelahado.jpeg",
      alt: "Prato do pedido #001 contendo frango grelhado, arroz integral, brócolis e cheesecake de amora",
      address: "Rua Exemplo, 123 - Ap 42, São Paulo - SP",
      payment: "Cartão de Crédito (Final 8842)"
    },
    {
      id: "002",
      title: "Pedido #002",
      itemsText: "Peixe grelhado + purê + legumes, Brownie",
      itemsList: [
        { name: "Peixe grelhado + purê + legumes", qty: 1, price: 25.90 },
        { name: "Brownie", qty: 1, price: 21.50 }
      ],
      date: "10/04/2025",
      time: "12:15",
      datetimeAttr: "2025-04-10T12:15",
      status: "Entregue",
      total: 47.40,
      image: "../assets/img/Peixe grelhado.jpeg",
      alt: "Prato do pedido #002 contendo peixe grelhado com purê, legumes e brownie",
      address: "Rua Exemplo, 123 - Ap 42, São Paulo - SP",
      payment: "PIX"
    },
    {
      id: "003",
      title: "Pedido #003",
      itemsText: "Frango + batata-doce + salada",
      itemsList: [
        { name: "Frango + batata-doce + salada", qty: 1, price: 45.80 }
      ],
      date: "08/04/2025",
      time: "13:20",
      datetimeAttr: "2025-04-08T13:20",
      status: "Entregue",
      total: 45.80,
      image: "../assets/img/fragno com batata doce.jpeg",
      alt: "Prato do pedido #003 contendo frango com batata-doce e salada",
      address: "Rua Exemplo, 123 - Ap 42, São Paulo - SP",
      payment: "Cartão de Crédito (Final 8842)"
    },
    {
      id: "004",
      title: "Pedido #004",
      itemsText: "Marmita vegetariana do dia",
      itemsList: [
        { name: "Marmita vegetariana do dia", qty: 1, price: 21.90 }
      ],
      date: "05/04/2025",
      time: "10:45",
      datetimeAttr: "2025-04-05T10:45",
      status: "Preparando",
      total: 21.90,
      image: "../assets/img/vgetariana.jpeg",
      alt: "Prato do pedido #004 contendo marmita vegetariana do dia",
      address: "Rua Exemplo, 123 - Ap 42, São Paulo - SP",
      payment: "Cartão de Débito"
    },
    {
      id: "005",
      title: "Pedido #005",
      itemsText: "Cheesecake de amora",
      itemsList: [
        { name: "Cheesecake de amora", qty: 1, price: 21.50 }
      ],
      date: "02/04/2025",
      time: "16:10",
      datetimeAttr: "2025-04-02T16:10",
      status: "Cancelado",
      total: 21.50,
      image: "../assets/img/chessecake.jpeg",
      alt: "Prato do pedido #005 contendo cheesecake de amora",
      address: "Rua Exemplo, 123 - Ap 42, São Paulo - SP",
      payment: "PIX"
    }
  ];

  const currencyFormatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  });

  const detailButtons = document.querySelectorAll('main > section[aria-labelledby="history-title"] article button');
  const detailsSection = document.querySelector('section[aria-label="Detalhes do pedido selecionado"]');
  const closeDetailsBtn = detailsSection ? detailsSection.querySelector('button[aria-label="Fechar detalhes"]') : null;

  const detailTitle = detailsSection ? detailsSection.querySelector('h2') : null;
  const detailParagraphs = detailsSection ? detailsSection.querySelectorAll('div > p') : null;
  const detailTableBody = detailsSection ? detailsSection.querySelector('table tbody') : null;

  function renderOrderDetails(order) {
    if (!detailsSection) return;

    if (detailTitle) detailTitle.textContent = `Detalhes do ${order.title}`;

    if (detailParagraphs && detailParagraphs.length >= 3) {
      detailParagraphs[0].textContent = `Identificação: Pedido #${order.id}`;
      detailParagraphs[1].textContent = `Status: ${order.status}`;
      detailParagraphs[2].textContent = `Data e horário: ${order.date} • ${order.time}`;
    }

    if (detailTableBody) {
      detailTableBody.innerHTML = "";
      order.itemsList.forEach(item => {
        const tr = document.createElement("tr");
        
        const tdProduct = document.createElement("td");
        tdProduct.textContent = item.name;
        
        const tdQty = document.createElement("td");
        tdQty.textContent = item.qty;
        
        const tdPrice = document.createElement("td");
        tdPrice.textContent = currencyFormatter.format(item.price);
        
        const tdSubtotal = document.createElement("td");
        tdSubtotal.textContent = currencyFormatter.format(item.price * item.qty);

        tr.appendChild(tdProduct);
        tr.appendChild(tdQty);
        tr.appendChild(tdPrice);
        tr.appendChild(tdSubtotal);
        detailTableBody.appendChild(tr);
      });
    }

    const totalParagraphs = detailsSection.querySelectorAll('div > div > p');
    if (totalParagraphs.length >= 3) {
      totalParagraphs[0].textContent = `Taxa de entrega: ${currencyFormatter.format(0)}`;
      totalParagraphs[1].textContent = `Descontos: ${currencyFormatter.format(0)}`;
      totalParagraphs[2].textContent = `Valor total: ${currencyFormatter.format(order.total)}`;
    }

    const infoParagraphs = detailsSection.querySelectorAll('div > div:last-of-type p');
    if (infoParagraphs.length >= 2) {
      infoParagraphs[0].textContent = `Endereço de entrega: ${order.address}`;
      infoParagraphs[1].textContent = `Forma de pagamento: ${order.payment}`;
    }

    detailsSection.style.display = "block";
    detailsSection.scrollIntoView({ behavior: "smooth" });
  }

  detailButtons.forEach((btn, index) => {
    const order = ordersData[index];
    if (btn && order) {
      btn.addEventListener("click", () => {
        renderOrderDetails(order);
      });
    }
  });

  if (closeDetailsBtn && detailsSection) {
    closeDetailsBtn.addEventListener("click", () => {
      detailsSection.style.display = "none";
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && detailsSection) {
      detailsSection.style.display = "none";
    }
  });

  const activeOrdersCount = ordersData.filter(o => o.status !== "Cancelado").length;
  const totalSpent = ordersData
    .filter(o => o.status !== "Cancelado")
    .reduce((sum, o) => sum + o.total, 0);

  const summaryElements = document.querySelectorAll('aside[aria-label="Painel complementar"] section[aria-labelledby="summary-title"] span');
  if (summaryElements.length >= 4) {
    summaryElements[0].textContent = `${activeOrdersCount} pedidos realizados`;
    summaryElements[2].textContent = currencyFormatter.format(totalSpent);
  }

  let menuToggle = document.querySelector(".menu-toggle");
  const sidebar = document.querySelector('aside[aria-label="Navegação lateral"]');

  if (!menuToggle && sidebar) {
    menuToggle = document.createElement("button");
    menuToggle.type = "button";
    menuToggle.className = "menu-toggle";
    menuToggle.setAttribute("aria-label", "Abrir menu de navegação");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-controls", "sidebar-nav-container");
    
    menuToggle.innerHTML = '<i class="fa-solid fa-bars" aria-hidden="true"></i>';
    
    sidebar.id = "sidebar-nav-container";
    document.body.prepend(menuToggle);
  }

  if (menuToggle && sidebar) {
    menuToggle.addEventListener("click", () => {
      const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
      menuToggle.setAttribute("aria-expanded", !isExpanded);
      sidebar.classList.toggle("menu-open", !isExpanded);
      
      const icon = menuToggle.querySelector("i");
      if (icon) {
        icon.classList.toggle("fa-bars", isExpanded);
        icon.classList.toggle("fa-xmark", !isExpanded);
      }
    });

    const sidebarLinks = sidebar.querySelectorAll("nav a");
    sidebarLinks.forEach(link => {
      link.addEventListener("click", () => {
        if (window.innerWidth <= 768) {
          sidebar.classList.remove("menu-open");
          menuToggle.setAttribute("aria-expanded", "false");
          const icon = menuToggle.querySelector("i");
          if (icon) {
            icon.classList.add("fa-bars");
            icon.classList.remove("fa-xmark");
          }
        }
      });
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        sidebar.classList.remove("menu-open");
        menuToggle.setAttribute("aria-expanded", "false");
        const icon = menuToggle.querySelector("i");
        if (icon) {
          icon.classList.add("fa-bars");
          icon.classList.remove("fa-xmark");
        }
      }
    });
  }
});