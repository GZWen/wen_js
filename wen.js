var Animals = {}；

Animals.color = "黑色";

Animals.name = "猫";

Animals.getColor = function(){
   return this.color;
}

// by GZJack add method
Animals.setColor = function(color){
   this.color = color;
}
