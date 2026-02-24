import "./Artworks.css";

const artworksData = [
  {
    id: 1,
    name: "Sunset Dreams",
    price: "₹5,000",
    image: "https://images.unsplash.com/photo-1549880338-65ddcdfd017b"
  },
  {
    id: 2,
    name: "Ocean Silence",
    price: "₹7,500",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRimbMsIQ0c_Ym7wxUgxpa8He2F2b40-MDK9A&s"
  },
  {
    id: 3,
    name: "Abstract Vision",
    price: "₹4,200",
    image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7"
  },
  {
    id: 4,
    name: "petals in the Wind",
    price: "$28.00",
    artist: "Jane Smith",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPM47udNWTLoWFLaluwRIRVyAgJaUplBGO9Q&s"
  },
  {
    id: 5,
    name: "Tears of the Sky",
    price: "₹3000",
    artist: "Emily Rose",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJK77gC0syRtt5UCyGuo63tKQSy71XzdAHaA&s"
  },
  {
    id: 6,
    name: "Vintage velevet painting",
    price: "$200.00",
    artist: "John Doe",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtcUIHJcCVVoYnyG4sMS-11WXV9OaAYprXBw&s"
  },
  {
    id: 7,
    name: "Abstract Vision",
    price: "₹4,200",
    image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7"
  },
  {
    id: 8,
    name: "Silent Screams",
    price: "₹8000",
    artist: "Michael Lee",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTULYzr_laLoGciScK2A3wbS767VuUBkX7BqQ&s"
  },
  {
    id: 9,
    name: "Abstract Vision",
    price: "₹4,200",
    image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7"
  },
  {
    id: 10,
    name: "The petals",
    price: "₹7,500",
    artist: "Emily Rose",
    image: "https://flairvibestudio.com/cdn/shop/files/7068-Quadro-Abstrato-Petalas-ao-Vento-1.jpg?v=1743680845&width=1445"
  },
  {
    id: 11,
    name: "Meeting of Elements",
    price: "$3000",
    artist: "Aeliana Lumiere",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0MCNRCqzevZR7b_UudYGOg2fZHJ7cdBd7ww&s"
  },
  {
    id: 12,
    name: "Abstract Vision",
    price: "₹4,200",
    image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7"
  },
  {
    id: 13,
    name: "Flower",
    price: "$90.00",
    artist: "Jane Smith",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr6OzpVyKkl_T-EpFxNfC0MWLmnf8fMPApOQ&s"
  },
  {
    id: 14,
    name: "stary Night Over The Rhone",
    price: "₹6,000",
    artist: "Vincent van Gogh",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxOgvGfgXN2TNmZreXRLFE3riSD_wOQEGudw&s"
  },
  {
    id: 15,
    name: "Abstract Vision",
    price: "₹4,200",
    image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7"
  },
];

function Artworks() {
  return (
    <div className="artworks-page">
      <h2 className="page-title">Explore Artworks</h2>

      <div className="artworks-grid">
        {artworksData.map((art) => (
          <div key={art.id} className="art-card">
            <img src={art.image} alt={art.name} />
            <h3>{art.name}</h3>
            <p className="price">{art.price}</p>
            <p className="artist">
             Artist: {art.artist}
            </p>

            <div className="card-buttons">
              <button className="wishlist-btn">♡ Wishlist</button>
              <button className="buy-btn">Buy</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Artworks;