
// 需要使用多语言功能时，定义class name时，使用lang开头，例如“lang-title”，这里没有实际作用，只是为了区分功能。
function setLangs () {
    window.langs = [
        { className: 'lang-title', zhCNContent: 'Fantastic-admin 专业版', enContent: 'Fantastic-admin Pro Version' }
    ];
};

function convertArrayToObjs (key, value) {
    const obj = {};
    langs.forEach(x => obj[x[key]] = x[value]);
    return obj;
};


function initLanguage () {
    setLangs();
    const enTranslation = convertArrayToObjs('className', 'enContent');
    const zhCNTranslation = convertArrayToObjs('className', 'zhCNContent');
    i18next.init({
        lng: 'en', // if you're using a language detector, do not define the lng option
        debug: true,
        resources: {
          en: {
            translation: enTranslation
          },
          zh_CN: {
              translation: zhCNTranslation
          }
        }
      }).then(function(t) {
        // initialized and ready to go!
        // document.getElementById('title001').innerHTML = i18next.t('title');
      });
}

function updateLangContent() {
    langs.forEach(x => {
        const doms = document.getElementsByClassName(x.className);
        for (const element of doms) {
            element.innerHTML = i18next.t(x.className);
        }
    });
}
  
