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
  return arr.map((item,index)=> item+index);
};

const popOut = (isChecked) => {
  if (isChecked) {
    console.log("Show popUp");
  } else if (!isChecked) {
    console.log("Show popUp and confirm");
  }
};
