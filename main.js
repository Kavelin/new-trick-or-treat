var data = {
  candy: 0n,
  pumpkins: 5n,
  position: 0
};

var methods = {
  click() {
    data.candy++;
  },

  right() {
    
    data.position -= 100;
  },

  left() {
    data.position += 100;
  },
};

var vue = new Vue({
  el: "#main",
  data,
  methods,
});
