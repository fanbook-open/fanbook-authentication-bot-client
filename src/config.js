var baseApi = "http://10.100.1.39:3204";

if ( window.location.host == "open.fanbook.mobi" ) {
  baseApi =
    "https://open.fanbook.mobi/mp/138519745866498048/347357547415605248";
} else {
  baseApi = "http://10.100.1.39:3204";
}

var config = { baseApi: baseApi };

export default config;
