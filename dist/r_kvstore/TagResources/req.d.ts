interface TagResourcesRequest {
    /**
    * 地域ID，可调用[DescribeRegions](~~61012~~)查询。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 资源类型，唯一值：INSTANCE。
    * @example `INSTANCE`
    */ "ResourceType": string;
    "ResourceId": string[];
    "Tag": string[];
    "OwnerId"?: number;
}
export { TagResourcesRequest };