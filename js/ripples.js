function handleRipples() {
    // water ripples 
    for (let i = 0; i < ripplesArray.length; i++) {
        ripplesArray[i].ripple();
        ripplesArray[i].drawRipple();
    };
    if (ripplesArray.length > 20) {
        for (let i = 0; i < 5; i++) {
            ripplesArray.pop();
        }
    };

    if (((keys[37] || keys[38] || keys[39] || keys[40])) && frogger.y < 250 && frogger.y > 100) {
        for (let i = 0; i < 20; i++) {
            ripplesArray.unshift(new Particle(frogger.x, frogger.y));
        }
    };

}