interface DescribeTagsRequest {
    /**
    * 负载均衡实例的地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    "OwnerId"?: number;
    "access_key_id"?: string;
    /**
    * 负载均衡实例ID。
    * @example `139a00604ad-cn-east-hangzhou-01`
    */ "LoadBalancerId"?: string;
    /**
    * 要查询的标签列表。
    * @example `[{"TagKey":"Key1","TagValue":"Value1"}{"TagKey":"Key2","TagValue":"Value2"}]`
    */ "Tags"?: string;
    /**
    * 是否为DistinctKey。
    * 取值：**true|false**。
    * @example `false`
    */ "DistinctKey"?: boolean;
    /**
    * 单页结果数量，接口默认50，最大100。
    * @example `50`
    */ "PageSize"?: number;
    /**
    * 实例列表页码，起始值1，默认值1。
    * @example `1`
    */ "PageNumber"?: number;
}
export { DescribeTagsRequest };