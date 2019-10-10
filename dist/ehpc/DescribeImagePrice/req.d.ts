interface DescribeImagePriceRequest {
    "RegionId": string;
    "ImageId": string;
    "PriceUnit": string;
    "SkuCode": string;
    "Period": number;
    "Amount": number;
    "OrderType"?: string;
}
export { DescribeImagePriceRequest };