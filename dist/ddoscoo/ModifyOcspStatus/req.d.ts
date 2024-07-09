export interface ModifyOcspStatusRequest {
    /**
     * 要设置静态页面缓存的域名。
     * > 您可以调用[DescribeDomains](~~91724~~)查询所有已接入DDoS高防防护的域名。
     * @example `click.linktech.cn`
     */
    "Domain": string;
    /**
     * 是否开启OCSP功能。取值：
     * - **1**：开启
     * - **0**：关闭
     * @example `1`
     */
    "Enable": number;
}
