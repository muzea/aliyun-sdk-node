interface ListTagResourcesRequest {
    /**
    * 地域ID，可调用[DescribeRegions](~~61012~~)查询，使用此参数指定要创建实例的地域。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 资源类型，唯一值：INSTANCE。
    * @example `INSTANCE`
    */ "ResourceType": string;
    "OwnerId"?: number;
    "ResourceId"?: string[];
    "Tag"?: string[];
    /**
    * 用来返回更多结果。第一次查询不需要提供这个参数，如果一次查询没有返回全部结果，则可在后续查询中传入前一次返回的token继续查询。
    * @example `212db86sca4384811e0b5e8707ec21345`
    */ "NextToken"?: string;
}
export { ListTagResourcesRequest };