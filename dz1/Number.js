import myjson from './Data/data.json' assert {type:'json'}
import {simNum} from './lib/simpleNum.js'
import color from 'cli-color'

for(let i = 0; i < myjson.num.length; i++){
  if(simNum(myjson.num[i]) == true){
    console.log(color.green(myjson.num[i]) + ' - простое число')
  }
  else {
    console.log(color.red(myjson.num[i]) + ' - не простое число)')
  }
}
// Простые числа 
// npm start 