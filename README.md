眼过千遍不如手过一遍

总结：
把对象push到数组的时候，不需要像拼接字符串那样，直接写就好，例如
var arr = [];
for(var i=0, len=square.length; i<len; i++){
    arr.push({lat:parseFloat(square.eq(i).attr('data-lat')), lng: parseFloat(square.eq(i).attr('data-lng'))});
}

从markup里获取到的经纬度属性，经过循环push到一个数组里，push进去的并不是真正的数组，而是字符串，所以需要通过 parseFloat() 把字符串转换成需要的真实的对象。

很多代码看着好像都理解，却不知道这样做的结果是什么，所以代码不是用来看的，只有在每次的实践中一行行，一段段的敲下来测试才能够真正的理解代码。
我写了十行代码实现的功能，大牛却用了一小行代码就实现，我花了两周研究一个地图未果，大神却用了几十分钟搞定，这就是差距。come on！！！

每次请教大神的时候总会有很多新的发现，感恩大神无所不知的指导与耐心。希望自己赶快完成之前拉下的功课。


command+k+u 在sublime里把小写字母瞬间变成大写字母



