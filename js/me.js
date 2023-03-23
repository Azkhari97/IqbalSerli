let url = document.location.href;
  console.log(url)
  let untuk = url.split('?');
  if(untuk.length > 1){
    untuk = decodeURIComponent(untuk[1]);
    untuk = untuk.replace('-',' ');
    untuk = untuk.replace('_',' ');
    document.getElementsByClassName('penerima')[0].textContent = untuk;
  }
  
  
  var map = L.map('map').setView([-6.920654,109.537815], 18);
  //map.dragging.enable = false;
  console.log(map)

  let googleStreets = L.tileLayer('http://{s}.google.com/vt?lyrs=m&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
});
  googleStreets.addTo(map)
 /* L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);*/
  var marker = L.marker([-6.920654,109.537815]).addTo(map);
  marker.bindPopup("<p style='font-size: 10px; width: 120px;'><b>Lokasi Acara</b><br>Dusun II Butak, Desa Pecangakan, RT 01/ RW 02, Kec. Comal, Kab. Pemalang</p>");
  
  function escapeHtml(text) {
  return text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
}
  
  const db = "https://bimbelassyafaah.my.id/greetings/greet/";
  let apikey = "60a69606e3b6e02545edaadc";
  function option(method, data){
    this.mode = "cors";
    this.cache = "no-cache";
    this.headers = {
      "Content-Type" : "application/json",
      "x-apikey" : apikey,
      "cache-control" : "no-cache",
    }
    this.method = method;
    this.body = data;
  }
  
  let greet = document.getElementsByClassName('greet-container')[0];
  
  let getParam = new option('GET', null)
  function greet_update(){
  fetch(db)
  .then((res)=> res.json())
  .then((data)=>{
    console.log(data);
    greet.innerHTML = "";
    for(let ucapan of data.ucapan)
    greet.innerHTML += `
      <div class="greet">
        <p class="greet-title">${ucapan.nama}<span class="greet-ket"><i class="fa fa-bullet"></i> ${ucapan.keterangan}</span></p>
        <hr class="w-75 mx-auto mt-0 mb-2">
        <p>
         ${ucapan.ucapan}
        </p>
     </div>
    `
  })
  .catch((e)=>{
    console.log(e.toString())
  });
  }
  //greet_update();
  
  let dataNikah = {
    "judul" : "Iqbal & Serly",
  }
  let data = document.getElementsByClassName('data');
  
  for(part of data){
    let tmp = part.getAttribute('part');
    /*
    if(tmp == "judul"){
    part.textContent += dataNikah[tmp];
    }
    else{
    part.textContent = dataNikah[tmp];
    }
    */
    //console.log(tmp)
  }
  
   
    
let countDownDate = new Date("Apr 27, 2023 08:00:00").getTime();

let counter = document.getElementById('counter');
let hari = document.getElementById('hari');
let jam = document.getElementById('jam');
let menit = document.getElementById('menit');
let detik = document.getElementById('detik');

