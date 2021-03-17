//Affiche le plateau et les pions 
//let board = new Board();
//const Board = require("../../back/models/board");

class View{
	constructor(game){
		this.initBoard(game);
		this.game = game;
		this.grid = this.boardLoad();

	}
	
	DisplayBoard(playerIndex){
		console.log("display");
		for(let x=0; x<10; x++){
			for(let y=0; y<10; y++){
				if(this.game.board[x][y] != null && this.game.board[x][y]!= 'b' && this.game.board[x][y].player == playerIndex){
					this.grid[x][y].className = playerIndex ? "pawnRed":"pawnBlue";
					this.grid[x][y].innerHTML = ((this.game.board[x][y].pawn-playerIndex)/10).toString();
				}
				else if(this.game.board[x][y] != null && this.game.board[x][y]!= 'b' && this.game.board[x][y].player == playerIndex){
					this.grid[x][y].className = playerIndex ? "pawnBlue":"pawnRed"
					this.grid[x][y].innerHTML = "";
				}
			}
		}
	}
	initBoard(board){

		let html = '';
		let index = 0;
		for(let x=0; x<10; x++){
			  html += '<tr>';
			for(let y=0;y<10;y++){
				index++;
				if(board.board[x][y] == 'b'){
					html+= '<td class="lake" >';
				}
				else if (board.board[x][y] == null){
						html += '<td class="grass" data=',index,'>';
						//html += "<td class='grass' data ='"\i\"'>"
				}
				/*else {
					
					if (board.getPawn(x,y) % 2 == 0){
							if(board.board[x][y].isReturned == true){
								
								html += '<td class="pawnRed">';
								text = board.board[x][y].pawn.toString(); 
								html += text.slice(0,1);
							}
							else{
								html += '<td class="pawnRedRecto">';
							}
					}
					else if (board.getPawn(x,y) % 2 == 1){
						if(board.board[x][y].isReturned == true){
							html += '<td class="pawnBlue">';
							text = board.board[x][y].pawn.toString(); 
							html += text.slice(0,1);
						}
						else{
							html += '<td class="pawnBlueRecto">';					
						}
					}
				}
				*/
			
				html += '</td>';
			}
			html += '</tr>';
		}
		let element = document.getElementById('table');
		element.innerHTML = html;
	}
	
	boardLoad(){
		let tab = document.getElementById("table");
		tab = tab.firstElementChild.getElementsByTagName("tr");
	
		let grid = new Array(10);
		for(let i=0; i<10; i++){
			grid[i] = tab[i].getElementsByTagName("td");
		}
		return grid; 
	}
}



























//board.placingPawns(0,0,3,2);
//board.randomComposition(0);
//board.randomComposition(1);
/*board.placingPawns(1,0,8,3);
board.moveList(0,3);
board.move(0,3,0,8);
board.moveList(9,3);
board.move(9,3,9,4);
*/



//DisplayBoard(board);