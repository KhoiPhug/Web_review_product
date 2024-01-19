import axios from "axios";

const data = [
  {
    id: 1,
    category: "Daddy issues – Damaged Woman",
    slugCategory: "category-daddy-issues-damaged-woman",
  },
  {
    id: 2,
    category: "Forum Ẩn Red Pill VN",
    slugCategory: "category-forum-an-red-pill-vn",
  },
  {
    id: 3,
    category: "Giải độc truyền thông bẩn.",
    slugCategory: "category-giai-doc-truyen-thong-ban",
  },
];

let access_token = '';



const getToken = () => {
  return new Promise((resolve, reject) => {
    var xhr = new XMLHttpRequest();
    var tokenUrl = 'http://keycloak:8080/realms/spring-boot-microservices-realm/protocol/openid-connect/token';

    xhr.open('POST', tokenUrl, true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.withCredentials = true;

    var client_id = 'spring-cloud-client';
    var client_secret = 'wQGqOKzR9iG9Au6BHlUBA8iKu3e486B3';
    var scope = 'openid offline_access';

    var params = 'grant_type=client_credentials&client_id=' + client_id + '&client_secret=' + client_secret + '&scope=' + scope;

    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4) {
        if (xhr.status == 200) {
          var response = JSON.parse(xhr.responseText);
          access_token = response.access_token;
          console.log('Access Token:', access_token);
          resolve(access_token);
        } else {
          console.error('Failed to get access token:', xhr.statusText);
          reject('Failed to get access token');
        }
      }
    };

    xhr.send(params);
  });
};

const getAllCategory = async ( page = 1 ) => {
  await getToken();

  // Chuẩn bị các thông tin cần thiết cho yêu cầu
  var headers = new Headers({
    'Authorization': 'Bearer ' + access_token,
    'Content-Type': 'application/json'
  });

  // Tạo yêu cầu
  var requestOptions = {
    method: 'GET', // Hoặc 'POST', 'PUT', 'DELETE', tùy thuộc vào loại yêu cầu bạn muốn thực hiện
    headers: headers,
  };

  try {
    console.log(1111);
    const response = await fetch('http://localhost:8181/api/category/', requestOptions);
  
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
  
    const data = await response.json();
    console.log('API Response:', data);
    return data;
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
  }
};

// const getAllCategory = async (page = 1) => {
//   try {
//     let get = axios.get(
//       `http://estatemanage.laptrinhjavawebsoftware.com/api-admin-categories?page=${page}`
//     );
//     return (await get).data;
//   } catch (error) {
//     return [];
//   }
// };

const getCategoryById = async (id) => {

  await getToken();

  // Chuẩn bị các thông tin cần thiết cho yêu cầu
  var headers = new Headers({
    'Authorization': 'Bearer ' + access_token,
    'Content-Type': 'application/json'
  });

  // Tạo yêu cầu
  var requestOptions = {
    method: 'GET', // Hoặc 'POST', 'PUT', 'DELETE', tùy thuộc vào loại yêu cầu bạn muốn thực hiện
    headers: headers,
  };

  try {
    console.log(1111);
    const response = await fetch('http://localhost:8181/api/category/'+id, requestOptions);
  
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
  
    const data = await response.json();
    console.log('API Response:', data);
    return data;
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
  }


  // try {
  //   let get = axios.get(
  //     `http://estatemanage.laptrinhjavawebsoftware.com/api-admin-categories/findOneById/${id}`
  //   );
  //   return (await get).data;
  // } catch (error) {
  //   return [];
  // }
};

const getCategoryBySlug = async (slugCategory) => {
  try {
    let get = axios.get(
      `http://estatemanage.laptrinhjavawebsoftware.com/api-admin-categories/findOneBySlug/${slugCategory}`
    );
    return (await get).data;
  } catch (error) {
    return [];
  }
};
export { getAllCategory, getCategoryById, getCategoryBySlug };
