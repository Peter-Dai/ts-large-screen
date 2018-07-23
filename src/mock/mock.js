import Mock from 'mockjs';

Mock.setup({
  timeout: 1000,
});


const tempData = [{
  name: '浙江',
  amount: '12313asdfdsfsdf21',
  orders: 'sadfdsfsdfsafas',
},
{
  name: '安徽',
  amount: '1231321',
  orders: '12321321',
},
{
  name: '北京',
  amount: '1231321',
  orders: '12321321',
},
{
  name: '天津',
  amount: '1231321',
  orders: '12321321',
},
{
  name: '上海',
  amount: '1231321',
  orders: '12321321',
},
{
  name: '重庆',
  amount: '1231321',
  orders: '12321321',
},
{
  name: '河北',
  amount: '1231321',
  orders: '12321321',
},
{
  name: '河南',
  amount: '1231321',
  orders: '12321321',
},
{
  name: '云南',
  amount: '1231321',
  orders: '12321321',
},
{
  name: '辽宁',
  amount: '1231321',
  orders: '12321321',
},
{
  name: '黑龙江',
  amount: '1231321',
  orders: '12321321',
},
{
  name: '湖南',
  amount: '1231321',
  orders: '12321321',
},
{
  name: '山东',
  amount: '1231321',
  orders: '12321321',
},
{
  name: '新疆',
  amount: '1231321',
  orders: '12321321',
},
{
  name: '江苏',
  amount: '1231321',
  orders: '12321321',
},
{
  name: '江西',
  amount: '1231321',
  orders: '12321321',
},
{
  name: '湖北',
  amount: '1231321',
  orders: '12321321',
},
{
  name: '广西',
  amount: '1231321',
  orders: '12321321',
},
{
  name: '甘肃',
  amount: '1231321',
  orders: '12321321',
},
{
  name: '山西',
  amount: '1231321',
  orders: '12321321',
},
{
  name: '内蒙古',
  amount: '1231321',
  orders: '12321321',
},
{
  name: '陕西',
  amount: '1231321',
  orders: '12321321',
},
{
  name: '吉林',
  amount: '1231321',
  orders: '12321321',
},
{
  name: '福建',
  amount: '1231321',
  orders: '12321321',
},
{
  name: '贵州',
  amount: '1231321',
  orders: '12321321',
},
{
  name: '广东',
  amount: '1231321',
  orders: '12321321',
},
{
  name: '青海',
  amount: '1231321',
  orders: '12321321',
},
{
  name: '西藏',
  amount: '1231321',
  orders: '12321321',
},
{
  name: '四川',
  amount: '1231321',
  orders: '12321321',
},
{
  name: '宁夏',
  amount: '1231321',
  orders: '12321321',
},
{
  name: '海南',
  amount: '1231321',
  orders: '12321321',
},
{
  name: '台湾',
  amount: '1231321',
  orders: '12321321',
},
{
  name: '香港',
  amount: '1231321',
  orders: '12321321',
},
{
  name: '澳门',
  amount: 'reoiureoiueiutr',
  orders: '12321321',
}];

const tempMonthlyAmounts = [
  {
    date: '1',
    amount: '23',
  },
  {
    date: '1',
    amount: '23',

  },
  {
    date: '1',
    amount: '23',
  },
  {
    date: '1',
    amount: '23',
  },
  {
    date: '1',
    amount: '23',
  },
  {
    date: '1',
    amount: '23',
  },
  {
    date: '1',
    amount: '23',
  },
  {
    date: '1',
    amount: '23',
  },
  {
    date: '1',
    amount: '23',
  },
  {
    date: '1',
    amount: '23',
  },
  {
    date: '1',
    amount: '23',
  },
  {
    date: '1',
    amount: '23',
  },
  {
    date: '1',
    amount: '300',
  },
  {
    date: '1',
    amount: '23',
  },
  {
    date: '1',
    amount: '23',
  },
  {
    date: '1',
    amount: '23',
  },
  {
    date: '1',
    amount: '23',
  },
  {
    date: '1',
    amount: '123',
  },
  {
    date: '1',
    amount: '233',
  },
  {
    date: '1',
    amount: '231',
  },
  {
    date: '1',
    amount: '23',
  },
  {
    date: '1',
    amount: '23',
  },
  {
    date: '1',
    amount: '23',
  },
  {
    date: '1',
    amount: '23',
  },
  {
    date: '1',
    amount: '23',
  },
  {
    date: '1',
    amount: '23',
  },
  {
    date: '1',
    amount: '23',
  },
  {
    date: '1',
    amount: '23',
  },
  {
    date: '1',
    amount: '23',
  },
  {
    date: '1',
    amount: '23',
  },
];


const tempMonthlyOrder = [
  {
    date: '1',
    amount: '23',
  },
  {
    date: '1',
    amount: '23',

  },
  {
    date: '1',
    amount: '23',
  },
  {
    date: '1',
    amount: '23',
  },
  {
    date: '1',
    amount: '23',
  },
  {
    date: '1',
    amount: '23',
  },
  {
    date: '1',
    amount: '23',
  },
  {
    date: '1',
    amount: '23',
  },
  {
    date: '1',
    amount: '23',
  },
  {
    date: '1',
    amount: '23',
  },
  {
    date: '1',
    amount: '23',
  },
  {
    date: '1',
    amount: '23',
  },
  {
    date: '1',
    amount: '300',
  },
  {
    date: '1',
    amount: '400',
  },
  {
    date: '1',
    amount: '23',
  },
  {
    date: '1',
    amount: '23',
  },
  {
    date: '1',
    amount: '123',
  },
  {
    date: '1',
    amount: '123',
  },
  {
    date: '1',
    amount: '233',
  },
  {
    date: '1',
    amount: '231',
  },
  {
    date: '1',
    amount: '90',
  },
  {
    date: '1',
    amount: '23',
  },
  {
    date: '1',
    amount: '23',
  },
  {
    date: '1',
    amount: '23',
  },
  {
    date: '1',
    amount: '23',
  },
  {
    date: '1',
    amount: '23',
  },
  {
    date: '1',
    amount: '300',
  },
  {
    date: '1',
    amount: '23',
  },
  {
    date: '1',
    amount: '100',
  },
  {
    date: '1',
    amount: '228',
  },
];


const tempTransactionVolume = [
  {
    city: '深圳',
    data: '83.21',
  },
  {
    city: '北京',
    data: '93.21',
  },
  {
    city: '上海',
    data: '103.21',
  },
  {
    city: '南京',
    data: '113.21',
  },
  {
    city: '杭州',
    data: '123.21',
  },
];

const tempTransactionNumber = [
  {
    city: '深圳',
    data: '83.22',
  },
  {
    city: '北京',
    data: '93.22',
  },
  {
    city: '上海',
    data: '103.22',
  },
  {
    city: '南京',
    data: '113.22',
  },
  {
    city: '杭州',
    data: '123.22',
  },
];

Mock.mock('/transaction/daily', 'post', tempData);
Mock.mock('/transaction/monthly-amounts', 'post', tempMonthlyAmounts);
Mock.mock('/transaction/monthly-orders', 'post', tempMonthlyOrder);
Mock.mock('/transaction/top-five/volume', 'post', tempTransactionVolume);
Mock.mock('/transaction/top-five/number', 'post', tempTransactionNumber);


export default Mock;
