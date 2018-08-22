var moment=require('moment');

console.log(moment().format());

var now=moment();

console.log('current Timestamp : ' +now.unix());

var timestamp= 1534918429;
var currMoment=moment.unix(timestamp);

console.log('current format : '+currMoment.format('YYYY MMMM DD  DDDo  @ HH:mm:ss A'));
