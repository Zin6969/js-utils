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

# { } scss-to-css

### सर्व SCSS फाईल्स minified CSS मध्ये पुनरावृत्तीने संकलित करा.

<a href="https://www.npmjs.com/package/@adamlui/scss-to-css"><img height=31 src="https://img.shields.io/npm/dt/%40adamlui%2Fscss-to-css?logo=npm&logoColor=white&labelColor=464646&style=for-the-badge"></a>
<a href="#%EF%B8%8F-mit-%E0%A4%AA%E0%A4%B0%E0%A4%B5%E0%A4%BE%E0%A4%A8%E0%A4%BE"><img height=31 src="https://img.shields.io/badge/License-MIT-red.svg?logo=internetarchive&logoColor=white&labelColor=464646&style=for-the-badge"></a>
<a href="https://www.npmjs.com/package/@adamlui/scss-to-css?activeTab=versions"><img height=31 src="https://img.shields.io/badge/Latest_Build-1.6.0-fc7811.svg?logo=icinga&logoColor=white&labelColor=464646&style=for-the-badge"></a>
<a href="https://www.npmjs.com/package/@adamlui/scss-to-css?activeTab=code"><img height=31 src="https://img.shields.io/npm/unpacked-size/%40adamlui%2Fscss-to-css?style=for-the-badge&logo=ebox&logoColor=white&color=blue&labelColor=464646"></a>
<a href="https://sonarcloud.io/component_measures?metric=new_vulnerabilities&id=adamlui_js-utils:scss-to-css/scss-to-css.js"><img height=31 src="https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fsonarcloud.io%2Fapi%2Fmeasures%2Fcomponent%3Fcomponent%3Dadamlui_js-utils%3Ascss-to-css%2Fscss-to-css.js%26metricKeys%3Dvulnerabilities&query=%24.component.measures.0.value&style=for-the-badge&logo=sonarcloud&logoColor=white&labelColor=464646&label=Vulnerabilities&color=gold"></a>

<img height=8px width="100%" src="https://github.com/adamlui/js-utils/blob/main/docs/images/aqua-separator.png">

## ⚡ स्थापना

**जागतिक उपयुक्तता** म्हणून:

```
npm install -g @adamlui/scss-to-css
```

**विकासक अवलंबित्व** म्हणून (उदा. बिल्ड स्क्रिप्टसाठी), तुमच्या प्रोजेक्ट रूटवरून:

```
npm install -D @adamlui/scss-to-css
```

**रनटाइम अवलंबित्व** म्हणून (उदा. ऑन-द-फ्लाय संकलनासाठी), तुमच्या प्रोजेक्ट रूटवरून:

```
npm install @adamlui/scss-to-css
```

## 💻 कमांड लाइन वापर

मूलभूत **ग्लोबल कमांड** आहे:

```
scss-to-css
```

नमुना आउटपुट:

<img src="https://github.com/adamlui/js-utils/blob/main/scss-to-css/media/images/sample-output.png">

**💡 टीप:** जोपर्यंत `-S` किंवा `--no-source-maps` पास होत नाही तोपर्यंत स्त्रोत नकाशे देखील डीफॉल्टनुसार तयार केले जातात.

#

**इनपुट/आउटपुट** पथ निर्दिष्ट करण्यासाठी:

```
scss-to-css [input_path] [output_path]
```

- `[input_path]`: सध्याच्या कार्यरत निर्देशिकेच्या सापेक्ष SCSS फाइल किंवा संकलित करायच्या SCSS फाइल्स असलेली निर्देशिका.
- `[output_path]`: फाईल किंवा डिरेक्ट्रीचा मार्ग जिथे CSS + स्त्रोत नकाशा फायली संग्रहित केल्या जातील, मूळ फाइल स्थानाच्या सापेक्ष (दिले नसल्यास, `css/` वापरले जाते).

**💡 टीप:** फोल्डर पास केले असल्यास, `-R` किंवा `--no-recursion` पास केल्याशिवाय फायलींवर आवर्ती पद्धतीने प्रक्रिया केली जाईल.

#

तुमच्या प्रोजेक्टच्या `package.json` मध्ये **पॅकेज स्क्रिप्ट** म्हणून वापरण्यासाठी:

```json
  "scripts": {
    "build:css": "<scss-to-css-cmd>"
  },
```

`<scss-to-css-cmd>` ला `scss-to-css` + पर्यायी पॅरामीटरने बदला. त्यानंतर, कमांड रन करण्यासाठी `npm run build:css` वापरले जाऊ शकते.
<br><br>

### उदाहरणे आज्ञा

**वर्तमान निर्देशिकेत** सर्व SCSS फाइल्स संकलित करा (`css/` वर आउटपुट):

```
scss-to-css
```

सर्व SCSS फायली एका **विशिष्ट निर्देशिकेत संकलित करा** (`path/to/your/directory/css/` मधील आउटपुट):

```
scss-to-css path/to/your/directory
```

**विशिष्ट फाइल** संकलित करा (`path/to/your/css/file.min.css` वर आउटपुट):

```
scss-to-css path/to/your/file.scss
```

