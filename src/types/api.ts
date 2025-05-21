type RequestType = {
  url: string,
  method: "GET" | "POST" | "PUT" | "DELETE"
  param?: Object,
  data?: Object
}


export {
  RequestType
}