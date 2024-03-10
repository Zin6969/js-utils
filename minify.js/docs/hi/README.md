<div align="right">
    <h6>
        <picture>
            <source type="image/svg+xml" media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/adamlui/js-utils/main/docs/images/earth-icon/white/icon32.svg">
            <img height=14 src="https://raw.githubusercontent.com/adamlui/js-utils/main/docs/images/earth-icon/black/icon32.svg">
        </picture>
        &nbsp;हिंदी |
        <a href="https://github.com/adamlui/js-utils/tree/main/minify.js#readme">English</a> |
        <a href="https://github.com/adamlui/js-utils/tree/main/minify.js/docs/zh-cn#readme">简体中文</a> |
        <a href="https://github.com/adamlui/js-utils/tree/main/minify.js/docs/zh-tw#readme">繁體中文</a> |
        <a href="https://github.com/adamlui/js-utils/tree/main/minify.js/docs/bn#readme">বাংলা</a>
    </h6>
</div>

# </> minify.js 

### सभी जावास्क्रिप्ट फ़ाइलों को पुनरावर्ती रूप से छोटा करें।

<a href="https://www.npmjs.com/package/@adamlui/minify.js"><img height=31 src="https://img.shields.io/npm/dt/%40adamlui%2Fminify.js?logo=npm&logoColor=white&labelColor=464646&style=for-the-badge"></a>
<a href="#%EF%B8%8F-mit-लाइसेंस"><img height=31 src="https://img.shields.io/badge/License-MIT-red.svg?logo=internetarchive&logoColor=white&labelColor=464646&style=for-the-badge"></a>
<a href="https://www.npmjs.com/package/@adamlui/minify.js?activeTab=versions"><img height=31 src="https://img.shields.io/badge/Latest_Build-1.3.0-fc7811.svg?logo=icinga&logoColor=white&labelColor=464646&style=for-the-badge"></a>
<a href="https://www.npmjs.com/package/@adamlui/minify.js?activeTab=code"><img height=31 src="https://img.shields.io/npm/unpacked-size/%40adamlui%2Fminify.js?style=for-the-badge&logo=ebox&logoColor=white&labelColor=464646&color=blue"></a>
<a href="https://sonarcloud.io/component_measures?metric=new_vulnerabilities&id=adamlui_js-utils:minify.js/minify.js"><img height=31 src="https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fsonarcloud.io%2Fapi%2Fmeasures%2Fcomponent%3Fcomponent%3Dadamlui_js-utils%3Aminify.js%2Fminify.js%26metricKeys%3Dvulnerabilities&query=%24.component.measures.0.value&style=for-the-badge&logo=sonarcloud&logoColor=white&labelColor=464646&label=Vulnerabilities&color=gold"></a>

<img src="https://github.com/adamlui/js-utils/blob/main/minify.js/media/images/minify.js-docs-demo.png">

<br>

<img height=8px width="100%" src="https://raw.githubusercontent.com/adamlui/js-utils/main/docs/images/aqua-separator.png">

## ⚡ इंस्टालेशन

**वैश्विक उपयोगिता** के रूप में:

```
npm install -g @adamlui/minify.js
```

**डेवलपर निर्भरता** के रूप में, आपके प्रोजेक्ट रूट से:

```
npm install -D @adamlui/minify.js
```

## 💻 कमांड लाइन उपयोग

मूल **वैश्विक कमांड** है:

```
minify-js
```

**💡 नोट:** केवल यह देखने के लिए कि कौन सी फ़ाइलें संसाधित की जाएंगी, `-n` या `--dry-run` पास करें।

#

**इनपुट/आउटपुट** पथ निर्दिष्ट करने के लिए:

```
minify-js [input_path] [output_path]
```

- `[input_path]`: वर्तमान कार्यशील निर्देशिका के सापेक्ष जेएस फ़ाइल या जेएस फ़ाइलों वाली निर्देशिका का पथ छोटा किया जाना है।
- `[output_path]`: फ़ाइल या निर्देशिका का पथ जहां मूल फ़ाइल स्थान के सापेक्ष छोटी फ़ाइलें संग्रहीत की जाएंगी (यदि प्रदान नहीं किया गया है, तो `min/` का उपयोग किया जाता है)।

