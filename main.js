/*! For license information please see main.js.LICENSE.txt */
(()=>{"use strict";var __webpack_modules__={"./src/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");\n/* harmony import */ var _imgs_placeholder_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imgs/placeholder.jpg */ "./src/imgs/placeholder.jpg");\n/* harmony import */ var _imgs_personal_photo_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./imgs/personal-photo.jpg */ "./src/imgs/personal-photo.jpg");\n/* harmony import */ var _imgs_personal_photo2_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./imgs/personal-photo2.jpg */ "./src/imgs/personal-photo2.jpg");\n/* harmony import */ var _imgs_personal_photo3_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./imgs/personal-photo3.jpg */ "./src/imgs/personal-photo3.jpg");\n/* harmony import */ var _imgs_professional_photo_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./imgs/professional-photo.png */ "./src/imgs/professional-photo.png");\n/* harmony import */ var _imgs_professional_photo2_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./imgs/professional-photo2.jpg */ "./src/imgs/professional-photo2.jpg");\n/* harmony import */ var _imgs_razor_top_black_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./imgs/razor-top-black.svg */ "./src/imgs/razor-top-black.svg");\n/* harmony import */ var _imgs_victor_rodriguez_UrfpprfDB0k_unsplash_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./imgs/victor-rodriguez-UrfpprfDB0k-unsplash.jpg */ "./src/imgs/victor-rodriguez-UrfpprfDB0k-unsplash.jpg");\nfunction _typeof(obj) {\n  "@babel/helpers - typeof";\n\n  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {\n    return typeof obj;\n  } : function (obj) {\n    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;\n  }, _typeof(obj);\n}\nfunction _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError("Cannot call a class as a function");\n  }\n}\nfunction _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if ("value" in descriptor) descriptor.writable = true;\n    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);\n  }\n}\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  Object.defineProperty(Constructor, "prototype", {\n    writable: false\n  });\n  return Constructor;\n}\nfunction _toPropertyKey(arg) {\n  var key = _toPrimitive(arg, "string");\n  return _typeof(key) === "symbol" ? key : String(key);\n}\nfunction _toPrimitive(input, hint) {\n  if (_typeof(input) !== "object" || input === null) return input;\n  var prim = input[Symbol.toPrimitive];\n  if (prim !== undefined) {\n    var res = prim.call(input, hint || "default");\n    if (_typeof(res) !== "object") return res;\n    throw new TypeError("@@toPrimitive must return a primitive value.");\n  }\n  return (hint === "string" ? String : Number)(input);\n}\n\n\n\n\n\n\n\n\n\n\n// ——————————————————————————————————————————————————\n// Projects Slide-In\n// ——————————————————————————————————————————————————\nvar wasLinkClicked = false;\nvar lastScrollTimestamp = 0;\nvar staggerDelay = 300;\ndocument.addEventListener("DOMContentLoaded", function () {\n  var projects = document.querySelectorAll(".slide-in-left, .slide-in-right");\n  var links = document.querySelectorAll(\'a[href^="#"]\');\n  function checkSlide() {\n    var currentTime = Date.now();\n    var timeSinceLastScroll = currentTime - lastScrollTimestamp;\n    projects.forEach(function (project, index) {\n      var slideInAt = window.scrollY + window.innerHeight - project.offsetHeight / 4;\n      var isSomeShown = slideInAt > project.offsetTop;\n      if (isSomeShown) {\n        if (wasLinkClicked || timeSinceLastScroll < staggerDelay) {\n          setTimeout(function () {\n            project.classList.add("active");\n          }, index * staggerDelay);\n        } else {\n          project.classList.add("active");\n        }\n      }\n    });\n  }\n  function updateWasLinkClicked() {\n    wasLinkClicked = true;\n  }\n  checkSlide();\n  window.addEventListener("scroll", function () {\n    lastScrollTimestamp = Date.now();\n    debounce(checkSlide)();\n  });\n  links.forEach(function (link) {\n    link.addEventListener("click", function () {\n      updateWasLinkClicked();\n      setTimeout(checkSlide, 0);\n    });\n  });\n});\n\n// Debounce function to improve performance on scroll\nfunction debounce(func) {\n  var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;\n  var immediate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;\n  var timeout;\n  return function () {\n    var context = this,\n      args = arguments;\n    var later = function later() {\n      timeout = null;\n      if (!immediate) func.apply(context, args);\n    };\n    var callNow = immediate && !timeout;\n    clearTimeout(timeout);\n    timeout = setTimeout(later, wait);\n    if (callNow) func.apply(context, args);\n  };\n}\n\n// ——————————————————————————————————————————————————\n// TextScramble\n// ——————————————————————————————————————————————————\nvar TextScramble = /*#__PURE__*/function () {\n  function TextScramble(el) {\n    _classCallCheck(this, TextScramble);\n    this.el = el;\n    this.chars = "!<>-_\\\\/[]{}—=+*^?#________";\n    this.update = this.update.bind(this);\n  }\n  _createClass(TextScramble, [{\n    key: "setText",\n    value: function setText(newText) {\n      var _this = this;\n      var oldText = this.el.innerText;\n      var length = Math.max(oldText.length, newText.length);\n      var promise = new Promise(function (resolve) {\n        return _this.resolve = resolve;\n      });\n      this.queue = [];\n      for (var i = 0; i < length; i++) {\n        var from = oldText[i] || "";\n        var to = newText[i] || "";\n        var start = Math.floor(Math.random() * 40);\n        var end = start + Math.floor(Math.random() * 40);\n        this.queue.push({\n          from: from,\n          to: to,\n          start: start,\n          end: end\n        });\n      }\n      cancelAnimationFrame(this.frameRequest);\n      this.frame = 0;\n      this.update();\n      return promise;\n    }\n  }, {\n    key: "update",\n    value: function update() {\n      var output = "";\n      var complete = 0;\n      for (var i = 0, n = this.queue.length; i < n; i++) {\n        var _this$queue$i = this.queue[i],\n          from = _this$queue$i.from,\n          to = _this$queue$i.to,\n          start = _this$queue$i.start,\n          end = _this$queue$i.end,\n          _char = _this$queue$i["char"];\n        if (this.frame >= end) {\n          complete++;\n          output += to;\n        } else if (this.frame >= start) {\n          if (!_char || Math.random() < 0.28) {\n            _char = this.randomChar();\n            this.queue[i]["char"] = _char;\n          }\n          output += "<span class=\\"dud\\">".concat(_char, "</span>");\n        } else {\n          output += from;\n        }\n      }\n      this.el.innerHTML = output;\n      if (complete === this.queue.length) {\n        this.resolve();\n      } else {\n        this.frameRequest = requestAnimationFrame(this.update);\n        this.frame++;\n      }\n    }\n  }, {\n    key: "randomChar",\n    value: function randomChar() {\n      return this.chars[Math.floor(Math.random() * this.chars.length)];\n    }\n  }]);\n  return TextScramble;\n}();\nvar phrases = ["Disciplined", "Versatile", "Dedicated", "Eager to learn", "Eager to teach", "Precise", "Punctual", "Diligent", "Detail-Oriented", "Meticulous", "Personable", "Ridiculously Good-looking"];\nvar el = document.querySelector(".scramble");\nvar fx = new TextScramble(el);\nvar counter = 0;\nvar next = function next() {\n  fx.setText(phrases[counter]).then(function () {\n    setTimeout(next, 2800);\n  });\n  counter = (counter + 1) % phrases.length;\n};\nnext();\n\n// ——————————————————————————————————————————————————\n// Mobile Navigation\n// ——————————————————————————————————————————————————\n\nvar burger = document.getElementById("burger");\nvar nav = document.getElementById("main-nav");\nvar navLinks = document.querySelectorAll(".nav-link");\nburger.addEventListener("click", function (e) {\n  this.classList.toggle("is-open");\n  nav.classList.toggle("is-open");\n  nav.classList.remove("hidden");\n  toggleScroll();\n});\nnavLinks.forEach(function (link) {\n  link.addEventListener("click", function (e) {\n    setTimeout(function () {\n      burger.click();\n      nav.classList.add("hidden");\n    }, 800);\n  });\n});\nfunction toggleScroll() {\n  document.body.classList.toggle(\'no-scroll\');\n}\n\n// ——————————————————————————————————————————————————\n// Link Event Listeners\n// ——————————————————————————————————————————————————\n\nvar homeLink = document.querySelectorAll(".home-link");\nvar projectsLink = document.querySelectorAll(".projects-link");\nvar aboutLink = document.querySelectorAll(".about-link");\nvar contactLink = document.querySelectorAll(".contact-link");\nvar homeSection = document.getElementById("home-section");\nvar projectSection = document.getElementById("projects-section");\nvar aboutSection = document.getElementById("about-section");\nvar contactSection = document.getElementById("contact-section");\nfunction scrollToTop() {\n  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera\n  document.body.scrollTop = 0; // For Safari\n}\n\nhomeLink.forEach(function (link) {\n  link.addEventListener("click", function (event) {\n    event.preventDefault();\n    homeSection.classList.remove(\'hidden\');\n    projectSection.classList.add(\'hidden\');\n    aboutSection.classList.add(\'hidden\');\n    contactSection.classList.add(\'hidden\');\n    window.history.pushState({\n      section: \'home\'\n    }, \'\', \'/home\');\n    scrollToTop();\n  });\n});\nprojectsLink.forEach(function (link) {\n  link.addEventListener("click", function (event) {\n    event.preventDefault();\n    projectSection.classList.remove(\'hidden\');\n    homeSection.classList.add(\'hidden\');\n    aboutSection.classList.add(\'hidden\');\n    contactSection.classList.add(\'hidden\');\n    window.history.pushState({\n      section: \'projects\'\n    }, \'\', \'/projects\');\n    scrollToTop();\n  });\n});\naboutLink.forEach(function (link) {\n  link.addEventListener("click", function (event) {\n    event.preventDefault();\n    aboutSection.classList.remove(\'hidden\');\n    projectSection.classList.add(\'hidden\');\n    homeSection.classList.add(\'hidden\');\n    contactSection.classList.add(\'hidden\');\n    window.history.pushState({\n      section: \'about\'\n    }, \'\', \'/about\');\n    scrollToTop();\n  });\n});\ncontactLink.forEach(function (link) {\n  link.addEventListener("click", function (event) {\n    event.preventDefault();\n    contactSection.classList.remove(\'hidden\');\n    aboutSection.classList.add(\'hidden\');\n    projectSection.classList.add(\'hidden\');\n    homeSection.classList.add(\'hidden\');\n    window.history.pushState({\n      section: \'contact\'\n    }, \'\', \'/contact\');\n    scrollToTop();\n  });\n});\nwindow.addEventListener(\'popstate\', function (event) {\n  homeSection.classList.add(\'hidden\');\n  projectSection.classList.add(\'hidden\');\n  aboutSection.classList.add(\'hidden\');\n  contactSection.classList.add(\'hidden\');\n  if (event.state && event.state.section) {\n    document.getElementById(event.state.section + \'-section\').classList.remove(\'hidden\');\n  } else {\n    homeSection.classList.remove(\'hidden\');\n  }\n});\nfunction navigate(path) {\n  homeSection.classList.add(\'hidden\');\n  projectSection.classList.add(\'hidden\');\n  aboutSection.classList.add(\'hidden\');\n  contactSection.classList.add(\'hidden\');\n  var section = document.getElementById(path.substring(1) + \'-section\');\n  if (section) {\n    section.classList.remove(\'hidden\');\n  } else {\n    homeSection.classList.remove(\'hidden\');\n  }\n}\nnavigate(window.location.pathname);\nwindow.dispatchEvent(new PopStateEvent(\'popstate\', {\n  state: history.state\n}));\n\n//# sourceURL=webpack://personal-portfolio/./src/index.js?')},"./src/styles.css":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://personal-portfolio/./src/styles.css?")},"./src/imgs/personal-photo.jpg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "imgs/personal-photo.jpg");\n\n//# sourceURL=webpack://personal-portfolio/./src/imgs/personal-photo.jpg?')},"./src/imgs/personal-photo2.jpg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "imgs/personal-photo2.jpg");\n\n//# sourceURL=webpack://personal-portfolio/./src/imgs/personal-photo2.jpg?')},"./src/imgs/personal-photo3.jpg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "imgs/personal-photo3.jpg");\n\n//# sourceURL=webpack://personal-portfolio/./src/imgs/personal-photo3.jpg?')},"./src/imgs/placeholder.jpg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "imgs/placeholder.jpg");\n\n//# sourceURL=webpack://personal-portfolio/./src/imgs/placeholder.jpg?')},"./src/imgs/professional-photo.png":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "imgs/professional-photo.png");\n\n//# sourceURL=webpack://personal-portfolio/./src/imgs/professional-photo.png?')},"./src/imgs/professional-photo2.jpg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "imgs/professional-photo2.jpg");\n\n//# sourceURL=webpack://personal-portfolio/./src/imgs/professional-photo2.jpg?')},"./src/imgs/razor-top-black.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTkyMHB4IiBoZWlnaHQ9IjQwcHgiPg0KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBmaWxsPSJyZ2IoMCwgMCwgMCkiIGQ9Ik0xODI3LjE1NiwxNS4wMjEgTDE4MjcuMTI5LDE0Ljk5NCBMMTgzMy43ODUsMTQuOTk0IEwxODMzLjc1OSwxNS4wMjEgTDE4MjcuMTU2LDE1LjAyMSBaTTE4MjQuOTY1LDI0LjAzNiBMMTgzNS45NjksMjQuMDM2IEwxODMwLjQ2MSwxOC41NTggTDE4MzMuNzU5LDE1LjAyMSBMMTkyMC4wMDAsMTUuMDIxIEwxOTIwLjAwMCwzOS4wNzUgTDAuMDAxLDM5LjA3NSBMMC4wMDEsMTUuMDEzIEwyNzEuODg0LDE1LjAxMyBMMjc5LjUzNyw2LjkzMCBMMjkyLjQ1OCw2LjkzMCBMMzA4LjQyNiwyNC4wMzYgTDMwOC40NDksMjQuMDEzIEwzMDguNDY3LDI0LjAzNiBMMzE3LjYzOCwxNS4wMjEgTDQ2My4yNDEsMTUuMDIxIEw0NjYuNTM5LDE4LjU1OCBMNDYxLjAzMSwyNC4wMzYgTDQ3Mi4wMzUsMjQuMDM2IEw0NjYuNTM5LDE4LjU1OCBMNDY5Ljg0NCwxNS4wMjEgTDU1MS41NTcsMTUuMDIxIEw1NTYuMjUxLDEwLjU3OCBMNTY1LjQ5NywxLjM1OCBMNTcxLjY2Myw3LjA2NiBMNjAyLjkxMCw3LjA1NSBMNjA3LjkxOSw3LjA1NSBMNjIwLjU3OCwxOS45ODMgTDY1NC4yMDksMTkuOTgzIEw2NjEuNDQ4LDEyLjk1NyBMNzM1LjcwOSwxMi45OTUgTDc0MS40ODAsMTguNTU0IEw3NTAuMTI5LDkuOTMwIEw3NTMuMDIwLDEyLjk5NSBMOTE4LjE4MSwxMi45NTcgTDkzMC45NDIsMC4wNjYgTDk1NC45OTMsMjQuMDM2IEw5NTUuMDAwLDI0LjAyNCBMOTU1LjAxMiwyNC4wMzYgTDk2NC4wNjQsMTUuMDEzIEw5NjcuOTA2LDE1LjAxMyBMOTcwLjAwNSwxNy4xMDYgTDk2Ni42NzAsMjAuNDE5IEw5NzMuMzI2LDIwLjQxOSBMOTcwLjAwNSwxNy4xMDYgTDk3Mi4wNjcsMTUuMDU1IEwxMDUwLjAwMCwxNS4wMjMgTDEwNTAuMDAwLDE1LjAxMyBMMTA2NC4wMzAsMTUuMDE3IEwxMDcyLjAwMCwxNS4wMTMgTDEwNzIuMDAwLDE1LjAxOSBMMTIyNS45MzMsMTUuMDU1IEwxMjI3Ljk5NCwxNy4xMDYgTDEyMjQuNjc0LDIwLjQxOSBMMTIzMS4zMzEsMjAuNDE5IEwxMjI3Ljk5NCwxNy4xMDYgTDEyMzAuMDk0LDE1LjAxMyBMMTIzMy45MzYsMTUuMDEzIEwxMjQyLjk4OSwyNC4wMzYgTDEyNDMuMDAwLDI0LjAyNCBMMTI0My4wMDcsMjQuMDM2IEwxMjY3LjA1OCwwLjA2NiBMMTI3OS44MTksMTIuOTU3IEwxMzY4Ljk4MCwxMi45OTUgTDEzNzEuODcxLDkuOTMwIEwxMzgwLjUyMCwxOC41NTQgTDEzODYuMjkwLDEzLjA1NyBMMTYzNS41NTIsMTMuMDE5IEwxNjQyLjc5MCwxOS45ODMgTDE2NzYuNDIyLDE5Ljk4MyBMMTY4OS4wODAsNi45OTIgTDE3MjUuMzM3LDcuMDAzIEwxNzMxLjUwMiwxLjM1OCBMMTc0MC43NDksMTAuNTc4IEwxNzQ1LjQ0MywxNS4wMjEgTDE4MjcuMTU2LDE1LjAyMSBMMTgzMC40NjEsMTguNTU4IEwxODI0Ljk2NSwyNC4wMzYgWk0zNDEuNjI0LDE4Ljg1NyBMMzM5Ljg4OSwxOC44NTcgTDMzOS44ODksMjQuMDM2IEwzNDEuNjI0LDI0LjAzNiBMMzQxLjYyNCwxOC44NTcgWk0zNDQuMjQ4LDE4Ljg1NyBMMzQyLjUxOCwxOC44NTcgTDM0Mi41MTgsMjQuMDM2IEwzNDQuMjQ4LDI0LjAzNiBMMzQ0LjI0OCwxOC44NTcgWk0zNTYuMzcwLDE4Ljg1NyBMMzU0LjY0MCwxOC44NTcgTDM1NC42NDAsMjQuMDM2IEwzNTYuMzcwLDI0LjAzNiBMMzU2LjM3MCwxOC44NTcgWk0zNzcuMTY4LDE4Ljg1NyBMMzcxLjk3MywxOC44NTcgTDM3MS45NzMsMjQuMDM2IEwzNzcuMTY4LDI0LjAzNiBMMzc3LjE2OCwxOC44NTcgWk01ODQuNjc1LDEyLjM0OCBMNTgyLjk0MSwxMi4zNDggTDU4Mi45NDEsMTQuMDczIEw1ODQuNjc1LDE0LjA3MyBMNTg0LjY3NSwxMi4zNDggWk01OTEuMzE2LDEyLjM0OCBMNTg5LjU4MiwxMi4zNDggTDU4OS41ODIsMTcuNTI2IEw1OTEuMzE2LDE3LjUyNiBMNTkxLjMxNiwxMi4zNDggWk02MDQuNzUxLDEyLjM0OCBMNjAzLjAxNywxMi4zNDggTDYwMy4wMTcsMTQuMDczIEw2MDQuNzUxLDE0LjA3MyBMNjA0Ljc1MSwxMi4zNDggWk02MDQuNzUxLDE1LjgwMiBMNjAzLjAxNywxNS44MDIgTDYwMy4wMTcsMTcuNTI2IEw2MDQuNzUxLDE3LjUyNiBMNjA0Ljc1MSwxNS44MDIgWk0xNjkzLjk4MywxMi4zNDggTDE2OTIuMjQ5LDEyLjM0OCBMMTY5Mi4yNDksMTQuMDczIEwxNjkzLjk4MywxNC4wNzMgTDE2OTMuOTgzLDEyLjM0OCBaTTE2OTMuOTgzLDE1LjgwMiBMMTY5Mi4yNDksMTUuODAyIEwxNjkyLjI0OSwxNy41MjYgTDE2OTMuOTgzLDE3LjUyNiBMMTY5My45ODMsMTUuODAyIFpNMTcwNy40MTgsMTIuMzQ4IEwxNzA1LjY4MywxMi4zNDggTDE3MDUuNjgzLDE3LjUyNiBMMTcwNy40MTgsMTcuNTI2IEwxNzA3LjQxOCwxMi4zNDggWk0xNzE0LjA1OSwxMi4zNDggTDE3MTIuMzI0LDEyLjM0OCBMMTcxMi4zMjQsMTQuMDczIEwxNzE0LjA1OSwxNC4wNzMgTDE3MTQuMDU5LDEyLjM0OCBaTTQ2My4yMTQsMTQuOTk0IEw0NjkuODcxLDE0Ljk5NCBMNDY5Ljg0NCwxNS4wMjEgTDQ2My4yNDEsMTUuMDIxIEw0NjMuMjE0LDE0Ljk5NCBaTTc1NC4yMjIsNS45NzYgTDc1MC4xMjksOS45MzAgTDc0Ni4wMjUsNS45NzYgTDc1NC4yMjIsNS45NzYgWk0xMzc1Ljk3NSw1Ljk3NiBMMTM3MS44NzEsOS45MzAgTDEzNjcuNzc4LDUuOTc2IEwxMzc1Ljk3NSw1Ljk3NiBaIi8+DQo8L3N2Zz4=");\n\n//# sourceURL=webpack://personal-portfolio/./src/imgs/razor-top-black.svg?')},"./src/imgs/victor-rodriguez-UrfpprfDB0k-unsplash.jpg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "imgs/victor-rodriguez-UrfpprfDB0k-unsplash.jpg");\n\n//# sourceURL=webpack://personal-portfolio/./src/imgs/victor-rodriguez-UrfpprfDB0k-unsplash.jpg?')}},__webpack_module_cache__={};function __webpack_require__(e){var n=__webpack_module_cache__[e];if(void 0!==n)return n.exports;var t=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e](t,t.exports,__webpack_require__),t.exports}__webpack_require__.d=(e,n)=>{for(var t in n)__webpack_require__.o(n,t)&&!__webpack_require__.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),__webpack_require__.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;__webpack_require__.g.importScripts&&(e=__webpack_require__.g.location+"");var n=__webpack_require__.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var t=n.getElementsByTagName("script");if(t.length)for(var r=t.length-1;r>-1&&!e;)e=t[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),__webpack_require__.p=e})();var __webpack_exports__=__webpack_require__("./src/index.js")})();