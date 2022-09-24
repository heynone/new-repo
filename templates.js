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

PaginationHelper.prototype.filterText = function filterText(arr) {
  return arr.filter((item) => item > 5);
};
