// KnowledgeFragment.js  记录js知识片段


// 设置震动
navigator.vibrate // 机体震动

// 使用震动前，我们需要判断浏览器是否支持它，若浏览器不支持Vibration API，则会静默的失败：

if("vibrate" in navigator){
    …
}
// 以下两种方式都是设置手机震动1s（就如一次性调用）:

navigator.vibrate(1000);
// 或
navigator.vibrate([1000]);
// 你也可以间歇性调用震动功能，比如:

navigator.vibrate([1000, 2000, 5000]);
// 就是手机震动1s，接着暂停2s，然后再震动5s。你也可以根据需要加入更多的时间段。

// 清除震动
// 如果手机正处于震动中，你可以将vibrate的参数设置为0，它的作用是立即清除震动功能：

navigator.vibrate(0);
// 或许你还知道有另外一种清除震动的方法：

navigator.vibrate([]);
// 但经过我的测试，好像某些浏览器（像UC）不能通过此种方式清除震动。因此为了更好的兼容性，我还是推荐你全部使用 navigator.vibrate(0)
