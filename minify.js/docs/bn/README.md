<div align="right">
    <h6>
        <picture>
            <source type="image/svg+xml" media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/adamlui/js-utils/main/docs/images/earth-icon/white/icon32.svg">
            <img height=14 src="https://raw.githubusercontent.com/adamlui/js-utils/main/docs/images/earth-icon/black/icon32.svg">
        </picture>
        &nbsp;বাংলা |
        <a href="../..#readme">English</a> |
        <a href="../zh-cn#readme">简体中文</a> |
        <a href="../zh-tw#readme">繁體中文</a> |
        <a href="../hi#readme">हिंदी</a> |
        <a href="../mr#readme">मराठी</a>
    </h6>
</div>

# </> minify.js 

### সব জাভাস্ক্রিপ্ট ফাইল পুনরাবৃত্তিমূলকভাবে ছোট করুন।

<a href="https://www.npmjs.com/package/@adamlui/minify.js"><img height=31 src="https://img.shields.io/npm/dt/%40adamlui%2Fminify.js?logo=npm&logoColor=white&labelColor=464646&style=for-the-badge"></a>
<a href="#%EF%B8%8F-mit-%E0%A6%B2%E0%A6%BE%E0%A6%87%E0%A6%B8%E0%A7%87%E0%A6%A8%E0%A7%8D%E0%A6%B8"><img height=31 src="https://img.shields.io/badge/License-MIT-red.svg?logo=internetarchive&logoColor=white&labelColor=464646&style=for-the-badge"></a>
<a href="https://www.npmjs.com/package/@adamlui/minify.js?activeTab=versions"><img height=31 src="https://img.shields.io/badge/Latest_Build-1.4.1-fc7811.svg?logo=icinga&logoColor=white&labelColor=464646&style=for-the-badge"></a>
<a href="https://www.npmjs.com/package/@adamlui/minify.js?activeTab=code"><img height=31 src="https://img.shields.io/npm/unpacked-size/%40adamlui%2Fminify.js?style=for-the-badge&logo=ebox&logoColor=white&labelColor=464646&color=blue"></a>
<a href="https://sonarcloud.io/component_measures?metric=new_vulnerabilities&id=adamlui_js-utils:minify.js/minify.js"><img height=31 src="https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fsonarcloud.io%2Fapi%2Fmeasures%2Fcomponent%3Fcomponent%3Dadamlui_js-utils%3Aminify.js%2Fminify.js%26metricKeys%3Dvulnerabilities&query=%24.component.measures.0.value&style=for-the-badge&logo=sonarcloud&logoColor=white&labelColor=464646&label=Vulnerabilities&color=gold"></a>

<img src="https://github.com/adamlui/js-utils/blob/main/minify.js/media/images/minify.js-docs-demo.png">

<br>

<img height=8px width="100%" src="https://raw.githubusercontent.com/adamlui/js-utils/main/docs/images/aqua-separator.png">

## ⚡ স্থাপন

একটি **গ্লোবাল ইউটিলিটি** হিসেবে:

```
npm install -g @adamlui/minify.js
```

**বিকাশকারী নির্ভরতা** হিসেবে (যেমন বিল্ড স্ক্রিপ্টের জন্য), আপনার প্রোজেক্ট রুট থেকে:

```
npm install -D @adamlui/minify.js
```

**রানটাইম নির্ভরতা** হিসেবে (যেমন, অন-দ্য-ফ্লাই মিনিফিকেশনের জন্য), আপনার প্রোজেক্ট রুট থেকে:

```
npm install @adamlui/minify.js
```

## 💻 কমান্ড লাইন ব্যবহার

মৌলিক **গ্লোবাল কমান্ড** হল:

```
minify-js
```

**💡 দ্রষ্টব্য:** শুধুমাত্র কোন ফাইলগুলি প্রক্রিয়া করা হবে তা দেখতে `-n` বা `--dry-run` পাস করুন।

