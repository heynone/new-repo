function getDomain(url) {
  let indexes = [];
  for (let i = 0; i < url.length; i++) {
    if (url[i] === "." || url[i] === "/") {
      indexes.push(i);
    }
  }
  if(!url.includes("/")) return url.slice(indexes[0]+1,indexes[1]);
 else{ return url.includes("www") ? url.slice(indexes[2]+1, indexes[3]) : url.slice(indexes[1]+1, indexes[2]);}
}
console.log(getDomain("https://youtube.com"));
