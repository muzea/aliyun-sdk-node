export interface DescribeCdnWafDomainRequest {
    /**
     * WAF管控区域。取值：
     * - **cn-hangzhou**：WAF中国内地（大陆）管控区域。
     * - **ap-southeast-1**：WAF非中国内地（大陆）管控区域。
     * > 非中国内地（大陆）包含中国香港、中国澳门、中国台湾以及其他国家和地区。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 待查询的域名。
     * 仅支持填写单个域名，详细见以下三种填写方式：
     * - 填写精确域名：例如example.com，则查询example.com域名的配置信息。
     * - 填写关键字：例如example，则查询所有包含example的域名配置信息。
     * - 不填该参数：则默认返回所有开通了WAF的加速域名。
     * @example `example.com`
     */
    "DomainName"?: string;
    /**
     * 资源组ID。
     * @example `1234`
     */
    "ResourceGroupId"?: string;
}