#

**ইনপুট/আউটপুট** পাথ নির্দিষ্ট করতে:

```
minify-js [input_path] [output_path]
```

- `[input_path]`: বর্তমান কার্যকারী ডিরেক্টরির সাথে সম্পর্কিত JS ফাইল বা JS ফাইলগুলিকে সংক্ষিপ্ত করার জন্য ডিরেক্টরির পথ।
- `[output_path]`: ফাইল বা ডিরেক্টরির পাথ যেখানে ছোট ফাইলগুলি সংরক্ষণ করা হবে, মূল ফাইলের অবস্থানের সাথে সম্পর্কিত (যদি প্রদান না করা হয়, `min/` ব্যবহার করা হয়)।

**💡 দ্রষ্টব্য:** ফোল্ডারগুলি পাস করা হলে, ফাইলগুলি পুনরাবৃত্তিমূলকভাবে প্রক্রিয়া করা হবে যদি না `-R` বা `--no-recursion` পাস না হয়।

#

আপনার প্রোজেক্টের `package.json`-এ **প্যাকেজ স্ক্রিপ্ট** হিসেবে ব্যবহার করতে:

```json
  "scripts": {
    "build:js": "<minify-js-cmd>"
  },
```

`<minify-js-cmd>` কে `minify-js` + ঐচ্ছিক প্যারামিটার দিয়ে প্রতিস্থাপন করুন। তারপর, `npm run build:js` কমান্ডটি চালানোর জন্য ব্যবহার করা যেতে পারে।
<br><br>

### উদাহরণ কমান্ড

**বর্তমান ডিরেক্টরি**-এ সমস্ত জাভাস্ক্রিপ্ট ফাইল ছোট করুন (`min/`-এ আউটপুট):

```
minify-js
```

একটি **নির্দিষ্ট ডিরেক্টরি**-এ সমস্ত জাভাস্ক্রিপ্ট ফাইল ছোট করুন (`path/to/your/directory/min/`-তে আউটপুট):

```
minify-js path/to/your/directory
```

একটি **নির্দিষ্ট ফাইল** ছোট করুন (`path/to/your/min/file.min.js`-এ আউটপুট):

```
minify-js path/to/your/file.js
```

উভয় **ইনপুট এবং আউটপুট** ডিরেক্টরি নির্দিষ্ট করুন (`output_folder/`-এ আউটপুট):

```
minify-js input_folder output_folder
```

### কমান্ড লাইন বিকল্প

```
কনফিগার অপশন:
 -n, --dry-run               আসলে ফাইল(গুলি) ছোট করবেন না, সেগুলি প্রক্রিয়া করা হবে কিনা তা দেখান৷
 -d, --include-dotfolders    ফাইল অনুসন্ধানে ডটফোল্ডার অন্তর্ভুক্ত করুন।
 -D, --include-dotfiles      ফাইল অনুসন্ধানে ডটফাইলগুলি অন্তর্ভুক্ত করুন।
 -R, --no-recursion          পুনরাবৃত্ত ফাইল অনুসন্ধান অক্ষম করুন।
 -M, --no-mangle             ম্যাঙ্গলিং নাম অক্ষম করুন।
 -q, --quiet                 ত্রুটি ছাড়া সব লগিং দমন করুন।

তথ্য কমান্ড:
 -h, --help                  সাহায্য স্ক্রীন প্রদর্শন করুন।
 -v, --version               সংস্করণ নম্বর দেখান।
```

## 🔌 API রেফারেন্স

আপনি একটি ECMAScript মডিউল বা CommonJS মডিউল উভয় হিসাবে, এর API পদ্ধতিগুলি ব্যবহার করতে আপনার অ্যাপে **minify.js** আমদানি করতে পারেন৷

#### ESM:

```js
import * as minifyJS from '@adamlui/minify.js';
```

#### CJS:

```js
const minifyJS = require('@adamlui/minify.js');
```

