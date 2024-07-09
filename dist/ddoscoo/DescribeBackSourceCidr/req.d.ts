export interface DescribeBackSourceCidrRequest {
    /**
     * DDoS高防实例在资源管理产品中所属的资源组ID。默认为空，即属于默认资源组。
     * @example `rg-acfm2pz25js****`
     */
    "ResourceGroupId"?: string;
    /**
     * 要查询的线路。
     * @example `coop-line-001`
     */
    "Line"?: string;
    /**
     * 要查询的回源IP网段的IP协议类型。
     * - **IPv4**：表示IPv4协议。
     * - **IPv6**：表示IPv6协议。
     * @example `IPv4`
     */
    "IpVersion"?: string;
}
