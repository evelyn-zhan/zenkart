const data = [
    {
        id: 1,
        price: 19.99,
        title: "Wireless Mouse",
        description: "A high-precision wireless mouse with ergonomic design.",
        images: [
            "https://via.placeholder.com/100",
            "https://via.placeholder.com/200"
        ],
        shop: {
            id: 101,
            name: "Tech Store"
        },
        discount_percentage: 10
    },
    {
        id: 2,
        price: 25.99,
        title: "Laptop Stand",
        description: "Adjustable laptop stand for better posture.",
        images: [
            "https://via.placeholder.com/100",
            "https://via.placeholder.com/200"
        ],
        shop: {
            id: 101,
            name: "Tech Store"
        },
        discount_percentage: 5
    },
    {
        id: 3,
        price: 15.99,
        title: "USB-C Cable",
        description: "Durable USB-C to USB-A cable.",
        images: [
            "https://via.placeholder.com/100",
            "https://via.placeholder.com/200"
        ],
        shop: {
            id: 101,
            name: "Tech Store"
        },
        discount_percentage: 10
    },
    {
        id: 4,
        price: 49.99,
        title: "Portable SSD",
        description: "Fast and compact portable SSD.",
        images: [
            "https://via.placeholder.com/100",
            "https://via.placeholder.com/200"
        ],
        shop: {
            id: 101,
            name: "Tech Store"
        },
        discount_percentage: 15
    },
    {
        id: 5,
        price: 89.99,
        title: "Smartphone Gimbal",
        description: "3-axis gimbal for smartphone video stabilization.",
        images: [
            "https://via.placeholder.com/100",
            "https://via.placeholder.com/200"
        ],
        shop: {
            id: 101,
            name: "Tech Store"
        },
        discount_percentage: 20
    },
    {
        id: 6,
        price: 69.99,
        title: "Noise Cancelling Headphones",
        description: "Over-ear noise cancelling headphones.",
        images: [
            "https://via.placeholder.com/100",
            "https://via.placeholder.com/200"
        ],
        shop: {
            id: 101,
            name: "Tech Store"
        },
        discount_percentage: 15
    },
    {
        id: 7,
        price: 19.99,
        title: "Bluetooth Adapter",
        description: "USB Bluetooth 5.0 adapter.",
        images: [
            "https://via.placeholder.com/100",
            "https://via.placeholder.com/200"
        ],
        shop: {
            id: 101,
            name: "Tech Store"
        },
        discount_percentage: 10
    },
    {
        id: 8,
        price: 34.99,
        title: "Webcam Cover",
        description: "Privacy webcam cover for laptops and desktops.",
        images: [
            "https://via.placeholder.com/100",
            "https://via.placeholder.com/200"
        ],
        shop: {
            id: 101,
            name: "Tech Store"
        },
        discount_percentage: 5
    },
    {
        id: 9,
        price: 99.99,
        title: "Mechanical Keyboard",
        description: "A mechanical keyboard with customizable RGB lighting.",
        images: [
            "https://via.placeholder.com/100",
            "https://via.placeholder.com/200"
        ],
        shop: {
            id: 102,
            name: "Keyboard World"
        },
        discount_percentage: 15
    },
    {
        id: 10,
        price: 59.99,
        title: "Gaming Keyboard",
        description: "Mechanical gaming keyboard with macro keys.",
        images: [
            "https://via.placeholder.com/100",
            "https://via.placeholder.com/200"
        ],
        shop: {
            id: 102,
            name: "Keyboard World"
        },
        discount_percentage: 20
    },
    {
        id: 11,
        price: 49.99,
        title: "Ergonomic Keyboard",
        description: "Split ergonomic keyboard for better posture.",
        images: [
            "https://via.placeholder.com/100",
            "https://via.placeholder.com/200"
        ],
        shop: {
            id: 102,
            name: "Keyboard World"
        },
        discount_percentage: 10
    },
    {
        id: 12,
        price: 89.99,
        title: "Wireless Mechanical Keyboard",
        description: "Wireless mechanical keyboard with long battery life.",
        images: [
            "https://via.placeholder.com/100",
            "https://via.placeholder.com/200"
        ],
        shop: {
            id: 102,
            name: "Keyboard World"
        },
        discount_percentage: 5
    },
    {
        id: 13,
        price: 79.99,
        title: "Compact Mechanical Keyboard",
        description: "Compact mechanical keyboard with red switches.",
        images: [
            "https://via.placeholder.com/100",
            "https://via.placeholder.com/200"
        ],
        shop: {
            id: 102,
            name: "Keyboard World"
        },
        discount_percentage: 10
    },
    {
        id: 14,
        price: 49.99,
        title: "RGB Keyboard",
        description: "RGB backlit keyboard with customizable lighting.",
        images: [
            "https://via.placeholder.com/100",
            "https://via.placeholder.com/200"
        ],
        shop: {
            id: 102,
            name: "Keyboard World"
        },
        discount_percentage: 15
    },
    {
        id: 15,
        price: 109.99,
        title: "Low-Profile Mechanical Keyboard",
        description: "Low-profile mechanical keyboard with quiet keys.",
        images: [
            "https://via.placeholder.com/100",
            "https://via.placeholder.com/200"
        ],
        shop: {
            id: 102,
            name: "Keyboard World"
        },
        discount_percentage: 20
    },
    {
        id: 16,
        price: 139.99,
        title: "Custom Mechanical Keyboard",
        description: "Customizable mechanical keyboard with hot-swappable switches.",
        images: [
            "https://via.placeholder.com/100",
            "https://via.placeholder.com/200"
        ],
        shop: {
            id: 102,
            name: "Keyboard World"
        },
        discount_percentage: 25
    },
    {
        id: 17,
        price: 49.99,
        title: "Bluetooth Speaker",
        description: "A portable Bluetooth speaker with superior sound quality.",
        images: [
            "https://via.placeholder.com/100",
            "https://via.placeholder.com/200"
        ],
        shop: {
            id: 103,
            name: "Sound Hub"
        },
        discount_percentage: 5
    },
    {
        id: 18,
        price: 59.99,
        title: "Smart Speaker",
        description: "Voice-controlled smart speaker with great sound.",
        images: [
            "https://via.placeholder.com/100",
            "https://via.placeholder.com/200"
        ],
        shop: {
            id: 103,
            name: "Sound Hub"
        },
        discount_percentage: 10
    },
    {
        id: 19,
        price: 129.99,
        title: "Home Theater System",
        description: "5.1 surround sound home theater system.",
        images: [
            "https://via.placeholder.com/100",
            "https://via.placeholder.com/200"
        ],
        shop: {
            id: 103,
            name: "Sound Hub"
        },
        discount_percentage: 15
    },
    {
        id: 20,
        price: 199.99,
        title: "Soundbar",
        description: "High-quality soundbar with subwoofer.",
        images: [
            "https://via.placeholder.com/100",
            "https://via.placeholder.com/200"
        ],
        shop: {
            id: 103,
            name: "Sound Hub"
        },
        discount_percentage: 20
    },
    {
        id: 21,
        price: 79.99,
        title: "Portable PA System",
        description: "Portable PA system with wireless microphone.",
        images: [
            "https://via.placeholder.com/100",
            "https://via.placeholder.com/200"
        ],
        shop: {
            id: 103,
            name: "Sound Hub"
        },
        discount_percentage: 5
    },
    {
        id: 22,
        price: 29.99,
        title: "Wireless Earphones",
        description: "In-ear wireless earphones with good bass.",
        images: [
            "https://via.placeholder.com/100",
            "https://via.placeholder.com/200"
        ],
        shop: {
            id: 103,
            name: "Sound Hub"
        },
        discount_percentage: 10
    },
    {
        id: 23,
        price: 99.99,
        title: "Noise Cancelling Earbuds",
        description: "Earbuds with active noise cancelling technology.",
        images: [
            "https://via.placeholder.com/100",
            "https://via.placeholder.com/200"
        ],
        shop: {
            id: 103,
            name: "Sound Hub"
        },
        discount_percentage: 15
    },
    {
        id: 24,
        price: 149.99,
        title: "Wireless Speaker System",
        description: "Multi-room wireless speaker system.",
        images: [
            "https://via.placeholder.com/100",
            "https://via.placeholder.com/200"
        ],
        shop: {
            id: 103,
            name: "Sound Hub"
        },
        discount_percentage: 20
    },
    {
        id: 25,
        price: 29.99,
        title: "USB-C Hub",
        description: "A versatile USB-C hub with multiple ports for connectivity.",
        images: [
            "https://via.placeholder.com/100",
            "https://via.placeholder.com/200"
        ],
        shop: {
            id: 104,
            name: "Accessory Depot"
        },
        discount_percentage: 20
    },
    {
        id: 26,
        price: 15.99,
        title: "USB Flash Drive",
        description: "32GB USB 3.0 flash drive.",
        images: [
            "https://via.placeholder.com/100",
            "https://via.placeholder.com/200"
        ],
        shop: {
            id: 104,
            name: "Accessory Depot"
        },
        discount_percentage: 5
    },
    {
        id: 27,
        price: 25.99,
        title: "Memory Card Reader",
        description: "All-in-one memory card reader.",
        images: [
            "https://via.placeholder.com/100",
            "https://via.placeholder.com/200"
        ],
        shop: {
            id: 104,
            name: "Accessory Depot"
        },
        discount_percentage: 10
    },
    {
        id: 28,
        price: 29.99,
        title: "Wireless Charger",
        description: "Qi wireless charger for smartphones.",
        images: [
            "https://via.placeholder.com/100",
            "https://via.placeholder.com/200"
        ],
        shop: {
            id: 104,
            name: "Accessory Depot"
        },
        discount_percentage: 15
    },
    {
        id: 29,
        price: 49.99,
        title: "Power Bank",
        description: "20000mAh power bank with fast charging.",
        images: [
            "https://via.placeholder.com/100",
            "https://via.placeholder.com/200"
        ],
        shop: {
            id: 104,
            name: "Accessory Depot"
        },
        discount_percentage: 20
    },
    {
        id: 30,
        price: 19.99,
        title: "Cable Organizer",
        description: "Magnetic cable organizer for desks.",
        images: [
            "https://via.placeholder.com/100",
            "https://via.placeholder.com/200"
        ],
        shop: {
            id: 104,
            name: "Accessory Depot"
        },
        discount_percentage: 5
    },
    {
        id: 31,
        price: 14.99,
        title: "Laptop Sleeve",
        description: "Protective laptop sleeve for 13-inch laptops.",
        images: [
            "https://via.placeholder.com/100",
            "https://via.placeholder.com/200"
        ],
        shop: {
            id: 104,
            name: "Accessory Depot"
        },
        discount_percentage: 10
    },
    {
        id: 32,
        price: 34.99,
        title: "Tablet Stand",
        description: "Adjustable stand for tablets and e-readers.",
        images: [
            "https://via.placeholder.com/100",
            "https://via.placeholder.com/200"
        ],
        shop: {
            id: 104,
            name: "Accessory Depot"
        },
        discount_percentage: 15
    },
    {
        id: 33,
        price: 59.99,
        title: "Gaming Headset",
        description: "A comfortable gaming headset with noise-cancelling microphone.",
        images: [
            "https://via.placeholder.com/100",
            "https://via.placeholder.com/200"
        ],
        shop: {
            id: 105,
            name: "Gamer's Paradise"
        },
        discount_percentage: 25
    },
    {
        id: 34,
        price: 79.99,
        title: "Gaming Chair",
        description: "Ergonomic gaming chair with lumbar support.",
        images: [
            "https://via.placeholder.com/100",
            "https://via.placeholder.com/200"
        ],
        shop: {
            id: 105,
            name: "Gamer's Paradise"
        },
        discount_percentage: 20
    },
    {
        id: 35,
        price: 129.99,
        title: "Gaming Monitor",
        description: "27-inch gaming monitor with 144Hz refresh rate.",
        images: [
            "https://via.placeholder.com/100",
            "https://via.placeholder.com/200"
        ],
        shop: {
            id: 105,
            name: "Gamer's Paradise"
        },
        discount_percentage: 15
    },
    {
        id: 36,
        price: 59.99,
        title: "Gaming Mouse",
        description: "High-DPI gaming mouse with customizable buttons.",
        images: [
            "https://via.placeholder.com/100",
            "https://via.placeholder.com/200"
        ],
        shop: {
            id: 105,
            name: "Gamer's Paradise"
        },
        discount_percentage: 10
    },
    {
        id: 37,
        price: 49.99,
        title: "Gaming Mouse Pad",
        description: "Large gaming mouse pad with RGB lighting.",
        images: [
            "https://via.placeholder.com/100",
            "https://via.placeholder.com/200"
        ],
        shop: {
            id: 105,
            name: "Gamer's Paradise"
        },
        discount_percentage: 5
    },
    {
        id: 38,
        price: 99.99,
        title: "Streaming Webcam",
        description: "1080p streaming webcam with ring light.",
        images: [
            "https://via.placeholder.com/100",
            "https://via.placeholder.com/200"
        ],
        shop: {
            id: 105,
            name: "Gamer's Paradise"
        },
        discount_percentage: 20
    },
    {
        id: 39,
        price: 119.99,
        title: "VR Headset",
        description: "Virtual reality headset with motion controllers.",
        images: [
            "https://via.placeholder.com/100",
            "https://via.placeholder.com/200"
        ],
        shop: {
            id: 105,
            name: "Gamer's Paradise"
        },
        discount_percentage: 25
    },
    {
        id: 40,
        price: 29.99,
        title: "Game Controller",
        description: "Wireless game controller for PC and console.",
        images: [
            "https://via.placeholder.com/100",
            "https://via.placeholder.com/200"
        ],
        shop: {
            id: 105,
            name: "Gamer's Paradise"
        },
        discount_percentage: 10
    },
    {
        id: 41,
        price: 79.99,
        title: "Smartwatch",
        description: "A stylish smartwatch with health tracking features.",
        images: [
            "https://via.placeholder.com/100",
            "https://via.placeholder.com/200"
        ],
        shop: {
            id: 106,
            name: "Watch Store"
        },
        discount_percentage: 10
    },
    {
        id: 42,
        price: 99.99,
        title: "Fitness Tracker",
        description: "Advanced fitness tracker with heart rate monitor.",
        images: [
            "https://via.placeholder.com/100",
            "https://via.placeholder.com/200"
        ],
        shop: {
            id: 106,
            name: "Watch Store"
        },
        discount_percentage: 15
    },
    {
        id: 43,
        price: 149.99,
        title: "Luxury Smartwatch",
        description: "High-end smartwatch with premium materials.",
        images: [
            "https://via.placeholder.com/100",
            "https://via.placeholder.com/200"
        ],
        shop: {
            id: 106,
            name: "Watch Store"
        },
        discount_percentage: 20
    },
    {
        id: 44,
        price: 59.99,
        title: "Hybrid Smartwatch",
        description: "Hybrid smartwatch with traditional watch hands.",
        images: [
            "https://via.placeholder.com/100",
            "https://via.placeholder.com/200"
        ],
        shop: {
            id: 106,
            name: "Watch Store"
        },
        discount_percentage: 10
    },
    {
        id: 45,
        price: 79.99,
        title: "Kid's Smartwatch",
        description: "Smartwatch designed for kids with parental controls.",
        images: [
            "https://via.placeholder.com/100",
            "https://via.placeholder.com/200"
        ],
        shop: {
            id: 106,
            name: "Watch Store"
        },
        discount_percentage: 5
    },
    {
        id: 46,
        price: 199.99,
        title: "GPS Smartwatch",
        description: "Smartwatch with built-in GPS for tracking runs.",
        images: [
            "https://via.placeholder.com/100",
            "https://via.placeholder.com/200"
        ],
        shop: {
            id: 106,
            name: "Watch Store"
        },
        discount_percentage: 15
    },
    {
        id: 47,
        price: 249.99,
        title: "Diving Smartwatch",
        description: "Smartwatch designed for underwater activities.",
        images: [
            "https://via.placeholder.com/100",
            "https://via.placeholder.com/200"
        ],
        shop: {
            id: 106,
            name: "Watch Store"
        },
        discount_percentage: 20
    },
    {
        id: 48,
        price: 99.99,
        title: "Classic Smartwatch",
        description: "Smartwatch with classic design and smart features.",
        images: [
            "https://via.placeholder.com/100",
            "https://via.placeholder.com/200"
        ],
        shop: {
            id: 106,
            name: "Watch Store"
        },
        discount_percentage: 10
    },
    {
        id: 49,
        price: 39.99,
        title: "External Hard Drive",
        description: "A 1TB external hard drive with fast data transfer speeds.",
        images: [
            "https://via.placeholder.com/100",
            "https://via.placeholder.com/200"
        ],
        shop: {
            id: 107,
            name: "Storage Solutions"
        },
        discount_percentage: 5
    },
    {
        id: 50,
        price: 69.99,
        title: "SSD External Drive",
        description: "500GB SSD external drive with high-speed data transfer.",
        images: [
            "https://via.placeholder.com/100",
            "https://via.placeholder.com/200"
        ],
        shop: {
            id: 107,
            name: "Storage Solutions"
        },
        discount_percentage: 10
    },
    {
        id: 51,
        price: 89.99,
        title: "Network Attached Storage",
        description: "2-bay NAS for home and small office use.",
        images: [
            "https://via.placeholder.com/100",
            "https://via.placeholder.com/200"
        ],
        shop: {
            id: 107,
            name: "Storage Solutions"
        },
        discount_percentage: 15
    },
    {
        id: 52,
        price: 129.99,
        title: "Portable SSD",
        description: "1TB portable SSD with USB 3.1 interface.",
        images: [
            "https://via.placeholder.com/100",
            "https://via.placeholder.com/200"
        ],
        shop: {
            id: 107,
            name: "Storage Solutions"
        },
        discount_percentage: 20
    },
    {
        id: 53,
        price: 39.99,
        title: "USB Flash Drive Set",
        description: "Set of 3 USB 3.0 flash drives (32GB each).",
        images: [
            "https://via.placeholder.com/100",
            "https://via.placeholder.com/200"
        ],
        shop: {
            id: 107,
            name: "Storage Solutions"
        },
        discount_percentage: 10
    },
    {
        id: 54,
        price: 79.99,
        title: "Wireless Backup Drive",
        description: "Wireless backup drive for automatic backups.",
        images: [
            "https://via.placeholder.com/100",
            "https://via.placeholder.com/200"
        ],
        shop: {
            id: 107,
            name: "Storage Solutions"
        },
        discount_percentage: 15
    },
    {
        id: 55,
        price: 49.99,
        title: "Secure USB Drive",
        description: "USB drive with hardware encryption.",
        images: [
            "https://via.placeholder.com/100",
            "https://via.placeholder.com/200"
        ],
        shop: {
            id: 107,
            name: "Storage Solutions"
        },
        discount_percentage: 20
    },
    {
        id: 56,
        price: 19.99,
        title: "Memory Card",
        description: "128GB microSD memory card with adapter.",
        images: [
            "https://via.placeholder.com/100",
            "https://via.placeholder.com/200"
        ],
        shop: {
            id: 107,
            name: "Storage Solutions"
        },
        discount_percentage: 5
    },
    {
        id: 57,
        price: 89.99,
        title: "HD Webcam",
        description: "A high-definition webcam with built-in microphone.",
        images: [
            "https://via.placeholder.com/100",
            "https://via.placeholder.com/200"
        ],
        shop: {
            id: 108,
            name: "Camera World"
        },
        discount_percentage: 15
    },
    {
        id: 58,
        price: 149.99,
        title: "Digital Camera",
        description: "Compact digital camera with 20MP sensor.",
        images: [
            "https://via.placeholder.com/100",
            "https://via.placeholder.com/200"
        ],
        shop: {
            id: 108,
            name: "Camera World"
        },
        discount_percentage: 10
    },
    {
        id: 59,
        price: 89.99,
        title: "Webcam for Streaming",
        description: "HD webcam designed for streaming with autofocus.",
        images: [
            "https://via.placeholder.com/100",
            "https://via.placeholder.com/200"
        ],
        shop: {
            id: 108,
            name: "Camera World"
        },
        discount_percentage: 5
    },
    {
        id: 60,
        price: 299.99,
        title: "DSLR Camera",
        description: "Entry-level DSLR camera with 18-55mm lens.",
        images: [
            "https://via.placeholder.com/100",
            "https://via.placeholder.com/200"
        ],
        shop: {
            id: 108,
            name: "Camera World"
        },
        discount_percentage: 15
    },
    {
        id: 61,
        price: 49.99,
        title: "Camera Tripod",
        description: "Lightweight and portable camera tripod.",
        images: [
            "https://via.placeholder.com/100",
            "https://via.placeholder.com/200"
        ],
        shop: {
            id: 108,
            name: "Camera World"
        },
        discount_percentage: 10
    },
    {
        id: 62,
        price: 69.99,
        title: "Action Camera",
        description: "Waterproof action camera with 4K recording.",
        images: [
            "https://via.placeholder.com/100",
            "https://via.placeholder.com/200"
        ],
        shop: {
            id: 108,
            name: "Camera World"
        },
        discount_percentage: 20
    }
]

