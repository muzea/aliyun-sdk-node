interface DeleteImageRequest {
    "RegionId"?: string;
    "ClusterId": string;
    "Repository": string;
    "ImageTag"?: string;
    "ContainerType"?: string;
}
export { DeleteImageRequest };