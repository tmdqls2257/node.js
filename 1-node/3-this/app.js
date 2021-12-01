function hello() {
  console.log(this)
  console.log(this === global)
}

hello()

class A {
  constructor(num) {
    this.num = num
  }
  memberFunction() {
    console.log('-----class-----')
    // 클래스에서 this란 자기자신을 의미
    console.log(this)
    console.log(this === global)
  }
}

const a = new A(1)
a.memberFunction()
