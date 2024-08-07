export interface DescribeTagsRequest {
    /**
     * 用于保证请求的幂等性，防止重复提交请求。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符，且该参数值中不能包含非ASCII字符。
     * @example `ETnLKlblzczshOTUbOC****`
     */
    "ClientToken"?: string;
    /**
     * 代理模式ID。
     * @example `API`
     */
    "proxyId"?: string;
    /**
     * 地域ID，可以通过接口DescribeRegions查看可用的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 实例ID。可通过DescribeDBInstances接口查询获取。
     * > 如果传入该参数，则查询该实例下所有标签，其他过滤条件失效。
     * @example `rm-uf6wjk5****`
     */
    "DBInstanceId"?: string;
    /**
     * 需要查询的标签，包括TagKey和TagValue。
     * 参数格式：`{“TagKey”:”TagValue”}`。
     * @example `{“key1”:”value1”}`
     */
    "Tags"?: string;
    /**
     * 资源类型。固定取值。
     * @example `INSTANCE`
     */
    "ResourceType"?: string;
}
