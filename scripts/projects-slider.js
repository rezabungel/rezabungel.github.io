'use strict';

const maxCountElementsInBlockProjects = 5;
const parent = document.querySelector(".projects__items");
const slides = document.querySelectorAll(".projects__item");

let visibleElementIndexes = [];

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider() {

    parent.innerHTML = '';

    for (let i = 0; i < maxCountElementsInBlockProjects; i++) {
        parent.appendChild(slides[i]);
        visibleElementIndexes.push(i);
    }
}

function showSlide() {

    parent.innerHTML = '';

    visibleElementIndexes.forEach(index => {
        parent.appendChild(slides[index]);
    });
}

function upSlide() {

    for (let i = 0; i < visibleElementIndexes.length; i++) {
        visibleElementIndexes[i] += 1;
        if (visibleElementIndexes[i] > slides.length - 1) {
            visibleElementIndexes[i] = 0;
        }
    }

    showSlide();
}

function downSlide() {

    for (let i = 0; i < visibleElementIndexes.length; i++) {
        visibleElementIndexes[i] -= 1;
        if (visibleElementIndexes[i] < 0) {
            visibleElementIndexes[i] = slides.length - 1;
        }
    }

    showSlide();
}