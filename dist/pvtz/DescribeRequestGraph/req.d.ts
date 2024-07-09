export interface DescribeRequestGraphRequest {
    /**
     * 语言。
     * @example `en`
     */
    "Lang"?: string;
    /**
     * 用户IP。
     * @example `192.168.1.1`
     */
    "UserClientIp"?: string;
    /**
     * Zone ID。当查询zone请求量数据时，可以传ZoneId或传BizType+BizId，两种方式取其中一种即可。
     * @example `29c752a01cd281a20ddcfaecef`
     */
    "ZoneId"?: string;
    /**
     * VPC ID。
     * @example `vpc-1111`
     */
    "VpcId"?: string;
    /**
     * 开始时间戳，以毫秒计。
     * @example `1571587200000`
     */
    "StartTimestamp": number;
    /**
     * 结束时间戳，以毫秒计。
     * @example `1682438400000`
     */
    "EndTimestamp": number;
    /**
     * 业务类型。取值：
     * - AUTH_ZONE：权威zone。
     * - RESOLVER_RULE：转发规则。
     * @example `AUTH_ZONE`
     */
    "BizType"?: string;
    /**
     * 数据ID。配合BizType使用：
     * - BizType为AUTH_ZONE时传ZoneID。
     * - BizType为RESOLVERRULE时传转发规则ID。
     * @example `b9c93a8954c4098731e863c04302f45a`
     */
    "BizId"?: string;
}
