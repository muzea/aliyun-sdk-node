export interface DescribeSecurityGroupAttributeRequest {
    /**
     * 安全组ID。
     * @example `sg-bp1gxw6bznjjvhu3****`
     */
    "SecurityGroupId": string;
    /**
     * 安全组所属地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 安全组规则的网卡类型。
     * - 经典网络类型安全组的取值范围：
     *     - internet（默认）：公网。
     *     - intranet：内网。
     *     > 单次调用只能查询一种网卡类型的安全组规则，查询全部类型请分两次调用。
     * - 专有网络类型安全组的取值只能为：intranet（默认），即内网。
     *     > 如果传入internet或空值，则会默认转化为intranet。
     * @example `intranet`
     */
    "NicType"?: string;
    /**
     * 安全组规则授权方向。取值范围：
     *
     * - egress：安全组出方向。
     * - ingress：安全组入方向。
     * - all：不区分方向。
     * 默认值：all。
     * @example `all`
     */
    "Direction"?: string;
    /**
     * 查询凭证（Token）。取值为上一次调用该接口返回的 NextToken 参数值，初次调用接口时无需设置该参数。
     * @example `AAAAAdDWBF2****`
     */
    "NextToken"?: string;
    /**
     * 分页查询时每页的最大条目数。
     * - 最小值：10。
     * - 最大值：1000。
     * 默认值为 500。
     * @example `500`
     */
    "MaxResults"?: number;
}
