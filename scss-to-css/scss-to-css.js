#!/usr/bin/env node

// Import LIBS
const fs = require('fs'),
      path = require('path'),
      sass = require('sass');

// Define MAIN functions

function findSCSS(searchDir, options = {}) {
    const defaultOptions = { recursive: true, verbose: false, dotFolders: false };
    options = { ...defaultOptions, ...options };        
    const dirFiles = fs.readdirSync(searchDir), scssFiles = [];
    dirFiles.forEach(file => {
        const filePath = path.resolve(searchDir, file);
        if (fs.statSync(filePath).isDirectory() && file != 'node_modules' &&
            (options.dotFolders || !file.startsWith('.')) && options.recursive) {
                if (options.verbose) console.info(`Searching for SCSS files in: ${filePath}...`);
                scssFiles.push( // recursively find SCSS in eligible dir
                    ...findSCSS(filePath, { ...options, isRecursing: true }));
        } else if (file.endsWith('.scss')) // SCSS file found
            scssFiles.push(filePath); // store it for compilation
    });
    if (options.isRecursing || scssFiles.length > 0) return scssFiles;
    else console.info('\nNo SCSS files found.');
}

function compile(inputPath, options = {}) {
    const defaultOptions = { minify: true, sourceMaps: true, recursive: true, verbose: true, dotFolders: false };
    options = { ...defaultOptions, ...options };
    if (typeof inputPath !== 'string')
        return console.error('ERROR:'
            + ' First argument must be a string representing a file/folder path.');
    const compileOptions = { style: options.minify ? 'compressed' : 'expanded', sourceMap: options.sourceMaps };
    if (fs.existsSync(inputPath)) { // compile based on path arg
        if (inputPath.endsWith('.scss')) { // file path passed
            if (options.verbose) console.info(`Compiling ${ inputPath }...`);
            try { // to compile file passed
                const compileResult = sass.compile(inputPath, compileOptions);
                return { code: compileResult.css, srcMap: compileResult.sourceMap, srcPath: inputPath };
            } catch (err) { console.error(`\nERROR: ${ err.message }\n`); return { error: err }; }
        } else { // dir path passed
            return findSCSS(inputPath, { recursive: options.recursive, dotFolders: options.dotFolders })
                ?.map(scssPath => { // compile found SCSS files
                    if (options.verbose) console.info(`Compiling ${ scssPath }...`); 
                    try { // to compile found file
                        const compileResult = sass.compile(scssPath, compileOptions);
                        return { code: compileResult.css, srcMap: compileResult.sourceMap, srcPath: scssPath };
                    } catch (err) { console.error(`\nERROR: ${ err.message }\n`); return { error: err }; }
                }).filter(data => !data.error ); // filter out failed compilations
        }
    } else return console.error('First argument must be an existing file or directory.'
        + `\n'${ inputPath }' does not exist.`);
}

// EXPORT functions if script was required
if (require.main !== module) module.exports = { compile, findSCSS };

