import { Component } from '@angular/core';
import { Container, Engine, MoveDirection, OutMode } from "@tsparticles/engine";
import { loadFull } from "tsparticles";
import { NgParticlesService } from "@tsparticles/angular";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
    title = 'DimeuWasTaken.github.io';
    id = "tsparticles";
    particlesOptions = {
        fpsLimit: 60,
        particles: {
            color: {
                value: "#0972ae",
            },
            links: {
                color: "#77c9f8",
                distance: 150,
                enable: true,
                opacity: 0.7,
                width: 1.5,
            },
            move: {
                direction: MoveDirection.none,
                enable: true,
                outModes: {
                    default: OutMode.bounce,
                },
                random: false,
                speed: 1,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                    area: 800,
                },
                value: 80,
            },
            opacity: {
                value: 0.5,
            },
            shape: {
                type: "circle",
            },
            size: {
                value: { min: 1, max: 5 },
            },
        },
        detectRetina: true,
    };

    constructor(private readonly ngParticlesService: NgParticlesService) {}

    ngOnInit(): void {
        this.ngParticlesService.init(async (engine: Engine) => {
            console.log(engine);

            // Starting from 1.19.0 you can add custom presets or shape here, using the current tsParticles instance (main)
            // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
            // starting from v2 you can add only the features you need reducing the bundle size
            await loadFull(engine);
            //await loadSlim(engine);
        });
    }

    particlesLoaded(container: Container): void {
        console.log(container);
    }
}
