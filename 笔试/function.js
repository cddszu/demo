function con() {
  console.log(this.value)
}

let b = {
  value: 1
}

b.con = con

con()
b.con()