"use strict";
// TODO: vérifier le code de laurence
let array = [1, 65, 78, 23, 12, 51, 2, 34, 56];
console.log(array);

function triFusion(tab) {
  if (tab.length < 2) {
    return tab;
  }
  let mid = Math.floor(tab.length / 2),
    right = tab.slice(mid, tab.length),
    left = tab.slice(0, mid),
    p = fusion(triFusion(left), triFusion(right));
  console.log(p);
  p.unshift(0, tab.length);
  tab.splice.apply(tab, p);
  /*   let mid = Math.ceil(tab.length) / 2;
  let right = triFusion(tab.slice(mid, tab.length));
  let left = triFusion(tab.slice(0, mid));
  tab = fusion(left, right); */
  return tab;
}
function fusion(left, right) {
  let tab = [],
    l = 0,
    r = 0;
  while (l < left.length && r < right.length) {
    if (left[l] < right[r]) {
      tab.push(left[l++]);
    } else {
      tab.push(right[r++]);
    }
  }
  return tab.concat(left.slice(l)).concat(right.slice(r));
}
triFusion(array);
console.log(array);