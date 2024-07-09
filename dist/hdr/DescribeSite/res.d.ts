export interface DescribeSiteResponse {
    /**
     * 专有网络ID
     * @example `vpc-bp1c3byhnaoj3u96sgk12`
     */
    VpcId: string;
    /**
     * 站点类型
     * @example `cloud`
     */
    Type: string;
    /**
     * 请求ID
     * @example `B30A844D-E4CF-5382-A0D4-3DE76A8AD2AE`
     */
    RequestId: string;
    /**
     * 站点ID
     * @example `si-000bzkmmlwh01trrecuw`
     */
    SiteId: string;
    /**
     * 用户安全组ID
     * @example `sg-bp1466glrmpqfsq4zpjs`
     */
    UserSecurityGroupId: string;
    /**
     * 是否成功。
     * @example `True`
     */
    Success: boolean;
    /**
     * 可用区ID
     * @example `cn-shanghai-l`
     */
    ZoneId: string;
    /**
     * 返回码。
     * @example `200`
     */
    Code: string;
    /**
     * 错误信息。
     * @example `successful`
     */
    Message: string;
    /**
     * 站点名称
     * @example `SH`
     */
    Name: string;
    /**
     * 站点所在的地域ID
     * @example `cn-shanghai`
     */
    RegionId: string;
}
