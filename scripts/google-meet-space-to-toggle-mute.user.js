// ==UserScript==
// @name         Google Meet - Space to toggle mute
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Toggle mute/unmute status with spacebar like zoom does
// @author       duffy.tilleman@gmail.com
// @match        https://meet.google.com/*
// @icon         https://www.google.com/s2/favicons?domain=google.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.onkeyup = document.onkeydown = function(e) { if (e.code === "Space" && !e.repeat) document.querySelectorAll('button[data-is-muted]')[0].click() }
})();
