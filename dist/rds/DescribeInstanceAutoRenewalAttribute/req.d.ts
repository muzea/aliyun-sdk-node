export interface DescribeInstanceAutoRenewalAttributeRequest {
    /**
     * 用于保证请求的幂等性，防止重复提交请求。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符，且该参数值中不能包含非ASCII字符。
     * @example `ETnLKlblzczshOTUbOCz****`
     */
    "ClientToken"?: string;
    /**
     * 预留参数，无需配置。
     * @example `test`
     */
    "proxyId"?: string;
    /**
     * 地域ID。可调用DescribeRegions获取。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 实例ID。可调用DescribeDBInstances获取。
     * @example `rm-bp****`
     */
    "DBInstanceId"?: string;
    /**
     * 每页记录数，取值：
     * * **30**（默认）
     * * **50**
     * * **100**
     * @example `30`
     */
    "PageSize"?: number;
    /**
     * 当前页数。
     * @example `1`
     */
    "PageNumber"?: number;
}