// Update the count down every 1 second
let x = setInterval(function() {

  // Get today's date and time
  let now = new Date().getTime();

  // Find the distance between now and the count down date
  let distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  hari.textContent = days + " days";
  jam.textContent = hours + " hours";
  menit.textContent = minutes + " min";
  detik.textContent = seconds + " sec";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    counter.innerHTML = `<p class="text-center border border-success p-2 text-dark" style="border-radius: 5px">Acara dimulai</p>`;
  }
}, 1000);
    
    
    let awalan = document.getElementById('awalan');
    //untuk control menu
    let menu = document.getElementById('menu');
    
    menu.classList.remove('d-flex');
    menu.classList.add('d-none');
    menu.setAttribute('style', 'opacity: 0.0');
    let cover = document.getElementById('cover');
    let batas = cover.offsetHeight;
    batas = batas/2;
    //console.log(batas)
    
    let bd = document.getElementsByTagName('body')[0];
    
    let tinggi = bd.offsetHeight;
    tinggi = tinggi - (batas*2);
    //console.log(tinggi);
    
    window.addEventListener('scroll', (e)=>{
      let tem = window.scrollY;
      //console.log(tem);
      let hitung = tem/batas*10/10;
      
      if(hitung > 1){
        hitung = 1;
        if(tem > tinggi){
          menu.style.bottom = "12vh";
          
        }
        else{
          menu.style.bottom = "1vh";
        }
      }
      else {
        hitung = Math.floor(hitung * 10) / 10;
      }
      //console.log(hitung);
      menu.style.opacity = hitung;
    })
    
    let musik = new Audio('assets/musik.mp3');
    
    function buka(){
      
      
      awalan.classList.remove('d-flex');
      awalan.classList.add('d-none');
      menu.classList.remove('d-none');
      menu.classList.add('d-flex');
      //musik = new Audio('assets/musik.mp3');
      musik.play();
      
    }

    awalan.addEventListener('click',(e)=>{
      buka();
    });

    //untuk lightbox galeri
    let galeri = document.getElementsByClassName('galeri-item');
    let count = 0;
    for(let ft of galeri){
      // untuk efek animasi
      ft.setAttribute('data-aos','fade-up');
      ft.setAttribute('data-aos-offset','200');
      ft.setAttribute('data-aos-easing','linear');
      
      
      
      ft.addEventListener('click',(e)=>{
        //leconsole.log(bd)
        let lihatFoto = document.createElement('div');
        lihatFoto.setAttribute('style','position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; z-index: 6; background: rgba(0,0,0,.7);');
        lihatFoto.setAttribute('id','lihatFoto');
        lihatFoto.setAttribute('data-aos','fade-up');
        lihatFoto.setAttribute('class','d-flex flex-column justify-content-center align-items-center container');
        let btnClose = `
          <button id="close" class="btn btn-md btn-secondary" style="position: absolute; bottom: 15vh; right: 10vw; z-index: 8; font-weight: bold;">Tutup</button>
        `;
        let item = `
        <img id="fotonya" class="img-fluid mb-4" style="border-radius: 5px;" alt="lihat-foto-prewedding" src="${e.target.src}" />
        `;
        lihatFoto.innerHTML = item + btnClose + `<div style="height: 10vh;"></div>`;
        
        bd.appendChild(lihatFoto)
        let close = document.getElementById('close');
        close.addEventListener('click', (e)=>{
          //console.log('clicked!');
          bd.removeChild(lihatFoto);
        })
        let lhtFoto = document.getElementById('lihatFoto');
       
        lhtFoto.addEventListener('click', (e)=>{
        let fotonya = document.getElementById('fotonya');
          
          if(!fotonya.contains(e.target)){
          bd.removeChild(lihatFoto);
            
          }
          
        });
      })
    }
    
    function copyFunction(coba) {
  // Get the text field
  let teks = document.getElementById(coba);
  let copyText = document.createElement('input');
  copyText.value = teks.textContent;
  //console.log(copyText.value);
  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  // For mobile devices
   // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value)
  .then(
    v => toast('Rekening disalin: ' + copyText.value),
    e => console.log(e.toString())
  );

  }
  
  function toast(text){
    let toastIni = document.createElement('div');
    
    toastIni.setAttribute('style','position: fixed; bottom: 15vh; width: 80vw; padding: 10px; margin: 0 10vw; background: rgba(26,136,85,1); color: #fff; text-align: center; border-radius: 8px; z-index: 1010;');
    
    toastIni.setAttribute('class','fadeIn');
   
    toastIni.innerHTML = `<p>${text}</p>`;
    
    bd.appendChild(toastIni);
    
    setTimeout(()=>{
      toastIni.classList.remove('fadeIn');
      toastIni.classList.add('fadeOut');
      setTimeout(()=>{
        bd.removeChild(toastIni)
      }, 500);
    }, 2000);
    
  }
  
  let sec_title = document.getElementsByClassName('section-title');
  
  for(let jdl of sec_title){
    jdl.setAttribute('data-aos', 'fade-up');
  }
  
  let nm_couple = document.getElementsByClassName('nama');
  for(let nm of nm_couple){
    if(nm.getAttribute('part') != "nick"){
      nm.setAttribute('data-aos','zoom-in')
    }
  }
  
  let tm_line = document.getElementsByClassName('animate-box');
  for(let tm of tm_line){
    tm.setAttribute('data-aos','zoom-in-down')
  }
  
  let tm_panel = document.getElementsByClassName('timeline-panel');
  for(let tmp of tm_panel){
    tmp.setAttribute('data-aos','zoom-in-right')
    tmp.setAttribute('data-aos-delay','300')
  }
  
  function tulis_ucapan(){
    let pesan = document.createElement('div');
    pesan.setAttribute('id','pesanku');
    pesan.setAttribute('style','position: fixed; top:0; left: 0; width: 100%; height: 100%; z-index: 9; font-family: arial;');
    pesan.setAttribute('class','card container');
    pesan.innerHTML = `
    <div class="card-body flex-column d-flex justify-content-center align-items-center row">
      <input id="nama_p" type="text" class="form-control col-12 my-1" placeholder="Masukan nama" />
      <select id="keterangan_p" class="form-select col-12 my-1">
        <option value="0">--Pilih Kehadiran--</option>
        <option>Hadir</option>
        <option>Tidak Hadir</option>
      </select>
      <textarea class="form-control col-12 my-1" id="ucapan_p" placeholder="Ketikan ucapan selamat..." class="form-control" rows="4"></textarea>
      
      <div class="col-12 mt-3 mb-2 d-flex justify-content-center align-items-center">
      <button id="kirimpesanku" class="btn btn-md btn-success text-light w-25 mx-1">Kirim</button>
      <button id="batalkirim" class="btn btn-md btn-secondary text-light w-25 mx-1">Batal</button>
      </div>
    </div>
    `;
    
    console.log(bd);
    bd.appendChild(pesan);
    
    let batal_p = document.getElementById('batalkirim');
    batal_p.addEventListener('click',(e)=>{
      bd.removeChild(pesan);
    })
    let ucapan = {
      "id" : "",
      "nama" : "",
      "keterangan" : 0,
      "ucapan" : ""
    }
    
    let nama_p = document.getElementById('nama_p');
    nama_p.addEventListener('change',(e)=>{
      ucapan.nama = escapeHtml(e.target.value);
    });
    
    let keterangan_p = document.getElementById('keterangan_p');
    keterangan_p.addEventListener('change',(e)=>{
      ucapan.keterangan = e.target.value
    })
    
    let ucapan_p = document.getElementById('ucapan_p');
    ucapan_p.addEventListener('change',(e)=>{
      ucapan.ucapan = escapeHtml(e.target.value)
    })
    
    let pesanku = document.getElementById('kirimpesanku');
    pesanku.addEventListener('click',(e)=>{
      if(ucapan.nama == "" || ucapan.keterangan == 0 || ucapan.ucapan == ""){
        alert('Mohon isi nama, pilih kehadiran, dan tulis pesan 😁');
      }
      else {
        toast("Pesan sedang dikirim, mohon tunggu...");
        let postParam = new option('POST', JSON.stringify(ucapan))
        //console.log(ucapan);
        let kirimIni = db + "/" + ucapan.nama + "/" + ucapan.keterangan + "/" + ucapan.ucapan;
        kirimIni = encodeURI(kirimIni);
        console.log(kirimIni);
        fetch(kirimIni)
        .then((res)=> res.json())
        .then((data)=>{
          console.log(data)
          bd.removeChild(pesan)
          greet_update();
          let al = document.createElement('a');
          al.href = "#ucapan";
          al.click();
        })
        .catch((e)=>{
          console.log(e.toString())
          bd.removeChild(pesan);
        })
      }
    });
    
  }
  
  let stream = document.getElementById('stream');
  
  stream.addEventListener('click', (e)=>{
    //console.log(bd);
    let frame = document.createElement('div');
    frame.setAttribute('style', 'position: fixed; color: #fff; top: 0; left: 0; width: 100vw; height: 100vh; z-index: 1002; background: rgba(0,0,0,.8);')
    frame.innerHTML = `
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/_7pkgEI0N-Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    <div class="mt-5 w-100 d-flex justify-content-center align-items-center">
      <button id="tutupFrame" style="font-family: arial;" class="btn btn-md btn-light mx-auto">Tutup</button>
    </div>
    `;
    musik.pause();
    bd.appendChild(frame);
    toast("Mohon tunggu, video sedang dimuat...");       

    let tutupFrame = document.getElementById('tutupFrame');
    tutupFrame.addEventListener('click',()=>{
      bd.removeChild(frame);
      musik.play();
    });
  })
  
   
   AOS.init();
   greet_update();
