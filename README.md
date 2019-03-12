# Resume Website Template

All the structure is from [Steve](https://github.com/fuchenxu2008/Resume-Website.git) A succinct responsive personal website template built with React.

## Demo
![](https://ws1.sinaimg.cn/large/006tKfTcgy1g10esz8im3j31gk0u0wj1.jpg)

## Prerequired
1. Installation of [yarn](https://yarnpkg.com/lang/en/docs/install/)  `brew install yarn`
2. Installation of [serve](https://www.npmjs.com/package/serve) `yarn global add serve` 

## Usage

1. Run command `git clone git@github.com:fuchenxu2008/Resume-Website.git` in Terminal and `yarn install` in working directory.
2. Replace your **Resume PDF file** as `src/data/CV.pdf`
3. Replace your **portrait image** as `src/data/avatar.jpg`
4. Edit `src/data/info.json` with your personal info.
5. Run script `yarn serve` or `npm run serve`

## Notes

* If you wish to leave a section blank in `src/data/info.json`, just leave the outer array `[]` empty, do not add `{}`