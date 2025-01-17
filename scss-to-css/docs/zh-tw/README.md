<div align="right">
    <h6>
        <picture>
            <source type="image/svg+xml" media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/adamlui/js-utils/main/docs/images/earth-icon/white/icon32.svg">
            <img height=14 src="https://raw.githubusercontent.com/adamlui/js-utils/main/docs/images/earth-icon/black/icon32.svg">
        </picture>
        &nbsp;繁體中文 |
        <a href="../..#readme">English</a> |
        <a href="../zh-cn#readme">简体中文</a> |
        <a href="../hi#readme">हिंदी</a> |
        <a href="../bn#readme">বাংলা</a> |
        <a href="../mr#readme">मराठी</a>
    </h6>
</div>

# { } scss-to-css

### 將所有 SCSS 檔案遞歸編譯為縮小的 CSS。

<a href="https://www.npmjs.com/package/@adamlui/scss-to-css"><img height=31 src="https://img.shields.io/npm/dt/%40adamlui%2Fscss-to-css?label=%E4%B8%8B%E8%BC%89&logo=npm&logoColor=white&labelColor=464646&style=for-the-badge"></a>
<a href="#%EF%B8%8F-mit-%E8%AE%B8%E5%8F%AF%E8%AF%81"><img height=31 src="https://img.shields.io/badge/許可證-MIT-red.svg?logo=internetarchive&logoColor=white&labelColor=464646&style=for-the-badge"></a>
<a href="https://www.npmjs.com/package/@adamlui/scss-to-css?activeTab=versions"><img height=31 src="https://img.shields.io/badge/最新版本-1.6.0-fc7811.svg?logo=icinga&logoColor=white&labelColor=464646&style=for-the-badge"></a>
<a href="https://www.npmjs.com/package/@adamlui/scss-to-css?activeTab=code"><img height=31 src="https://img.shields.io/npm/unpacked-size/%40adamlui%2Fscss-to-css?label=%E6%8B%86%E5%B0%81%E5%B0%BA%E5%AF%B8&style=for-the-badge&logo=ebox&logoColor=white&color=blue&labelColor=464646"></a>
<a href="https://sonarcloud.io/component_measures?metric=new_vulnerabilities&id=adamlui_js-utils:scss-to-css/scss-to-css.js"><img height=31 src="https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fsonarcloud.io%2Fapi%2Fmeasures%2Fcomponent%3Fcomponent%3Dadamlui_js-utils%3Ascss-to-css%2Fscss-to-css.js%26metricKeys%3Dvulnerabilities&query=%24.component.measures.0.value&style=for-the-badge&logo=sonarcloud&logoColor=white&labelColor=464646&label=%E6%BC%8F%E6%B4%9E&color=gold"></a>

<img height=8px width="100%" src="https://github.com/adamlui/js-utils/blob/main/docs/images/aqua-separator.png">

## ⚡ 如何安裝

作為**全域實用程式**：

```
npm install -g @adamlui/scss-to-css
```

作為**開發人員依賴**（例如，對於建置腳本），從專案根目錄：

```
npm install -D @adamlui/scss-to-css
```

作為**運行時依賴**（例如，用於動態編譯），從專案根目錄：

```
npm install @adamlui/scss-to-css
```

## 💻 命令列使用

基本的**全域命令**是：

```
scss-to-css
```

範例輸出：

<img src="https://github.com/adamlui/js-utils/blob/main/scss-to-css/media/images/sample-output.png">

**💡 筆記：** 預設也會產生來源映射，除非傳遞 `-S` 或 `--no-source-maps`。

#

指定**輸入/輸出**路徑：
   
```
scss-to-css [input_path] [output_path]
```

- `[input_path]`: SCSS 檔案或包含要編譯的 SCSS 檔案的目錄的路徑，相對於目前工作目錄。
- `[output_path]`: 將儲存 CSS + 來源對應檔案的檔案或目錄的路徑，相對於原始檔案位置（如果未提供，則使用 `css/`）。

**💡 注意：** 如果傳遞資料夾，檔案將被遞歸處理，除非傳遞 `-R` 或 `--no-recursion`。

#

若要用作 **套件腳本**，請在專案的 `package.json` 中：

```json
  "scripts": {
    "build:css": "<scss-to-css-cmd>"
  },
```

將 `<scss-to-css-cmd>` 替換為 `scss-to-css` + 可選參數。 然後，可以使用 `npm run build:css` 來執行該指令。
<br><br>

### 命令範例

編譯 **目前目錄** 中的所有 SCSS 檔案（輸出到 `css/`）：

```
scss-to-css
```

編譯 **特定目錄** 中的所有 SCSS 檔案（輸出到 `path/to/your/directory/css/`）：

```
scss-to-css path/to/your/directory
```

編譯一個**特定檔案**（輸出到 `path/to/your/css/file.min.css`）：

```
scss-to-css path/to/your/file.scss
```

指定 **輸入和輸出** 目錄（輸出到 `output_folder/`）：

