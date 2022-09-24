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

const popOut = (isChecked) => {
  if (isChecked) {
    console.log("Show popUp");
  } else if (!isChecked) {
    console.log("Show popUp and confirm");
  }
};
