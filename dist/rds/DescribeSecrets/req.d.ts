export interface DescribeSecretsRequest {
    /**
     * 用于保证请求的幂等性，防止重复提交请求。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符，且该参数值中不能包含非ASCII字符。
     * @example `ETnLKlblzczshOTUbOCz****`
     */
    "ClientToken"?: string;
    /**
     * 指定返回的语言。取值如下：
     * - **zh-CN**：中文
     * - **en-US**：英文
     * > 默认值：**en-US**。
     * @example `en-US`
     */
    "AcceptLanguage"?: string;
    /**
     * 地域ID，您可调用DescribeDBInstanceAttribute接口查看实例所在地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 实例ID。可调用DescribeDBInstances获取。
     * @example `rm-xjkljj****`
     */
    "DbInstanceId"?: string;
    /**
     * 数据库类型。
     * > 该参数当前仅支持传入MySQL值。
     * @example `MySQL`
     */
    "Engine": string;
    /**
     * 查询分页的页码，取值：大于0且不超过Integer的最大值。
     * > 默认值：1。
     * @example `1`
     */
    "PageNumber": number;
    /**
     * 每页记录数。
     * @example `10`
     */
    "PageSize": number;
    /**
     * 实例所在的资源组ID。
     * @example `rg-acfmxypivk***`
     */
    "ResourceGroupId"?: string;
}
