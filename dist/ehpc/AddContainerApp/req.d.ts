interface AddContainerAppRequest {
    "RegionId": string;
    "Name": string;
    "Repository": string;
    "Description"?: string;
    "ImageTag"?: string;
    "ContainerType"?: string;
}
export { AddContainerAppRequest };