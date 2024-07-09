export interface ModifyWebCCGlobalSwitchRequest {
    /**
     * 网站业务的域名。
     * > 域名必须已配置网站业务转发规则。您可以调用[DescribeDomains](~~91724~~)查询所有域名。
     * @example `example.aliyundoc.com
    `
     */
    "Domain": string;
    /**
     * 开关状态。取值：
     * - **open**：开启
     * - **close**：关闭
     * @example `open`
     */
    "CcGlobalSwitch": string;
}
