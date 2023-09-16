const all = document.querySelector('.range-block .all')
const tl = document.querySelector('.range-block .tl')
const tr = document.querySelector('.range-block .tr')
const br = document.querySelector('.range-block .br')
const bl = document.querySelector('.range-block .bl')
const bw = document.querySelector('.range-block .bw')
const bc = document.querySelector('.range-block .bc')
const bgc = document.querySelector('.range-block .bgc')
const block = document.querySelector('.block')
const textarea = document.querySelector('textarea')

const sd = document.querySelector('.range-block .sd')
const dtd = document.querySelector('.range-block.dtd')
const dsd = document.querySelector('.range-block.dsd')
const dbd = document.querySelector('.range-block.dbd')



all.addEventListener('input', function () {
    block.style.borderRadius = `${all.value}px`
})


tl.addEventListener('input', function () {
    block.style.borderTopLeftRadius = `${tl.value}px`
})


tr.addEventListener('input', function () {
    block.style.borderTopRightRadius = `${tr.value}px`
})


br.addEventListener('input', function () {
    block.style.borderBottomRightRadius = `${br.value}px`
})


bl.addEventListener('input', function () {
    block.style.borderBottomLeftRadius = `${bl.value}px`
})


bw.addEventListener('input', function () {
    block.style.borderWidth = `${bw.value}px`
})


bc.addEventListener('input', function () {
    block.style.borderColor = `${bc.value}`
})


bgc.addEventListener('input', function () {
    block.style.backgroundColor = `${bgc.value}`
})