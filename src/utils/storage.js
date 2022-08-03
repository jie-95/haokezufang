// 本地储存封装
// 用class类  特性：封装 继承 多态
class Storage {
  get(key) {
    // getItem(key:string):string
    // JSON.parse()只能读取JSON格式的字符串
    const value = localStorage.getItem(key)
    // 如果是JSON格式的pase一下，如果不是直接返回
    try {
      return JSON.parse(value)
    } catch {
      return value
    }
  }

  set(key, value) {
    if (typeof value === 'object' && value !== null) {
      value = JSON.stringify(value)
    }
    localStorage.setItem(key, value)
  }

  remove(key) {
    localStorage.removeItem(key)
  }
}

export default new Storage()