### minify(input, options)

এই ফাংশনটি সরবরাহকৃত স্ট্রিং ইনপুটের উপর ভিত্তি করে জাভাস্ক্রিপ্ট কোডকে ছোট করে।

যদি **সোর্স কোড** পাস করা হয়, এটি সরাসরি ছোট করা হয়, তারপর `srcPath` + `code` + `error` সমন্বিত একটি বস্তু ফিরে আসে:

```js
const srcCode = 'function add(first, second) { return first + second; }',
      minifyResult = minifyJS.minify(srcCode);
console.log(minifyResult.error); // রানটাইম ত্রুটি, অথবা কোনো ত্রুটি না থাকলে `undefined`
console.log(minifyResult.code);  // ছোট আউটপুট: function add(n,d){return n+d}
```

যদি একটি **ফাইল পাথ** পাস করা হয়, তাহলে ফাইলের কোড লোড হয় তারপর ছোট করা হয়, উপরের মত একটি বস্তু ফেরত দেয়।

যদি একটি **ডিরেক্টরি পাথ** পাস করা হয়, জাভাস্ক্রিপ্ট ফাইলগুলি অনুসন্ধান করা হয় (পুনরাবৃত্তভাবে ডিফল্টভাবে), প্রতিটির কোড লোড করা হয় তারপর ছোট করা হয়, তারপর `srcPath` + `code` + `error` ধারণকারী বস্তুর একটি অ্যারে ফেরত দেওয়া হয়:

```js
const results = minifyJS.minify('.');
results.forEach(result =>
    console.log(result.srcPath) // ওয়ার্কিং ডিরেক্টরি + সমস্ত নেস্টেড ডিরেক্টরিতে JS ফাইলগুলির পাথ
);
console.log(results[1].code) // পাওয়া গেলে 2য় JS ফাইলের সংক্ষিপ্ত কোড বা না পাওয়া গেলে `undefined`
```

বিকল্পগুলি হল বুলিয়ান, অবজেক্টের বৈশিষ্ট্য হিসাবে পাস করা হয়েছে৷ উদাহরণ স্বরূপ:

```js
minifyJS.minify(input, { dotFiles: true });
// ডেটা অবজেক্ট ফেরত দেয় যেখানে ডটফাইলগুলিও প্রক্রিয়া করা হয় যদি `input` একটি পাথ হয়
```

সম্ভাব্য প্যারামিটার (এবং তাদের ডিফল্ট সেটিংস) হল:

```
 recursive (true)     ডিরেক্টরি পাথ পাস হলে নেস্টেড ফাইলগুলির জন্য পুনরাবৃত্তিমূলকভাবে অনুসন্ধান করুন।
 verbose (true)       কনসোল/টার্মিনালে লগইন দেখান।
 dotFolders (false)   ফাইল অনুসন্ধানে ডটফোল্ডার অন্তর্ভুক্ত করুন।
 dotFiles (false)     ফাইল অনুসন্ধানে ডটফাইলগুলি অন্তর্ভুক্ত করুন।
 mangle (true)        পরিবর্তনশীল নাম সংক্ষিপ্ত করুন (সাধারণত একটি অক্ষর পর্যন্ত)।
```

### findJS(searchDir, options)

