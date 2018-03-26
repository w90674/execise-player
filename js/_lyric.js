/**
 * Created by Sukid on 2018/3/10.
 */
String.prototype.lrcToSecond=function() {
    let min=parseInt(this.substr(1,2));
    let sec=parseInt(this.substr(4,2));
    let mSec=parseInt(this.substr(7,2));
    return Math.round(6000*min+sec*100+mSec)/100;
};
function lrcTimeToAry(obj) {
    let ary=[];
    for(let key in obj){
        ary.push(key.lrcToSecond())
    }
    return ary
}
String.prototype.lyricToObj=function () {
    let regTime=/\[\d{2}\:\d{2}\.\d{2}\]/;//'[00:00:00]'
    let regLyric=/\]\:(.*)/;//']:(content)'
    let lyrics=this.split('\n'); //将歌词分行到每个数组
    let lyricJson={};
    for(let i=0;i<lyrics.length;i++){
        let curLines=lyrics[i];
        try{
            lyricJson[regTime.exec(curLines)[0]]=regLyric.exec(curLines)[1]
        }catch(e) {
            console.log(e);
        }
    }
    return lyricJson
};