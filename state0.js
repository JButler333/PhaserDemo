var demo = {}, centerX = 1500 / 2, centerY = 1000 / 2, dylan, speed = 6;
demo.state0 = function () {};
demo.state0.prototype = {
    preload: function(){
        game.load.image('dylan', 'assets/sprites/Dylan.png');  
        game.load.image('tree', 'assets/backgrounds/treeBG.png'); 
    },
    create: function () {
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.stage.backgroundColor = '#80ff80';
        console.log('state0');
        addChangeStateEventListeners();
        game.world.setBounds(0,0,2000,1000);
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        var treeBG = game.add.sprite(0,0,'tree');
        dylan = game.add.sprite(centerX, centerY+300, 'dylan');
        dylan.anchor.setTo(0.5,0.5);
        dylan.scale.setTo(0.7,0.7);
        game.physics.enable(dylan);
        dylan.body.collideWorldBounds = true;
        
        game.camera.follow(dylan);
        game.camera.deadzone = new Phaser.Rectangle(centerX-300,0,600,1000)
    },
    update: function () {
        if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
            dylan.x += speed;
            dylan.scale.setTo(-0.7,0.7);
        }
        else if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
            dylan.x -= speed;
            dylan.scale.setTo(0.7,0.7);
        }
        if (game.input.keyboard.isDown(Phaser.Keyboard.UP)){
            dylan.y -= speed;
            if (dylan.y < 650) {
                dylan.y = 650;
            }
        }
        else if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN)){
            dylan.y += speed;
        }
    }
};  

function changeState(i, stateNum){
    game.state.start('state' + stateNum);
}

function addKeyCallback(key, fn, args) {
    game.input.keyboard.addKey(key).onDown.add(fn, null, null, args);
}

function addChangeStateEventListeners() {
    addKeyCallback(Phaser.Keyboard.ZERO, changeState, 0)
    addKeyCallback(Phaser.Keyboard.ONE, changeState, 1)
    addKeyCallback(Phaser.Keyboard.TWO, changeState, 2)
    addKeyCallback(Phaser.Keyboard.THREE, changeState, 3)
    addKeyCallback(Phaser.Keyboard.FOUR, changeState, 4)
    addKeyCallback(Phaser.Keyboard.FIVE, changeState, 5)
    addKeyCallback(Phaser.Keyboard.SIX, changeState, 6)
    addKeyCallback(Phaser.Keyboard.SEVEN, changeState, 7)
    addKeyCallback(Phaser.Keyboard.EIGHT, changeState, 8)
    addKeyCallback(Phaser.Keyboard.NINE, changeState, 9)    
}