// https://www.codewars.com/kata/55c0ac142326fdf18d0000af/train/javascript
// You already implemented a Cube class, but now we need your help again! I'm talking about constructors. We don't have one. Let's code two: One taking an integer and one handling no given arguments!

class Cube {
    constructor(side){
        this.setSide(side)
    }

        getSide(){
            return this.side;
        }

        setSide(side = 0){
            this.side = Math.abs(side);
        }
}