const date = new Date();

const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate(); //

const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

const result = `${day} ${months[month]} ${year}`;
console.log(result);


const moment = require('moment');
moment.locale('id');
let today = moment().format('DD-MMMM-YYYY');
console.log(today);