दोन्ही **इनपुट आणि आउटपुट** डिरेक्टरी निर्दिष्ट करा (आउटपुट टू output_folder/`):

```
scss-to-css input_folder output_folder
```

**💡 टीप:** `-M` किंवा `--no-minify` पास केल्याशिवाय आउटपुट CSS कमी केले जाते.
<br><br>

### कमांड लाइन पर्याय

```
कॉन्फिग पर्याय:
 -n, --dry-run               फाइल(स्) प्रत्यक्षात कमी करू नका, त्यांच्यावर प्रक्रिया केली जाईल का ते दाखवा.
 -d, --include-dotfolders    फाइल शोधात डॉटफोल्डर समाविष्ट करा.
 -S, --no-source-maps        स्रोत नकाशे तयार होण्यापासून प्रतिबंधित करा.
 -M, --no-minify             आउटपुट CSS चे मिनिफिकेशन अक्षम करा.
 -R, --no-recursion          आवर्ती फाइल शोध अक्षम करा.
 -q, --quiet                 त्रुटी वगळता सर्व लॉगिंग दाबा.

माहिती आदेश:
 -h, --help                  मदत स्क्रीन प्रदर्शित करा.
 -v, --version               आवृत्ती क्रमांक दर्शवा.
```

## 🔌 API संदर्भ

तुम्ही ECMAScript मॉड्यूल किंवा CommonJS मॉड्यूल या दोन्हीप्रमाणे, API पद्धती वापरण्यासाठी तुमच्या ॲपमध्ये **scss-to-css** देखील इंपोर्ट करू शकता.

#### ESM:

```js
import * as scssToCSS from '@adamlui/scss-to-css';
```

#### CJS:

```js
const scssToCSS = require('@adamlui/scss-to-css');
```

### compile(inputPath, options)

हे फंक्शन CSS डेटामध्ये प्रदान केलेल्या `inuptPath` मध्ये आढळलेल्या SCSS संकलित करते.

**फाइल पथ** पास केल्यास, फाइलचा कोड CSS वर संकलित केला जातो, त्यानंतर `srcPath` + `code` + `error` असलेला ऑब्जेक्ट परत केला जातो:

```js
const compileResult = scssToCSS.compile('assets/style.scss');
console.log(compileResult.error); // रनटाइम त्रुटी, किंवा त्रुटी नसल्यास `undefined`
console.log(compileResult.code);  // assets/style.scss चे संकलित CSS आउटपुट
```

**डिरेक्टरी पाथ** पास केल्यास, SCSS फायली शोधल्या जातात (पुन्हा डीफॉल्टनुसार), प्रत्येकाचा कोड लोड केला जातो आणि संकलित केला जातो, त्यानंतर `srcPath` + `code` + `error` समाविष्ट असलेल्या ऑब्जेक्ट्सचा ॲरे दिला जातो:

```js
const results = scssToCSS.compile('.');
results.forEach(result =>
    console.log(result.srcPath)); // वर्किंग डिरेक्टरी + सर्व नेस्टेड डिरेक्टरीमध्ये SCSS फाइल्सचे मार्ग
console.log(results[1].code); // आढळल्यास दुसऱ्या SCSS फाईलचे संकलित CSS आउटपुट, किंवा न आढळल्यास `undefined`
```

पर्याय बुलियन आहेत, ऑब्जेक्ट गुणधर्म म्हणून पास केले जातात. उदाहरणार्थ:

```js
scssToCSS.compile(inputDir, { minify: false });
// डेटा ऑब्जेक्ट्स परत करते जिथे `.code` मध्ये अनमिनिफाइड CSS असते
```

संभाव्य पॅरामीटर्स (आणि त्यांची डीफॉल्ट सेटिंग्ज) आहेत:

```
 recursive (true)     डिरेक्टरी मार्ग पास झाल्यास नेस्टेड फाइल्ससाठी वारंवार शोधा.
 verbose (true)       कन्सोल/टर्मिनलमध्ये लॉग इन दाखवा.
 dotFolders (false)   फाइल शोधात डॉटफोल्डर समाविष्ट करा.
 minify (true)        आउटपुट CSS कमी करा.
 sourceMaps (true)    CSS स्त्रोत नकाशे व्युत्पन्न करा.
```

### findSCSS(searchDir, options)

हे फंक्शन पास केलेल्या `searchDir` स्ट्रिंगमधील सर्व SCSS फायली शोधते (कोणत्या फायली [`compile()`](#compileinputpath-options) प्रक्रिया करतील हे शोधण्यासाठी उपयुक्त) आणि त्यांचे फाईलपाथ असलेले ॲरे परत करते.

पर्याय बुलियन आहेत, ऑब्जेक्ट गुणधर्म म्हणून पास केले जातात. उदाहरणार्थ:

```js
scssToCSS.findSCSS(searchDir, { recursive: false });
// अचूक `searchDir` मधील SCSS फायलींना फाइलपाथ असलेला ॲरे परत करतो
```

संभाव्य पॅरामीटर्स (आणि त्यांची डीफॉल्ट सेटिंग्ज) आहेत:

```
 recursive (true)     डिरेक्टरी मार्ग पास झाल्यास नेस्टेड फाइल्ससाठी वारंवार शोधा.
 verbose (false)      कन्सोल/टर्मिनलमध्ये लॉग इन दाखवा.
 dotFolders (false)   फाइल शोधात डॉटफोल्डर समाविष्ट करा.
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
<a href="#--scss-to-css">परत वर जा ↑</a>
