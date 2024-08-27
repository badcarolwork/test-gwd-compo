"use strict";

function _instanceof(left, right) {
  if (
    right != null &&
    typeof Symbol !== "undefined" &&
    right[Symbol.hasInstance]
  ) {
    return !!right[Symbol.hasInstance](left);
  } else {
    return left instanceof right;
  }
}

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj &&
        typeof Symbol === "function" &&
        obj.constructor === Symbol &&
        obj !== Symbol.prototype
        ? "symbol"
        : typeof obj;
    };
  }
  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: { value: subClass, writable: true, configurable: true },
  });
  Object.defineProperty(subClass, "prototype", { writable: false });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError(
      "Derived constructors may only return object or undefined"
    );
  }
  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  }
  return self;
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;
  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;
    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }
    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);
      _cache.set(Class, Wrapper);
    }
    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }
    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true,
      },
    });
    return _setPrototypeOf(Wrapper, Class);
  };
  return _wrapNativeSuper(Class);
}

function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct.bind();
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }
  return _construct.apply(null, arguments);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {})
    );
    return true;
  } catch (e) {
    return false;
  }
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf
    ? Object.setPrototypeOf.bind()
    : function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
      };
  return _setPrototypeOf(o, p);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf
    ? Object.getPrototypeOf.bind()
    : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
  return _getPrototypeOf(o);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

