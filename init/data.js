const sampleListings = [
  {
    title: "Cozy Studio",
    description: "Perfect for solo travelers or couples.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 850,
    location: "Colaba, Mumbai",
    country: "India",
    owner: "67ece7488cfe2def0d963926",
    geometry: {
      type: "Point",
      coordinates: [-118.7798, 34.0259]
    }
  },
  {
    title: "Beachside Bungalow",
    description: "Wake up to the sound of waves.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1674309438579-587b58d8486e?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 2500,
    location: "Calangute, Goa",
    country: "India",
    owner: "67ece7488cfe2def0d963926",
    geometry: {
      type: "Point",
      coordinates: [-118.7798, 34.0259]
    }
  },
  {
    title: "Luxury Apartment",
    description: "Modern and spacious, ideal for families.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1676320514018-ec119b57dbce?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 4500,
    location: "Khar, Mumbai",
    country: "India",
    owner: "67ece7488cfe2def0d963926",
    geometry: {
      type: "Point",
      coordinates: [-118.7798, 34.0259]
    }
  },
  {
    title: "Mountain Cabin",
    description: "Escape to nature in this serene cabin.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1463620910506-d0458143143e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 1900,
    location: "Manali, Himachal Pradesh",
    country: "India",
    owner: "67ece7488cfe2def0d963926",
    geometry: {
      type: "Point",
      coordinates: [-118.7798, 34.0259]
    }
  },
  {
    title: "Heritage Villa",
    description: "Experience the charm of old-world elegance.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1690987601363-83022d125159?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFwYXJ0bWVudHxlbnwwfHwwfHx8MA%3D%3D",
    },
    price: 3200,
    location: "Jaipur, Rajasthan",
    country: "India",
    owner: "67ece7488cfe2def0d963926",
    geometry: {
      type: "Point",
      coordinates: [-118.7798, 34.0259]
    }
  },
  {
    title: "Hilltop Cottage",
    description: "Enjoy panoramic views from the hills.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1472553384749-8596bacb90c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 2800,
    location: "Shillong, Meghalaya",
    country: "India",
    owner: "67ece7488cfe2def0d963926",
    geometry: {
      type: "Point",
      coordinates: [-118.7798, 34.0259]
    }
  },
  {
    title: "Urban Loft",
    description: "Sleek and stylish in the heart of the city.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1510563800743-aed236490d08?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 2100,
    location: "Bangalore, Karnataka",
    country: "India",
    owner: "67ece7488cfe2def0d963926",
    geometry: {
      type: "Point",
      coordinates: [-118.7798, 34.0259]
    }
  },
  {
    title: "Desert Camp",
    description: "Stay under the stars in the Thar Desert.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1527772482340-7895c3f2b3f7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGFwYXJ0bWVudHxlbnwwfHwwfHx8MA%3D%3D",
    },
    price: 1500,
    location: "Jaisalmer, Rajasthan",
    country: "India",
    owner: "67ece7488cfe2def0d963926",
    geometry: {
      type: "Point",
      coordinates: [-118.7798, 34.0259]
    }
  },
  {
    title: "Backwater Houseboat",
    description: "Relax on a houseboat surrounded by nature.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 3700,
    location: "Alleppey, Kerala",
    country: "India",
    owner: "67ece7488cfe2def0d963926",
    geometry: {
      type: "Point",
      coordinates: [-118.7798, 34.0259]
    }
  },
  {
    title: "Penthouse Suite",
    description: "Experience ultimate luxury.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1732445027511-4a6cde297c31?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 5500,
    location: "Connaught Place, Delhi",
    country: "India",
    owner: "67ece7488cfe2def0d963926",
    geometry: {
      type: "Point",
      coordinates: [-118.7798, 34.0259]
    }
  },
  {
    title: "Lakeside Retreat",
    description: "Unwind by the peaceful lake.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 2400,
    location: "Nainital, Uttarakhand",
    country: "India",
    owner: "67ece7488cfe2def0d963926",
    geometry: {
      type: "Point",
      coordinates: [-118.7798, 34.0259]
    }
  },
  {
    title: "Rustic Farmhouse",
    description: "Perfect for nature lovers and quiet escapes.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1676321688612-4451a8721435?q=80&w=2007&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 1850,
    location: "Mysore, Karnataka",
    country: "India",
    owner: "67ece7488cfe2def0d963926",
    geometry: {
      type: "Point",
      coordinates: [-118.7798, 34.0259]
    }
  },
  {
    title: "Treehouse Stay",
    description: "Unique treehouse experience amidst greenery.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 2100,
    location: "Wayanad, Kerala",
    country: "India",
    owner: "67ece7488cfe2def0d963926",
    geometry: {
      type: "Point",
      coordinates: [-118.7798, 34.0259]
    }
  },
  {
    title: "Chic Studio Apartment",
    description: "Compact and stylish in the city center.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1676968002945-c8f74e0e27d8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 1200,
    location: "Pune, Maharashtra",
    country: "India",
    owner: "67ece7488cfe2def0d963926",
    geometry: {
      type: "Point",
      coordinates: [-118.7798, 34.0259]
    }
  },
  {
    title: "Jungle Safari Tent",
    description: "Adventure amidst the wild.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1519643381401-22c77e60520e?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 3000,
    location: "Jim Corbett, Uttarakhand",
    country: "India",
    owner: "67ece7488cfe2def0d963926",
    geometry: {
      type: "Point",
      coordinates: [-118.7798, 34.0259]
    }
  },
  {
    title: "Seaside Shack",
    description: "Affordable and fun by the sea.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1510563800743-aed236490d08?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 950,
    location: "Anjuna, Goa",
    country: "India",
    owner: "67ece7488cfe2def0d963926",
    geometry: {
      type: "Point",
      coordinates: [-118.7798, 34.0259]
    }
  },
  {
    title: "Historical Haveli",
    description: "Step back in time with royal hospitality.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1489936724440-afaf5a115ede?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGFwYXJ0bWVudHxlbnwwfHwwfHx8MA%3D%3D",
    },
    price: 5000,
    location: "Udaipur, Rajasthan",
    country: "India",
    owner: "67ece7488cfe2def0d963926",
    geometry: {
      type: "Point",
      coordinates: [-118.7798, 34.0259]
    }
  },
  {
    title: "Modern City Pad",
    description: "Conveniently located and tech-enabled.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 2200,
    location: "Hyderabad, Telangana",
    country: "India",
    owner: "67ece7488cfe2def0d963926",
    geometry: {
      type: "Point",
      coordinates: [-118.7798, 34.0259]
    }
  },
  {
    title: "Countryside Barn",
    description: "Rustic charm and scenic landscapes.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?q=80&w=2065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 1750,
    location: "Coonoor, Tamil Nadu",
    country: "India",
    owner: "67ece7488cfe2def0d963926",
    geometry: {
      type: "Point",
      coordinates: [-118.7798, 34.0259]
    }
  },
  {
    title: "Luxury Pool Villa",
    description: "Private villa with pool and premium amenities.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1661964014750-963a28aeddea?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 6000,
    location: "Lonavala, Maharashtra",
    country: "India",
    owner: "67ece7488cfe2def0d963926",
    geometry: {
      type: "Point",
      coordinates: [-118.7798, 34.0259]
    }
  },
  {
    title: "Ski Lodge",
    description: "Cozy stay for ski enthusiasts.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1460408037948-b89a5e837b41?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGFwYXJ0bWVudHxlbnwwfHwwfHx8MA%3D%3D",
    },
    price: 4000,
    location: "Gulmarg, Kashmir",
    country: "India",
    owner: "67ece7488cfe2def0d963926",
    geometry: {
      type: "Point",
      coordinates: [-118.7798, 34.0259]
    }
  },
  {
    title: "Modern Duplex",
    description: "Spacious and chic with stunning interiors.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 4300,
    location: "Indore, Madhya Pradesh",
    country: "India",
    owner: "67ece7488cfe2def0d963926",
    geometry: {
      type: "Point",
      coordinates: [-118.7798, 34.0259]
    }
  },
  {
    title: "Oceanfront Condo",
    description: "Mesmerizing ocean views from the balcony.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1515516089376-88db1e26e9c0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 3400,
    location: "Chennai, Tamil Nadu",
    country: "India",
    owner: "67ece7488cfe2def0d963926",
    geometry: {
      type: "Point",
      coordinates: [-118.7798, 34.0259]
    }
  },
  {
    title: "Island Getaway",
    description: "Secluded and serene for ultimate relaxation.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1684508638760-72ad80c0055f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 5000,
    location: "Andaman and Nicobar Islands",
    country: "India",
    owner: "67ece7488cfe2def0d963926",
    geometry: {
      type: "Point",
      coordinates: [-118.7798, 34.0259]
    }
  },
  {
    title: "Vintage Palace Room",
    description: "Stay in a royal palace suite.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 7000,
    location: "Jodhpur, Rajasthan",
    country: "India",
    owner: "67ece7488cfe2def0d963926",
    geometry: {
      type: "Point",
      coordinates: [-118.7798, 34.0259]
    }
  },
  {
    title: "Riverside Cottage",
    description: "Wake up to river views and fresh air.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501876725168-00c445821c9e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 2700,
    location: "Rishikesh, Uttarakhand",
    country: "Japan",
    owner: "67ece7488cfe2def0d963926",
    geometry: {
      type: "Point",
      coordinates: [-118.7798, 34.0259]
    }
  },
  {
    title: "Eco-Friendly Hut",
    description: "Sustainable stay with natural surroundings.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1735446918160-af0b896b7a89?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 1100,
    location: "Coorg, Karnataka",
    country: "India",
    owner: "67ece7488cfe2def0d963926",
    geometry: {
      type: "Point",
      coordinates: [-118.7798, 34.0259]
    }
  },
  {
    title: "Artist's Studio",
    description: "Quirky and colorful for creative minds.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1800&auto=format&fit=crop",
    },
    price: 1300,
    location: "Auroville, Tamil Nadu",
    country: "India",
    owner: "67ece7488cfe2def0d963926",
    geometry: {
      type: "Point",
      coordinates: [-118.7798, 34.0259]
    }
  },
  {
    title: "Cultural Homestay",
    description: "Immerse in local culture and traditions.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1519999482648-25049ddd37b1?q=80&w=1800&auto=format&fit=crop",
    },
    price: 950,
    location: "Varanasi, Uttar Pradesh",
    country: "India",
    owner: "67ece7488cfe2def0d963926",
    geometry: {
      type: "Point",
      coordinates: [-118.7798, 34.0259]
    }
  },
];

module.exports = { data: sampleListings }


// url: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
