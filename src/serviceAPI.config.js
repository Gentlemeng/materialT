// const BASEURL = 'http://localhost:3000/material/'
//阿里云接口地址
const BASEURL = 'http://47.95.115.59:3000/material/'

const URL = {
  //公司首页

  //公司介绍页
  companyIntro: BASEURL + 'companyIntro',
  //供应产品页
  //大类
  category: BASEURL + 'category',
  //子类
  category_sub: BASEURL + 'category_sub',
  //产品详情
  product_detail: BASEURL + 'productDetail',
  //资讯中心

  //联系方式页
  contact: BASEURL + 'contact',

}

module.exports = URL;