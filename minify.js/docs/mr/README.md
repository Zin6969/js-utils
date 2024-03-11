<div align="right">
    <h6>
        <picture>
            <source type="image/svg+xml" media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/adamlui/js-utils/main/docs/images/earth-icon/white/icon32.svg">
            <img height=14 src="https://raw.githubusercontent.com/adamlui/js-utils/main/docs/images/earth-icon/black/icon32.svg">
        </picture>
        &nbsp;मराठी |
        <a href="../..#readme">English</a> |
        <a href="../zh-cn#readme">简体中文</a> |
        <a href="../zh-tw#readme">繁體中文</a> |
        <a href="../hi#readme">हिंदी</a> |
        <a href="../bn#readme">বাংলা</a>
    </h6>
</div>

# </> minify.js 

### सर्व JavaScript फायली वारंवार कमी करा.

<a href="https://www.npmjs.com/package/@adamlui/minify.js"><img height=31 src="https://img.shields.io/npm/dt/%40adamlui%2Fminify.js?logo=npm&logoColor=white&labelColor=464646&style=for-the-badge"></a>
<a href="#%EF%B8%8F-mit-%E0%A4%AA%E0%A4%B0%E0%A4%B5%E0%A4%BE%E0%A4%A8%E0%A4%BE"><img height=31 src="https://img.shields.io/badge/License-MIT-red.svg?logo=internetarchive&logoColor=white&labelColor=464646&style=for-the-badge"></a>
<a href="https://www.npmjs.com/package/@adamlui/minify.js?activeTab=versions"><img height=31 src="https://img.shields.io/badge/Latest_Build-1.3.0-fc7811.svg?logo=icinga&logoColor=white&labelColor=464646&style=for-the-badge"></a>
<a href="https://www.npmjs.com/package/@adamlui/minify.js?activeTab=code"><img height=31 src="https://img.shields.io/npm/unpacked-size/%40adamlui%2Fminify.js?style=for-the-badge&logo=ebox&logoColor=white&labelColor=464646&color=blue"></a>
<a href="https://sonarcloud.io/component_measures?metric=new_vulnerabilities&id=adamlui_js-utils:minify.js/minify.js"><img height=31 src="https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fsonarcloud.io%2Fapi%2Fmeasures%2Fcomponent%3Fcomponent%3Dadamlui_js-utils%3Aminify.js%2Fminify.js%26metricKeys%3Dvulnerabilities&query=%24.component.measures.0.value&style=for-the-badge&logo=sonarcloud&logoColor=white&labelColor=464646&label=Vulnerabilities&color=gold"></a>

<img src="https://github.com/adamlui/js-utils/blob/main/minify.js/media/images/minify.js-docs-demo.png">

<br>

<img height=8px width="100%" src="https://raw.githubusercontent.com/adamlui/js-utils/main/docs/images/aqua-separator.png">

## ⚡ स्थापना

**जागतिक उपयुक्तता** म्हणून:

```
npm install -g @adamlui/minify.js
```

**विकासक अवलंबित्व** म्हणून, तुमच्या प्रोजेक्ट रूटवरून:

```
npm install -D @adamlui/minify.js
```

## 💻 कमांड लाइन वापर

मूलभूत **ग्लोबल कमांड** आहे:

```
minify-js
```

**💡 टीप:** फक्त कोणत्या फाइल्सवर प्रक्रिया केली जाईल हे पाहण्यासाठी `-n` किंवा `--dry-run` पास करा.

#

**इनपुट/आउटपुट** पथ निर्दिष्ट करण्यासाठी:
   
```
minify-js [input_path] [output_path]
```

- `[input_path]`: सध्याच्या कार्यरत निर्देशिकेच्या सापेक्ष JS फाईल किंवा डिरेक्ट्रीचा पाथ ज्यामध्ये JS फाइल्स कमी केल्या जातील.
- `[output_path]`: फाईल किंवा डिरेक्ट्रीचा मार्ग जेथे लहान फाइल्स संग्रहित केल्या जातील, मूळ फाइल स्थानाशी संबंधित (दिले नसल्यास, `min/` वापरले जाते).

