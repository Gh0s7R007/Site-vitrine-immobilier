// Données de test (15 propriétés)
const properties = [
    {
        id: 1,
        title: "Villa contemporaine",
        type: "villa",
        price: 1250000,
        bedrooms: 5,
        bathrooms: 3,
        size: 250,
        location: "paris",
        address: "16ème arrondissement, Paris",
        image: "villa1.jpg",
        images: ["villa1.jpg", "villa5.jpg", "int3.jpg", "int5.jpg"],
        features: ["Piscine", "Jardin 500m²", "Garage", "Terrasse"],
        description: "Superbe villa contemporaine offrant un cadre de vie exceptionnel...",
        featured: true
    },
    {
        id: 2,
        title: "Appartement haussmannien",
        type: "apartment",
        price: 850000,
        bedrooms: 3,
        bathrooms: 2,
        size: 120,
        location: "paris",
        address: "8ème arrondissement, Paris",
        image: "appart6.jpg",
        images: ["appart6.jpg", "appart7.jpg", "int4.jpg", "int6.jpg"],
        features: ["Hauteur sous plafond", "Cheminée", "Ascenseur"],
        description: "Bel appartement haussmannien rénové avec goût...",
        featured: false
    },
    {
        id: 3,
        title: "Maison de maître",
        type: "house",
        price: 1750000,
        bedrooms: 6,
        bathrooms: 4,
        size: 300,
        location: "bordeaux",
        address: "Quartier des Chartrons, Bordeaux",
        image: "maison1.jpg",
        images: ["maison1.jpg", "int8.jpg", "int9.jpg"],
        features: ["Cave à vin", "Parking", "Jardin arboré"],
        description: "Authentique maison de maître entièrement rénovée...",
        featured: true
    },
    {
        id: 4,
        title: "Loft industriel",
        type: "loft",
        price: 800000,
        bedrooms: 2,
        bathrooms: 1,
        size: 180,
        location: "lyon",
        address: "Quartier de la Confluence, Lyon",
        image: "loft1.jpg",
        images: ["loft1.jpg", "int8.jpg", "int10.jpg"],
        features: ["Grand volume", "Mezzanine", "Parking sécurisé"],
        description: "Exceptionnel loft avec vue sur le Rhône...",
        featured: false
    },
    {
        id: 5,
        title: "Château historique",
        type: "castle",
        price: 4500000,
        bedrooms: 12,
        bathrooms: 8,
        size: 1200,
        location: "nice",
        address: "Cannes, Côte d'Azur",
        image: "castle1.jpg",
        images: ["castle1.jpg", "castle2.jpg", "casint2.jpg", "casint3.jpg", "casint5.jpg"],
        features: ["Parc 2ha", "Piscine olympique", "Salle de bal"],
        description: "Château du 18ème siècle classé monument historique...",
        featured: true
    },
    {
        id: 6,
        title: "Appartement vue mer",
        type: "apartment",
        price: 1200000,
        bedrooms: 4,
        bathrooms: 2,
        size: 150,
        location: "marseille",
        address: "Corniche Kennedy, Marseille",
        image: "appart4.jpg",
        images: ["appart4.jpg", "int3.jpg", "int5.jpg", "int15.jpg"],
        features: ["Balcon mer", "Piscine commune", "Parking"],
        description: "Magnifique appartement avec vue à 180° sur la Méditerranée...",
        featured: true
    },
    {
        id: 7,
        title: "Maison de village",
        type: "house",
        price: 350000,
        bedrooms: 3,
        bathrooms: 1,
        size: 110,
        location: "bordeaux",
        address: "Saint-Émilion, Gironde",
        image: "maison3.jpg",
        images: ["maison3.jpg", "int11.jpg", "int13.jpg"],
        features: ["Terrasse", "Cave", "Jardin clos"],
        description: "Charmante maison de village entièrement rénovée...",
        featured: false
    },
    {
        id: 8,
        title: "Penthouse luxueux",
        type: "apartment",
        price: 2800000,
        bedrooms: 5,
        bathrooms: 3,
        size: 280,
        location: "paris",
        address: "Triangle d'Or, Paris",
        image: "appart2.jpg",
        images: ["appart2.jpg", "int1.jpg", "int3.jpg"],
        features: ["Terrasse 80m²", "Service conciergerie", "Ascenseur privé"],
        description: "Exceptionnel penthouse avec vue panoramique sur Paris...",
        featured: true
    },
    {
        id: 9,
        title: "Mas provençal",
        type: "villa",
        price: 950000,
        bedrooms: 4,
        bathrooms: 2,
        size: 200,
        location: "nice",
        address: "Grasse, Alpes-Maritimes",
        image: "villa2.jpg",
        images: ["villa2.jpg", "villa4.jpg", "int2.jpg", "int6.jpg"],
        features: ["Piscine", "Oliviers", "Garage"],
        description: "Authentique mas provençal restauré avec soin...",
        featured: false
    },
    {
        id: 10,
        title: "Appartement rénové",
        type: "apartment",
        price: 420000,
        bedrooms: 2,
        bathrooms: 1,
        size: 75,
        location: "lyon",
        address: "Vieux Lyon",
        image: "appart8.jpg",
        images: ["appart8.jpg"],
        features: ["Cuisine équipée", "Ascenseur", "Cave"],
        description: "Appartement lumineux entièrement rénové dans le Vieux Lyon...",
        featured: false
    },
    {
        id: 11,
        title: "Villa design",
        type: "villa",
        price: 2100000,
        bedrooms: 6,
        bathrooms: 4,
        size: 320,
        location: "nice",
        address: "Cap d'Antibes",
        image: "villa3.jpg",
        images: ["villa3.jpg", "int7.jpg", "int12.jpg"],
        features: ["Piscine à débordement", "Home cinéma", "Jardin paysager"],
        description: "Villa contemporaine signée par un architecte renommé...",
        featured: true
    },
    {
        id: 12,
        title: "Appartement standing",
        type: "apartment",
        price: 580000,
        bedrooms: 3,
        bathrooms: 2,
        size: 95,
        location: "bordeaux",
        address: "Quartier Saint-Pierre, Bordeaux",
        image: "appart1.jpg",
        images: ["appart1.jpg", "int7.jpg", "int10.jpg"],
        features: ["Terrasse", "Parking", "Ascenseur"],
        description: "Bel appartement de standing en cœur de ville...",
        featured: false
    },
    {
        id: 13,
        title: "Maison bord de mer",
        type: "house",
        price: 3200000,
        bedrooms: 7,
        bathrooms: 5,
        size: 350,
        location: "marseille",
        address: "Calanques, Marseille",
        image: "maison2.jpg",
        images: ["maison2.jpg", "int12.jpg", "int13.jpg"],
        features: ["Accès privé à la mer", "Piscine", "Dock à bateau"],
        description: "Exceptionnelle maison directement en bord de mer...",
        featured: true
    },
    {
        id: 14,
        title: "Loft d'artiste",
        type: "loft",
        price: 720000,
        bedrooms: 1,
        bathrooms: 1,
        size: 160,
        location: "paris",
        address: "Le Marais, Paris",
        image: "loft2.jpg",
        images: ["loft2.jpg", "int14.jpg", "int15.jpg"],
        features: ["Atelier", "Hauteur sous plafond", "Mezzanine"],
        description: "Authentique loft d'artiste en plein Marais...",
        featured: false
    },
    {
        id: 15,
        title: "Château viticole",
        type: "castle",
        price: 5200000,
        bedrooms: 15,
        bathrooms: 10,
        size: 1500,
        location: "bordeaux",
        address: "Saint-Julien-Beychevelle",
        image: "castle3.jpg",
        images: ["castle3.jpg", "casint1.jpg", "casint4.jpg"],
        features: ["Domaine viticole", "Parc 5ha", "Salle de réception"],
        description: "Prestigieux château viticole avec vignoble en AOC...",
        featured: true
    }
];

