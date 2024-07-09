export interface ModifyInstanceAutoRenewalAttributeRequest {
    /**
     * 地域ID。可调用DescribeRegions获取。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 用于保证请求的幂等性，防止重复提交请求。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符，且该参数值中不能包含非ASCII字符。
     * @example `ETnLKlblzczshOTUbOCz****`
     */
    "ClientToken"?: string;
    /**
     * 实例ID。可调用DescribeDBInstances获取。
     * @example `rm-bp****`
     */
    "DBInstanceId": string;
    /**
     * 自动续费时的续费月数。取值：**1~12**。
     * >当**AutoRenew**=**True**时必须传入此参数。
     * @example `2`
     */
    "Duration"?: string;
    /**
     * 开启或关闭自动续费。取值：
     * - **True**
     * - **False**
     * @example `True`
     */
    "AutoRenew"?: string;
}
