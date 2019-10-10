interface UntagResourcesRequest {
    "RegionId"?: string;
    /**
    * 资源类型，取值：**cen**。
    * @example `cen`
    */ "ResourceType": string;
    "ResourceId": string[];
    /**
    * @example `11`
    */ "OwnerId"?: number;
    "TagKey"?: string[];
}
export { UntagResourcesRequest };