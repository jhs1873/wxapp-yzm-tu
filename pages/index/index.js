//index.js
//获取应用实例
import Mcaptcha from "../../utils/mcaptcha.js";
function getRanNum() {
  var result = [];
  for (var i = 0; i < 4; i++) {
    var ranNum = Math.ceil(Math.random() * 25); //生成一个0到25的数字
    //大写字母'A'的ASCII是65,A~Z的ASCII码就是65 + 0~25;然后调用String.fromCharCode()传入ASCII值返回相应的字符并push进数组里
    result.push(String.fromCharCode(65 + ranNum));
  }
  return result.join("");
}
Page({
  data: {
    cvs: {
      width: 80,
      height: 35
    },
  },
  onLoad: function () {
    const temp = getRanNum();
    this.setData({
      tuyzm: temp
    });
    this.mcaptcha = new Mcaptcha({
      el: "canvas",
      width: this.data.cvs.width,
      height: this.data.cvs.height,
      code: temp
    })
  },
  //刷新图形验证码
  onTap() {
    const temp = getRanNum();
    this.setData({
      tuyzm: temp
    });
    this.mcaptcha.refresh(temp);
  },
})
