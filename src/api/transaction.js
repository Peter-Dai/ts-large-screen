import request from '@/utils/request';

const transactionApi = {
  retrieveDailyTransaction() {
    return request({
      url: '/transaction/daily',
      method: 'post',
    });
  },
  retrieveMonthlyTransaction() {
    return request({
      url: '/transaction/monthly',
      method: 'post',
    });
  },
  retrieveMonthlyAmounts() {
    return request({
      url: '/transaction/monthly-amounts',
      method: 'post',
    });
  },
  retrieveMonthlyOrders() {
    return request({
      url: '/transaction/monthly-orders',
      method: 'post',
    });
  },
  retrieveTopFiveTransaction() {
    return request({
      url: '/transaction/top-five',
      method: 'post',
    });
  },
};

export default transactionApi;
