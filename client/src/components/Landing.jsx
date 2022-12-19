import React, { useState } from "react";
import style from "../styles/landing.module.css"
import { Component } from "react";
import img from "../images/ciberPunk.jpg"
import { Link } from "react-router-dom";
import { useCallback } from "react";
import Particles from "react-tsparticles"
import {loadFull} from "tsparticles"

export const Landing = ()=>{
console.log("okasdasd")
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    const [render, setRender] = useState(false)
   
    return(
        <main className={render? style.main: style.mainOff}>
            <div className={style.imgContainer}>
                <img className={render? style.img: style.imageOff} src={img} onLoad={()=>setRender(true)}/>  
                <h1 className={style.title}>Wiki Video Games</h1>      
                <Link className={style.Link} to={"/menu"}>
                    <button className={style.button}>
                      Start 
                    </button>
                </Link>             
            </div> 
                <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                "particles": {
                  "number": {
                    "value": 380,
                    "density": {
                      "enable": true,
                      "value_area": 800
                    }
                  },
                  "color": {
                    "value": "#12edba"
                  },
                  "shape": {
                    "type": "circle",
                    "stroke": {
                      "width": 0,
                      "color": "#000000"
                    },
                    "polygon": {
                      "nb_sides": 4
                    },
                    "image": {
                      "src": "img/github.svg",
                      "width": 100,
                      "height": 100
                    }
                  },
                  "opacity": {
                    "value": 0.5,
                    "random": false,
                    "anim": {
                      "enable": false,
                      "speed": 1,
                      "opacity_min": 0.1,
                      "sync": false
                    }
                  },
                  "size": {
                    "value": 2,
                    "random": true,
                    "anim": {
                      "enable": false,
                      "speed": 40,
                      "size_min": 0.1,
                      "sync": false
                    }
                  },
                  "line_linked": {
                    "enable": false,
                    "distance": 150,
                    "color": "#ffffff",
                    "opacity": 0.4,
                    "width": 1
                  },
                  "move": {
                    "enable": true,
                    "speed": 1.603412060865523,
                    "direction": "bottom",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                      "enable": false,
                      "rotateX": 5211.089197812949,
                      "rotateY": 2004.2650760819035
                    }
                  }
                },
                "interactivity": {
                  "detect_on": "canvas",
                  "events": {
                    "onhover": {
                      "enable": true,
                      "mode": "repulse"
                    },
                    "onclick": {
                      "enable": false,
                      "mode": "push"
                    },
                    "resize": true
                  },
                  "modes": {
                    "grab": {
                      "distance": 400,
                      "line_linked": {
                        "opacity": 1
                      }
                    },
                    "bubble": {
                      "distance": 182.71737276780266,
                      "size": 52.785018799587434,
                      "duration": 0.8932849335314796,
                      "opacity": 0.8932849335314796,
                      "speed": 3
                    },
                    "repulse": {
                      "distance": 56.84540486109416,
                      "duration": 0.4
                    },
                    "push": {
                      "particles_nb": 4
                    },
                    "remove": {
                      "particles_nb": 2
                    }
                  }
                },
                "retina_detect": true
              }}
        />
   
        </main>)

}