// Formatage des prix
function formatPrice(price) {
    return new Intl.NumberFormat('fr-FR').format(price);
}

// Affichage des propriétés
function displayProperties(propertiesToShow) {
    const container = document.getElementById('properties-container');
    const resultsInfo = document.getElementById('results-info');
    
    container.innerHTML = '';
    
    if (propertiesToShow.length === 0) {
        container.innerHTML = '<p class="no-results">Aucun résultat ne correspond à vos critères.</p>';
        resultsInfo.textContent = '0 propriété trouvée';
        return;
    }
    
    resultsInfo.textContent = `${propertiesToShow.length} propriété${propertiesToShow.length > 1 ? 's' : ''} trouvée${propertiesToShow.length > 1 ? 's' : ''}`;
    
    propertiesToShow.forEach(property => {
        const propertyCard = document.createElement('div');
        propertyCard.className = 'property-card';
        propertyCard.innerHTML = `
            <div class="property-image">
                <img src="images/${property.image}" alt="${property.title}">
                ${property.featured ? '<span class="property-badge">Coup de cœur</span>' : ''}
            </div>
            <div class="property-info">
                <h3>${property.title}</h3>
                <div class="property-price">${formatPrice(property.price)} €</div>
                <div class="property-address">
                    <i class="fas fa-map-marker-alt"></i>
                    ${property.address}
                </div>
                <div class="property-features">
                    <span class="feature-tag"><i class="fas fa-bed"></i> ${property.bedrooms} chambres</span>
                    <span class="feature-tag"><i class="fas fa-ruler-combined"></i> ${property.size}m²</span>
                    ${property.features.slice(0, 2).map(feature => `
                        <span class="feature-tag">${feature}</span>
                    `).join('')}
                </div>
            </div>
        `;
        
        propertyCard.addEventListener('click', () => openPropertyModal(property.id));
        container.appendChild(propertyCard);
    });
}

