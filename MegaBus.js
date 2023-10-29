firstClassInput = document.getElementById("firstClassInput");
economyClassInput = document.getElementById("economyClassInput");
eClassIncrement = document.getElementById("eplus");
fClassIncrement = document.getElementById("fplus");
eClassDecrement = document.getElementById("eminus");
fClassDecrement = document.getElementById("fminus");
subtotalField = document.getElementById("subtotal");
vat = document.getElementById("vat");
total = document.getElementById("total");

let fcount = 0;
let fSubtotal = 0;
let ecount = 0;
let eSubtotal = 0;

const countHandler = (e) => {
  //   first class plus button
  if (e.target.id == "fplus") {
    fcount++;
    firstClassInput.value = fcount;
    fSubtotal = firstClassInput.value * 150;
    subtotalField.innerText = `$ ${fSubtotal + eSubtotal}`;
    vat.innerText = `$ ${(fSubtotal + eSubtotal) * 0.10}`;
    total.innerText = `$ ${(fSubtotal + eSubtotal) + ((fSubtotal + eSubtotal) * 0.10)}`;
  }
  //   first class minus button
  else if (e.target.id == "fminus") {
    fcount--;
    if (fcount <= 0) {
      fcount = 0;
    }
    firstClassInput.value = fcount;
    fSubtotal = firstClassInput.value * 150;
    subtotalField.innerText = `$ ${fSubtotal + eSubtotal}`;
    vat.innerText = `$ ${(fSubtotal + eSubtotal) * 0.10}`;
    total.innerText = `$ ${(fSubtotal + eSubtotal) + ((fSubtotal + eSubtotal) * 0.10)}`;
  } 
  //   economic class plus button
  else if (e.target.id == "eplus") {
    ecount++;
    economyClassInput.value = ecount;
    eSubtotal = economyClassInput.value * 100;
    subtotalField.innerText = `$ ${fSubtotal + eSubtotal}`;
    vat.innerText = `$ ${(fSubtotal + eSubtotal) * 0.10}`;
    total.innerText = `$ ${(fSubtotal + eSubtotal) + ((fSubtotal + eSubtotal) * 0.10)}`;
  } 
  //   economic class minus button
  else if (e.target.id == "eminus") {
    ecount--;
    if (ecount <= 0) {
      ecount = 0;
    }
    economyClassInput.value = ecount;
    eSubtotal = economyClassInput.value * 100;
    subtotalField.innerText = `$ ${fSubtotal + eSubtotal}`;
    vat.innerText = `$ ${(fSubtotal + eSubtotal) * 0.10}`;
    total.innerText = `$ ${(fSubtotal + eSubtotal) + ((fSubtotal + eSubtotal) * 0.10)}`;
  }
};

fClassIncrement.addEventListener("click", (e) => {
  countHandler(e);
});

fClassDecrement.addEventListener("click", (e) => {
  countHandler(e);
});

eClassIncrement.addEventListener("click", (e) => {
  countHandler(e);
});

eClassDecrement.addEventListener("click", (e) => {
  countHandler(e);
});

const inputHandler = (x) => {
  if (x == "firstClassInput") {
    fcount = firstClassInput.value;
    fSubtotal = fcount * 150;
    subtotalField.innerText = `$ ${fSubtotal + eSubtotal}`;
    vat.innerText = `$ ${(fSubtotal + eSubtotal) * 0.10}`;
    total.innerText = `$ ${(fSubtotal + eSubtotal) + ((fSubtotal + eSubtotal) * 0.10)}`;
  } else if (x == "economyClassInput") {
    ecount = economyClassInput.value;
    eSubtotal = ecount * 100;
    subtotalField.innerText = `$ ${fSubtotal + eSubtotal}`;
    vat.innerText = `$ ${(fSubtotal + eSubtotal) * 0.10}`;
    total.innerText = `$ ${(fSubtotal + eSubtotal) + ((fSubtotal + eSubtotal) * 0.10)}`;
  }
};

//modal related javascript
booking_btn = document.getElementById("booking_btn");
close_btn = document.getElementById("close_btn");
modal_container = document.getElementById("modal_container");

function openModal () {
  modal_container.classList.add("open-modal-container")
  subtotalField.innerText = "0";
  vat.innerText = "0";
  total.innerText = "0";
  firstClassInput.value = 0;
  economyClassInput.value = 0;
}

function closeModal () {
  modal_container.classList.remove("open-modal-container")
}