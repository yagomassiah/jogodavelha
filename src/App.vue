<template>
  <div class="table">
    
    <div class="table-cell table-large-padding">
      <h2>Jogo da velha</h2>
      <game />
    </div>
  </div>
</template>

<script>
import Game from './components/Game.vue';
import UltimateGame from './components/UltimateGame.vue';

export default {
  components: {
    game: Game,
    'ultimate-game': UltimateGame,
  },
};
</script>

<style lang="sass">
$lightgray: #f4f4f4
$lightgreen: #EDFFEF
$lightblue: #EDFEFF
$gray: #AAA
$almostblack: #111

@mixin hideText()
  text-indent: 100%
  white-space: nowrap
  overflow: hidden

@mixin moveButton($color)
  background-color: white
  border: solid 1px
  border-color: $color
  color: $color
  padding: 3px 30px
  margin-bottom: 3px
  text-align: center
  box-shadow: none

@mixin squareIcon($iconUrl)
  background-image: url($iconUrl)
  background-repeat: no-repeat
  background-position: center
  background-size: contain

@mixin squareButton()
  background-color: #fff
  border: none
  font-size: 24px
  font-weight: bold
  line-height: 34px
  height: 34px
  margin-right: -1px
  margin-top: -1px
  padding: 0
  width: 34px

body
  font: 14px "Century Gothic", Futura, sans-serif
  margin: 20px
  margin-top: 5px

.disabled-board button
  background-color: $lightgray

.x-won-board button
  background-color: $lightgreen

.o-won-board button
  background-color: $lightblue

ol, ul
  padding-left: 30px

.move-button
  @include moveButton($gray)

.current-move-button
  @include moveButton($almostblack)

button.square-react-icon
  @include squareIcon('react-icon.svg')
  @include hideText()

button.square-vue-icon
  @include squareIcon('vue-icon.svg')
  @include hideText()

button.react-icon
  @include squareIcon('react-icon.svg')
  @include hideText()
  @include squareButton()

button.vue-icon
  @include squareIcon('vue-icon.svg')
  @include hideText()
  @include squareButton()

button.no-icon
  @include squareButton()

.current-move-button:hover
  background-color: $almostblack
  color: white

.move-button:hover
  background-color: $gray
  color: white

.table
  display: table

.table-row
  display: table-row

.table-column
  display: table-column

.table-cell
  display: table-cell

.table-large-padding
  padding-left: 50px

.table-small-padding
  padding-left: 20px

.table-board-border
  border: 2px solid #fff

.status
  margin-bottom: 10px

.square
  background: #fff
  border: 1px solid #999
  float: left
  font-size: 24px
  font-weight: bold
  line-height: 34px
  height: 34px
  margin-right: -1px
  margin-top: -1px
  padding: 0
  text-align: center
  width: 34px

.square:focus
  outline: none

.kbd-navigation .square:focus
  background: #ddd

.game
  display: flex
  flex-direction: row

.game-info
  margin-left: 20px

.red-font
  color: red

.blue-font
  color: blue

.green-font
  color: green

.yellow-font
  color: yellow

.purple-font
  color: purple

.orange-font
  color: orange
</style>
