angular.module("listaTelefonica").provider("serialGenerator", function(){

    var _lenght = 10;

    this.getLength = function(){
        return _lenght1;
    }

    this.setLength = function(lenght){
        _lenght = lenght;
    }

    this.$get = function(){
        return {
            generate: function(){
                var serial = " ";

                while(serial.length < _lenght){
                    serial += String.fromCharCode(Math.floor(Math.random() * 64) + 32);
                } 
                return serial;
            }
        };
    };
});