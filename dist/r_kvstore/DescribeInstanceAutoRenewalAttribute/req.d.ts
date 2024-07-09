export interface DescribeInstanceAutoRenewalAttributeRequest {
    /**
     * 用于保证请求的幂等性，防止重复提交请求。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符，且该参数值中不能包含非ASCII字符。
     * @example `ETnLKlblzczshOTUbOCz****`
     */
    "ClientToken"?: string;
    /**
     * 实例所属的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 实例的ID。
     * > 默认查询所有实例是否开通自动续费。
     * @example `r-bp1zxszhcgatnx****`
     */
    "DBInstanceId"?: string;
    /**
     * 每页记录数，取值：**30**、**50**、**100**。
     * > 默认值：**30**。
     * @example `30`
     */
    "PageSize"?: number;
    /**
     * 页码，大于**0**且不超过Integer的最大值，默认值：**1**。
     * @example `1`
     */
    "PageNumber"?: number;
}