এই ফাংশনটি পাস করা `searchDir` স্ট্রিং এর মধ্যে সমস্ত অমিনিফাইড জাভাস্ক্রিপ্ট ফাইল অনুসন্ধান করে (কি ফাইলগুলি [`minify()`](#minifyinput-options) প্রক্রিয়া করবে তা আবিষ্কার করার জন্য দরকারী) এবং তাদের ফাইলপথ সমন্বিত একটি অ্যারে প্রদান করে।

বিকল্পগুলি হল বুলিয়ান, অবজেক্টের বৈশিষ্ট্য হিসাবে পাস করা হয়েছে৷ উদাহরণ স্বরূপ:

```js
minifyJS.findJS(searchDir, { recursive: false });
// ঠিক `searchdir`-এ আনমিনিফাইড JS ফাইলে ফাইলপাথ সমন্বিত অ্যারে ফেরত দেয়
```

সম্ভাব্য প্যারামিটার (এবং তাদের ডিফল্ট সেটিংস) হল:

```
 recursive (true)     ডিরেক্টরি পাথ পাস হলে নেস্টেড ফাইলগুলির জন্য পুনরাবৃত্তিমূলকভাবে অনুসন্ধান করুন।
 verbose (false)      কনসোল/টার্মিনালে লগইন দেখান।
 dotFolders (false)   ফাইল অনুসন্ধানে ডটফোল্ডার অন্তর্ভুক্ত করুন।
 dotFiles (false)     ফাইল অনুসন্ধানে ডটফাইলগুলি অন্তর্ভুক্ত করুন।
```

<br>

## 💖 সমর্থন

অনুগ্রহ করে [একটি গিটহাব দেওয়া ⭐](https://github.com/adamlui/js-utils) বিবেচনা করুন যদি এটি আপনাকে সাহায্য করে!
<br><br>

## 🏛️ MIT লাইসেন্স

**কপিরাইট  © 2023–2024 [Adam Lui](https://github.com/adamlui)**

এই সফ্টওয়্যারটির একটি অনুলিপি এবং সংশ্লিষ্ট ডকুমেন্টেশন ফাইল ("সফ্টওয়্যার") প্রাপ্ত যেকোন ব্যক্তিকে এতদ্বারা অনুমতি দেওয়া হচ্ছে, বিনা মূল্যে সফ্টওয়্যার ব্যবহার, অনুলিপি, পরিবর্তন, একত্রীকরণের অধিকার সহ সীমাবদ্ধতা ছাড়াই সফ্টওয়্যারে ডিল করার জন্য। , প্রকাশ, বিতরণ, সাবলাইসেন্স, এবং/অথবা সফ্টওয়্যারের অনুলিপি বিক্রি করে এবং যাদের কাছে সফ্টওয়্যারটি সজ্জিত করা হয়েছে তাদের অনুমতি দিতে, নিম্নলিখিত শর্তাবলী সাপেক্ষে:

উপরের কপিরাইট বিজ্ঞপ্তি এবং এই অনুমতি বিজ্ঞপ্তিটি সফ্টওয়্যারের সমস্ত কপি বা উল্লেখযোগ্য অংশে অন্তর্ভুক্ত করা হবে।

সফ্টওয়্যারটি "যেমন আছে" প্রদান করা হয়, কোনো প্রকারের ওয়্যারেন্টি ছাড়াই, প্রকাশ বা উহ্য, যার মধ্যে রয়েছে কিন্তু কোনো বিশেষ উদ্দেশ্যমূলক কাজের জন্য ব্যবসায়িকতা, উপযুক্ততার ওয়্যারেন্টিগুলির মধ্যে সীমাবদ্ধ নয়৷ কোনও ক্ষেত্রেই লেখক বা কপিরাইট ধারক কোনও দাবি, ক্ষতি বা অন্যান্য দায়দায়িত্বের জন্য দায়বদ্ধ হবেন না, চুক্তির কোনও ক্রিয়াকলাপে, টর্ট বা অন্যথায়, পরবর্তী সময়ে, আমাদের থেকে উদ্ভূত অন্যান্য লেনদেন সফটওয়্যার।

<br>

<img height=6px width="100%" src="https://raw.githubusercontent.com/adamlui/js-utils/main/docs/images/aqua-separator.png">

<a href="https://github.com/adamlui/js-utils">**বাড়ি**</a> /
<a href="https://github.com/adamlui/js-utils/discussions">আলোচনা করা</a> /
<a href="#-minifyjs">উপরে ফিরে যাও ↑</a>
