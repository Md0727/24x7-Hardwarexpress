import axios from "axios";

export const BASEURL = 'https://api.24x7hardwarexpress.in';
// export const BASEURL = 'http://65.0.185.50:3000';
const APIAdmin = `${BASEURL}/api/`;
const APIUser = `${APIAdmin}user/`

// APIAdmin


export const ApiUrl = {
  // ================ 24*7 hardwareexpress api route of website ========================
  login: `${APIUser}login`,
  signup: `${APIUser}signup`,
  accountVerification: `${APIUser}account/verification`,
  forgotPassword: `${APIUser}forgot/password`,
  resetPassword: `${APIUser}reset/password`,

  // Image upload api route ===========
  uploadiImage: `${APIAdmin}upload/image`,

  // update profile ==========
  updateProfile: `${APIAdmin}user/update/profile`,
  getUserDetails: `${APIAdmin}user/get/details`,

  // feedback api route =========
  feedbackAdd: `${APIAdmin}feedback/add`,

  // Product api route =============
  productRecent: `${APIAdmin}product/user/get/recent/view/product`,
  productFiltered: `${APIAdmin}product/user/get/filtered/product`,
  productById: `${APIAdmin}product/user/get/byProductId`,
  productByVendorId: `${APIAdmin}product/user/get/all/product/by/vendorId`,

  // Product cart api route =============
  addToCart: `${APIAdmin}cart/add/to/cart`,
  getCart: `${APIAdmin}cart/get/by/userId`,
  deleteCart: `${APIAdmin}cart/delete/`,
  removeProductCart: `${APIAdmin}cart/remove/product`,
  product_Search: `${APIAdmin}product/search`,

  // Deal api route ============ 
  getAllDeal: `${APIAdmin}trending/get/all`,
  get_Address: `${APIAdmin}user/address/get`,
  delete_Address: `${APIAdmin}user/address/delete`,
  add_Address: `${APIAdmin}user/address/add`,
  transaction_create: `${APIAdmin}transaction/create`,
  transaction_success: `${APIAdmin}transaction/success`,
  order_place: `${APIAdmin}order/place`,
  transaction_cancel: `${APIAdmin}transaction/cancel`,

  // vendor get my order api route end point ========== 
  get_All_For_User: `${APIAdmin}order/get/all/by/userId`,
  generate_pdf: `${APIAdmin}transaction/generate/pdf`,


  // Plan by Space api route end point ============
  Get_All_Tag: `${APIAdmin}category/get/all`,
  Product_By_Tag: `${APIAdmin}product/user/get/all/product/by/category`,
  rating_Product_Add: `${APIAdmin}rating/review/product/add`,
  rating_Vendor_Add: `${APIAdmin}rating/add`,
  
  // need help api end point this use in contact page===
  query_Add: `${APIAdmin}help/query/add`,

  // wishlist api route end point ============
  wistlist_Product_add: `${APIAdmin}wishlist/product/add`,
  get_wishlist: `${APIAdmin}wishlist/get/by/userId`,
  remove_wishlist: `${APIAdmin}wishlist/product/remove`,
  delete_wishlist: `${APIAdmin}wishlist/delete`,
  
  
  // show banner slider image end point
  getBanner_all: `${APIAdmin}banner/get/all`,



};

export const APIRequest = async (config = {}, onSuccess, onError, noAuth = null) => {

  const token = JSON.parse(localStorage?.getItem('data'));

  try {
    let data = {};
    if (token && noAuth == null) {
      data = {
        method: config.method,
        url: config.url,
        data: config.body,
        // timeout: 180000, // Wait for 5 seconds
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };
    } else {
      data = {
        method: config.method,
        url: config.url,
        data: config.body,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      };
    }
    // console.log(data);
    axios(data)
      .then(res => {
        if (!res?.data?.error) {
          onSuccess(res?.data);
        } else {
          onError(res?.data ? res.data : res);
        }
      })
      .catch(err => {
        if (err?.response?.data?.statusCode === 2) {
          // window.location.href = "/";
          localStorage.setItem('validated', JSON.stringify(err?.response?.data?.statusCode))
        }
        onError(err?.response?.data ? err?.response.data : err?.response);
      });
  } catch (error) {
    console.log("error", error);
  }
};

