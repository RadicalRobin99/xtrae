function last_char_s(player_number) {
  
  if (player_number == 1) {
    let last_char = player_1_name.charAt(player_1_name.length - 1)
    if (last_char == "s" || last_char == "S") {
      return true
    }
  }

  else if (player_number == 2) {
    let last_char = player_2_name.charAt(player_2_name.length - 1)
    if (last_char == "s" || last_char == "S") {
      return true
    }
  }

  else {
    return false
  }

}


function state_player_turn(gamemode) {

  let player_turn = document.getElementById("player_number_turn");

  if (gamemode == 1) {
  
    if (number_of_goes % 2 == 0) {
      if (last_char_s(1)) {
        player_turn.innerText = `${player_1_name.toUpperCase()}' (X) TURN...`;
      }
      else {
        player_turn.innerText = `${player_1_name.toUpperCase()}'S (X) TURN...`;
      }
      
    }

    else if (number_of_goes % 2 == 1) {
      player_turn.innerText = `CPU'S (O) TURN...`;
    }

  }

  else if (gamemode == 2) {
  
    if (number_of_goes % 2 == 0) {
      if (last_char_s(1)) {
        player_turn.innerText = `${player_1_name.toUpperCase()}' (X) TURN...`;
      }
      else {
        player_turn.innerText = `${player_1_name.toUpperCase()}'S (X) TURN...`;
      }
    }

    else if (number_of_goes % 2 == 1) {
      if (last_char_s(2)) {
        player_turn.innerText = `${player_2_name.toUpperCase()}' (O) TURN...`;
      }
      else {
        player_turn.innerText = `${player_2_name.toUpperCase()}'S (O) TURN...`;
      }
    }

  }

  return

}


function update_player_name(player_number) {

  if (player_number == 1) {
    
    let name_txtbox = document.getElementById("p1_name_input");
    let name_input_button = document.getElementById("p1_name_submission");
    let player_wins_display = document.getElementById("player_1_wins");
    
    let inputted_name = name_txtbox.value;

    if (inputted_name == "") {
      player_1_name = "PLAYER 1";
    }
    else {
      player_1_name = inputted_name;
    }
    
    player_wins_display.innerText = `${player_1_name.toUpperCase()} (X) - WINS`;

    name_txtbox.remove();
    name_input_button.remove();

  }

  else if (player_number == 2) {
    
    let name_txtbox = document.getElementById("p2_name_input");
    let name_input_button = document.getElementById("p2_name_submission");
    let player_wins_display = document.getElementById("player_2_wins");
    
    let inputted_name = name_txtbox.value;

    if (inputted_name == "") {
      player_2_name = "PLAYER 2";
    }
    else {
      player_2_name = inputted_name;
    }

    player_wins_display.innerText = `${player_2_name.toUpperCase()} (O) - WINS`

    for(i = 0; i < 3; i++) {
      for(j = 0; j < 3; j++) {
        game_fields[i][j].style.cursor = "pointer";
        game_fields[i][j].disabled = false;
      }
  
    }

    name_txtbox.remove();
    name_input_button.remove();
    state_player_turn(program_gamemode);
    return
  }

  else if (player_number == 3) {
    player_2_name = "CPU"
    let name_txtbox = document.getElementById("p1_name_input");
    let name_input_button = document.getElementById("p1_name_submission");
    let player_wins_display = document.getElementById("player_1_wins");

    let cpu_name_txtbox = document.getElementById("p2_name_input");
    let cpu_name_input_button = document.getElementById("p2_name_submission");
    
    let inputted_name = name_txtbox.value;

    if (inputted_name == "") {
      player_1_name = "PLAYER 1";
    }
    else {
      player_1_name = inputted_name;
    }

    player_wins_display.innerText = `${player_1_name.toUpperCase()} (X) - WINS`

    for(i = 0; i < 3; i++) {
      for(j = 0; j < 3; j++) {
        game_fields[i][j].style.cursor = "pointer";
        game_fields[i][j].disabled = false;
      }
  
    }

    name_txtbox.remove();
    name_input_button.remove();
    cpu_name_txtbox.remove();
    cpu_name_input_button.remove();
    state_player_turn(program_gamemode);
  }

  else {}

  return
}