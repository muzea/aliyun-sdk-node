interface UntagResourcesRequest {
    /**
    * 地域ID，可调用[DescribeRegions](~~61012~~)查询。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 资源类型，唯一值：INSTANCE。
    * @example `INSTANCE`
    */ "ResourceType": string;
    "ResourceId": string[];
    "OwnerId"?: number;
    "TagKey"?: string[];
    /**
    * 解绑实例上的所有标签。可选值：
    * * true
    * * false
    * > * 默认值：false。
    * * 如果同时设置了**TagKey.N**和该参数，该参数不生效。
    * @example `false`
    */ "All"?: boolean;
}
export { UntagResourcesRequest };