export const APIRequestWithFile = async (config = {}, onSuccess, onError) => {
  const token = JSON.parse(localStorage.getItem("data"));

  try {
    let data;
    if (token) {
      data = {
        method: config.method,
        url: config.url,
        data: config.body,
        headers: {
          Accept: 'multipart/form-data',
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      };
    } else {
      data = {
        method: config.method,
        url: config.url,
        data: config.body,
        headers: {
          Accept: 'multipart/form-data',
          'Content-Type': 'multipart/form-data',
        },
      };
    }

    console.log('config', data);
    axios(data)
      .then(res => {
        if (res.status == 200 || res.status == 201) {
          console.log(res.data);
          onSuccess(res.data);
        }
      })
      .catch(err => {
        onError(err?.response?.data, '===============');
        if (err?.response?.data?.statusCode === 2) {
          // window.location.href = "/";
          localStorage.setItem('validated', JSON.stringify(err?.response?.data?.statusCode))
        }
      });
  } catch (error) {
    console.log(error, '-----------------');
  }
};


export const Statelist = [
  'Andhra Pradesh',
  'Arunachal Pradesh',
  'Assam',
  'Bihar',
  'Chhattisgarh',
  'Goa',
  'Gujarat',
  'Haryana',
  'Himachal Pradesh',
  'Jammu and Kashmir',
  'Jharkhand',
  'Karnataka',
  'Kerala',
  'Madhya Pradesh',
  'Maharashtra',
  'Manipur',
  'Meghalaya',
  'Mizoram',
  'Nagaland',
  'Orissa',
  'Punjab',
  'Rajasthan',
  'Sikkim',
  'Tamil Nadu',
  'Tripura',
  'Uttarakhand',
  'Uttar Pradesh',
  'West Bengal',
  'Tamil Nadu',
  'Tripura',
  'Andaman and Nicobar Islands',
  'Chandigarh',
  'Dadra and Nagar Haveli',
  'Daman and Diu',
  'Delhi',
  'Lakshadweep',
  'Pondicherry',
]

export const StatelistCode = [
  { State: 'Andhra Pradesh', Abbreviation: 'AP' },
  { State: 'Arunachal Pradesh', Abbreviation: 'AR' },
  { State: 'Assam', Abbreviation: 'AS' },
  { State: 'Bihar', Abbreviation: 'BR' },
  { State: 'Chhattisgarh', Abbreviation: 'CG' },
  { State: 'Goa', Abbreviation: 'GA' },
  { State: 'Gujarat', Abbreviation: 'GJ' },
  { State: 'Haryana', Abbreviation: 'HR' },
  { State: 'Himachal Pradesh', Abbreviation: 'HP' },
  { State: 'Jammu and Kashmir', Abbreviation: 'JK' },
  { State: 'Jharkhand', Abbreviation: 'JH' },
  { State: 'Karnataka', Abbreviation: 'KA' },
  { State: 'Kerala', Abbreviation: 'KL' },
  { State: 'Madhya Pradesh', Abbreviation: 'MP' },
  { State: 'Maharashtra', Abbreviation: 'MH' },
  { State: 'Manipur', Abbreviation: 'MN' },
  { State: 'Meghalaya', Abbreviation: 'ML' },
  { State: 'Mizoram', Abbreviation: 'MZ' },
  { State: 'Nagaland', Abbreviation: 'NL' },
  { State: 'Orissa', Abbreviation: 'OR' },
  { State: 'Punjab', Abbreviation: 'PB' },
  { State: 'Rajasthan', Abbreviation: 'RJ' },
  { State: 'Sikkim', Abbreviation: 'SK' },
  { State: 'Tamil Nadu', Abbreviation: 'TN' },
  { State: 'Tripura', Abbreviation: 'TR' },
  { State: 'Uttarakhand', Abbreviation: 'UK' },
  { State: 'Uttar Pradesh', Abbreviation: 'UP' },
  { State: 'West Bengal', Abbreviation: 'WB' },
  { State: 'Tamil Nadu', Abbreviation: 'TN' },
  { State: 'Tripura', Abbreviation: 'TR' },
  { State: 'Andaman and Nicobar Islands', Abbreviation: 'AN' },
  { State: 'Chandigarh', Abbreviation: 'CH' },
  { State: 'Dadra and Nagar Haveli', Abbreviation: 'DH' },
  { State: 'Daman and Diu', Abbreviation: 'DD' },
  { State: 'Delhi', Abbreviation: 'DL' },
  { State: 'Lakshadweep', Abbreviation: 'LD' },
  { State: 'Pondicherry', Abbreviation: 'PY' }
];
