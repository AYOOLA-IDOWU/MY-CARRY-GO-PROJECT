     
          var quantity = [];
          var editIndex = -1;
          
          if (localStorage.quantity) {
            quantity = JSON.parse(localStorage.getItem("quantity"));
          }
          
          function qua() {
            var input = document.getElementById("input");
            var dis = document.getElementById("dis");
          
            if (isNaN(Number(input.value))) {
              alert("Write in number");
              input.value = "";
            } else {
              quantity.push(input.value);
              dis.innerHTML += `${input.value}`;
              console.log(quantity);
              localStorage.setItem('quantity', JSON.stringify(quantity));
              input.value = "";
            }
          }


        function deleteItem() {
        var index = quantity.length - 1;
        quantity.pop();
        localStorage.setItem('quantity', JSON.stringify(quantity));
        dis.innerHTML = dis.innerHTML.slice(0, -1);
    }

    function openEditModal() {  
        editIndex = quantity.length - 1;
        var editInput = document.getElementById("editInput");
        editInput.value = quantity[editIndex];
        var editModal = new bootstrap.Modal(document.getElementById("editModal"));
        editModal.show();
    }

    function updateQuantity() {
        var editInput = document.getElementById("editInput");
        var newQuantity = editInput.value;
        if (newQuantity !== "") {
            quantity[editIndex] = newQuantity;
            localStorage.setItem('quantity', JSON.stringify(quantity));
            dis.innerHTML = newQuantity;
        }
        var editModal = new bootstrap.Modal(document.getElementById("editModal"));
        editModal.hide();
    }