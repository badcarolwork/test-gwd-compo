var template = document.createElement('template');
template.innerHTML =
  '<style>:host{display:block;width:100%;height:100%;}img{-webkit-user-drag:none;user-select: none;width:100%;height:auto;}#mainContainer{display:block;width:100%;height:100%;position:relative;overflow:hidden}#inBox{display:none;width:100%;height:100%;position:absolute;bottom:0;left:0;overflow:hidden;-webkit-box-sizing:content-box;box-sizing:content-box}#mainContainer img{width:100%;height:auto;position:absolute}.resultImg{display:none;width:100%;height:100%;position:absolute}.init-img{z-index:2}#handler{opacity:0;width:25px;height:25px;border:4px solid #fff;opacity:1;position:absolute;top:50%;cursor:pointer;z-index:999;margin-top:-15px;z-index:99;border-radius:50%;-webkit-box-shadow:0 0 12px rgba(51,51,51,.5);box-shadow:0 0 12px rgba(51,51,51,.5);text-align:center}#handler:before{bottom:50%;margin-bottom:14px;width:4px;height:9999px;left:50%;content:" ";display:block;background:#fff;position:absolute;z-index:30;-webkit-box-shadow:0 0 12px rgba(51,51,51,.5);box-shadow:0 0 12px rgba(51,51,51,.5);-webkit-box-sizing:border-box;box-sizing:border-box;margin-left:-2px;font-size:12pt}#handler:after{top:50%;margin-top:14px;width:4px;height:9999px;left:50%;content:" ";display:block;background:#fff;position:absolute;z-index:30;-webkit-box-shadow:0 0 12px rgba(51,51,51,.5);box-shadow:0 0 12px rgba(51,51,51,.5);-webkit-box-sizing:border-box;box-sizing:border-box;margin-left:-2px;font-size:12pt}.left-arrow{display:inline-block;position:relative;top:10%;font-size:12pt;left:-3px;}.right-arrow{display:inline-block;position:relative;top:10%;font-size:12pt;right:-3px}@-webkit-keyframes flashSlow{from,to{opacity:1}50%{opacity:0}}@keyframes flashSlow{from,to{opacity:1}50%{opacity:0}}@keyframes fadeOut{from{opacity:1}to{opacity:0}}.fadeOut{-webkit-animation-name:fadeOut;animation-name:fadeOut}.animated{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:both;animation-fill-mode:both}.animated.infinite{-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.flashSlow{-webkit-animation-name:flashSlow;animation-name:flashSlow}</style><div id="mainContainer"><div id="inBox" class="in-box"><img id="leftImg" class="imgct1 init-img animated"> <img id="rightImg" class="imgct2 init-img animated"><div id="handler" class="animated"><span class="left-arrow"><svg width="8px" height="8px"><path d="M8 0 L8 8 L1 4 Z" fill="white" class="animated flashSlow infinite"/></svg></span><span class="right-arrow"><svg width="8px" height="8px"><path d="M0 0 L0 8 L7 4 Z" fill="white" class="animated flashSlow infinite"/></svg></span></div></div><div class="resultImg" id="resultImgLeft"><img class="imgct3" alt=""></div><div class="resultImg" id="resultImgRight"><img class="imgct4" alt=""></div></div>';