**💡 नोट:** यदि फ़ोल्डर्स पास हो गए हैं, तो फ़ाइलों को पुनरावर्ती रूप से संसाधित किया जाएगा जब तक कि `-R` या `-no-recursion` पास न हो जाए।

#

अपने प्रोजेक्ट के `package.json` में **पैकेज स्क्रिप्ट** के रूप में उपयोग करने के लिए:

```json
  "scripts": {
    "build:js": "<minify-js-cmd>"
  },
```

`<minify-js-cmd>` को `minify-js` + वैकल्पिक पैरामीटर से बदलें। फिर, कमांड चलाने के लिए `npm run build:js` का उपयोग किया जा सकता है।
<br><br>

### कमांड लाइन विकल्प

```
कॉन्फ़िगरेशन विकल्प:
 -n, --dry-run               वास्तव में फ़ाइल(फ़ाइलों) को छोटा न करें, बस यह दिखाएं कि क्या उन्हें संसाधित किया जाएगा।
 -d, --include-dotfolders    फ़ाइल खोज में डॉटफ़ोल्डर शामिल करें.
 -D, --include-dotfiles      फ़ाइल खोज में डॉटफ़ाइलें शामिल करें.
 -R, --no-recursion          पुनरावर्ती फ़ाइल खोज अक्षम करें.
 -q, --quiet                 त्रुटियों को छोड़कर सभी लॉगिंग को रोकें।

Info commands:
 -h, --help                  सहायता स्क्रीन प्रदर्शित करें.
 -v, --version               संस्करण संख्या दिखाएँ.
```

### उदाहरण आदेश

**वर्तमान निर्देशिका** में सभी जावास्क्रिप्ट फ़ाइलों को छोटा करें (आउटपुट `min/`):

```
minify-js
```

**विशिष्ट निर्देशिका** में सभी JavaScript फ़ाइलों को छोटा करें (`path/to/your/directory/min/` पर आउटपुट):

```
minify-js path/to/your/directory
```

एक **विशिष्ट फ़ाइल** को छोटा करें (`path/to/your/min/file.min.js` पर आउटपुट):

```
minify-js path/to/your/file.js
```

**इनपुट और आउटपुट** दोनों निर्देशिकाएं निर्दिष्ट करें (आउटपुट `output_folder/` पर):

```
minify-js input_folder output_folder
```

## 🔌 एपीआई संदर्भ

आप अपने ऐप में **minify.js** को इस तरह लोड कर सकते हैं:

```js
const minifyJS = require('@adamlui/minify.js');
```

एक एकल उच्च स्तरीय फ़ंक्शन है, `minify(input, options)`, जो सभी लघुकरण/पुनरावृत्ति चरणों को एक कॉन्फ़िगर करने योग्य तरीके से निष्पादित करेगा जो स्ट्रिंग इनपुट के अनुकूल होता है।

### minify(options)

विकल्प बूलियन होते हैं (डिफ़ॉल्ट रूप से `true` पर सेट होते हैं) ऑब्जेक्ट गुणों के रूप में पारित किए जाते हैं जैसे `minifyJS.minify(input, { option: true })`:

```
 recursive     यदि निर्देशिका पथ पारित हो गया है तो नेस्टेड फ़ाइलों को पुनरावर्ती रूप से खोजें।
 verbose       कंसोल/टर्मिनल में लॉगिंग दिखाएँ।
```

### minify(input)

इनपुट एक स्ट्रिंग है जो स्रोत कोड या पथ का प्रतिनिधित्व करता है।

यदि **स्रोत कोड** पास हो जाता है, तो इसे सीधे छोटा कर दिया जाता है, फिर `srcPath` + `code` + `error` युक्त एक ऑब्जेक्ट वापस कर दिया जाता है:

