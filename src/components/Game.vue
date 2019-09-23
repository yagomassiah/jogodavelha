<template>
  <div class="game">
    <div class="game-board">
      <board :squares="squares" @square-click="handleSquareClick" />
    </div>
    <div class="game-info">
      <status :description="description" :player="player" />
    </div>
    <button @click="restart"> Recomeçar </button>
  </div>
</template>

<script>
import Board from "./Board.vue";
import Status from "./Status.vue";
import TimeTravelButton from "./TimeTravelButton.vue";
import { calculateWinner } from "../helpers";
import { iaMove } from "../ia";
export default {
  components: {
    board: Board,
    status: Status,
    "time-travel-button": TimeTravelButton
  },
  data() {
    return {
      squares: Array(9).fill(null),
      xIsNext: true
    };
  },
  computed: {
    description: function description() {
     // const { history, currentStep } = this;
      const  squares  = this.squares;
      return calculateWinner(this.squares) ? 'Ganhador' : 'Próximo Jogador';
    },
    player: function player() {
      const { history, xIsNext, currentStep } = this;
      const squares = this.squares;

      return calculateWinner(squares) || (xIsNext ? "X" : "O");
    }
  },
  methods: {
    handleSquareClick: function handleSquareClick(squareIndex) {
      
      // const newGameState = gameState.slice(0, currentStep + 1);
      //const { squares } = gameState;

      if (calculateWinner(this.squares) || this.squares[squareIndex]) {
        return;
      }
      const newSquares = this.squares.slice();
      newSquares[squareIndex] = this.xIsNext ? "X" : "O";
      this.squares = newSquares;
      this.xIsNext = !this.xIsNext;

      if (calculateWinner(this.squares)) {
        return;
      }
      this.squares = iaMove(this.squares);
      this.xIsNext = !this.xIsNext;
      //iaMove(this.gameState);
    },
    restart(){
      this.squares = Array(9).fill(null);
      this.xIsNext = true;
    },
    jumpTo: function jumpTo(stepNumber) {
      this.currentStep = stepNumber;
      this.xIsNext = stepNumber % 2 === 0;
    }
  }
};
</script>
