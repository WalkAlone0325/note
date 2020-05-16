// 冒泡排序
// 待排序的数组作为参数以及一个比较函数
function bubbleSort(array) {
  const { length } = array
  // 从数组的第一位迭代至最后一位，它控制了在数组中经过多少轮排序（应该是数组中每项都经过一轮，轮数和数组长度一致）
  for (let i = 0; i < length; i++) {
    // 从第一位迭代至倒数第二位，内循环实际上进行当前项和下一项的比较
    for (let j = 0; j < length - 1 - i; j++) {
      // 当前项和下一项的比较
      if (array[j] > array[j + 1]) {
        // 当前项比下一项大，则交换它们
        swap(array, j, j + 1)
      }
    }
  }
  return array
}

// 默认的比较函数是我们之前使用过的defaultCompare函数（return a < b ? Compare.LESS_THAN :Compare.BIGGER_THAN

function swap(array, a, b) {
  // 经典方式
  // const temp = array[a]
  // array[a] = array[b]
  // array[b] = temp
  // ES6
  [array[a], array[b]] = [array[b], array[a]]
}

function createNonSortedArray(size) {
  const array = []
  for (let i = size; i > 0; i--) {
    array.push(i)
  }
  return array
}
// let array = createNonSortedArray(5)
// console.log(array.join());
// array = bubbleSort(array)
// console.log(array.join());


// 选择排序
function selectSort(arr) {
  let indexMin
  for (let i = 0; i < arr.length - 1; i++) {
    indexMin = i
    for (let j = 1; j < arr.length; j++) {
      if (arr[j] < arr[indexMin]) {
        indexMin = j
      }
    }
    if (i !== indexMin) {
      swap(arr, i, indexMin)
    }
  }
  return arr
}
const res = selectSort([2, 4, 5, 1, 3, 6])
console.log(res);