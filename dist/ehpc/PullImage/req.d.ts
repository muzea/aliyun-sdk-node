interface PullImageRequest {
    "RegionId"?: string;
    "Repository": string;
    "ClusterId": string;
    "ImageTag"?: string;
    "ContainerType"?: string;
}
export { PullImageRequest };