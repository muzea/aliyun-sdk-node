export interface ModifyWebAccessModeRequest {
    /**
     * 网站业务的域名。
     * > 域名必须已配置网站业务转发规则。您可以调用[DescribeDomains](~~91724~~)查询所有域名。
     * @example `www.aliyun.com`
     */
    "Domain": string;
    /**
     * 网站业务的接入模式。取值：
     * - **0**：A记录
     * - **1**：高防模式
     * - **2**：回源模式
     * @example `2`
     */
    "AccessMode": number;
}
