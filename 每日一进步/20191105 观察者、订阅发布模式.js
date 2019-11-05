/** 观察者模式实现 **/
class PubSub {
  constructor() {
    this.handles = {}
  }
  /**
   * 
   * @param {String} type 
   * @param {Function} handle 
   */
  on(type, handle) {
    if(!this.handles[type]) {
      this.handles[type] = []
    }
    this.handles[type].push(handle)
  }

  emit() {
    let type = Array.prototype.shift.call(arguments)
    if(!this.handles[type]) {
      return false
    }
    this.handles[type].map(handle => {
      handle.apply(this, arguments)
    })
  }

  off(type, handle) {
    if(this.handles[type]) {
      this.handles[type] = this.handles[type].filter(h => h !== handle)
    }
  }
}

const p1 = new PubSub()
let p1Fun = () => {
  console.log(`p1 :`, name)
}
p1.on('p1', p1Fun)
p1.on('p1', function(name) {
  console.log(`p1a :`, name)
})

p1.off('p1', p1Fun)

p1.emit('p1', '你好')