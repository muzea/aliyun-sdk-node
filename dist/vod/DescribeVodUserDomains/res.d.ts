export interface DescribeVodUserDomainsResponse {
    /**
     * 请求ID。
     * @example `E4EBD2BF-5EB0-4476-****-9D94E1B15267`
     */
    RequestId: string;
    /**
     * 返回数据的页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 分页大小。
     * @example `20`
     */
    PageSize: number;
    /**
     * 总条数。
     * @example `2`
     */
    TotalCount: number;
    Domains: {
        /**
         * 由PageData组成的数组格式，返回点播域名的状态信息。
         */
        PageData: {
            /**
             * 点播域名创建时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
             * @example `2017-08-29T08:40:53Z`
             */
            GmtCreated: string;
            /**
             * HTTPS开关。
             * - **on**：已开启。
             * - **off**：未开启。
             * @example `on`
             */
            SslProtocol: string;
            /**
             * 备注。
             * @example `浙ICP备****号`
             */
            Description: string;
            /**
             * 沙箱。
             * @example `normal`
             */
            Sandbox: string;
            /**
             * 点播域名对应的CNAME域名。
             * @example `learn.developer.aliyundoc.com`
             */
            Cname: string;
            /**
             * 点播域名状态，取值含义：
             * - **online**：表示启用。
             * - **offline**：表示停用。
             * - **configuring**：表示配置中。
             * - **configure_failed**：表示配置失败。
             * - **checking**：表示正在审核。
             * - **check_failed**：表示审核失败。
             * @example `online`
             */
            DomainStatus: string;
            /**
             * 点播域名修改时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
             * @example `2017-12-29T09:24:12Z`
             */
            GmtModified: string;
            /**
             * 点播加速域名。
             * @example `example.aliyundoc.com`
             */
            DomainName: string;
            Sources: {
                /**
                 * 源站信息。
                 */
                Source: {
                    /**
                     * 源站类型，取值含义：
                     * - **ipaddr**：IP源站。
                     * - **domain**：域名源站。
                     * - **oss**：OSS Bucket为源站。
                     * @example `oss`
                     */
                    Type: string;
                    /**
                     * 优先级。
                     * @example `5`
                     */
                    Priority: string;
                    /**
                     * 端口，支持**443**和**80**。
                     * @example `80`
                     */
                    Port: number;
                    /**
                     * 回源地址。
                     * @example `192.168.0.1`
                     */
                    Content: string;
                }[];
            };
        }[];
    };
}
