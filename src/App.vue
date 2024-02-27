<template>
    <section id="top_sect" class="second">
        <h1 style="color: mediumpurple">My Dream Team - APD</h1>
        <button @click="DemoApp.expand();">Развернуть Webview</button>
        <button id="main_btn" @click="DemoApp.sendMessage('Привет APD!');">Нажми меня, поздороваемся</button>
        <button id="with_webview_btn" @click="DemoApp.sendMessage('Привет мир!', true);">Send «Hello, World!» with
            inline webview button
        </button>
        <button id="data_btn" @click="DemoApp.sendTime(true);">Отправь время в бота (x10 раз)</button>
        <button @click="DemoApp.toggleMainButton(this);">Скрыть главную кнопку</button>
    </section>
 
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
body {
    --bg-color: var(--tg-theme-bg-color, #fff);
    font-family: sans-serif;
    background-color: var(--bg-color);
    color: var(--tg-theme-text-color, #222);
    font-size: 14px;
    margin: 0;
    padding: 0;
    color-scheme: var(--tg-color-scheme);
}

body.gray {
    background-color: var(--tg-theme-secondary-bg-color, #efefef);
}

a {
    color: var(--tg-theme-link-color, #2678b6);
}

.btn {
    font-size: 14px;
    padding: 10px 17px;
}

.btn-primary {
    background-color: var(--tg-theme-button-color, #50a8eb);
    color: var(--tg-theme-button-text-color, #fff);
    border: none;
}

button {
    display: block;
    width: 100%;
    font-size: 14px;
    margin: 15px 0;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    background-color: var(--tg-theme-button-color, mediumpurple);
    color: var(--tg-theme-button-text-color, #ffffff);
    cursor: pointer;
}

.main-container {
    padding: 15px;
}

.list-header {
    text-transform: uppercase;
    font-size: .92em;
    color: var(--tg-theme-hint-color, #ccc);
    margin: 0 0 10px;
}

a.list-group-item,
button.list-group-item {
    color: var(--tg-theme-text-color, #222);
}

.main-container p {
    margin: 0 0 10px;
}

.main-container pre,
.main-container > .btn {
    margin: 0 0 7px;
}

.main-container pre + .hint,
.main-container > .btn + .hint {
    text-align: center;
    margin: 0 0 15px;
}

button[disabled] {
    opacity: 0.6;
    cursor: auto;
    pointer-events: none;
}

button.close_btn {
    /*position: fixed;*/
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 0;
    margin: 0;
    padding: 16px 20px;
    text-transform: uppercase;
}

input[type="text"],
.input[contenteditable] {
    display: block;
    box-sizing: border-box;
    font-size: 14px;
    width: 100%;
    padding: 12px 20px;
    margin: 15px 0;
    border: 1px solid var(--tg-theme-link-color, #000);
    background-color: var(--tg-theme-bg-color, #ffffff);
    border-radius: 4px;
    color: var(--tg-theme-text-color, #222222);
    text-align: start;
}

input[type="text"]::-webkit-input-placeholder {
    color: var(--tg-theme-hint-color, #ccc);
}

input[type="text"]::-moz-placeholder {
    color: var(--tg-theme-hint-color, #ccc);
}

input[type="text"]:-ms-input-placeholder {
    color: var(--tg-theme-hint-color, #ccc);
}

.input[data-placeholder] {
    position: relative;
}

.input[data-placeholder]:empty:before {
    position: absolute;
    left: 0;
    right: 0;
    content: attr(data-placeholder);
    color: var(--tg-theme-hint-color, #ccc);
    padding: 0 20px;
    font-weight: normal;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    pointer-events: none;
    z-index: -1;
}

section {
    padding: 15px;
    text-align: center;
    background-color: var(--bg-color, #ffffff);
}

section#top_sect {
    background-color: var(--tg-theme-bg-color, #ffffff);
}

section#top_sect.second {
    background-color: var(--tg-theme-secondary-bg-color, #efefef);
}

section .sect_row {
    margin: 10px 0;
}

section + section {
    padding: 0 15px 65px;
}

p {
    margin: 40px 0 15px;
}

ul {
    text-align: left;
}

li {
    color: var(--tg-theme-hint-color, #a8a8a8);
}

textarea {
    width: 100%;
    box-sizing: border-box;
    padding: 7px;
}

pre {
    background: rgba(0, 0, 0, .07);
    color: var(--tg-theme-text-color, #222);
    font-size: 12px;
    border: none;
    border-radius: 4px;
    padding: 8px;
    margin: 7px 0;
    word-break: break-word;
    white-space: pre-wrap;
    text-align: left;
}

.dark pre {
    background: rgba(255, 255, 255, .15);
}

.chat_img {
    width: 30px;
    border-radius: 15px;
    margin-right: 10px;
}

.columns {
    display: flex;
}

.columns > * {
    flex-grow: 1;
}

.hint {
    font-size: .8em;
    color: var(--tg-theme-hint-color, #a8a8a8);
}

.ok {
    color: green;
}

.err {
    color: red;
}

.status_need {
    display: none;
}

#fixed_wrap {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    transform: translateY(100vh);
}

.viewport-container {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    height: var(--tg-viewport-stable-height, 100vh);
    transition: height .2s ease;
}

.viewport-container .main-container {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}

.viewport-container .main-container button {
    width: auto;
}

.viewport-border,
.viewport-stable_border {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    height: var(--tg-viewport-height, 100vh);
    pointer-events: none;
}

.viewport-stable_border {
    height: var(--tg-viewport-stable-height, 100vh);
}

.viewport-border:before,
.viewport-stable_border:before {
    content: attr(text);
    display: inline-block;
    position: absolute;
    background: gray;
    right: 0;
    top: 0;
    font-size: 7px;
    padding: 2px 4px;
    vertical-align: top;
}

.viewport-stable_border:before {
    /*background: green;*/
    left: 0;
    right: auto;
}

.viewport-border:after,
.viewport-stable_border:after {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    /*border: 2px dashed gray;*/
}

.viewport-stable_border:after {
    /*border-color: green;*/
}

small {
    font-size: 12px;
}
</style>

<script setup lang="ts">

const DemoApp = {
    initData      : Telegram.WebApp.initData || '',
    initDataUnsafe: Telegram.WebApp.initDataUnsafe || {},
    MainButton    : Telegram.WebApp.MainButton,

    init(options) {
        document.body.style.visibility = '';
        Telegram.WebApp.ready();
        Telegram.WebApp.MainButton.setParams({
            text      : 'Закрыть WEBVIEW',
            is_visible: true
        }).onClick(DemoApp.close);
    },
    expand() {
        Telegram.WebApp.expand();
    },
    close() {
        Telegram.WebApp.close();
    },
    toggleMainButton(el) {
        const mainButton = Telegram.WebApp.MainButton;
        if (mainButton.isVisible) {
            mainButton.hide();
            el.innerHTML = 'Показать главную кнопку';
        } else {
            mainButton.show();
            el.innerHTML = 'Скрыть главную кнопку';
        }
    },

    // actions
    sendMessage(msg_id, with_webview) {
        if (!DemoApp.initDataUnsafe.query_id) {
            alert('Привет, привет! О_о');
            return;
        }

        document.querySelectorAll('button').forEach((btn) => btn.disabled = true);

        const btn       = document.querySelector('#btn_status');
        btn.textContent = 'Sending...';

        DemoApp.apiRequest('sendMessage', {
            msg_id      : msg_id || '',
            with_webview: !DemoApp.initDataUnsafe.receiver && with_webview ? 1 : 0
        }, function (result) {
            document.querySelectorAll('button').forEach((btn) => btn.disabled = false);

            if (result.response) {
                if (result.response.ok) {
                    btn.textContent   = 'Message sent successfully!';
                    btn.className     = 'ok';
                    btn.style.display = 'block';
                } else {
                    btn.textContent   = result.response.description;
                    btn.className     = 'err';
                    btn.style.display = 'block';
                    alert(result.response.description);
                }
            } else if (result.error) {
                btn.textContent   = result.error;
                btn.className     = 'err';
                btn.style.display = 'block';
                alert(result.error);
            } else {
                btn.textContent   = 'Unknown error';
                btn.className     = 'err';
                btn.style.display = 'block';
                alert('Unknown error');
            }
        });
    },
    changeMenuButton(close) {
        document.querySelectorAll('button').forEach((btn) => btn.disabled = true);
        const btnStatus       = document.querySelector('#btn_status');
        btnStatus.textContent = 'Изменение кнопки...';

        DemoApp.apiRequest('changeMenuButton', {}, function (result) {
            document.querySelectorAll('button').forEach((btn) => btn.disabled = false);

            if (result.response) {
                if (result.response.ok) {
                    btnStatus.textContent   = 'Кнопка изменена!';
                    btnStatus.className     = 'ok';
                    btnStatus.style.display = 'block';
                    Telegram.WebApp.close();
                } else {
                    btnStatus.textContent   = result.response.description;
                    btnStatus.className     = 'err';
                    btnStatus.style.display = 'block';
                    alert(result.response.description);
                }
            } else if (result.error) {
                btnStatus.textContent   = result.error;
                btnStatus.className     = 'err';
                btnStatus.style.display = 'block';
                alert(result.error);
            } else {
                btnStatus.textContent   = 'Unknown error';
                btnStatus.className     = 'err';
                btnStatus.style.display = 'block';
                alert('Unknown error');
            }
        });
        if (close) {
            setTimeout(function () {
                Telegram.WebApp.close();
            }, 50);
        }
    },
    checkInitData() {
        const webViewStatus = document.querySelector('#webview_data_status');
        if (DemoApp.initDataUnsafe.query_id &&
            DemoApp.initData &&
            webViewStatus.classList.contains('status_need')
        ) {
            webViewStatus.classList.remove('status_need');
            DemoApp.apiRequest('checkInitData', {}, function (result) {
                if (result.ok) {
                    webViewStatus.textContent = 'Hash is correct (async)';
                    webViewStatus.className   = 'ok';
                } else {
                    webViewStatus.textContent = result.error + ' (async)';
                    webViewStatus.className   = 'err';
                }
            });
        }
    },
    sendText(spam) {
        const textField = document.querySelector('#text_field');
        const text      = textField.value;
        if (!text.length) {
            return textField.focus();
        }
        if (byteLength(text) > 4096) {
            return alert('Text is too long');
        }

        const repeat = spam ? 10 : 1;
        for (let i = 0; i < repeat; i++) {
            Telegram.WebApp.sendData(text);
        }
    },
    sendTime(spam) {
        const repeat = spam ? 10 : 1;
        for (let i = 0; i < repeat; i++) {
            Telegram.WebApp.sendData(new Date().toString());
        }
    },

    // Alerts
    showAlert(message) {
        Telegram.WebApp.showAlert(message);
    },
    showConfirm(message) {
        Telegram.WebApp.showConfirm(message);
    },
    requestWriteAccess() {
        Telegram.WebApp.requestWriteAccess(function (result) {
            if (result) {
                DemoApp.showAlert('Write access granted');
            } else {
                DemoApp.showAlert('Write access denied');
            }
        });
    },
    requestContact() {
        Telegram.WebApp.requestContact(function (result) {
            if (result) {
                DemoApp.showAlert('Contact granted');
            } else {
                DemoApp.showAlert('Contact denied');
            }
        });
    },
    showPopup() {
        Telegram.WebApp.showPopup({
            title  : 'Popup title',
            message: 'Popup message',
            buttons: [
                {id: 'delete', type: 'destructive', text: 'Delete all'},
                {id: 'faq', type: 'default', text: 'Open FAQ'},
                {type: 'cancel'},
            ]
        }, function (buttonId) {
            if (buttonId === 'delete') {
                DemoApp.showAlert("'Delete all' selected");
            } else if (buttonId === 'faq') {
                Telegram.WebApp.openLink('https://telegram.org/faq');
            }
        });
    },
    showScanQrPopup: function (linksOnly) {
        Telegram.WebApp.showScanQrPopup({
            text: linksOnly ? 'with any link' : 'for test purposes'
        }, function (text) {
            if (linksOnly) {
                const lowerText = text.toString().toLowerCase();
                if (lowerText.substring(0, 7) === 'http://' ||
                    lowerText.substring(0, 8) === 'https://'
                ) {
                    setTimeout(function () {
                        Telegram.WebApp.openLink(text);
                    }, 50);

                    return true;
                }
            } else {
                DemoApp.showAlert(text);

                return true;
            }
        });
    },

    // Permissions
    requestLocation(el) {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                el.nextElementSibling.innerHTML = '(' + position.coords.latitude + ', ' + position.coords.longitude + ')';
                el.nextElementSibling.className = 'ok';
            });
        } else {
            el.nextElementSibling.innerHTML = 'Geolocation is not supported in this browser.';
            el.nextElementSibling.className = 'err';
        }
        return false;
    },
    requestVideo(el) {
        if (navigator.mediaDevices) {
            navigator.mediaDevices.getUserMedia({audio: false, video: true}).then(function (stream) {
                el.nextElementSibling.innerHTML = '(Access granted)';
            });
        } else {
            el.nextElementSibling.innerHTML = 'Media devices is not supported in this browser.';
            el.nextElementSibling.className = 'err';
        }
        return false;
    },
    requestAudio(el) {
        if (navigator.mediaDevices) {
            navigator.mediaDevices.getUserMedia({audio: true, video: false}).then(function (stream) {
                el.nextElementSibling.innerHTML = '(Access granted)';
                el.nextElementSibling.className = 'ok';
            });
        } else {
            el.nextElementSibling.innerHTML = 'Media devices is not supported in this browser.';
            el.nextElementSibling.className = 'err';
        }
        return false;
    },
    requestAudioVideo(el) {
        if (navigator.mediaDevices) {
            navigator.mediaDevices.getUserMedia({audio: true, video: true}).then(function (stream) {
                el.nextElementSibling.innerHTML = '(Access granted)';
                el.nextElementSibling.className = 'ok';
            });
        } else {
            el.nextElementSibling.innerHTML = 'Media devices is not supported in this browser.';
            el.nextElementSibling.className = 'err';
        }
        return false;
    },
    testClipboard(el) {
        Telegram.WebApp.readTextFromClipboard(function (clipText) {
            if (clipText === null) {
                el.nextElementSibling.innerHTML = 'Clipboard text unavailable.';
                el.nextElementSibling.className = 'err';
            } else {
                el.nextElementSibling.innerHTML = '(Read from clipboard: Â«' + clipText + 'Â»)';
                el.nextElementSibling.className = 'ok';
            }
        });
        return false;
    },

    // Other
    apiRequest(method, data, onCallback) {
        // DISABLE BACKEND FOR FRONTEND DEMO
        // YOU CAN USE YOUR OWN REQUESTS TO YOUR OWN BACKEND
        // CHANGE THIS CODE TO YOUR OWN
        return onCallback && onCallback({error: 'Привет О_О'});
        // return onCallback && onCallback({error: 'This function (' + method + ') should send requests to your backend. Please, change this code to your own.'});

        const authData = DemoApp.initData || '';
        fetch('/demo/api', {
            method     : 'POST',
            body       : JSON.stringify(Object.assign(data, {
                _auth : authData,
                method: method,
            })),
            credentials: 'include',
            headers    : {
                'Content-Type': 'application/json'
            }
        }).then(function (response) {
            return response.json();
        }).then(function (result) {
            onCallback && onCallback(result);
        }).catch(function (error) {
            onCallback && onCallback({error: 'Server error'});
        });
    }
}

const DemoAppMenu = {
    init() {
        DemoApp.init();
        document.body.classList.add('gray');
        Telegram.WebApp.setHeaderColor('secondary_bg_color');
    }
};

const DemoAppInitData = {
    init() {
        DemoApp.init();
        Telegram.WebApp.onEvent('themeChanged', function () {
            document.getElementById('theme_data').innerHTML = JSON.stringify(Telegram.WebApp.themeParams, null, 2);
        });
        document.getElementById('webview_data').innerHTML = JSON.stringify(DemoApp.initDataUnsafe, null, 2);
        document.getElementById('theme_data').innerHTML   = JSON.stringify(Telegram.WebApp.themeParams, null, 2);
        DemoApp.checkInitData();
    }
};

const DemoAppViewport = {
    init() {
        DemoApp.init();
        Telegram.WebApp.onEvent('viewportChanged', DemoAppViewport.setData);
        DemoAppViewport.setData();
    },
    setData() {
        document.querySelector('.viewport-border').setAttribute('text', window.innerWidth + ' x ' + round(Telegram.WebApp.viewportHeight, 2))
        document.querySelector('.viewport-stable_border').setAttribute('text', window.innerWidth + ' x ' + round(Telegram.WebApp.viewportStableHeight, 2) +
            ' | is_expanded: ' + (Telegram.WebApp.isExpanded ? 'true' : 'false'));
    }
};

function byteLength(str) {
    if (window.Blob) {
        try {
            return new Blob([str]).size;
        } catch (e) {
        }
    }

    let s = str.length;
    for (let i = str.length - 1; i >= 0; i--) {
        const code = str.charCodeAt(i);
        if (code > 0x7f && code <= 0x7ff) {
            s++;
        } else if (code > 0x7ff && code <= 0xffff) {
            s += 2;
        }

        if (code >= 0xDC00 && code <= 0xDFFF) {
            i--;
        }
    }
    return s;
}

function round(val, d) {
    const k = Math.pow(10, d || 0);
    return Math.round(val * k) / k;
}
</script>