```js
const srcCode = 'function add(first, second) { return first + second; }',
      minifyResult = minifyJS.minify(srcCode);
console.log(minifyResult.error); // रनटाइम त्रुटि, या यदि कोई त्रुटि नहीं है तो `undefined`
console.log(minifyResult.code);  // न्यूनतम आउटपुट: function add(n,d){return n+d}
```

यदि **फ़ाइल पथ** पास हो जाता है, तो फ़ाइल का कोड लोड किया जाता है और फिर छोटा किया जाता है, जिससे ऊपर जैसा ऑब्जेक्ट वापस आ जाता है।

यदि **निर्देशिका पथ** पारित किया जाता है, तो जावास्क्रिप्ट फ़ाइलों को खोजा जाता है (डिफ़ॉल्ट रूप से पुनरावर्ती रूप से), प्रत्येक का कोड लोड किया जाता है और फिर छोटा किया जाता है, फिर `srcPath` + `code` + `error` युक्त ऑब्जेक्ट की एक सरणी लौटा दी जाती है:

```js
const recursiveResults = minifyJS.minify('.');
recursiveResults.forEach(result =>
    console.log(result.srcPath) // सभी उप-निर्देशिकाओं में JS फ़ाइलें
);

const nonRecursiveResults = minifyJS.minify('.', { recursive: false });
nonRecursiveResults.forEach(result =>
    console.log(result.srcPath) // JS फ़ाइलें केवल कार्यशील निर्देशिका में हैं
);
```

<br>

## 💖 सहायता

यदि इससे आपको मदद मिली तो कृपया [GitHub ⭐](https://github.com/adamlui/js-utils) देने पर विचार करें!
<br><br>

## 🏛️ MIT लाइसेंस

**कॉपीराइट (सी) 2023–2024 [एडम लुई (Adam Lui)](https://github.com/adamlui)**

इसके द्वारा प्रति प्राप्त करने वाले किसी भी व्यक्ति को अनुमति निःशुल्क प्रदान की जाती है इस सॉफ़्टवेयर और संबंधित दस्तावेज़ फ़ाइलों ("सॉफ़्टवेयर") से निपटने के लिए सॉफ़्टवेयर में बिना किसी प्रतिबंध के, जिसमें बिना किसी सीमा के अधिकार शामिल हैं उपयोग करना, प्रतिलिपि बनाना, संशोधित करना, विलय करना, प्रकाशित करना, वितरित करना, उपलाइसेंस देना और/या बेचना सॉफ़्टवेयर की प्रतियां, और उन व्यक्तियों को अनुमति देना जिनके पास सॉफ़्टवेयर है निम्नलिखित शर्तों के अधीन, ऐसा करने के लिए सुसज्जित:

उपरोक्त कॉपीराइट नोटिस और यह अनुमति नोटिस सभी में शामिल होंगे सॉफ़्टवेयर की प्रतियां या पर्याप्त भाग।

सॉफ़्टवेयर "जैसा है" प्रदान किया जाता है, बिना किसी प्रकार की, स्पष्ट या वारंटी के। निहित, व्यापारिकता की वारंटी सहित, लेकिन इन्हीं तक सीमित नहीं, किसी विशेष उद्देश्य के लिए उपयुक्तता और उल्लंघन न होना। किसी भी स्थिति में ऐसा नहीं होगा लेखक या कॉपीराइट धारक किसी भी दावे, क्षति या अन्य के लिए उत्तरदायी होंगे दायित्व, चाहे किसी अनुबंध, अपकृत्य या किसी अन्य प्रकार से उत्पन्न हो, सॉफ़्टवेयर से बाहर या उसके संबंध में या उपयोग या अन्य लेनदेन में सॉफ़्टवेयर।

<br>

<img height=6px width="100%" src="https://raw.githubusercontent.com/adamlui/js-utils/main/docs/images/aqua-separator.png">

<a href="https://github.com/adamlui/js-utils">**घर**</a> /
<a href="https://github.com/adamlui/js-utils/discussions">चर्चा करना</a> /
<a href="#-minifyjs">Back to top ↑</a>
