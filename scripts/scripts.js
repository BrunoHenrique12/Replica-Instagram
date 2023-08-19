let imagem = document.querySelector(".insta2")

    setInterval(() => {
        if (imagem.style.opacity == 0) {
            imagem.style.opacity = 1
        } else {
            imagem.style.opacity = 0
        }
        
    }, 3000);