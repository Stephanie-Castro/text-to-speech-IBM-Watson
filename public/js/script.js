$(document).ready(function () {
  $.ajax({ //Via AJAX ...
    url: "/info_text_audio",
    method: "get", //Usando o método GET para acessar áudios já armazenados no BD
    success: function (data) { //Em caso de sucesso ...
      data.forEach((file) => {
        createAudioCard(file);
      });
    },
    error: function (err) { //Em caso de erro ...
      showError(err);
    },
  });
});

$("#send-text").click(function () {
  if ($("#text_value").val().length > 0) { //Se algo foi digitado ...

    $('body').append('<div style="" id="loadingDiv"><div class="loader">Loading...</div></div>'); //Adicionando loader

    $.ajax({
      url: "/info_text_audio",
      method: "post", //Usando o método POST
      data: $("#form_text_to_speech").serialize(),
      success: function (data) { //Em caso de sucesso ...
        createAudioCard(data);
        removeLoader();
      },
      error: function (err) { //Em caso de erro ...
        showError(err);
      },
    });
  } else { //Se nada foi digitado
    const divErro = document.getElementById("info-error");
    divErro.innerHTML = `<spam>Por favor, informe o texto para ser convertido em áudio.</spam>`;
  }
});




function createAudioCard(data) {
  const divMessages = document.getElementsByClassName("audios")[0];

  const createDivCard = document.createElement("div");
  createDivCard.className = "card-audios-info";

  const createDivMainInfo = document.createElement("div");
  createDivMainInfo.className = "main-audios-info";

  createDivMainInfo.innerHTML = `<div class="text-audio">${data.text_value}</div>`;
  createDivMainInfo.innerHTML += `<div class="listen-button"><input class="btn btn-primary" type="button" value="Ouvir" id="${data.file_path}" onclick="playAudio(this.id)" /></div>`;
  createDivCard.append(createDivMainInfo);
  createDivCard.innerHTML += `<div class="created-at"><small class="">${data.created_at}</small></div>`;
  divMessages.prepend(createDivCard);
  //divMessages.appendChild(createDiv);

  const textArea = document.getElementById("text_value"); 
  textArea.value = ""; //Apaga o que foi digitado no campo de texto

  const divErro = document.getElementById("info-error");
  divErro.innerHTML = ``;
}

function showError(err) {
  console.log(err);
  const divErro = document.getElementById("info-error");
  divErro.innerHTML = `<spam>Houve um erro, por favor cheque o console para mais detalhes.</spam>`;
}

function playAudio(file) {
  var music = new Audio("../" + file);
  music.play().catch((err) => {
    showError(err);
  });
}

function removeLoader(){
    $( "#loadingDiv" ).fadeOut(500, function() {
      $( "#loadingDiv" ).remove();
  });  
}
