<div align="right">
    <h6>
        <picture>
            <source type="image/svg+xml" media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/adamlui/js-utils/main/docs/images/earth-icon/white/icon32.svg">
            <img height=14 src="https://raw.githubusercontent.com/adamlui/js-utils/main/docs/images/earth-icon/black/icon32.svg">
        </picture>
        &nbsp;简体中文 |
        <a href="../..#readme">English</a> |
        <a href="../zh-tw#readme">繁體中文</a> |
        <a href="../hi#readme">हिंदी</a> |
        <a href="../bn#readme">বাংলা</a> |
        <a href="../mr#readme">मराठी</a>
    </h6>
</div>

# { } scss-to-css

### 将所有 SCSS 文件递归编译为缩小的 CSS。

<a href="https://www.npmjs.com/package/@adamlui/scss-to-css"><img height=31 src="https://img.shields.io/npm/dt/%40adamlui%2Fscss-to-css?label=%E4%B8%8B%E8%BD%BD&logo=npm&logoColor=white&labelColor=464646&style=for-the-badge"></a>
<a href="#%EF%B8%8F-mit-%E8%AE%B8%E5%8F%AF%E8%AF%81"><img height=31 src="https://img.shields.io/badge/许可证-MIT-red.svg?logo=internetarchive&logoColor=white&labelColor=464646&style=for-the-badge"></a>
<a href="https://www.npmjs.com/package/@adamlui/scss-to-css?activeTab=versions"><img height=31 src="https://img.shields.io/badge/最新版本-1.6.0-fc7811.svg?logo=icinga&logoColor=white&labelColor=464646&style=for-the-badge"></a>
<a href="https://www.npmjs.com/package/@adamlui/scss-to-css?activeTab=code"><img height=31 src="https://img.shields.io/npm/unpacked-size/%40adamlui%2Fscss-to-css?label=%E6%8B%86%E5%B0%81%E5%B0%BA%E5%AF%B8&style=for-the-badge&logo=ebox&logoColor=white&color=blue&labelColor=464646"></a>
<a href="https://sonarcloud.io/component_measures?metric=new_vulnerabilities&id=adamlui_js-utils:scss-to-css/scss-to-css.js"><img height=31 src="https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fsonarcloud.io%2Fapi%2Fmeasures%2Fcomponent%3Fcomponent%3Dadamlui_js-utils%3Ascss-to-css%2Fscss-to-css.js%26metricKeys%3Dvulnerabilities&query=%24.component.measures.0.value&style=for-the-badge&logo=sonarcloud&logoColor=white&labelColor=464646&label=%E6%BC%8F%E6%B4%9E&color=gold"></a>

<img height=8px width="100%" src="https://github.com/adamlui/js-utils/blob/main/docs/images/aqua-separator.png">

## ⚡ 如何安装

作为**全局实用程序**：

```
npm install -g @adamlui/scss-to-css
```

作为**开发人员依赖**（例如，对于构建脚本），从项目根目录：

```
npm install -D @adamlui/scss-to-css
```

作为**运行时依赖**（例如，用于动态编译），从项目根目录：

```
npm install @adamlui/scss-to-css
```

## 💻 命令行使用

基本的**全局命令**是：

```
scss-to-css
```

示例输出：

<img src="https://github.com/adamlui/js-utils/blob/main/scss-to-css/media/images/sample-output.png">

**💡 笔记：** 默认情况下也会生成源映射，除非传递 `-S` 或 `--no-source-maps`。

#

指定**输入/输出**路径：
   
```
scss-to-css [input_path] [output_path]
```

- `[input_path]`: SCSS 文件或包含要编译的 SCSS 文件的目录的路径，相对于当前工作目录。
- `[output_path]`: 将存储 CSS + 源映射文件的文件或目录的路径，相对于原始文件位置（如果未提供，则使用 `css/`）。

**💡 注意：** 如果传递文件夹，文件将被递归处理，除非传递 `-R` 或 `--no-recursion`。

#

要用作 **包脚本**，请在项目的 `package.json` 中：

```json
  "scripts": {
    "build:css": "<scss-to-css-cmd>"
  },
```

将 `<scss-to-css-cmd>` 替换为 `scss-to-css` + 可选参数。 然后，可以使用 `npm run build:css` 来运行该命令。
<br><br>

### 命令示例

编译 **当前目录** 中的所有 SCSS 文件（输出到 `css/`）：

```
scss-to-css
```

编译 **特定目录** 中的所有 SCSS 文件（输出到 `path/to/your/directory/css/`）：

```
scss-to-css path/to/your/directory
```

编译一个**特定文件**（输出到 `path/to/your/css/file.min.css`）：

```
scss-to-css path/to/your/file.scss
```

指定 **输入和输出** 目录（输出到 `output_folder/`）：