// Filtrage des propriétés
function filterProperties() {
    const type = document.getElementById('property-type').value;
    const priceMin = document.getElementById('price-min').value;
    const priceMax = document.getElementById('price-max').value;
    const location = document.getElementById('location').value;
    const bedrooms = document.getElementById('bedrooms').value;
    
    const filtered = properties.filter(property => {
        return (type === 'all' || property.type === type) &&
               (priceMin === '' || property.price >= parseInt(priceMin)) &&
               (priceMax === '' || property.price <= parseInt(priceMax)) &&
               (location === 'all' || property.location === location) &&
               (bedrooms === 'all' || property.bedrooms >= parseInt(bedrooms));
    });
    
    displayProperties(filtered);
}

// Réinitialisation des filtres
function resetFilters() {
    document.getElementById('property-type').value = 'all';
    document.getElementById('price-min').value = '';
    document.getElementById('price-max').value = '';
    document.getElementById('location').value = 'all';
    document.getElementById('bedrooms').value = 'all';
    displayProperties(properties);
}

// Ouverture du modal
function openPropertyModal(id) {
    const property = properties.find(p => p.id === id);
    const modal = document.getElementById('propertyModal');
    const modalContent = document.getElementById('modal-content');
    
    modalContent.innerHTML = `
        <h2>${property.title}</h2>
        <div class="property-price">${formatPrice(property.price)} €</div>
        <div class="property-address">
            <i class="fas fa-map-marker-alt"></i> ${property.address}
        </div>
        
        <div class="property-gallery">
            ${property.images.map(img => `
                <img src="images/${img}" alt="${property.title}">
            `).join('')}
        </div>
        
        <div class="property-details">
            <h3>Description</h3>
            <p>${property.description}</p>
            
            <div class="details-grid">
                <div class="detail-item">
                    <i class="fas fa-home"></i>
                    <span>Type: ${getTypeLabel(property.type)}</span>
                </div>
                <div class="detail-item">
                    <i class="fas fa-ruler-combined"></i>
                    <span>Surface: ${property.size}m²</span>
                </div>
                <div class="detail-item">
                    <i class="fas fa-bed"></i>
                    <span>Chambres: ${property.bedrooms}</span>
                </div>
                <div class="detail-item">
                    <i class="fas fa-bath"></i>
                    <span>Salles de bain: ${property.bathrooms}</span>
                </div>
                ${property.features.map(feature => `
                    <div class="detail-item">
                        <i class="fas fa-check-circle"></i>
                        <span>${feature}</span>
                    </div>
                `).join('')}
            </div>
        </div>
        
        <button class="btn contact-btn" onclick="location.href='contact.html?property=${encodeURIComponent(property.title)}'">
            <i class="fas fa-envelope"></i> Contacter pour cette propriété
        </button>
    `;
    
    modal.style.display = 'block';
}

// Fermeture du modal
function closeModal() {
    document.getElementById('propertyModal').style.display = 'none';
}

// Libellé des types
function getTypeLabel(type) {
    const types = {
        house: 'Maison',
        apartment: 'Appartement',
        villa: 'Villa',
        loft: 'Loft',
        castle: 'Château'
    };
    return types[type] || type;
}

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    displayProperties(properties);
    
    // Événements
    document.getElementById('filter-btn').addEventListener('click', filterProperties);
    document.getElementById('reset-btn').addEventListener('click', resetFilters);
    document.querySelector('.close-modal').addEventListener('click', closeModal);
    
    // Fermer le modal en cliquant à l'extérieur
    window.addEventListener('click', (e) => {
        if (e.target === document.getElementById('propertyModal')) {
            closeModal();
        }
    });
    
    // Validation des inputs prix
    document.getElementById('price-min').addEventListener('input', function() {
        const priceMax = document.getElementById('price-max');
        if (this.value && priceMax.value && parseInt(this.value) > parseInt(priceMax.value)) {
            priceMax.value = this.value;
        }
    });
    
    document.getElementById('price-max').addEventListener('input', function() {
        const priceMin = document.getElementById('price-min');
        if (this.value && priceMin.value && parseInt(this.value) < parseInt(priceMin.value)) {
            priceMin.value = this.value;
        }
    });
});

