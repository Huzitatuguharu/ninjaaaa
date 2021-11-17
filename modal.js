class Modal {
    constructor() {
        console.log(this);
        this.openModalButtons = document.createElement("button");
        this.openModalButtons.classList.add('visible');

        // classList.remove('visible');

        this.modalContainer = document.createElement("div");
        this.modalContainer.className = "modalContainer";
        
        this.modalContent = document.createElement("div");
        this.modalContent.className = "modalContent";

        this.modalHeader = document.createElement("div");
        this.modalHeader.className = "modalHeader";
        this.modalHeader.innerHTML='カートの中身';

        this.modalTitle = document.createElement("div");
        this.modalTitle.className = "modalTitle";
        this.modalTitle.innerHTML = "modalTitle";
        
        this.modalBody = document.createElement("div");
        this.modalBody.className = "modalBody";
        this.modalBody.innerHTML = "modalBody";

        this.modalFotter = document.createElement("div");
        this.modalFotter.className = "modalFotter";
        
        this.buyButton = document.createElement("button");
        this.buyButton.className = "buyButton";
        this.buyButton.innerHTML = "購入する";
        
        this.cancelButton = document.createElement("button");
        this.cancelButton.className = "cancelButton";
        this.cancelButton.innerHTML = "閉じる";

        this.modalFotter.appendChild(this.cancelButton);
        this.modalFotter.appendChild(this.buyButton);
        
        this.modalContainer.appendChild(this.modalHeader);
        this.modalContainer.appendChild(this.modalContent);
        this.modalContainer.appendChild(this.modalFotter);
        this.modalContent.appendChild(this.modalTitle);
        this.modalContent.appendChild(this.modalBody);

        window.onclick = function(event) {
            if (event.target.className === "modalContainer") {
                event.target.style.display = "none";
            }
        }
        
        const openModalButtons = document.querySelectorAll('.open-modal'),
              modal = document.querySelector('.modal'),
              closeModalButtons = document.querySelectorAll('.close-modal');
        openModalButtons.forEach(openBtn => {
          openBtn.addEventListener('click', openModal)
        });
        
        closeModalButtons.forEach(closeBtn => {
          closeBtn.addEventListener('click', closeModal)
        });
        
        function openModal() {
          modal.classList.add('visible');
        }
        
        function closeModal() {
          modal.classList.remove('visible');
        }
        document.body.appendChild(this.modalContainer);
    }
}

