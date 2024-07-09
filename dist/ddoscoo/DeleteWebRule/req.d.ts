export interface DeleteWebRuleRequest {
    /**
     * DDoS高防实例在资源管理服务中所属的资源组ID。默认为空，即属于默认资源组。
     * 关于资源组的更多信息，请参见[创建资源组](~~94485~~)。
     * @example `rg-acfm2pz25js****`
     */
    "ResourceGroupId"?: string;
    /**
     * 要删除的网站业务的域名。
     * > 域名必须已配置网站业务转发规则。您可以调用[DescribeDomains](~~91724~~)查询所有已配置网站业务转发规则的域名。
     * @example `www.aliyun.com`
     */
    "Domain": string;
}
