interface UntagResourcesRequest {
    /**
    * 地域ID。
    * @example `ch-shanghai`
    */ "RegionId"?: string;
    /**
    * 固定值：**DOMAIN**。
    * @example `DOMAIN`
    */ "ResourceType": string;
    "TagKey": string[];
    "OwnerId"?: number;
    "ResourceId": string[];
}
export { UntagResourcesRequest };