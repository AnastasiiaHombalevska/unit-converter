# Scrimba - Chrome extension leads tracker solution

Scrimba helps you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- Save ....


### Screenshot

![screenshot]()

### Links

- Solution URL: [@GitHub]()
- Live Site URL: [@GitHub]()

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Flexbox Layout
- Mobile-first workflow

### What I learned

With this project I improved a lot my JS skills. The newest things I learnt are:

- How to get the active Chrome tab and store it into localStorage using JSON's methods

```js
tabBtn.addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    myLeads.push(tabs[0].url);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
  });
});
```
