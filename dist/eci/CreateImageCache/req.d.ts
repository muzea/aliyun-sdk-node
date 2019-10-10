interface CreateImageCacheRequest {
    "RegionId": string;
    "SecurityGroupId": string;
    "VSwitchId": string;
    "ImageCacheName": string;
    "Image": string[];
    "OwnerId"?: number;
    "ZoneId"?: string;
    "ImageRegistryCredential"?: string[];
    "EipInstanceId"?: string;
    "ResourceGroupId"?: string;
    "ClientToken"?: string;
}
export { CreateImageCacheRequest };