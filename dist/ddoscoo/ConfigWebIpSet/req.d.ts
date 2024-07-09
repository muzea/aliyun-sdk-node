export interface ConfigWebIpSetRequest {
    /**
     * DDoS高防实例在资源管理产品中所属的资源组ID。默认为空，即属于默认资源组。
     * @example `default`
     */
    "ResourceGroupId"?: string;
    /**
     * 网站业务的域名。
     * > 域名必须已配置网站业务转发规则。您可以调用[DescribeDomains](~~91724~~)查询所有域名。
     * @example `www.aliyun.com`
     */
    "Domain": string;
    /**
     * 黑名单IP地址/地址段列表。N的最大值：200，即最多可配置200个黑名单IP地址/地址段。
     * @example `1.1.1.1`
     */
    "BlackList"?: string[];
    /**
     * 白名单IP地址/地址段列表。N的最大值：200，即最多可配置200个白名单IP地址/地址段。
     * @example `2.2.2.2/24`
     */
    "WhiteList"?: string[];
}
