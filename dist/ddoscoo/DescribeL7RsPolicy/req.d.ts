export interface DescribeL7RsPolicyRequest {
    /**
     * DDoS高防实例在资源管理服务中所属的资源组ID。默认为空，即属于默认资源组。
     * 关于资源组的更多信息，请参见[创建资源组](~~94485~~)。
     * @example `rg-acfm2pz25js****`
     */
    "ResourceGroupId"?: string;
    /**
     * 要查询的网站业务的域名。
     * > 域名必须已经配置过网站业务转发规则。您可以调用[DescribeDomains](~~91724~~)查询所有已经配置过网站业务转发规则的域名。
     * @example `example.com`
     */
    "Domain": string;
    /**
     * 要查询的源站服务器地址列表。N的最大值：200，即最多可配置200个源站服务器地址。
     * @example `1.***.***.1`
     */
    "RealServers"?: string[];
}
