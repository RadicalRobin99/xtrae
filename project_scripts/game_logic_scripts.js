function draw_win_line(pointA_x_cord, pointA_y_cord, pointB_x_cord, pointB_y_cord) {

  const canvas = document.getElementById('drawing_canvas');
  const ctx = canvas.getContext('2d');

    // set line stroke and line width
    canvas.style.zIndex = 1
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 7.5;
  

    ctx.beginPath();
    ctx.moveTo(pointA_x_cord, pointA_y_cord);
    ctx.lineTo(pointB_x_cord, pointB_y_cord);
    ctx.stroke();

}


function check_game_draw() {

  let field_values_list = [];

  for(i = 0; i < 3; i++) {
    for(j = 0; j < 3; j++) {
      if (game_fields[i][j].value == "X" || game_fields[i][j].value == "O")
        field_values_list.push(true)
      else {
        field_values_list.push(false)
      }
      
    }
  }

  let total_fields_filled = 0
  for(i = 0; i < field_values_list.length; i++) {
    if (field_values_list[i] == true) {
      total_fields_filled++;
    }
    else {}
  }

  if (total_fields_filled == 9) {
    
    draw_win_line(0, 500, 500, 0);
    draw_win_line(0, 0, 500, 500);
    
    let player_turn_info_section = document.getElementById("player_number_turn");
    player_turn_info_section.innerText = "ITS A DRAW, NO ONE WINS!";
    
    number_of_goes ++;
  }
  
  else {}
  
}


function check_column_win() {

  if ((game_fields[0][0].value != "") && (game_fields[0][0].value == game_fields[1][0].value &&
  game_fields[0][0].value == game_fields[2][0].value)) {

    draw_win_line(95, 35, 95, 465)
    return true
  }

  else if ((game_fields[0][1].value != "") && (game_fields[0][1].value == game_fields[1][1].value &&
  game_fields[0][1].value == game_fields[2][1].value)) {

    draw_win_line(250, 35, 250, 465)
    return true
  }

  else if ((game_fields[0][2].value != "") && (game_fields[0][2].value == game_fields[1][2].value &&
  game_fields[0][2].value == game_fields[2][2].value)) {

    draw_win_line(405, 35, 405, 465)
    return true
  }
  
  return

}


function check_row_win() {

  if ((game_fields[0][0].value != "") && (game_fields[0][0].value == game_fields[0][1].value &&
  game_fields[0][0].value == game_fields[0][2].value)) {

    draw_win_line(33, 92, 467, 92)
    return true
  }

  else if ((game_fields[1][0].value != "") && (game_fields[1][0].value == game_fields[1][1].value &&
  game_fields[1][0].value == game_fields[1][2].value)) {

    draw_win_line(33, 250, 467, 250)
    return true
  }

  else if ((game_fields[2][0].value != "") && (game_fields[2][0].value == game_fields[2][1].value &&
  game_fields[2][0].value == game_fields[2][2].value)) {

    draw_win_line(33, 408, 467, 408)
    return true
  }

  else {
    return false
  }
  
}


function check_diagonal_win() {

  if ((game_fields[0][0].value != "") && (game_fields[0][0].value == game_fields[1][1].value &&
  game_fields[0][0].value == game_fields[2][2].value)) {

    draw_win_line(45, 45, 455, 455);
    return true
  }

  else if ((game_fields[2][0].value != "") && (game_fields[2][0].value == game_fields[1][1].value &&
  game_fields[2][0].value == game_fields[0][2].value)) {

    draw_win_line(45, 455, 455, 45);
    return true
  }

  else {
    return false
  }

}


function check_win() {

  if (check_row_win() || check_column_win() || check_diagonal_win()) {

    if (number_of_goes % 2 == 1) {
      let player_turn = document.getElementById("player_number_turn");
      player_turn.innerText = `${player_1_name.toUpperCase()} WINS!!!`;

      let player_1_score = document.getElementById("number_of_p1_wins");
      let current_score = player_1_score.innerHTML;
      current_score = current_score.replace(/(\r\n|\n|\r|\t)/gm, "");
      let current_score_num = Number(current_score);
      let new_score =  current_score_num + 1;

      player_1_score.innerHTML = String(new_score);
      number_of_goes ++;
      return
    }
  
    else if (number_of_goes % 2 == 0) {
  
      let player_turn = document.getElementById("player_number_turn");
      player_turn.innerText = `${player_2_name.toUpperCase()} WINS!!!`;

      let player_2_score = document.getElementById("number_of_p2_wins");
      let current_score = player_2_score.innerHTML;
      current_score = current_score.replace(/(\r\n|\n|\r)/gm, "");
      let current_score_num = Number(current_score);
      let new_score =  current_score_num + 1;

      player_2_score.innerHTML = String(new_score);
      number_of_goes ++;
      return
    }

  }

  check_game_draw()  // gotta check if the game is a draw afterwards 
  return

  
}

