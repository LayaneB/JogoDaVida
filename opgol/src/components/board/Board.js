import React from "react";
import './Board.css';
 
class Board extends React.Component {
    renderSquare(isEqual){
        if(isEqual){

            // return(
            //     <button className="redsquare">
            //         {/* TODO */}
            //     </button>
            // )  
        } else { 
            return(
                
                <button className="square">
                    <select className="square" >
                        <option value="" ></option>
                        <option eventKey="1" > Ilha Whole Cake </option>
                        <option eventKey="2" className="k">Ilha Kuraigana</option>
                        <option eventKey="3" id="r" >Ilha Rusukaina</option>
                        <option eventKey="4" id="m">Ilha Momoiro</option>
                        <option eventKey="5" id="mf">Marinford</option>
                        <option eventKey="6">Laugh Tale </option>
                        <option eventKey="7">Akuma no mi </option>
                        </select>
                    {/* TODO */}
                </button>
            );
        }
        
        
    }

    render(){
        let board = [];
        let cont=false;
        
        for (let j = 0; j <20; j++){
            let rows=[];
            let colums = [];
            for (let i = 0; i <66; i++){
                // if (i===33){cont=true;}
                colums = this.renderSquare(cont);
                rows.push(colums);
            }
            board.push(rows);
        }
        

        return (
            <div className="board-container">
                {board}
            </div>
        );

    }
  
    
}

export default Board;