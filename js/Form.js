class Form{
    constructor(){
        this.input = createInput("Name");

        this.button = createButton("Play");

        this.greeting = createElement("h2");
    }

    hide(){
        this.greeting.hide();
        this.input.hide();
        this.button.hide();
    }

    display(){
        var title = createElement("h2");
        title.html("Car Racing Game");
        title.position(displayWidth/1.7,100);

        this.input.position(displayWidth/1.7,200);
        this.button.position(displayWidth/1.6,250);

        this.button.mousePressed(()=>{       
            this.input.hide();
            this.button.hide();     
            player.name = this.input.value();
            playerCount+=1;
            player.updateCount(playerCount);

            player.index = playerCount;
            player.update();

            this.greeting.html("Hello " + player.name);
            this.greeting.position(displayWidth/1.6,200);
        });
    }
}