export interface ModifyWebAreaBlockSwitchRequest {
    /**
     * DDoS高防实例在资源管理服务中所属的资源组ID。
     * 不设置该参数表示默认资源组。
     * @example `rg-acfm2pz25js****`
     */
    "ResourceGroupId"?: string;
    /**
     * 要设置区域封禁功能的域名。
     * > 您可以调用[DescribeDomains](~~91724~~)查询所有已接入DDoS高防防护的域名。
     * @example `www.aliyundoc.com`
     */
    "Domain": string;
    /**
     * 区域封禁（针对域名）的开关状态。使用JSON结构体转化的字符串表示，JSON结构体包含以下参数：
     * - **RegionblockEnable**：Integer类型，必选，区域封禁（针对域名）的开关状态。取值：
     *     - **1**：表示开启。
     *     - **0**：表示关闭。
     * @example `{"RegionblockEnable": 1}`
     */
    "Config": string;
}
