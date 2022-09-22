class PaginationHelper {
  constructor(arr, index) {
    this.arr = arr;
    this.index = index;
  }
  pageCount() {
    return this.arr.length - this.index;
  }
  itemCount() {
    return this.arr.length;
  }
}

const helper = new PaginationHelper(["a", "b", "c", "d", "e", "f"], 4);
console.log(helper.pageCount());
console.log(helper.itemCount());
