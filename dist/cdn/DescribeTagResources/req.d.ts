interface DescribeTagResourcesRequest {
    /**
    * 地域ID。
    * @example `ch-hangzhou`
    */ "RegionId"?: string;
    /**
    * 固定值：**DOMAIN**。
    * @example `DOMAIN`
    */ "ResourceType": string;
    "OwnerId"?: number;
    "ResourceId": string[];
    "Tag"?: string[];
    "Scope"?: string;
}
export { DescribeTagResourcesRequest };