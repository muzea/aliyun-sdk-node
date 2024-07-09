export interface ConfigWebCCTemplateRequest {
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
     * 频率控制防护（CC防护）的防护模式。取值：
     * - **default**：正常
     * - **gf_under_attack**：攻击紧急
     * - **gf_sos_verify**：严格
     * - **gf_sos_enhance**：超级严格
     * @example `default`
     */
    "Template": string;
}
