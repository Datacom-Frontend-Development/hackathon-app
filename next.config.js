/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

nextConfig.endpoint = "https://hackathoncosmodb.documents.azure.com:443/";
nextConfig.key =  "onayTn4vilzaf4obwI0MtEEIkYN8YfHCIETepFeIIcEYYFp3SZhM1O5w56Aw9csZgE4xuhxhVRI6ACDbxz0ePw==";
nextConfig.database = "ToDoList";
nextConfig.container = "Items";

module.exports = nextConfig
