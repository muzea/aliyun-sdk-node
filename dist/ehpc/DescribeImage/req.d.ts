interface DescribeImageRequest {
    "RegionId"?: string;
    "ClusterId": string;
    "Repository": string;
    "ImageTag"?: string;
    "ContainerType"?: string;
}
export { DescribeImageRequest };