const imageUrl = [
    "https://m.media-amazon.com/images/I/61NjDC5FiPL._AC_UF1000,1000_QL80_.jpg",
    "https://images-cdn.ubuy.co.id/644673783d89926a4b7a95d4-viglt-laptop-stand-for-desk-adjustable.jpg",
    "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/HQZQ2?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1693504246821",
    "https://i5.walmartimages.com/seo/YISOHO0-32TB-High-Speed-SSD-Portable-Data-Storage-Hard-Drive-Type-C-USB-3-0_77b9c47b-8832-4b1c-b190-a3544a99763a.81cbaa001682685e52bd6487136a7d2b.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
    "https://media.croma.com/image/upload/v1672392906/Croma%20Assets/Imaging/Camera%20Accessories/Images/262841_0_l6uwxw.png",
    "https://main.mobile.doss.co.id/storage/uploads/2023/03/medium/sony-wh-ch720n-wireless-over-ear-noise-canceling-headphones-black.webp",
    "https://m.media-amazon.com/images/I/61na1lk6ZGL.jpg",
    "https://laptopwithlinux.com/wp-content/uploads/Webcam-Cover-laptop.png",
    "https://static.wixstatic.com/media/8517ed_fd3be655db9643d89289d29e3f360238~mv2.png/v1/fill/w_596,h_326,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Phantom87_02%20-%201.png",
    "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c08255450.png",
    "https://resource.logitech.com/w_692,c_lpad,ar_4:3,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/keyboards/ergo-k860-business/gallery/ergo-k860-for-business-gallery-1-us-new.png?v=1",
    "https://resource.logitech.com/w_800,c_lpad,ar_16:9,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/keyboards/mx-mechanical/gallery/mx-mechanical-keyboard-top-view-graphite-us.png?v=1",
    "https://resource.logitech.com/w_1800,h_1800,c_limit,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/keyboards/mx-mechanical/gallery/mx-mechanical-mini/mx-mechanical-mini-mini-keyboard-top-view-graphite-us.png?v=1",
    "https://www.gadgettree.co.uk/wp-content/uploads/2021/09/hx-product-keyboard-alloy-core-rgb-hxkb5me2es-1-zm-lg.jpg"
]

for(let i = 0; i < imageUrl.length; i++) {
    data[i].images = imageUrl[i];
}

function getProducts() {
    const products = data.map(product => {
        return {
            ...product,
            inCart: false,
            quantity: 0
        };
    });

    return products;
}

export default getProducts;
