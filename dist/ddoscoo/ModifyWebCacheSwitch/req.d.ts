export interface ModifyWebCacheSwitchRequest {
    /**
     * DDoS高防实例在资源管理服务中所属的资源组ID。
     * 不设置该参数表示默认资源组。
     * @example `rg-acfm2pz25js****`
     */
    "ResourceGroupId"?: string;
    /**
     * 要设置静态页面缓存的域名。
     * > 您可以调用[DescribeDomains](~~91724~~)查询所有已接入DDoS高防防护的域名。
     * @example `www.aliyundoc.com`
     */
    "Domain": string;
    /**
     * 设置静态页面缓存的开关状态。取值：
     * - **1**：表示开启。
     * - **0**：表示关闭。
     * @example `1`
     */
    "Enable": number;
}