```
scss-to-css input_folder output_folder
```

**💡 注意：** 除非传递 `-M` 或 `--no-minify` ，否则输出 CSS 会被缩小。
<br><br>

### 命令行选项

```
配置选项：
 -n, --dry-run               实际上并不缩小文件，只是显示它们是否会被处理。
 -d, --include-dotfolders    在文件搜索中包括点文件夹。
 -S, --no-source-maps        防止生成源映射。
 -M, --no-minify             禁用输出 CSS 的缩小。
 -R, --no-recursion          禁用递归文件搜索。
 -q, --quiet                 禁止除错误之外的所有日志记录。

信息命令：
 -h, --help                  显示帮助屏幕。
 -v, --version               显示版本号。
```

## 🔌 API 参考

您还可以将 **scss-to-css** 导入您的应用程序以使用其 API 方法，无论是作为 ECMAScript 模块还是 CommonJS 模块。

#### ESM:

```js
import * as scssToCSS from '@adamlui/scss-to-css';
```

#### CJS:

```js
const scssToCSS = require('@adamlui/scss-to-css');
```

### compile(inputPath, options)

此函数将在 `inputPath` 中找到的 SCSS 编译为 CSS 数据。

如果传递 **文件路径**，则文件的代码将编译为 CSS，然后返回一个包含 `srcPath` + `code` + `error` 的对象：

```js
const compileResult = scssToCSS.compile('assets/style.scss');
console.log(compileResult.error); // 运行时错误，如果没有错误则为 `undefined`
console.log(compileResult.code);  // 编译后的 assets/style.scss CSS 输出
```

如果传递 **目录路径**，则搜索 SCSS 文件（默认情况下递归），加载每个文件的代码并编译，然后返回包含 `srcPath` + `code` + `error` 的对象数组：

```js
const results = scssToCSS.compile('.');
results.forEach(result =>
    console.log(result.srcPath) // 工作目录 + 所有嵌套目录中 SCSS 文件的路径
);
console.log(results[1].code); // 如果找到，则编译第二个 SCSS 文件的 CSS 输出，如果未找到，则为 `undefined`
```

选项是布尔值，作为对象属性传递。 例如：

```js
scssToCSS.compile(inputDir, { minify: false });
// 返回 `.code` 包含未缩小 CSS 的数据对象
```

可能的参数（及其默认设置）有：

```
 recursive (true)     如果传递目录路径，则递归搜索嵌套文件。
 verbose (true)       在控制台/终端中显示日志记录。
 dotFolders (false)   在文件搜索中包括点文件夹。
 minify (true)        缩小输出 CSS。
 sourceMaps (true)    生成 CSS 源映射。
```

### findSCSS(searchDir, options)

此函数搜索传递的 `searchDir` 字符串中的所有 SCSS 文件（对于发现 [`compile()`](#compileinputpath-options) 将处理哪些文件很有用）并返回包含其文件路径的数组。

选项是布尔值，作为对象属性传递。 例如：

```js
scssToCSS.findSCSS(searchDir, { recursive: false });
// 返回包含恰好位于 `searchDir` 中的 SCSS 文件的文件路径的数组
```

可能的参数（及其默认设置）有：

```
 recursive (true)     如果传递目录路径，则递归搜索嵌套文件。
 verbose (false)      在控制台/终端中显示日志记录。
 dotFolders (false)   在文件搜索中包括点文件夹。
```

<br>

## 💖 支持

如果这对您有帮助，请考虑[给予 GitHub ⭐](https://github.com/adamlui/js-utils)！
<br><br>

## 🏛️ MIT 许可证

**版权所有 © 2023–2024 [刘展鹏 (Adam Lui)](https://github.com/adamlui)**

特此免费向任何获得副本的人授予许可本软件和相关文档文件（『软件』），处理在软件中不受限制，包括但不限于权利使用、复制、修改、合并、发布、分发、再许可和/或出售该软件的副本，并允许该软件是提供这样做，但须满足以下条件：

上述版权声明和本许可声明应包含在所有软件的副本或重要部分。

本软件『按原样』提供，不提供任何形式的明示或保证暗示的，包括但不限于适销性保证，适用于特定目的和非侵权。 在任何情况下都不得作者或版权持有人对任何索赔、损害或其他责任，无论是在合同、侵权或其他方面的行为中，由以下原因引起，出于或与软件或使用或其他交易有关软件。

<br>

<img height=6px width="100%" src="https://raw.githubusercontent.com/adamlui/js-utils/main/docs/images/aqua-separator.png">

<a href="https://github.com/adamlui/js-utils">**家**</a> /
<a href="https://github.com/adamlui/js-utils/discussions">讨论</a> /
<a href="#--scss-to-css">回到顶部 ↑</a>
