console.log('hi three.js')
//Set up scene, camera and render it
    var canvas = document.getElementById('canvas');
    console.log('HELLO', canvas)

    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

    //camera position (towards screen or away from screen)
    camera.position.z = 10;

    var renderer = new THREE.WebGLRenderer({antialias:true});

    //Setting scene background color
    renderer.setClearColor("#242424");

    renderer.setSize( window.innerWidth, window.innerHeight );
    console.log("THIS IS ME",renderer.domElement);

    //Attached canvas to DOM element
    canvas.appendChild( renderer.domElement );

    //scene renders responsively to window size

    window.addEventListener('resize', ()=>{
        renderer.setSize(window.innerWidth,window.innerHeight);
        camera.aspect = window.innerWidth / window.innerHeight;

        camera.updateProjectionMatrix();
    })

    //(RAYCASTER) used to determine where the mouse is on the canvas
    var raycaster = new THREE.Raycaster();
    var mouse = new THREE.Vector2();

    //setting objects and items in the camera view
    //define material and form
    var geometry = new THREE.SphereGeometry( 1, 25 ,25);
    var material = new THREE.MeshLambertMaterial({color: 0xF7F7F7});
    // var sphere = new THREE.Mesh(geometry, material);

    //z position cant be negative
    // sphere.position.set(0,0,0);
    // scene.add(sphere);

    sphereX = -10;
    for(var i = 0; i < 15 ; i++){
        var sphere = new THREE.Mesh(geometry, material);
        sphere.position.x = (Math.random() - 0.5) * 10;
        sphere.position.y = (Math.random() - 0.5) * 10;
        sphere.position.z = (Math.random() - 0.5) * 10;
        scene.add(sphere);
        sphereX +=1;
    }

    var light = new THREE.PointLight(0xFFFFFF, 1, 1000);
    light.position.set(0,0,0);
    scene.add(light);

    var light = new THREE.PointLight(0xFFFFFF, 2, 1000);
    light.position.set(0,0,25);
    // scene.add(light);


    var render = function(){
        requestAnimationFrame(render);

        renderer.render(scene,camera);
    }

    function onMouseMove(event){
        console.log('Something here HELLO');
        event.preventDefault();
        console.log('mouse para', mouse)

        // mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
        // mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
        console.log('after mouse'. mouse);
        raycaster.setFromCamera(mouse, camera);
        //returns array based on the objecs that have intersected where ever the mouse is
        console.log("children in scene",scene.children);
        var intersects = raycaster.intersectObjects(scene.children, true);
        console.log('array of intersected objs', intersects);
        for(var i = 0; i < intersects.length; i++){
            console.log('yes sir',intersects[i].object);
            intersects[i].object.material.color.set(0xFF0000);
            intersects[i].object.translateX(1);
            this.tl = new TimelineMax()
            this.tl.to(intersects[i].object.scale, 1, {x:4, y:4, ease:Expo.easeOut})
            this.tl.to(intersects[i].object.position, .5, {x:5, y:5, ease:Expo.easeOut})
            this.tl.to(intersects[i].object.scale, 1, {x:.3, y:.3, ease:Expo.easeOut})
            this.tl.to(intersects[i].object.scale, 1, {x:1, y:1, ease:Expo.easeOut})
            this.tl.to(intersects[i].object.position, .5, {x:5, y:-3, ease:Expo.easeOut})
        }
    }




    // this.tl.to(this.sphere.scale, 1, {x:2, ease:Expo.easeOut})

    canvas.addEventListener( "click", onMouseMove);

    render();