document.addEventListener("DOMContentLoaded", () => {
    const heartCounter = document.getElementById("heart_count");
    const coinCounter = document.getElementById("call_coin");
    const copyBtnNavbar = document.querySelector(".right button:last-child span");
    let copyCount = parseInt(copyBtnNavbar?.textContent) || 0;
    let coins = parseInt(coinCounter.textContent);

    const historySection = document.querySelector("section.md\\:col-span-3");
    const clearBtn = historySection.querySelector("button");
    const historyList = document.createElement("div");
    historyList.classList.add("space-y-2", "mt-3");
    historySection.appendChild(historyList);
  
    document.querySelectorAll(".card .fa-heart").forEach((icon) => {
      icon.addEventListener("click", () => {
        let count = parseInt(heartCounter.textContent);
        heartCounter.textContent = count + 1;
        icon.classList.toggle("text-red-500");
      });
    });
  
    document.querySelectorAll(".card_footer_div button:first-child").forEach((btn) => {
      btn.addEventListener("click", async () => {
        const card = btn.closest(".card");
        const number = card.querySelector("h2").innerText.trim();
  
        try {
          await navigator.clipboard.writeText(number);
          alert(`Copied: ${number}`);
        } catch (err) {
          const ta = document.createElement("textarea");
          ta.value = number;
          document.body.appendChild(ta);
          ta.select();
          document.execCommand("copy");
          document.body.removeChild(ta);
          alert(`Copied: ${number}`);
        }
  
        copyCount++;
        copyBtnNavbar.textContent = copyCount; 
      });
    });
  
    document.querySelectorAll(".card_footer_div button:last-child").forEach((btn) => {
      btn.addEventListener("click", () => {
        const card = btn.closest(".card");
        const serviceName = card.querySelector("h1").innerText.trim();
        const number = card.querySelector("h2").innerText.trim();
  
        if (coins < 20) {
          alert("Not enough coins to make a call!");
          return;
        }
  
        coins -= 20;
        coinCounter.textContent = coins;
  
        const entry = document.createElement("div");
        entry.classList.add(
          "flex",
          "justify-between",
          "items-center",
          "p-2",
          "rounded-xl",
          "bg-gray-50"
        );
  
        const now = new Date();
        const timeString = now.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        });
  
        entry.innerHTML = `
          <div>
            <p class="font-medium">${serviceName}</p>
            <p class="text-gray-500 text-sm">${number}</p>
          </div>
          <span class="text-xs text-gray-600">${timeString}</span>
        `;
        historyList.prepend(entry);
  
        alert(`Calling ${serviceName} (${number})`);
      });
    });
  
    clearBtn.addEventListener("click", () => {
      historyList.innerHTML = "";
    });
  });
  