**💡 टीप:** फोल्डर पास झाल्यास, `-R` किंवा `--no-recursion` पास केल्याशिवाय फायलींवर पुनरावृत्ती केली जाईल.

#

तुमच्या प्रोजेक्टच्या `package.json` मध्ये **पॅकेज स्क्रिप्ट** म्हणून वापरण्यासाठी:

```json
  "scripts": {
    "build:js": "<minify-js-cmd>"
  },
```

`<minify-js-cmd>` ला `minify-js` + पर्यायी पॅरामीटरने बदला. त्यानंतर, कमांड रन करण्यासाठी `npm run build:js` वापरता येईल.
<br><br>

### उदाहरणे आज्ञा

**वर्तमान निर्देशिकेत** सर्व JavaScript फायली कमी करा (`min/` वर आउटपुट):

```
minify-js
```

सर्व JavaScript फाइल्स एका **विशिष्ट निर्देशिकेत** कमी करा (`path/to/your/directory/min/` वरील आउटपुट):

```
minify-js path/to/your/directory
```

**विशिष्ट फाइल** कमी करा (`path/to/your/min/file.min.js` वर आउटपुट):

```
minify-js path/to/your/file.js
```

दोन्ही **इनपुट आणि आउटपुट** डिरेक्टरी निर्दिष्ट करा (आउटपुट टू `output_folder/`):

```
minify-js input_folder output_folder
```

### कमांड लाइन पर्याय

```
कॉन्फिग पर्याय:
 -n, --dry-run               फाइल(स्) प्रत्यक्षात कमी करू नका, त्यांच्यावर प्रक्रिया केली जाईल का ते दाखवा.
 -d, --include-dotfolders    फाइल शोधात डॉटफोल्डर समाविष्ट करा.
 -D, --include-dotfiles      फाइल शोधात डॉटफाईल्स समाविष्ट करा.
 -R, --no-recursion          आवर्ती फाइल शोध अक्षम करा.
 -q, --quiet                 त्रुटी वगळता सर्व लॉगिंग दाबा.

माहिती आदेश:
 -h, --help                  मदत स्क्रीन प्रदर्शित करा.
 -v, --version               आवृत्ती क्रमांक दर्शवा.
```

## 🔌 API वापर

तुम्ही तुमच्या ॲपमध्ये **minify.js** लोड करू शकता:

```js
const minifyJS = require('@adamlui/minify.js');
```

एकच उच्च स्तरीय कार्य आहे, `minify(input, options)`, जे स्ट्रिंग इनपुटशी जुळवून घेणाऱ्या कॉन्फिगर करता येण्याजोगे सर्व मिनिफिकेशन/पुनरावर्तन टप्पे पार पाडेल.

### minify(input)

इनपुट ही एक स्ट्रिंग आहे जी स्त्रोत कोड किंवा पथ दर्शवते.

**स्रोत कोड** पास केल्यास, तो थेट लहान केला जातो, त्यानंतर `srcPath` + `code` + `error` असलेली ऑब्जेक्ट परत केली जाते:

```js
const srcCode = 'function add(first, second) { return first + second; }',
      minifyResult = minifyJS.minify(srcCode);
console.log(minifyResult.error); // रनटाइम त्रुटी, किंवा त्रुटी नसल्यास `undefined`
console.log(minifyResult.code);  // कमी केलेले आउटपुट: function add(n,d){return n+d}
```

जर **फाइल पथ** पास झाला असेल, तर फाइलचा कोड लोड केला जातो आणि नंतर लहान केला जातो, वरील प्रमाणे ऑब्जेक्ट परत करतो.

