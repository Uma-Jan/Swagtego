//Affiche le plateau et les pions 
let counter=[];


class View{
	constructor(game, playerIndex){
		this.initBoard(game, playerIndex);
		this.game = game;
		this.grid = this.boardLoad();
	}
	
	DisplayBoard(playerIndex){
		for(let x=0; x<10; x++){
			for(let y=0; y<10; y++){
				if(this.game.board[x][y] == null){
					this.grid[x][y].className = 'grass';
					this.grid[x][y].innerHTML ='';
				}
				else if(this.game.board[x][y] != null && this.game.board[x][y]!= 'b' && this.game.board[x][y].player == playerIndex){
					this.grid[x][y].className = playerIndex ? "pawnRed":"pawnBlue";
					this.grid[x][y].innerHTML = ((this.game.board[x][y].pawn-playerIndex)/10).toString();
				}
				else if(this.game.board[x][y] != null && this.game.board[x][y]!= 'b' && this.game.board[x][y].player != playerIndex){
					this.grid[x][y].className = playerIndex ? "pawnBlue":"pawnRed"
					this.grid[x][y].innerHTML = "";
				}
			}
		}
	}

	initBoard(board,playerIndex){
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
					if((playerIndex == 0 && x<4) || (playerIndex == 1 && x>5)) {
						html += '<td class="grass" ondragover="onDragOver(event);" ondrop="onDrop(event);" data-value='+index.toString()+'>';
					}
					else html += '<td class="grass" data='+index.toString()+'>';
				}
				html += '</td>';
			}
			html += '</tr>';
		}
		let element = document.getElementById('table');
		element.innerHTML = html;
		this.initPawns();
	}

	initPawns(){
		let html='';
		for (let i = 0; i<12; i++){
			count[i]=0;
			html+= '<li class="pawn-item" id="pawn'+i.toString()+'" draggable="true" ondragstart="onDragStart(event);" data-value='+i.toString()+'>'+i.toString()+'<p>'+count[i]+'/'+max[i]+'</p></li>';
		}
		document.getElementById('pawn-container').innerHTML = html;
	}
	addPawn(i){
		document.getElementById("pawn"+i.toString()).remove();
		count[i]++;
		let html='';
		html += '<li class="pawn-item" id="pawn'+i.toString()+'" draggable="true" ondragstart="onDragStart(event);" data-value='+i.toString()+'>'+i.toString()+'<p>'+count[i]+'/'+max[i]+'</p></li>';
		document.getElementById('pawn-container').innerHTML += html;
	}
	
	boardLoad(){
		let tab = document.getElementById("table");
		tab = tab.firstElementChild.getElementsByTagName("tr");
	
		let grid = new Array(10);
		for(let i=0; i<10; i++){
			grid[i] = tab[i].getElementsByTagName("td");
			tab[i].firstElementChild.setAttribute("id","pawn");
		}
		this.attachListeners(0);
		return grid; 
	}

	setGame(board){
		this.game = board;
	}
	getGame(){
		return this.game;
	}


	attachListeners(pIndex){
		console.log("mdr");

 
		document.querySelectorAll("#pawn").forEach(e=>e.addEventListener('click',event =>{
			let x = e.cellIndex;
			let y = e.parentNode.rowIndex
			console.log( "moveList en "+x ,y);
			
			let list = []
			list = getList(x,y);	

			if(list != false){

				if(list['n']!= null){
					this.classAdder(n,list);
				}
				if(list['e']!= null){
					this.classAdder(e,list);
				}
				if(list['s']!= null){
					this.classAdder(s,list);
				}
				if(list['w']!= null){
					this.classAdder(w,list);
				}
			}	
			})) 
	
	}



	classAdder(dir,list){

		switch(list[dir]['action']){
			case null :
				break;
			case 'move' :
				this.game.grid[list[dir]['coordx']][list[dir]['coordy']].classList.add("move");
				break;
			case 'attack' :
				this.game.grid[list[dir]['coordx']][list[dir]['coordy']].classList.add("attack");
				break;
		}
	}






}