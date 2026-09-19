const toysData = [
    {
        id: 1,
        name: "Super Hero Figure",
        price: "$15.00",
        image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=300",
        description: "High-quality durable superhero action figure for kids. Features posable arms and metallic finish detail."
    },
    {
        id: 2,
        name: "Remote Control Car",
        price: "$25.00",
        image: "https://images.unsplash.com/photo-1594787318286-3d835c1d207f?w=300",
        description: "High-speed rechargeable RC car with full 360-degree rotation and long-range wireless remote control."
    },
    {
        id: 3,
        name: "Soft Teddy Bear",
        price: "$10.00",
        image: "https://images.unsplash.com/photo-1559454403-b8fb88521f11?w=300",
        description: "Ultra-soft premium plush teddy bear made with hypoallergenic material. Completely safe and washable for children."
    }
];

function openProductDetail(toyId) {
    const toy = toysData.find(item => item.id === toyId);
    
    if (toy) {
        document.getElementById("modal-img").src = toy.image;
        document.getElementById("modal-title").innerText = toy.name;
        document.getElementById("modal-price").innerText = toy.price;
        document.getElementById("modal-desc").innerText = toy.description;
        
        document.getElementById("product-modal").style.display = "block";
    }
}

function closeModal() {
    document.getElementById("product-modal").style.display = "none";
}

window.onclick = function(event) {
    const modal = document.getElementById("product-modal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
};