import { Injectable } from "@angular/core";

@Injectable({
    providedIn:"root"
})
export class ProductSampleAPiService{
    [x: string]: any;

    productList:any = [
        {
            "id":1,
            "brand": "Apple",
            "model": "iPhone 14 Pro",
            "type": "phone",
            "price":459900,
            "discountAvailable": true,
            "discount":10,
            "stock": 10,
            "release_date": "2023-09",
            "display": "6.1-inch Super Retina XDR OLED",
            "chipset": "A16 Bionic",
            "battery": "3200 mAh",
            "technology": "GSM / CDMA / HSPA / EVDO / LTE / 5G",
            "storage": "128GB, 256GB, 512GB, 1TB",
            "camera": "Triple 12 MP (wide, ultra-wide, telephoto)",
            "images": [
                "https://celltronics.lk/wp-content/uploads/2022/09/Apple-iPhone-14-Pro-5.jpg",
                "https://celltronics.lk/wp-content/uploads/2022/09/Apple-iPhone-14-Pro-1-2.jpg",
                "https://celltronics.lk/wp-content/uploads/2022/09/Apple-iPhone-14-Pro-3-2.jpg",
                "https://celltronics.lk/wp-content/uploads/2022/09/Apple-iPhone-14-Pro-2-2.jpg"
            ],
            
          },
          {
            "id":2,
            "brand": "Samsung",
            "model": "Galaxy S23 Ultra",
            "price": 299900,
            "type":"phone",
            "discountAvailable": true,
            "discount":8,
            "stock": 15,
            "release_date": "2023-02",
            "display": "6.8-inch Dynamic AMOLED 2X",
            "chipset": "Exynos 2200 / Snapdragon 8 Gen 2",
            "battery": "5000 mAh",
            "technology": "GSM / CDMA / HSPA / EVDO / LTE / 5G",
            "storage": "256GB, 512GB, 1TB",
            "camera": "Quad camera (200 MP wide, 12 MP ultra-wide, 10 MP telephoto)",
            "images": [
              "https://celltronics.lk/wp-content/uploads/2023/02/Untitled-design-3.jpg",
                "https://celltronics.lk/wp-content/uploads/2023/02/Samsung-galaxy-S23-ultra-1.jpg"
            ]
          },
          {
            "id":3,
            "brand": "Apple",
            "model": "iPad Pro 12.9",
            "type": "tablet",
            "price":284900,
            "discountAvailable": false,
            "discount":0,
            "stock": 5,
            "release_date": "2023-02",
            "display": "12.9-inch Liquid Retina XDR",
            "chipset": "Apple M2",
            "battery": "10,758 mAh",
            "storage": "128GB, 256GB, 512GB, 1TB, 2TB",
            "camera": "Dual camera (12 MP wide, 10 MP ultra-wide)",
            "features": "Face ID, LiDAR scanner",
            "images": [
              "https://celltronics.lk/wp-content/uploads/2021/03/00098.jpg",
              "https://celltronics.lk/wp-content/uploads/2021/03/0009.jpg",
              "https://celltronics.lk/wp-content/uploads/2021/03/1122.jpg",
              "https://celltronics.lk/wp-content/uploads/2021/03/celltronics-temp-5.jpg"
            ]
          },
          {
            "id":4,
            "brand": "Apple",
            "model": "MacBook Pro 16",
            "type": "laptop",
            "price":949900,
            "discountAvailable": true,
            "discount":30,
            "stock": 10,
            "release_date": "2023-01",
            "display": "16-inch Liquid Retina XDR",
            "processor": "Apple M2 Max",
            "ram": "32GB",
            "storage": "1TB SSD",
            "battery_life": "Up to 21 hours",
            "graphics": "M2 Max GPU",
            "features": "Touch ID, Magic Keyboard, Wi-Fi 6E, Bluetooth 5.3",
            "images": [
              "https://celltronics.lk/wp-content/uploads/2023/03/Apple-MacBook-Pro-16-inch-M2-Max-2023-32GB-RAM-1TB.jpg",
              "https://celltronics.lk/wp-content/uploads/2023/03/Apple-MacBook-Pro-16-inch-M2-Max-2023-32GB-RAM-1TB-1.jpg"
            ]
          },

          {
            "id":5,
            "brand": "Google",
            "model": "Pixel 7 Pro",
            "price": 299900,
            "type":"phone",
            "discountAvailable": true,
            "discount":5,
            "stock": 15,
            "release_date": "2023-03",
            "display": "6.7-inch LTPO AMOLED",
            "chipset": "Google Tensor G2",
            "battery": "5000 mAh",
            "technology": "GSM / CDMA / HSPA / EVDO / LTE / 5G",
            "storage": "128GB, 256GB",
            "camera": "Triple camera (50 MP wide, 12 MP ultra-wide, 48 MP telephoto)",
            "images": [
              "https://celltronics.lk/wp-content/uploads/2022/09/Google-Pixel-7-Pro-5G-1.jpg",
              "https://celltronics.lk/wp-content/uploads/2022/09/Google-Pixel-7-Pro-5G-2.jpg",
              "https://celltronics.lk/wp-content/uploads/2022/09/Google-Pixel-7-Pro-5G-1-1.jpg"
            ]
          },
          {
            "id":6,
            "brand": "Samsung",
            "model": "QN90C Neo QLED",
            "type": "tv",
            "price":2350000,
            "discountAvailable": true,
            "discount":35,
            "stock": 5,
            "release_date": "2023-05",
            "display": "4K Neo QLED",
            "screen_size": "55-inch, 65-inch, 75-inch, 85-inch",
            "features": "HDR10+, Quantum HDR 32X, Dolby Atmos",
            "resolution": "3840 x 2160",
            "images": [
              "https://mcprod.hyperone.com.eg/media/catalog/product/cache/1ca275941aea0ae98b372dcb44b7c67a/8/8/8806094886320.jpg",
              "https://i0.wp.com/mztraders.lk/wp-content/uploads/2023/11/Samsung-Neo-QLED-4K-QN90C-PRICE-IN-SRI-LANKA-1.png?fit=500%2C500&ssl=1"
            ]
          },
          {
            "id":7,
            "brand": "LG",
            "model": "C3 OLED",
            "type": "tv",
            "price":522607,
            "discountAvailable": true,
            "discount":10,
            "stock": 10,
            "release_date": "2023-03",
            "display": "4K OLED",
            "screen_size": "48-inch, 55-inch, 65-inch, 77-inch, 83-inch",
            "features": "Dolby Vision IQ, Filmmaker Mode, HDR10",
            "resolution": "3840 x 2160",
            "images": [
              "https://mitosshoppers.com/wp-content/uploads/2023/09/LG-OLED-TV.jpg",
              "https://th.bing.com/th/id/OIP.v_sDJPru6AFTFrNwv8-VGgHaHa?w=1200&h=1200&rs=1&pid=ImgDetMain"
            ]
          },
            {
              "id":8,
              "brand": "Dell",
              "model": "XPS 13 Plus",
              "type": "laptop",
              "price":449999,
              "discountAvailable": true,
              "discount":20,
              "stock": 0,
              "release_date": "2023-04",
              "display": "13.4-inch FHD+ OLED",
              "processor": "Intel Core i7-1260P",
              "ram": "16GB",
              "storage": "512GB SSD",
              "battery_life": "Up to 12 hours",
              "graphics": "Intel Iris Xe Graphics",
              "features": "Fingerprint reader, backlit keyboard, Thunderbolt 4",
              "images": [
                "https://objectstorage.ap-mumbai-1.oraclecloud.com/n/softlogicbicloud/b/cdn/o/products/600-600/DELL9310-I7-SIL-MSO-01--1640086056.jpeg",
                "https://objectstorage.ap-mumbai-1.oraclecloud.com/n/softlogicbicloud/b/cdn/o/products/600-600/DELL9310-I7-SIL-MSO-02--1640086056.jpeg"
              ]
            
          },
          {
            "id":9,
            "brand": "Lenovo",
            "model": "ThinkPad X1 Carbon",
            "type": "laptop",
            "price":220000,
            "discountAvailable": false,
            "discount":0,
            "stock": 20,
            "release_date": "2023-02",
            "display": "14-inch WQHD+",
            "processor": "Intel Core i7-1280P",
            "ram": "32GB",
            "storage": "1TB SSD",
            "battery_life": "Up to 15 hours",
            "graphics": "Intel Iris Xe Graphics",
            "features": "Fingerprint reader, backlit keyboard, Wi-Fi 6E",
            "images": [
              "https://static-data2.manualslib.com/product-images/284/28337/2833690/raw.jpg",
              "https://addin.co.th/wp-content/uploads/2022/07/notebook-lenovo-thinkpad-e14-gen4-01.jpg"
            ]
          },
          {
            "id":10,
            "brand": "OnePlus",
            "model": "OnePlus 11",
            "type": "phone",
            "price": 289900,
            "discountAvailable": false,
            "discount":0,
            "stock": 5,
            "release_date": "2023-02",
            "display": "6.7-inch LTPO3 AMOLED",
            "chipset": "Snapdragon 8 Gen 2",
            "battery": "5000 mAh",
            "technology": "GSM / CDMA / HSPA / EVDO / LTE / 5G",
            "storage": "128GB, 256GB",
            "camera": "Triple camera (50 MP wide, 48 MP ultra-wide, 32 MP telephoto)",
            "images": [
              "https://celltronics.lk/wp-content/uploads/2023/04/OnePlus-11-5G-12GB-RAM-256GB.jpg",
              "https://celltronics.lk/wp-content/uploads/2023/04/OnePlus-11-5G-12GB-RAM-256GB-1.jpg"
            ]
          },
          {
            "id":11,
            "brand": "Xiaomi",
            "model": "11T Pro",
            "type": "phone",
            "price": 299900,
            "discountAvailable": true,
            "discount": 10,
            "stock": 15,
            "release_date": "2023-02",
            "display": "6.73-inch LTPO OLED",
            "chipset": "Snapdragon 8 Gen 2",
            "battery": "5000 mAh",
            "technology": "GSM / CDMA / HSPA / EVDO / LTE / 5G",
            "storage": "128GB, 256GB",
            "camera": "Triple camera (50 MP wide, 50 MP ultra-wide, 50 MP telephoto)",
            "images": [
             "https://celltronics.lk/wp-content/uploads/2022/06/01-10.jpg",
             "https://celltronics.lk/wp-content/uploads/2022/06/03-8.jpg"
            ]
          },
          {
            "id":12,
            "brand": "Huawei",
            "model": "Mate 50 Pro",
            "type": "phone",
            "price": 299900,
            "discountAvailable": true,
            "discount":5,
            "stock": 15,
            "release_date": "2023-01",
            "display": "6.74-inch OLED",
            "chipset": "Kirin 9000S",
            "battery": "4700 mAh",
            "technology": "GSM / CDMA / HSPA / EVDO / LTE / 5G",
            "storage": "256GB, 512GB",
            "camera": "Triple camera (50 MP wide, 13 MP ultra-wide, 64 MP telephoto)",
            "images": [
             "https://specs-tech.com/wp-content/uploads/2020/10/Huawei-Mate-40.jpg",
             "https://th.bing.com/th/id/OIP.NqmWTK8oliA5VIGmyoMsOAHaHa?rs=1&pid=ImgDetMain"
            ]
          },
          {
            "id":13,
            "brand": "Microsoft",
            "model": "Surface Laptop 5",
            "type": "laptop",
            "price": 527670,
            "discountAvailable": true,
            "discount":20,
            "stock": 11,
            "release_date": "2023-06",
            "display": "13.5-inch PixelSense",
            "processor": "Intel Core i7-1265U",
            "ram": "16GB",
            "storage": "512GB SSD",
            "battery_life": "Up to 12 hours",
            "graphics": "Intel Iris Xe Graphics",
            "features": "Touchscreen, USB-C, USB-A",
            "images": [
              "https://multimedia.bbycastatic.ca/multimedia/products/500x500/172/17212/17212077.jpg",
              "https://flatwhiteproduction.blob.core.windows.net/images/Microsoft%20Surface%20Laptop%204%20W11%20Platinum.jpg"
            ]
          },
          {
            "id":14,
            "brand": "ASUS",
            "model": "ROG Zephyrus G14",
            "type":"laptop",
            "price": 766188,
            "discountAvailable": true,
            "discount":20,
            "stock": 5,
            "release_date": "2023-07",
            "display": "14-inch QHD+",
            "processor": "AMD Ryzen 9 7940HS",
            "ram": "32GB",
            "storage": "1TB SSD",
            "battery_life": "Up to 10 hours",
            "graphics": "NVIDIA GeForce RTX 4060",
            "features": "RGB keyboard, USB-C charging, Dolby Atmos",
            "images": [
             "https://th.bing.com/th/id/OIP.wYbH-dWaR9w3hljOxxGOMgHaHa?w=1000&h=1000&rs=1&pid=ImgDetMain",
             "https://www.techlandbd.com/image/catalog/Laptop/ASUS/rog-zephyrus-g14-ga402rj/asus-rog-zephyrus-g14-ga402rj-laptop-1.jpg"
            ]
          },
          {
            "id":15,
            "brand": "Sony",
            "model": "Xperia 1 IV",
            "type":"phone",
            "price": 528990,
            "discount":20,
            "discountAvailable": true,
            "stock": 7,
            "release_date": "2023-05",
            "display": "6.5-inch 4K HDR OLED",
            "chipset": "Snapdragon 8 Gen 1",
            "battery": "5000 mAh",
            "technology": "GSM / CDMA / HSPA / EVDO / LTE / 5G",
            "storage": "256GB, 512GB",
            "camera": "Triple camera (12 MP wide, 12 MP ultra-wide, 12 MP telephoto)",
            "images": [
             "https://th.bing.com/th/id/R.3b63841a6c543ee77f54908576af5e54?rik=Ctmxlc6pc7IGtg&pid=ImgRaw&r=0",
             "https://th.bing.com/th/id/OIP.-EM2IUA7FxxbDZHO-jhuSAHaGe?w=600&h=525&rs=1&pid=ImgDetMain"
            ]
          },
          {
            "id":16,
            "brand": "Apple",
            "model": "Apple Watch Series 8",
            "type":"watch",
            "price": 119900,
            "discountAvailable": false,
            "discount":0,
            "stock": 7,
            "release_date": "2023-02",
            "display": "Always-On Retina LTPO OLED",
            "features": "ECG app, Blood Oxygen app, Fall detection, GPS",
            "battery_life": "18 hours",
            "images": [
              "https://celltronics.lk/wp-content/uploads/2022/09/Apple-Watch-Series-8-Aluminum.jpg",
              "https://celltronics.lk/wp-content/uploads/2022/09/Apple-Watch-Series-8-Aluminum-2.jpg",
              "https://celltronics.lk/wp-content/uploads/2022/09/Apple-Watch-Series-8-Aluminum-1.jpg"
            ]
          },
          {
            "id":17,
            "brand": "Samsung",
            "model": "Galaxy Watch 5",
            "type":"watch",
            "price": 99900,
            "discount":5,
            "discountAvailable": true,
            "stock": 7,
            "release_date": "2023-03",
            "display": "1.4-inch Super AMOLED",
            "features": "ECG monitor, Blood Pressure monitor, Sleep tracking, GPS",
            "battery_life": "Up to 40 hours",
            "images": [
              "https://celltronics.lk/wp-content/uploads/2022/08/Samsung-Galaxy-Watch-5-Pro-1.jpg",
              "https://celltronics.lk/wp-content/uploads/2022/08/Samsung-Galaxy-Watch-5-Pro.jpg",
              "https://celltronics.lk/wp-content/uploads/2022/08/Samsung-Galaxy-Watch-5-Pro-2.jpg"
            ]
          },
          {
            "id":18,
            "brand": "Garmin",
            "model": "Venu 2 Plus",
            "type":"watch",
            "price":50000,
            "discountAvailable": false,
            "discount":0,
            "stock": 0,
            "release_date": "2023-04",
            "display": "1.3-inch AMOLED",
            "features": "GPS, Heart Rate Monitor, Stress tracking, Sleep tracking",
            "battery_life": "Up to 9 days",
            "images": [
              "https://th.bing.com/th/id/OIP.O0IKABekCJcYMDge_rPXWQHaHa?w=700&h=700&rs=1&pid=ImgDetMain",
              "https://www.rack85.com.sg/wp-content/uploads/2022/01/venu2-plus-gray2-jpg.webp"
            ]
          },
          {
            "id":19,
            "brand": "Oppo",
            "model": "Find X6 Pro",
            "type":"phone",
            "price": 268801,
            "discountAvailable": true,
            "discount":20,
            "stock": 10,
            "release_date": "2023-04",
            "display": "6.82-inch AMOLED",
            "chipset": "Snapdragon 8 Gen 2",
            "battery": "5000 mAh",
            "technology": "GSM / CDMA / HSPA / EVDO / LTE / 5G",
            "storage": "256GB, 512GB",
            "camera": "Triple camera (50 MP wide, 50 MP ultra-wide, 13 MP telephoto)",
            "images": [
              "https://cdn-files.kimovil.com/default/0008/52/thumb_751703_default_big.jpg",
              "https://cdn-files.kimovil.com/default/0008/52/thumb_751699_default_big.jpg",
              "https://www.classyprice.com.bd/images/Oppo-Find-X6-Pro.gif"
              
            ]
          },
          {
            "id":20,
            "brand": "Vivo",
            "model": "X90 Pro",
            "type":"phone",
            "price": 329990,
            "discountAvailable": true,
            "discount":15,
            "stock": 10,
            "release_date": "2023-02-11",
            "display": "6.78-inch AMOLED",
            "chipset": "Dimensity 9200",
            "battery": "4870 mAh",
            "technology": "GSM / CDMA / HSPA / EVDO / LTE / 5G",
            "storage": "256GB, 512GB",
            "camera": "Triple camera (50 MP wide, 12 MP ultra-wide, 50 MP telephoto)",
            "images": [
              "https://th.bing.com/th/id/OIP.41QAL1mhdm5g5SXa9ZDOUQHaHa?rs=1&pid=ImgDetMain",
              "https://akm-img-a-in.tosshub.com/indiatoday/images/device/1683297889Vivo-X90-Pro-red-800x800_one_to_one.jpg?VersionId=posaUvwh.NQLVBK2hxtb8AVnIWfLe6er",
              "https://media-paijju09yhv08.cdn.e2enetworks.net/images/1_tHQEQpN.jpg"
            ]
          },
          {
            "id":21,
            "brand": "HP",
            "model": "Spectre x360",
            "type": "laptop",
            "price":295000,
            "discountAvailable": true,
            "discount":10,
            "stock": 0,
            "release_date": "2023-05",
            "display": "13.5-inch OLED",
            "processor": "Intel Core i7-1255U",
            "ram": "16GB",
            "storage": "512GB SSD",
            "battery_life": "Up to 13 hours",
            "graphics": "Intel Iris Xe Graphics",
            "features": "Convertible design, fingerprint reader, Thunderbolt 4",
            "images": [
              "https://letsshop.lk/wp-content/uploads/2020/05/hp-spectre-x360-2-in-1-4k-display-intel-core-i7-16gb-5-600x600.jpg",
              "https://th.bing.com/th/id/R.5057be0c4cd2708ed7f47fe903f81a8f?rik=r%2fB4yyJ0Jq7CrQ&pid=ImgRaw&r=0",
              "https://richcom.lk/wp-content/uploads/2023/07/HP-Spectre-x360-Conv14-%E2%80%93-EA1590TU-i7-11th-Gen16GB1TB135Win11-MS-Office-2021-600x600.png"
            ]
          },
          {
            "id":22,
            "brand": "ASUS",
            "model": "ROG Zephyrus G14",
            "type":"laptop",
            "price": 329990,
            "discountAvailable": true,
            "discount":15,
            "stock": 10,
            "release_date": "2023-07",
            "display": "14-inch QHD+",
            "processor": "AMD Ryzen 9 7940HS",
            "ram": "32GB",
            "storage": "1TB SSD",
            "battery_life": "Up to 10 hours",
            "graphics": "NVIDIA GeForce RTX 4060",
            "features": "RGB keyboard, USB-C charging, Dolby Atmos",
            "images": [
              "https://www.techlandbd.com/image/catalog/Laptop/ASUS/rog-zephyrus-g14-ga402rj/asus-rog-zephyrus-g14-ga402rj-laptop-1.jpg",
              "https://th.bing.com/th/id/OIP.wYbH-dWaR9w3hljOxxGOMgHaHa?w=1000&h=1000&rs=1&pid=ImgDetMain"
            
            ]
          },
          { 
            "id":23,
            "brand": "Microsoft",
            "model": "Surface Laptop 5",
            "type":"laptop",
            "price": 329990,
            "discountAvailable": true,
            "discount":15,
            "stock": 10,
            "release_date": "2023-06",
            "display": "13.5-inch PixelSense",
            "processor": "Intel Core i7-1265U",
            "ram": "16GB",
            "storage": "512GB SSD",
            "battery_life": "Up to 12 hours",
            "graphics": "Intel Iris Xe Graphics",
            "features": "Touchscreen, USB-C, USB-A",
            "images": [
              "https://flatwhiteproduction.blob.core.windows.net/images/Microsoft%20Surface%20Laptop%204%20W11%20Platinum.jpg",
              "https://multimedia.bbycastatic.ca/multimedia/products/500x500/172/17212/17212077.jpg"
     
            ]
          },
          {
            "id":24,
            "brand": "Microsoft",
            "model": "Surface Pro 9",
            "type":"tablet",
            "price": 379900,
            "discountAvailable": false,
            "discount":0,
            "stock": 10,
            "release_date": "2023-04",
            "display": "13-inch PixelSense",
            "chipset": "Intel Core i7-1265U",
            "battery": "47Wh",
            "storage": "256GB, 512GB, 1TB",
            "camera": "10 MP rear, 5 MP front",
            "features": "Surface Pen support, detachable keyboard",
            "images": [
              "https://m.media-amazon.com/images/I/612OuMs29eL.jpg",
              "https://microless.com/cdn/products/773b01c59ef7c6eff3276f8db4cd09b4-hi.jpg"
              
            ]
          },
          {
            "id":25,
            "brand": "Sony",
            "model": "A95K Bravia XR",
            "type":"tv",
            "price": 809990,
            "discountAvailable": true,
            "discount":20,
            "stock": 5,
            "release_date": "2023-04",
            "display": "4K OLED",
            "screen_size": "55-inch, 65-inch",
            "features": "Cognitive Processor XR, HDR10, Dolby Vision",
            "resolution": "3840 x 2160",
            "images": [
              "https://cdn6.hughes.co.uk/media/d7/e4/c9/1695976867/son-xr42a90ku.jpg",
              "https://sonyworld.ae/cdn/shop/files/A80L_491df82a-b0f9-4143-8bde-9a31cbcc43e8.jpg?v=1694407845&width=533"
            ]
          }
        
        ]


}