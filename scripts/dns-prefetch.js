const fs = require('fs')
const { parse } = require('node-html-parser')
const { glob } = require('glob')
const urlRegex = require('url-regex')

//  获取外链正则
const urlPatt = /(https?:\/\/[^/]*)/i

// 定义外链列表，使用 set 可以去重
const urls = new Set()

// 遍历 dist 目录中的所有 html，js，css 文件
async function searchDomain() {
  const files = await glob('dist/**/*.{html,css,js}')
  for (const file of files) {
    const source = fs.readFileSync(file, 'utf-8')
    const matches = source.match(urlRegex({ strict: true }))
    if (matches) {
      matches.forEach((url) => {
        const match = url.match(urlPatt)
        if (match?.[1]) {
          urls.add(match[1])
        }
      })
    }
  }
}

//
async function insertLinks() {
  const files = await glob('dist/**/*.html')
  const links = [...urls]
    .map((url) => `<link rel="dns-prefetch" href="${url}" />`)
    .join('\n')
  for (const file of files) {
    const html = fs.readFileSync(file, 'utf-8')
    const root = parse(html)
    const head = root.querySelector('head')
    head.insertAdjacentHTML('afterbegin', links)
    fs.writeFileSync(file, root.toString())
  }
}

//
async function main() {
  await searchDomain()
  await insertLinks()
}

main()
