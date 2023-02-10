
const list_barang = 
[
    {
        nama: "Rover84",
        jumlah: 5,
        deskripsi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        harga: 650_000,
        hargaDiskon: 400_000,
        img: "img/AC.jpg",
        count: 0
        
    },
    {
        nama: "Voyager68",
        jumlah: 8,
        deskripsi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        harga: 890_000,
        hargaDiskon: 350_000,
        img: "img/keyboard.jpg",
        count: 0
    },
    {
        nama: "Titan80",
        jumlah: 12,
        deskripsi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        harga: 350_000,
        hargaDiskon: 100_000,
        img: "img/kulkas.webp",
        count: 0

    }
    ,{
        nama: "Apollo61",
        jumlah: 2,
        deskripsi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        harga: 400_000,
        hargaDiskon: 100_000,
        img: "img/mouse.jpeg",
        count: 0
    }
]

let cart=[]
const datalogin = 
[
    {
    username : "",
    password : ""
    }
]
for (let i = 0; i < list_barang.length; i++)
{
    const isi = `<div class="col-md-3 mb-5 mt-5" id="card1" style="float:left">
    <div class="card" >
      <img src="${list_barang[i].img}" class="card-img-top" alt="product image">
      <div class="card-body">
        <h5 class="card-title">${list_barang[i].nama}</h5>
        <p class="card-text">${list_barang[i].deskripsi}</p>
        <p>Harga :<s>${list_barang[i].harga}</s></p>
        <p>Harga Diskon : ${list_barang[i].hargaDiskon}</p>
        <p> stock : ${list_barang[i].jumlah}</p>
        <p> count : ${list_barang[i].count}</p>
        <p class="card-text mt-2">
                waktu sampai order berakhir:
                 <!-- line span dibawah bisa diganti buat nentuin countdownnya berakhirnya kapan -->
                <span id="countdown-1" data-end-time="2024-02-15T00:00:00"> <span class="days"></span> days <span class="hours"></span> hours <span class="minutes"></span> minutes <span class="seconds"></span> seconds </span>
              </p>
        <a href="#" onclick="onBuy(${i})" class="btn btn-primary klik1" >Add to Cart</a>


      </div>
    </div>
  </div>`;
    document.body.innerHTML += isi;
}

function onBuy(index) {
  // console.log(list_barang[index])
  cart.push(list_barang[index]);
  console.log(cart)
  

 
  document.querySelector('#cartcount').innerHTML = cart.length; // counter untuk keranjang 

 
  // console.log(cart)

//   alert('Item sudah ditambahkan ke keranjang');
  displayCart();
}


function displayCart() {
    let cartContainer = document.getElementById('renderCart');
    cartContainer.innerHTML = '';

  
    for (let i = 0; i < cart.length; i++) {
      let product = cart[i];
      product.count++
      cartContainer.innerHTML += `
      <tr>
      <td></td>
      <td>${product.nama}</td>
      <td>${product.harga}</td>
      <td style="text-align:center">${product.jumlah}</td>
      <td>${product.hargaDiskon}</td>
      
      
      <td><button type="button"  class="btn btn-primary" id="in" onclick="checkout(${i})">BUY</button></td>
      </tr>
      `;
      
    }
  }
{/* <div class="cart-item">
          <h5>${product.name}</h5>
          <p>${product.description}</p>
        </div> */}



  function checkout(index) {
    list_barang[index].jumlah -= 1
    console.log(list_barang[index].jumlah)
    displayCart()
    // cart.push(list_barang[index]);
  // console.log(cart)
  // document.querySelector('#cartcount').innerHTML = cart.length;

  
  }
        

  let count = 0;
  
  document.getElementById('keranjang').addEventListener('click', function() {
    
    document.getElementById('myModal').style.display = "block";
  });


  document.getElementById('exit').addEventListener('click', function() {
  
        document.getElementById('myModal').style.display = "none";
      });
    
    document.getElementById('in').addEventListener('click', function() {
    
        document.getElementById('myModal').style.display = "none";
        alert('BELANJAAN KAMU BERHASIL DI PROSES!');
    });

  


    let data = {}

function register(fullName, email, phoneNumber) {
  return {
    "fullName": fullName,
    "email": email,
    "phoneNumber": phoneNumber
  }
}

function registerUser() {
  let fullName = document.querySelector("#fullName").value
  let email = document.querySelector("#email").value
  
  let phoneNumber = document.querySelector("#phoneNumber").value
  
  if (!fullName || !email || !phoneNumber) {
    alert('Biar lebih enjoy, sebaiknya lengkapi dulu data kamu cuy')
    return
  } 
  data = register(fullName, email, phoneNumber)
  alert("Nama lengkap: " + fullName + "\nEmail: " + email + "\nNo Hp: " + phoneNumber)
}
  
  
    // var count2 = 6;
    // var counter = setInterval(timer, 1000);
    // function timer() {
    //     count2 = count2 - 1;
    //     if (count2 < 0) {
    //       clearInterval(counter);
    //       document.getElementById("card1").style.display = "none";
    //       return;
    //     }
    //     var hours = Math.floor(count2 / 3600);
    //     var minutes = Math.floor((count2% 3600) / 60);
    //     var seconds = count2 % 60;

    // document.getElementById("timer").innerHTML = (hours < 10 ? "0" + hours : hours) + " : " + (minutes < 10 ? "0" + minutes : minutes) + " : " + (seconds < 10 ? "0" + seconds : seconds);

    // }


    
// document.getElementById("klik1").addEventListener('click', function() {

//     console.log("tes")
//     let product = {
//       name: 'Product 4',
//       description: 'Some quick example text to build on the card title and make up the bulk of content.'
//     };
  
//     count++;
//     document.querySelector('#cartcount').innerHTML = count;
    
//     cart.push(product);
//   //   alert('Item sudah ditambahkan ke keranjang');
//     // displayCart();
//   });