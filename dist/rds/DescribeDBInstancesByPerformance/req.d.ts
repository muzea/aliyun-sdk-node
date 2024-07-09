export interface DescribeDBInstancesByPerformanceRequest {
    /**
     * 用于保证请求的幂等性，防止重复提交请求。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符，且该参数值中不能包含非ASCII字符。
     * @example `ETnLKlblzczshOTUbOCzxxxxxx`
     */
    "ClientToken"?: string;
    /**
     * 代理模式ID。
     * @example `API`
     */
    "proxyId"?: string;
    /**
     * 实例ID。
     * @example `rm-uf6wjk5xxxxxx`
     */
    "DBInstanceId"?: string;
    /**
     * 每页记录数，取值：**5**~**100**。
     * 默认值：**30**。
     * @example `30`
     */
    "PageSize"?: number;
    /**
     * 页码，取值：大于0且不超过Integer的最大值。
     * 默认值：**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分类方法。
     * @example `ASC`
     */
    "SortMethod"?: string;
    /**
     * 排序依据。
     * @example `CPU_Usage`
     */
    "SortKey"?: string;
    /**
     * 查询绑定有该标签的实例，包括TagKey和TagValue。格式：`{"key1":"value1"}`。
     * @example `{"key1":"value1"}`
     */
    "Tags"?: string;
    /**
     * 查询绑定有该标签Tag.1.key的实例。
     * @example `key1`
     */
    "Tag.1.key"?: string;
    /**
     * 查询绑定有该标签Tag.2.key的实例。
     * @example `key2`
     */
    "Tag.2.key"?: string;
    /**
     * 查询绑定有该标签Tag.3.key的实例。
     * @example `key3`
     */
    "Tag.3.key"?: string;
    /**
     * 查询绑定有该标签Tag.4.key的实例。
     * @example `key4`
     */
    "Tag.4.key"?: string;
    /**
     * 查询绑定有该标签Tag.5.key的实例。
     * @example `key5`
     */
    "Tag.5.key"?: string;
    /**
     * 查询绑定有该标签Tag.1.value的实例。
     * @example `value1`
     */
    "Tag.1.value"?: string;
    /**
     * 查询绑定有该标签Tag.2.value的实例。
     * @example `value2`
     */
    "Tag.2.value"?: string;
    /**
     * 查询绑定有该标签Tag.3.value的实例。
     * @example `value3`
     */
    "Tag.3.value"?: string;
    /**
     * 查询绑定有该标签Tag.4.value的实例。
     * @example `value4`
     */
    "Tag.4.value"?: string;
    /**
     * 查询绑定有该标签Tag.5.value的实例。
     * @example `value5`
     */
    "Tag.5.value"?: string;
    /**
     * 地域ID，您可以通过[DescribeRegions](~~26243~~)接口查询。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 资源组ID。
     * @example `rg-acfmy*****`
     */
    "ResourceGroupId"?: string;
}
