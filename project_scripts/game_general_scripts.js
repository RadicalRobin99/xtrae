const top_left = document.getElementById("top_left_field");
const top_middle = document.getElementById("top_middle_field");
const top_right = document.getElementById("top_right_field");
const middle_left = document.getElementById("middle_left_field");
const center = document.getElementById("center_field");
const middle_right = document.getElementById("middle_right_field");
const bottom_left = document.getElementById("bottom_left_field");
const bottom_middle = document.getElementById("bottom_middle_field");
const bottom_right = document.getElementById("bottom_right_field");

const game_fields = [
  [top_left, top_middle, top_right],
  [middle_left, center, middle_right],
  [bottom_left, bottom_middle, bottom_right]
];

let number_of_goes = 0;
var program_gamemode;
var player_1_name;
var player_2_name;


function disable_player_2() {
  
  let computer_input_field = document.getElementById("p2_name_input");
  let computer_submit_button = document.getElementById("p2_name_submission");

  computer_input_field.style.cursor = "not-allowed"
  computer_submit_button.style.cursor = "not-allowed"
  computer_input_field.disabled = true
  computer_submit_button.disabled = true

  return
}


function singleplayer_game_setup() {
  program_gamemode = 1;

  let gamemode_selector_div = document.getElementById("gamemode_selection_div");
  gamemode_selector_div.remove();

  let single_name_container = document.createElement('div');
  single_name_container.className = "singleplayer_name_selection";
  single_name_container.className = "scoreboard";

  let game_restart_button = document.getElementById("restart_button");
  game_restart_button.style.cursor = "pointer";
  game_restart_button.disabled = false;

  single_name_container.innerHTML = `

  <div class="name_container">
      <input type="text" id="p1_name_input" class="name_input" placeholder="PLAYER-1 NAME: "/>
      <input type="button" value="SUBMIT" id="p1_name_submission" class="name_submission" 
      onclick="update_player_name(3)"/>
    </div>

    <div class="name_container">
      <input type="text" id="p2_name_input" class="name_input" placeholder="(CPU) COMPUTER"/>
      <input type="button" value="N/A" id="p2_name_submission" class="name_submission" 
      onclick="update_player_name(2)"/>
    </div>

    <div id="player_1_wins">
      PLAYER 1 WINS (X)
    </div>

    <div id="player_2_wins">
      CPU - WINS (O)
    </div>

    <div id="number_of_p1_wins">
      0
    </div>

    <div id="number_of_p2_wins">
      0
    </div>
    `;
  
  
  document.body.appendChild(single_name_container);
  disable_player_2()
  let info_section = document.getElementById("player_number_turn");
  info_section.innerText = "WELCOME, ENTER YOUR NAME:";

  return
}


function multiplayer_game_setup() {
  program_gamemode = 2;

  let gamemode_selector_div = document.getElementById("gamemode_selection_div");
  gamemode_selector_div.remove();

  let scoreboard_div = document.createElement('div');
  scoreboard_div.className = "scoreboard";

  let game_restart_button = document.getElementById("restart_button");
  game_restart_button.style.cursor = "pointer";
  game_restart_button.disabled = false;

  scoreboard_div.innerHTML = `
    <div class="name_container">
      <input type="text" id="p1_name_input" class="name_input" placeholder="PLAYER-1 NAME: "/>
      <input type="button" value="SUBMIT" id="p1_name_submission" class="name_submission" 
      onclick="update_player_name(1)"/>
    </div>

    <div class="name_container">
      <input type="text" id="p2_name_input" class="name_input" placeholder="PLAYER-2 NAME: "/>
      <input type="button" value="SUMBIT" id="p2_name_submission" class="name_submission" 
      onclick="update_player_name(2)"/>
    </div>

    <div id="player_1_wins">
      PLAYER 1 WINS (X)
    </div>

    <div id="player_2_wins">
      PLAYER 2 WINS (O)
    </div>

    <div id="number_of_p1_wins">
      0
    </div>

    <div id="number_of_p2_wins">
      0
    </div>
    `;

  document.body.appendChild(scoreboard_div);
  
  let info_section = document.getElementById("player_number_turn");
  info_section.innerText = "WELCOME PLAYERS, ENTER YOUR NAMES:";

  return

}


function place_player_letter(chosen_game_field) {
  if (chosen_game_field.value == '') { // if there is no value already in the grid field
    
    if (number_of_goes % 2 == 0) {
      chosen_game_field.value = 'X'
      chosen_game_field.style.color = "blue";
      chosen_game_field.style.backgroundColor = "orange";

    }
    else if (number_of_goes % 2 == 1) {
      chosen_game_field.value = 'O'
      chosen_game_field.style.color = "orange";
      chosen_game_field.style.backgroundColor = "blue";
    }

    number_of_goes++;
  }

  return

}


function update_game(clicked_game_field) {

  if (program_gamemode == 2) {
    place_player_letter(clicked_game_field)
    state_player_turn(program_gamemode)
    check_win()
    cursor_correction()
  }

  // else if (program_gamemode == 1) {
  //   if (check_players_go) {
  //     place_player_letter(clicked_game_field)
  //     state_player_turn(program_gamemode)
  //     check_win()
  //     cursor_correction()
  //   }
  //   else if (check_players_go == false) {
  //     console.log("nah")

  //   }

  // }

  return
}


function erase_win_line() {

  const canvas = document.getElementById('drawing_canvas');
  const ctx = canvas.getContext('2d');

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  canvas.style.zIndex = -1

  return
}


function clear_fields() {

  for(i = 0; i < 3; i++) {
    for(j = 0; j < 3; j++) {
      game_fields[i][j].value = "";
      game_fields[i][j].style.backgroundColor = "";
    }
  }

  return
}


function cursor_correction() {
  
  if (number_of_goes > 1) {

    for(i = 0; i < 3; i++) {
      for(j = 0; j < 3; j++) {

        if (game_fields[i][j].value != "") {
          game_fields[i][j].style.cursor = "not-allowed";
        }
        
      }
    }
  }

  else {

    for(i = 0; i < 3; i++) {
      for(j = 0; j < 3; j++) {
        game_fields[i][j].style.cursor = "pointer";
      }
  
    }
  }

  return
  
}


function restart_game() {

  if (number_of_goes % 2 == 0) {
    number_of_goes = 1;
  }
  else {
    number_of_goes = 0
  }
  erase_win_line()
  state_player_turn(program_gamemode)
  clear_fields()
  cursor_correction()

}
