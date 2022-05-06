// console.log('Its working');
document.querySelector("#boton").addEventListener("click", bringData);

function bringData() {
  // console.log('inside the function');

  const xhttp = new XMLHttpRequest();

  xhttp.open("GET", "catalog.json", true);

  xhttp.send();

  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      // console.log(this.responseText);
      let data = JSON.parse(this.responseText);
      // console.log(data);
      let res = document.querySelector("#res");
      res.innerHTML = "";

      for (let item of data) {
        // console.log(item.age);
        res.innerHTML += `
                <tr>
                    <td>${item.age}</td>
                    <td>${item.name}</td>
                </tr>
                `;
      }
    }
  };
}


//////////////////send json data//////////////////

$('#send').click(backto);

function backto() {

  $.ajax({

    url: 'catalog.json',
    type: 'post',
    datatype: 'json',
    data: {
      age: $('#name').val(),
      name: $('#age').val()

    }
  }).done(
    function (data) {
      $('#out').append(data);
      $('#name').val('');
      $('#age').val('')
    }
  );
  console.log(backto)
}