else { // run as CLI tool

    // Init UI colors
    const nc = '\x1b[0m', // no color
          br = '\x1b[1;91m', // bright red
          by = '\x1b[1;33m', // bright yellow
          bg = '\x1b[1;92m'; // bright green

    // Load FLAG settings
    const config = { 
        dryRun: process.argv.some(arg => /^--?(?:n|dry-?run)$/.test(arg)),
        includeDotFolders: process.argv.some(arg =>
            /^--?(?:dd?|(?:include-?)?dot-?(?:folder|dir(?:ector(?:y|ie))?)s?)$/.test(arg)),
        noSourceMaps: process.argv.some(arg =>
            /^--?(?:S|(?:exclude|disable|no)-?so?u?rce?-?maps?)$/.test(arg)),
        noRecursion: process.argv.some(arg =>
            /^--?(?:R|(?:disable|no)-?recursion)$/.test(arg)),
        noMinify: process.argv.some(arg =>
            /^--?(?:M|(?:disable|no)-?minif(?:y|ication))$/.test(arg)),
        quietMode: process.argv.some(arg => /^--?q(?:uiet)?$/.test(arg))
    };

    // Show HELP screen if -h or --help passed
    if (process.argv.some(arg => /^--?h(?:elp)?$/.test(arg))) {
        printHelp(`\n${by}scss-to-css [inputPath] [outputPath] [options]${nc}`);
        printHelp('\nPath arguments:');
        printHelp(' [inputPath]                  '
            + 'Path to SCSS file or directory containing SCSS files to be compiled,'
            + ' relative to the current working directory.');
        printHelp(' [outputPath]                 '
            + 'Path to file or directory where CSS + sourcemap files will be stored,'
            + ' relative to original file location (if not provided, css/ is used).');
        printHelp('\nConfig options:');
        printHelp(' -n, --dry-run                Don\'t actually compile the file(s),'
            + ' just show if they will be processed.');
        printHelp(' -d, --include-dotfolders     Include dotfolders in file search.');
        printHelp(' -S, --no-source-maps         Prevent source maps from being generated.');
        printHelp(' -M, --no-minify              Disable minification of output CSS.');
        printHelp(' -R, --no-recursion           Disable recursive file searching.');
        printHelp(' -q, --quiet                  Suppress all logging except errors.');
        printHelp('\nInfo commands:');
        printHelp(' -h, --help                   Display this help screen.');
        printHelp(' -v, --version                Show version number.');

    // Show VERSION number if -v or --version passed
    } else if (process.argv.some(arg => /^--?ve?r?s?i?o?n?$/.test(arg))) {
        console.info('v' + require('./package.json').version);

    } else { // run MAIN routine

        // Init I/O args
        const [inputArg = '', outputArg = ''] = ( // default to empty strings for error-less handling
            process.argv.slice(2) // exclude executable and script paths
                .filter(arg => !arg.startsWith('-')) // exclude flags
                .map(arg => arg.replace(/^\/*/, '')) // clean leading slashes to avoid parsing system root
        );

        // Validate input arg (output arg can be anything)
        const inputPath = path.resolve(process.cwd(), inputArg);
        if (inputArg && !fs.existsSync(inputPath)) {
            console.error(`\n${br}Error: First argument must be an existing file or directory.`
                + `\n'${ inputPath }' does not exist.${nc}`
                + `\n\n${bg}Example valid command: \n>> scss-to-css . output.min.css${nc}`
                + `\n\n${by}For all command options: \n>> scss-to-css --help${nc}`);
            process.exit(1);
        }

        // Find all eligible JavaScript files or arg-passed file
        const scssFiles = inputArg.endsWith('.scss') ? [inputPath]
            : findSCSS(inputPath, { recursive: !config.noRecursion });

        if (config.dryRun && scssFiles?.length > 0) { // print files to be processed
            console.info(`\n${by}SCSS files to be compiled:${nc}`);
            scssFiles?.forEach(file => console.info(file));

        } else { // actually compile SCSS files
            printIfNotQuiet(''); // line break before first log

            // Build array of compilation data
            const failedPaths = [];
            const compileData = scssFiles?.map(scssPath => {
                const compileResult = compile(scssPath, {
                    minify: !config.noMinify, sourceMaps: !config.noSourceMaps, verbose: !config.quietMode });
                if (compileResult.error) failedPaths.push(scssPath);
                return compileResult;
            }).filter(data => !data.error ); // filter out failed compilations

            // Write array data to files
            compileData?.forEach(({ code, srcMap, srcPath }) => {                
                const outputDir = path.join(
                    path.dirname(srcPath), // path of file to be minified
                    /(?:src|s[ac]ss)$/.test(path.dirname(srcPath)) ? '../css' // + ../css/ if in *(src|sass|scss)/
                        : outputArg.endsWith('.css') ? path.dirname(outputArg) // or path from file output arg
                        : outputArg || 'css' // or path from folder output arg or css/ if no output arg passed
                );
                const outputFilename = (
                    outputArg.endsWith('.css') && inputArg.endsWith('.scss')
                        ? path.basename(outputArg).replace(/(\.min)?\.css$/, '')
                        : path.basename(srcPath, '.scss')
                ) + '.min.css';
                const outputPath = path.join(outputDir, outputFilename);
                if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });
                fs.writeFileSync(outputPath, code, 'utf8');
                if (!config.noSourceMaps) fs.writeFileSync(outputPath + '.map', JSON.stringify(srcMap), 'utf8');
            });

            // Print final summary
            if (compileData?.length > 0) {
                const cssCntSuffix = compileData.length > 1 ? 's' : '';
                printIfNotQuiet(`\n${bg}Compilation complete!${nc}`);
                printIfNotQuiet(`${ compileData.length } CSS file${ cssCntSuffix }`
                    + ( !config.noSourceMaps ? ` + ${ compileData.length } source map${ cssCntSuffix }` : '' )
                    + ' generated.');
            } else printIfNotQuiet(`${by}No SCSS files processed successfully.${nc}`);
            if (failedPaths.length > 0) {
                printIfNotQuiet(`\n${br}`
                    + `${ failedPaths.length } file${ failedPaths.length > 1 ? 's' : '' }`
                    + ` failed to compile:${nc}`);
                failedPaths.forEach(path => printIfNotQuiet(path));
            }
        }
    }

    // Define LOGGING functions

    function printHelp(msg) { // wrap msg + indent 2nd+ lines (for --help screen)
        const terminalWidth = process.stdout.columns || 80,
              indentation = 30, lines = [], words = msg.match(/\S+|\s+/g);

        // Split msg into lines of appropriate lengths
        let currentLine = '';
        words.forEach(word => {
            const lineLength = terminalWidth - ( lines.length === 0 ? 0 : indentation );
            if (currentLine.length + word.length > lineLength) { // cap/store it
                lines.push(lines.length === 0 ? currentLine : currentLine.trimStart());
                currentLine = '';
            }
            currentLine += word;
        });
        lines.push(lines.length === 0 ? currentLine : currentLine.trimStart());

        // Print formatted msg
        lines.forEach((line, index) => console.info(
            index === 0 ? line // print 1st line unindented
                : ' '.repeat(indentation) + line // print subsequent lines indented
        ));
    }

    function printIfNotQuiet(msg) { if (!config.quietMode) console.info(msg); }
}