class CrossSlider extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.handler = this.shadowRoot.querySelector('#handler');
    this.container = this.shadowRoot.querySelector('#mainContainer');
    this.containerW = this.container.getBoundingClientRect().width;
    this.containerH = this.container.getBoundingClientRect().height;
    this.box = this.shadowRoot.querySelector('#inBox');
    this.rightImg = this.shadowRoot.querySelector('.imgct2');
    this.resultBoxLeft = this.shadowRoot.querySelector('#resultImgLeft');
    this.resultBoxRight = this.shadowRoot.querySelector('#resultImgRight');
    this.initImg = this.shadowRoot.querySelectorAll('.init-img');
    this._mousedownHandler = false;
  }

  animatedOnLoad(e) {
    const handler = this.handler;
    const numHandler = parseInt(this.handler.style.left);
    let cW = this.container.getBoundingClientRect().width;
    let cH = this.container.getBoundingClientRect().height;
    const rightImg = this.rightImg;
    this.resultBoxLeft.style.display = 'block';
    this.resultBoxRight.style.display = 'block';
    setTimeout(() => {
      gsap.fromTo(handler, { left: numHandler - 23 }, { left: cW - (cW * 90) / 100, duration: 0.5 });

      gsap.fromTo(
        rightImg,
        { clip: 'rect(0px,' + cW + 'px,' + cH + 'px,' + numHandler - 5 + 'px)' },
        {
          clip: 'rect(0px,' + cW + 'px,' + cH + 'px,' + (cW - (cW * 85) / 100) + 'px)',
          duration: 0.5,
          onComplete: function () {
            gsap.fromTo(handler, { left: cW - (cW * 90) / 100 }, { left: cW - (cW * 20) / 100, duration: 0.5 });
            gsap.fromTo(
              rightImg,
              {
                clip: 'rect(0px,' + cW + 'px,' + cH + 'px,' + (cW - (cW * 85) / 100) + 'px)',
              },
              {
                clip: 'rect(0px,' + cW + 'px,' + cH + 'px,' + (cW - (cW * 15) / 100) + 'px)',
                duration: 0.5,
                onComplete: function () {
                  gsap.fromTo(handler, { left: cW - (cW * 20) / 100 }, { left: cW / 2 - 17, duration: 0.5 });
                  gsap.fromTo(
                    rightImg,
                    { clip: 'rect(0px,' + cW + 'px,' + cH + 'px,' + (cW - (cW * 15) / 100) + 'px)' },
                    {
                      clip: 'rect(0px,' + cW + 'px,' + cH + 'px,' + cW / 2 + 'px)',
                      duration: 0.5,
                    }
                  );
                },
              }
            );
          },
        }
      );
    }, 300);
  }

  handleEvt() {
    this.box.addEventListener("mousedown", function (evt) {
      this._mousedownHandler = true;
      evt.stopPropagation();
    });
    window.addEventListener("mouseup", function (evt) {
      this._mousedownHandler = false;
      evt.stopPropagation();
    });
    box.addEventListener("touchstart", function (evt) {
      this._mousedownHandler = true;
      evt.stopPropagation();
    });
    window.addEventListener("touchend", function (evt) {
      this._mousedownHandler = false;
      evt.stopPropagation();
    });
    box.addEventListener("click", function (evt) {
      evt.stopPropagation();
    });
  }

  handleDragStart() {
    this.box.removeEventListener('click', this.handleClick.bind(this));
    let cW = this.container.getBoundingClientRect().width;
    let cH = this.container.getBoundingClientRect().height;

    handleEvt();
    this.box.addEventListener('touchmove', (e) => {
      if (this._mousedownHandler) {
        this.box.removeEventListener('click', this.handleClick.bind(this));
        var position = e.touches[0].clientX;
        this.handler.style.left = position - 23 + 'px';
        this.rightImg.setAttribute('style', 'clip:rect(0px,' + cW + 'px,' + cH + 'px,' + (position - 5) + 'px)');

        if (position < 80) {
          this.box.removeEventListener('touchmove', this.handleDragStart);
          this.resultShowRight();
          this._mousedownHandler = false;
        }
        if (position > this.containerW - 80) {
          this.box.removeEventListener('touchmove', this.handleDragStart);
          this.resultShowLeft();
          this._mousedownHandler = false;
        }
      }
      e.stopPropagation();
    });
  }

  handleMouseStart() {
    let cW = this.container.getBoundingClientRect().width;
    let cH = this.container.getBoundingClientRect().height;

    handleEvt();

    this.box.addEventListener('mousemove', (e) => {
      if (this._mousedownHandler) {
        this.box.removeEventListener('click', this.handleClick.bind(this));
        var position;
        position = e.clientX;
        this.handler.style.left = position - 23 + 'px';
        this.rightImg.setAttribute('style', 'clip:rect(0px,' + cW + 'px,' + cH + 'px,' + (position - 5) + 'px)');
      }
      if (position < 80) {
        this.box.removeEventListener('mousemove', this.handleMouseStart);
        this.resultShowRight();
        this._mousedownHandler = false;
      }
      if (position > cW - 80) {
        this.box.removeEventListener('mousemove', this.handleMouseStart);
        this.resultShowLeft();
        _mousedownHandler = false;
      }
      e.stopPropagation();
    });
  }

  handleClick(e) {
    var clickPosition = e.clientX;
    let cW = this.container.getBoundingClientRect().width;
    let cH = this.container.getBoundingClientRect().height;

    if (clickPosition > cW / 2 + 10) {
      setTimeout(() => {
        Enabler.exitOverride('click_right', this.getAttribute('righturl'));
      }, 400);

      gsap.fromTo(this.handler, { left: cW / 2 }, { left: cW, duration: 0.5 });
      gsap.fromTo(
        this.rightImg,
        { clip: 'rect(0px,' + cW + 'px,' + cH + 'px,' + cW / 2 + 'px' },
        {
          clip: 'rect(0px,' + cW + 'px,' + cH + 'px, ' + cW + 'px',
          duration: 0.5,
        }
      );
    }
    if (clickPosition < cW / 2 - 10) {
      setTimeout(() => {
        Enabler.exitOverride('click_left', this.getAttribute('lefturl'));
      }, 400);
      gsap.fromTo(this.handler, { left: cW / 2 }, { left: -(cW / 2), duration: 0.5 });
      gsap.fromTo(this.rightImg, { clip: 'rect(0px,' + cW + 'px,' + cH + 'px,' + cW / 2 + 'px' }, { clip: 'rect(0px,' + cW + 'px,' + cH + 'px, 0px', duration: 0.5 });

    }
    var fldtag = new Image(1, 1);
    fldtag.src = this.getAttribute('clickfld');
    e.stopPropagation();
    this.box.removeEventListener('click', this.handleClick);
  }

  resultShowLeft() {
    this.box.classList.add('animated');
    this.initImg.forEach((v) => {
      v.classList.add('fadeOut');
    });
    setTimeout(() => {
      this.box.style.display = 'none';
      this.resultBoxRight.style.display = 'none';
    }, 100);
  }
  resultShowRight() {
    this.box.classList.add('animated');
    this.initImg.forEach((v) => {
      v.classList.add('fadeOut');
    });
    setTimeout(() => {
      this.box.style.display = 'none';
      this.resultBoxLeft.style.display = 'none';
    }, 100);
  }

  static get observedAttributes() {
    return ['leftimg', 'lefturl', 'rightimg', 'righturl', 'resultleftimg', 'resultrightimg', 'barcolor', 'barwidth', 'clickfld'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.shadowRoot.querySelector('.imgct1').src = this.getAttribute('leftimg');
    this.shadowRoot.querySelector('.imgct2').src = this.getAttribute('rightimg');
    this.shadowRoot.querySelector('.imgct3').src = this.getAttribute('resultleftimg');
    this.shadowRoot.querySelector('.imgct4').src = this.getAttribute('resultrightimg');
  }

  initHandler() {
    this.handler.style.border = `${this.getAttribute('barwidth')}px solid ${this.getAttribute('barcolor')}`;
    const styleElement = this.shadowRoot.querySelector('style');
    if (styleElement) {
      let cssText = styleElement.textContent;
      const newRule = `#handler:after, #handler:before{ background-color: ${this.getAttribute('barcolor')}; width:${this.getAttribute('barwidth')}px; }`;
      cssText += newRule;
      styleElement.textContent = cssText;
      this.shadowRoot.querySelector('.left-arrow svg path').setAttribute('fill', this.getAttribute('barwidth'));
      this.shadowRoot.querySelector('.right-arrow svg path').setAttribute('fill', this.getAttribute('barwidth'));
    }
  }

  init() {
    if (this.container) {
      let cW = this.container.getBoundingClientRect().width;
      let cH = this.container.getBoundingClientRect().height;
      if (cW !== 0 && cH !== 0) {
        this.box.style.display = 'block';
        this.shadowRoot.querySelector('.imgct2').style.clip = 'rect(0px, ' + cW + 'px, ' + cH + 'px, ' + cW / 2 + 'px)';
        this.handler.style.left = cW / 2 - 17 + 'px';
        this.handler.style.opacity = 1;
        this.initHandler();
        var start = setInterval(() => {
          const observer = new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting) {
                  this.animatedOnLoad();
                  observer.unobserve(this.container);
                  clearInterval(start);
                }
              });
            },
            { threshold: 0.5 }
          );
          observer.observe(this.container);
        }, 500);
      } else {
        setTimeout(() => {
          this.init();
        }, 500);
      }
    } else {
      setTimeout(() => {
        this.init();
      }, 500);
    }
  }

  connectedCallback() {
    this.box.addEventListener('touchmove', this.handleDragStart.bind(this));
    this.box.addEventListener('mousemove', this.handleMouseStart.bind(this));
    this.box.addEventListener('click', this.handleClick.bind(this));
    Enabler.counter("show");
    setTimeout(() => {
      this.init();
    }, 600);

    this.resultBoxLeft.addEventListener('click', () => {
      Enabler.exitOverride('click_resultLeft', this.getAttribute('lefturl'));
    });

    this.resultBoxRight.addEventListener('click', () => {
      Enabler.exitOverride('click_resultRight', this.getAttribute('righturl'));
    });
  }

  disconnectedCallback() {
    this.box.removeEventListener('touchmove', this.handleDragStart.bind(this));
    this.box.removeEventListener('mousemove', this.handleMouseStart.bind(this));
    this.resultBoxLeft.removeEventListener('click', () => {
      Enabler.exitOverride('click_resultLeft', this.getAttribute('lefturl'));
    });

    this.resultBoxRight.removeEventListener('click', () => {
      Enabler.exitOverride('click_resultRight', this.getAttribute('righturl'));
    });
  }
}

export default CrossSlider;
