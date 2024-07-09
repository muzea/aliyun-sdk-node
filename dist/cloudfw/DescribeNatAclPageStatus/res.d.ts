export interface DescribeNatAclPageStatusResponse {
    /**
     * 是否支持NAT ACL独立页面支持。
     * @example `True`
     */
    NatAclPageEnable: boolean;
    /**
     * 返回结果的请求ID。
     * @example `B97F9AD7-A2DB-5F8F-9206-DF89DE0AC9E8`
     */
    RequestId: string;
}