if (window.customElements && window.customElements.define) {
  var template = document.createElement('template');
  template.innerHTML = "<style>:host{display:inline-block;width:100%;height:100%;}img{-webkit-user-drag:none}#mainContainer{display:inline-block;width:100%;height:100%;position:relative;overflow:hidden}#inBox{width:100%;height:100%;position:absolute;bottom:0;left:0;overflow:hidden;-webkit-box-sizing:content-box;box-sizing:content-box}#mainContainer img{width:100%;height:auto;position:absolute}.resultImg{width:100%;height:100%;position:absolute}.init-img{z-index:2}#handler{opacity:0;width:25px;height:25px;border:4px solid #fff;opacity:1;position:absolute;top:50%;cursor:pointer;z-index:999;margin-top:-15px;z-index:99;border-radius:50%;-webkit-box-shadow:0 0 12px rgba(51,51,51,.5);box-shadow:0 0 12px rgba(51,51,51,.5);text-align:center}#handler:before{bottom:50%;margin-bottom:14px;width:4px;height:9999px;left:50%;content:\" \";display:block;background:#fff;position:absolute;z-index:30;-webkit-box-shadow:0 0 12px rgba(51,51,51,.5);box-shadow:0 0 12px rgba(51,51,51,.5);-webkit-box-sizing:border-box;box-sizing:border-box;margin-left:-2px;font-size:12pt}#handler:after{top:50%;margin-top:14px;width:4px;height:9999px;left:50%;content:\" \";display:block;background:#fff;position:absolute;z-index:30;-webkit-box-shadow:0 0 12px rgba(51,51,51,.5);box-shadow:0 0 12px rgba(51,51,51,.5);-webkit-box-sizing:border-box;box-sizing:border-box;margin-left:-2px;font-size:12pt}.left-arrow{display:inline-block;position:relative;top:10%;font-size:12pt;left:-3px;}.right-arrow{display:inline-block;position:relative;top:10%;font-size:12pt;right:-3px}@-webkit-keyframes flashSlow{from,to{opacity:1}50%{opacity:0}}@keyframes flashSlow{from,to{opacity:1}50%{opacity:0}}@keyframes fadeOut{from{opacity:1}to{opacity:0}}.fadeOut{-webkit-animation-name:fadeOut;animation-name:fadeOut}.animated{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:both;animation-fill-mode:both}.animated.infinite{-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.flashSlow{-webkit-animation-name:flashSlow;animation-name:flashSlow}</style><div id=\"mainContainer\"><div id=\"inBox\" class=\"in-box\"><img id=\"leftImg\" class=\"imgct1 init-img animated\"> <img id=\"rightImg\" class=\"imgct2 init-img animated\"><div id=\"handler\" class=\"animated\"><span class=\"left-arrow\"><svg width=\"8px\" height=\"8px\"><path d=\"M8 0 L8 8 L1 4 Z\" fill=\"white\" class=\"animated flashSlow infinite\"/></svg></span><span class=\"right-arrow\"><svg width=\"8px\" height=\"8px\"><path d=\"M0 0 L0 8 L7 4 Z\" fill=\"white\" class=\"animated flashSlow infinite\"/></svg></span></div></div><div class=\"resultImg\" id=\"resultImgLeft\"><img class=\"imgct3\" alt=\"\"></div><div class=\"resultImg\" id=\"resultImgRight\"><img class=\"imgct4\" alt=\"\"></div></div>";
    var CrossSlider = /*#__PURE__*/ (function (_HTMLElement) {
      _inherits(CrossSlider, _HTMLElement);
      var _super = _createSuper(CrossSlider);
      function CrossSlider() {
        var _this;
        _classCallCheck(this, CrossSlider);
        _this = _super.call(this);
        _this.attachShadow({
          mode: "open"
        });
        _this.shadowRoot.appendChild(template.content.cloneNode(true));
        _this.handler = _this.shadowRoot.querySelector("#handler");
        _this.container = _this.shadowRoot.querySelector("#mainContainer");
        _this.containerW = _this.container.getBoundingClientRect().width;
        _this.containerH = _this.container.getBoundingClientRect().height;
        _this.box = _this.shadowRoot.querySelector("#inBox");
        _this.rightImg = _this.shadowRoot.querySelector(".imgct2");
        _this.resultBoxLeft = _this.shadowRoot.querySelector("#resultImgLeft");
        _this.resultBoxRight = _this.shadowRoot.querySelector("#resultImgRight");
        _this.initImg = _this.shadowRoot.querySelectorAll(".init-img");
        return _this;
      }
      _createClass(CrossSlider, [{
        key: "animatedOnLoad",
        value: function animatedOnLoad(e) {
          var handler = this.handler;
          var numHandler = parseInt(this.handler.style.left);
          var cW = this.containerW;
          var cH = this.containerH;
          var rightImg = this.rightImg;
          gsap.fromTo(handler, {
            left: numHandler - 23
          }, {
            left: cW - cW * 90 / 100,
            duration: 0.5
          });
          gsap.fromTo(rightImg, {
            clip: "rect(0px," + cW + "px," + cH + "px," + numHandler - 5 + "px)"
          }, {
            clip: "rect(0px," + cW + "px," + cH + "px," + (cW - cW * 85 / 100) + "px)",
            duration: 0.5,
            onComplete: function onComplete() {
              gsap.fromTo(handler, {
                left: cW - cW * 90 / 100
              }, {
                left: cW - cW * 20 / 100,
                duration: 0.5
              });
              gsap.fromTo(rightImg, {
                clip: "rect(0px," + cW + "px," + cH + "px," + (cW - cW * 85 / 100) + "px)"
              }, {
                clip: "rect(0px," + cW + "px," + cH + "px," + (cW - cW * 15 / 100) + "px)",
                duration: 0.5,
                onComplete: function onComplete() {
                  gsap.fromTo(handler, {
                    left: cW - cW * 20 / 100
                  }, {
                    left: cW / 2 - 17,
                    duration: 0.5
                  });
                  gsap.fromTo(rightImg, {
                    clip: "rect(0px," + cW + "px," + cH + "px," + (cW - cW * 15 / 100) + "px)"
                  }, {
                    clip: "rect(0px," + cW + "px," + cH + "px," + cW / 2 + "px)",
                    duration: 0.5
                  });
                }
              });
            }
          });
        }
      }, {
        key: "handleDragStart",
        value: function handleDragStart() {
          var _this2 = this;
          var touchDownHandler;
          this.box.addEventListener("touchstart", function (e) {
            touchDownHandler = true;
            e.stopPropagation();
          });
          this.box.addEventListener("touchend", function (e) {
            touchDownHandler = false;
            e.stopPropagation();
          });
          this.box.addEventListener("click", function (e) {
            touchDownHandler = false;
            e.stopPropagation();
          });
          this.box.addEventListener("touchmove", function (e) {
            if (touchDownHandler) {
              var position = e.touches[0].clientX;
              _this2.handler.style.left = position - 23 + "px";
              _this2.rightImg.setAttribute("style", "clip:rect(0px," + _this2.containerW + "px," + _this2.containerH + "px," + (position - 5) + "px)");
              if (position < 15) {
                _this2.box.removeEventListener("touchmove", _this2.handleDragStart);
                _this2.resultShowRight();
              }
              if (position > _this2.containerW - 15) {
                _this2.box.removeEventListener("touchmove", _this2.handleDragStart);
                _this2.resultShowLeft();
              }
            }
            e.stopPropagation();
          });
        }
      }, {
        key: "handleMouseStart",
        value: function handleMouseStart() {
          var _this3 = this;
          var isMouseDown = false;
          this.box.addEventListener("mousedown", function (e) {
            isMouseDown = true;
            e.stopPropagation();
          });
          this.box.addEventListener("mouseup", function (e) {
            isMouseDown = false;
            e.stopPropagation();
          });
          this.box.addEventListener("click", function (e) {
            isMouseDown = false;
            e.stopPropagation();
          });
          this.box.addEventListener("mousemove", function (e) {
            if (isMouseDown) {
              var position;
              position = e.clientX;
              _this3.handler.style.left = position - 23 + "px";
              _this3.rightImg.setAttribute("style", "clip:rect(0px," + _this3.containerW + "px," + _this3.containerH + "px," + (position - 5) + "px)");
            }
            if (position < 30) {
              _this3.box.removeEventListener("mousemove", _this3.handleDragStart);
              _this3.resultShowRight();
            }
            if (position > _this3.containerW - 30) {
              _this3.box.removeEventListener("mousemove", _this3.handleDragStart);
              _this3.resultShowLeft();
            }
            e.stopPropagation();
          });
        }
      }, {
        key: "handleClick",
        value: function handleClick(e) {
          var _this4 = this;
          var clickPosition = e.clientX;
          if (clickPosition > this.containerW / 2 + 10) {
            setTimeout(function () {
              Enabler.exitOverride("click_right", _this4.getAttribute("righturl"));
            }, 400);
            gsap.fromTo(this.handler, {
              left: this.containerW / 2
            }, {
              left: -(this.containerW / 2),
              duration: 0.5
            });
            gsap.fromTo(this.rightImg, {
              clip: "rect(0px," + this.containerW + "px," + this.containerH + "px," + this.containerW / 2 + "px"
            }, {
              clip: "rect(0px," + this.containerW + "px," + this.containerH + "px, 0px",
              duration: 0.5
            });
          }
          if (clickPosition < this.containerW / 2 - 10) {
            setTimeout(function () {
              Enabler.exitOverride("click_right", _this4.getAttribute("lefturl"));
            }, 400);
            gsap.fromTo(this.handler, {
              left: this.containerW / 2
            }, {
              left: this.containerW,
              duration: 0.5
            });
            gsap.fromTo(this.rightImg, {
              clip: "rect(0px," + this.containerW + "px," + this.containerH + "px," + this.containerW / 2 + "px"
            }, {
              clip: "rect(0px," + this.containerW + "px," + this.containerH + "px, " + this.containerW + "px",
              duration: 0.5
            });
          }
          e.stopPropagation();
          this.box.removeEventListener("click", this.handleClick);
        }
      }, {
        key: "resultShowLeft",
        value: function resultShowLeft() {
          var _this5 = this;
          this.box.classList.add("animated");
          this.initImg.forEach(function (v) {
            v.classList.add("fadeOut");
          });
          setTimeout(function () {
            _this5.box.style.display = "none";
            _this5.resultBoxRight.style.display = "none";
          }, 100);
        }
      }, {
        key: "resultShowRight",
        value: function resultShowRight() {
          var _this6 = this;
          this.box.classList.add("animated");
          this.initImg.forEach(function (v) {
            v.classList.add("fadeOut");
          });
          setTimeout(function () {
            _this6.box.style.display = "none";
            _this6.resultBoxLeft.style.display = "none";
          }, 100);
        }
      }, {
        key: "attributeChangedCallback",
        value: function attributeChangedCallback(name, oldValue, newValue) {
          this.shadowRoot.querySelector(".imgct1").src = this.getAttribute("leftimg");
          this.shadowRoot.querySelector(".imgct2").src = this.getAttribute("rightimg");
          this.shadowRoot.querySelector(".imgct3").src = this.getAttribute("resultleftimg");
          this.shadowRoot.querySelector(".imgct4").src = this.getAttribute("resultrightimg");
        }
      }, {
        key: "init",
        value: function init() {
          var _this7 = this;
          if (this.container) {
            this.shadowRoot.querySelector(".imgct2").style.clip = "rect(0px, " + this.containerW + "px, " + this.containerH + "px, " + this.containerW / 2 + "px)";
            this.handler.style.left = this.containerW / 2 - 17 + "px";
            setTimeout(function () {
              _this7.handler.style.opacity = 1;
              var start = setInterval(function () {
                var observer = new IntersectionObserver(function (entries) {
                  entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                      _this7.animatedOnLoad();
                      observer.unobserve(_this7.container);
                      clearInterval(start);
                    }
                  });
                }, {
                  threshold: 0.5
                });
                observer.observe(_this7.container);
              }, 500);
            }, 300);
          } else {
            this.init();
          }
        }
      }, {
        key: "connectedCallback",
        value: function connectedCallback() {
          var _this8 = this;
          this.box.addEventListener("touchmove", this.handleDragStart.bind(this));
          this.box.addEventListener("mousemove", this.handleMouseStart.bind(this));
          this.box.addEventListener("click", this.handleClick.bind(this));
          console.log(this.containerW);
          setTimeout(function () {
            _this8.init();
          }, 600);
          this.resultBoxLeft.addEventListener("click", function () {
            Enabler.exitOverride("click_resultLeft", _this8.getAttribute("lefturl"));
          });
          this.resultBoxRight.addEventListener("click", function () {
            Enabler.exitOverride("click_resultRight", _this8.getAttribute("righturl"));
          });
        }
      }, {
        key: "disconnectedCallback",
        value: function disconnectedCallback() {
          var _this9 = this;
          this.box.removeEventListener("touchmove", this.handleDragStart.bind(this));
          this.box.removeEventListener("mousemove", this.handleMouseStart.bind(this));
          this.resultBoxLeft.removeEventListener("click", function () {
            Enabler.exitOverride("click_resultLeft", _this9.getAttribute("lefturl"));
          });
          this.resultBoxRight.removeEventListener("click", function () {
            Enabler.exitOverride("click_resultRight", _this9.getAttribute("righturl"));
          });
        }
      }], [{
        key: "observedAttributes",
        get: function get() {
          return ["leftimg", "lefturl", "rightimg", "righturl", "resultleftimg", "resultrightimg"];
        }
      }]);
      return CrossSlider;
    })(/*#__PURE__*/ _wrapNativeSuper(HTMLElement));

customElements.define("pfx-crossslider", CrossSlider);
}