interface TagResourcesRequest {
    /**
    * 地域ID。
    * @example `ch-shanghai`
    */ "RegionId"?: string;
    /**
    * 固定值：**DOMAIN**。
    * @example `DOMAIN`
    */ "ResourceType": string;
    "Tag": string[];
    "OwnerId"?: number;
    "ResourceId": string[];
}
export { TagResourcesRequest };