```
scss-to-css input_folder output_folder
```

**💡 注意：** 除非傳遞 `-M` 或 `--no-minify` ，否則輸出 CSS 會被縮小。
<br><br>

### 命令列選項

```
配置選項：
 -n, --dry-run               實際上並不會縮小文件，只是顯示它們是否會被處理。
 -d, --include-dotfolders    在檔案搜尋中包含點資料夾。
 -S, --no-source-maps        防止產生來源映射。
 -M, --no-minify             禁用輸出 CSS 的縮小。
 -R, --no-recursion          停用遞歸檔案搜尋。
 -q, --quiet                 禁止錯誤以外的所有日誌記錄。

訊息命令：
 -h, --help                  顯示幫助畫面。
 -v, --version               顯示版本號。
```

## 🔌 API 參考

您也可以將 **scss-to-css** 匯入您的應用程式以使用其 API 方法，無論是作為 ECMAScript 模組還是 CommonJS 模組。

#### ESM:

```js
import * as scssToCSS from '@adamlui/scss-to-css';
```

#### CJS:

```js
const scssToCSS = require('@adamlui/scss-to-css');
```

### compile(inputPath, options)

此函數將在 `inputPath` 中找到的 SCSS 編譯為 CSS 資料。

如果傳遞 **檔案路徑**，則檔案的程式碼將編譯為 CSS，然後傳回一個包含 `srcPath` + `code` + `error` 的物件：

```js
const compileResult = scssToCSS.compile('assets/style.scss');
console.log(compileResult.error); // 執行階段錯誤，如果沒有錯誤則為 `undefined`
console.log(compileResult.code);  // 編譯後的 assets/style.scss CSS 輸出
```

如果传递 **目录路径**，则搜索 SCSS 文件（默认情况下递归），加载每个文件的代码并编译，然后返回包含 `srcPath` + `code` + `error` 的对象数组：

```js
const results = scssToCSS.compile('.');
results.forEach(result =>
    console.log(result.srcPath) // 工作目錄 + 所有巢狀目錄中 SCSS 檔案的路徑
);
console.log(results[1].code);   // 如果找到，則編譯第二個 SCSS 檔案的 CSS 輸出，如果找不到，則為 `undefined`
```

選項是布林值，作為物件屬性傳遞。 例如：

```js
scssToCSS.compile(inputDir, { minify: false });
// 傳回 `.code` 包含未縮小 CSS 的資料對象
```

可能的參數（及其預設設定）有：

```
 recursive (true)     如果傳遞目錄路徑，則遞歸搜尋巢狀檔案。
 verbose (true)       在控制台/終端機中顯示日誌記錄。
 dotFolders (false)   在檔案搜尋中包含點資料夾。
 minify (true)        縮小輸出 CSS。
 sourceMaps (true)    產生 CSS 來源映射。
```

### findSCSS(searchDir, options)

此函數搜尋傳遞的 `searchDir` 字串中的所有 SCSS 檔案（對於發現 [`compile()`](#compileinputpath-options) 將處理哪些檔案很有用）並傳回包含其檔案路徑的陣列。

選項是布林值，作為物件屬性傳遞。 例如：

```js
scssToCSS.findSCSS(searchDir, { recursive: false });
// 傳回包含恰好位於 `searchDir` 中的 SCSS 檔案的檔案路徑的陣列
```

可能的參數（及其預設設定）有：

```
 recursive (true)     如果傳遞目錄路徑，則遞歸搜尋巢狀檔案。
 verbose (false)      在控制台/終端機中顯示日誌記錄。
 dotFolders (false)   在檔案搜尋中包含點資料夾。
```

<br>

## 💖 支援

如果這對您有幫助，請考慮[給予 GitHub ⭐](https://github.com/adamlui/js-utils)！
<br><br>

## 🏛️ MIT 许可证

**版權所有 © 2023–2024 [刘展鹏 (Adam Lui)](https://github.com/adamlui)**

特此免費授予任何取得副本的人許可本軟體和相關文件文件（『軟體』），處理在軟體中不受限制，包括但不限於權利使用、複製、修改、合併、發布、分發、再授權和/或出售該軟體的副本，並允許該軟體是提供這樣做，但須滿足以下條件：

上述版權聲明和本許可聲明應包含在所有軟體的副本或重要部分。

本軟體『依現況』提供，不提供任何形式的明示或保證暗示的，包括但不限於適銷性保證，適用於特定目的和非侵權。 在任何情況下都不得作者或版權持有人對任何索賠、損害或其他責任，無論是在合約、侵權或其他方面的行為中，由以下原因引起，出於或與軟體或使用或其他交易有關軟體。

<br>

<img height=6px width="100%" src="https://raw.githubusercontent.com/adamlui/js-utils/main/docs/images/aqua-separator.png">

<a href="https://github.com/adamlui/js-utils">**家**</a> /
<a href="https://github.com/adamlui/js-utils/discussions">讨论</a> /
<a href="#--scss-to-css">回到顶部 ↑</a>
