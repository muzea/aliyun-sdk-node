export interface DescribeCdnUserDomainsByFuncResponse {
    /**
     * 请求ID。
     * @example `AA75AADB-5E25-4970-B480-EAA1F5658483`
     */
    RequestId: string;
    /**
     * 页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 单页显示域名的数量。
     * @example `5`
     */
    PageSize: number;
    /**
     * 域名总个数。
     * @example `16`
     */
    TotalCount: number;
    Domains: {
        /**
         * 加速域名的配置数据列表。
         */
        PageData: {
            /**
             * 加速域名创建时间。
             * @example `2015-10-28T11:05:52Z`
             */
            GmtCreated: string;
            /**
             * https开关。取值：
             * - **on**：已开启。
             * - **off**：未开启。
             * @example `on`
             */
            SslProtocol: string;
            /**
             * 状态描述。
             * @example `audit failed`
             */
            Description: string;
            /**
             * 资源组ID。
             * @example `rg-xxxxx`
             */
            ResourceGroupId: string;
            /**
             * 加速域名状态。取值：
             * - **online**：启用。
             * - **offline**：停用。
             * - **configuring**：配置中。
             * - **configure_failed**：配置失败。
             * - **checking**：正在审核。
             * - **check_failed**：审核失败。
             * - **stopping**：停用中。
             * - **deleting**：删除中。
             * @example `configure_failed`
             */
            DomainStatus: string;
            /**
             * 加速域名对应的CNAME域名。
             * @example `example.com.w.alikunlun.com`
             */
            Cname: string;
            /**
             * 加速域名修改时间。
             * @example `2015-10-29T10:15:31Z`
             */
            GmtModified: string;
            /**
             * 加速业务类型。取值：
             * - **web**：图片小文件加速。
             * - **download**：大文件下载加速。
             * - **video**：视音频点播加速。
             * - **liveStream**：直播流媒体加速。
             * @example `web`
             */
            CdnType: string;
            /**
             * 加速域名名称。
             * @example `example.com`
             */
            DomainName: string;
            Sources: {
                /**
                 * 源站信息列表。
                 */
                Source: {
                    /**
                     * 源站类型。取值：
                     * - **ipaddr**：IP源站。
                     * - **domain**：域名源站。
                     * - **oss**：OSS Bucket为源站。
                     * - **fc_domain**：函数计算为源站。
                     * @example `ipaddr`
                     */
                    Type: string;
                    /**
                     * 回源权重。
                     * @example `10`
                     */
                    Weight: string;
                    /**
                     * 优先级。
                     * @example `20`
                     */
                    Priority: string;
                    /**
                     * 源站端口。
                     * @example `80`
                     */
                    Port: number;
                    /**
                     * 源站地址。
                     * @example `1.1.1.1`
                     */
                    Content: string;
                }[];
            };
        }[];
    };
}
