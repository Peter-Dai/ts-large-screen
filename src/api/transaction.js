import request from '@/utils/request';

export function retrieveDailyTransaction() {
  return request({
    url: '/transaction/daily',
    method: 'post',
  });
}

export function retrieveMonthlyTransaction() {
  return request({
    url: '/transaction/monthly',
    method: 'post',
  });
}

export function retrieveTopFiveTransaction() {
  return request({
    url: '/transaction/top-five',
    method: 'post',
  });
}
