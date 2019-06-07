declare const imageURL: string;
declare module "*.jpg" {
  export default imageURL;
}
declare module "*.png" {
  export default imageURL;
}