**डिरेक्टरी पाथ** पास केल्यास, JavaScript फाइल्स शोधल्या जातात (पुन्हा डिफॉल्टनुसार), प्रत्येकाचा कोड लोड केला जातो आणि नंतर छोटा केला जातो, त्यानंतर `srcPath` + `code` + `error` असलेल्या ऑब्जेक्ट्सचा ॲरे दिला जातो:

```js
const recursiveResults = minifyJS.minify('.');
recursiveResults.forEach(result =>
    console.log(result.srcPath) // JavaScript फायली सर्व उप-निर्देशिकांमध्ये
);

const nonRecursiveResults = minifyJS.minify('.', { recursive: false });
nonRecursiveResults.forEach(result =>
    console.log(result.srcPath) // JavaScript फाइल्स फक्त कार्यरत निर्देशिकेत
);
```

### minify(options)

पर्याय बुलियन आहेत (डिफॉल्टनुसार `true` वर सेट केलेले) ऑब्जेक्ट गुणधर्म म्हणून पास केले जातात उदा. `minifyJS.minify(input, { option: true })`:

```
 recursive     डिरेक्टरी पथ पास झाल्यास नेस्टेड फाइल्ससाठी वारंवार शोधा.
 verbose       कन्सोल/टर्मिनलमध्ये लॉग इन दाखवा.
```

<br>

## 💖 सपोर्ट

कृपया [GitHub देणे ⭐](https://github.com/adamlui/js-utils) याने तुम्हाला मदत केली असल्यास विचार करा!
<br><br>

## 🏛️ MIT परवाना

**कॉपीराइट © 2023–2024 [Adam Lui](https://github.com/adamlui)**

या सॉफ्टवेअरची आणि संबंधित दस्तऐवज फाइल्स ("सॉफ्टवेअर") ची प्रत मिळवणाऱ्या कोणत्याही व्यक्तीला, वापर, कॉपी, सुधारणे, विलीन करण्याच्या अधिकारांसह मर्यादेशिवाय सॉफ्टवेअरमध्ये व्यवहार करण्यासाठी, याद्वारे परवानगी देण्यात आली आहे. , सॉफ्टवेअरच्या प्रती प्रकाशित करणे, वितरित करणे, उपपरवाना देणे आणि/किंवा विक्री करणे आणि ज्यांना सॉफ्टवेअर दिलेले आहे अशा व्यक्तींना असे करण्यास परवानगी देणे, खालील अटींच्या अधीन राहून:

उपरोक्त कॉपीराइट सूचना आणि ही परवानगी सूचना सॉफ्टवेअरच्या सर्व प्रती किंवा महत्त्वपूर्ण भागांमध्ये समाविष्ट केली जाईल.

सॉफ्टवेअर "जसे आहे तसे" प्रदान केले जाते, कोणत्याही प्रकारच्या हमीशिवाय, व्यक्त किंवा निहित, ज्यामध्ये व्यापारक्षमता, विशिष्ट हेतूसाठी योग्यतेच्या हमींचा समावेश आहे, परंतु ते मर्यादित नाही. कोणत्याही परिस्थितीत लेखक किंवा कॉपीराइट धारक कोणत्याही दाव्यासाठी, नुकसानीसाठी किंवा इतर उत्तरदायित्वासाठी जबाबदार असणार नाहीत, मग तो कराराच्या कृतीत, छेडछाड किंवा अन्यथा, नंतरपासून, आमच्याकडून उद्भवलेल्या मध्ये इतर व्यवहार सॉफ्टवेअर.

<br>

<img height=6px width="100%" src="https://raw.githubusercontent.com/adamlui/js-utils/main/docs/images/aqua-separator.png">

<a href="https://github.com/adamlui/js-utils">**मुख्यपृष्ठ**</a> /
<a href="https://github.com/adamlui/js-utils/discussions">चर्चा करा</a> /
<a href="#-minifyjs">परत वर जा ↑</a>