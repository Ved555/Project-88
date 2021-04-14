var canvas = new Fabric.Canvas("myCanvas");

player_x = 10;
player_y = 10;

blk_img_w = 30;
blk_img_h = 30;

var player_obj = "";
var blk_img_obj = "";

function player_update(){
    fabric.Image.fromURL("data:image/jpeg;base64,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" , function(Img){
        player_obj = Img;

        player_obj.scaleToWidth(150);
        player_obj.scaleToHeight(140);
        
        player_obj.set({
            top :player_y,
            left:player_x
        });
        canvas.add(player_obj);

    });
}

function new_image(get_image){
    fabric.Image.fromURL(get_image, function(Img){
        blk_img_obj = Img;

        blk_img_obj.scaleToWidth(blk_img_w);
        blk_img_obj.scaleToHeight(blk_img_h);

        blk_img_obj.set({
            top:player_y,
            left: player_x
        });

        canvas.add(blk_img_obj);
    })

}


window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keyPressed =  e.keyCode;
    if(e.shiftKey == true && keyPressed == '76'){
        blk_img_w = blk_img_w + 10;
        blk_img_h = blk_img_h + 10;
        document.getElementById("curr_w").innerHTML = blk_img_w;
        document.getElementById("curr_h").innerHTML = blk_img_h;
    }
    if(e.shiftKey == true && keyPressed == '83'){
        blk_img_w = blk_img_w - 10;
        blk_img_h = blk_img_h - 10;
        document.getElementById("curr_w").innerHTML = blk_img_w;
        document.getElementById("curr_h").innerHTML = blk_img_h;
    }
    if(keyPressed == '70'){
        new_image('spiderman_face.png');
    }
    if(keyPressed == '66'){
        new_image('ironman_body.png');
    }
    if(keyPressed == '76'){
        new_image('hulk_legs.png');
    }
    if(keyPressed == '82'){
        new_image('thor_right_hand.png');
    }
    if(keyPressed == '72'){
        new_image('captain_america_left_hand.png');
    }
    if(keyPressed == '37'){
        left();
    }
    if(keyPressed == '38'){
        up();
    }
    if(keyPressed == '39'){
        right();
    }
    if(keyPressed == '40'){
        down();
    }
    if(keyPressed == '37'){
        left();
    }
    if(keyPressed == '38'){
        up();
    }
    if(keyPressed == '39'){
        right();
    }
    if(keyPressed == '40'){
        down();
    }

    


}

function up(){
    if(player_y >= 0){
        player_y = player_y - block_image_height;
        canvas.remove(player_object);
        player_update();
    }
}
function down(){
    if(player_y <= 460){
        player_y = player_y + block_image_height;
        canvas.remove(player_object);
        player_update();
    }
}
function right(){
    if(player_x <= 850){
        player_x = player_x + block_image_width;
        canvas.remove(player_object);
        player_update();
    }
}
function left(){
    if(player_x >= 0){
        player_x = player_x - block_image_width;
        canvas.remove(player_object);
        player_update();
    }
}
