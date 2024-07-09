export interface ModifyWebIpSetSwitchRequest {
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
     * 黑白名单（针对域名）的详细信息，使用JSON格式的字符串表述，具体结构如下。
     *  **bwlist_enable**：Integer类型，必选，黑白名单（针对域名）功能的开关状态。取值：
     * -   0：关闭
     * -    1：开启
     * @example `{"bwlist_enable":1}`
     */
    "Config": string;
}
