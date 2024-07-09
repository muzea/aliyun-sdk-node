export interface ModifyCnameReuseRequest {
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
     * 要复用的CNAME值。
     * @example `4o6ep6q217k9****.aliyunddos0004.com`
     */
    "Cname"?: string;
    /**
     * 是否开启CNAME复用。取值：
     * - **0**：关闭
     * - **1**：开启
     * @example `1`
     */
    "Enable": number;
}
