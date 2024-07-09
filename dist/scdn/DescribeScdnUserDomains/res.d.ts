export interface DescribeScdnUserDomainsResponse {
    /**
     * 请求ID。
     * @example `AA75AADB-5E25-4970-B480-EAA1F5658483`
     */
    RequestId: string;
    /**
     * 返回数据的页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 整页大小。
     * @example `5`
     */
    PageSize: number;
    /**
     * 总条数。
     * @example `16`
     */
    TotalCount: number;
    Domains: {
        /**
         * 由PageData组成的数组格式，返回加速域名的状态信息。
         */
        PageData: {
            /**
             * 加速域名创建时间。
             * @example `2015-10-28T11:05:52Z`
             */
            GmtCreated: string;
            /**
             * 审核失败原因。
             * @example `audit failed`
             */
            Description: string;
            /**
             * HTTPS开关。
             * - **on**：已开启。
             * - **off**：未开启。
             * @example `on`
             */
            SSLProtocol: string;
            /**
             * 资源组ID。
             * @example `abcd1234abcd1234`
             */
            ResourceGroupId: string;
            /**
             * 沙箱。
             * @example `normal`
             */
            Sandbox: string;
            /**
             * 加速域名状态。取值：
             * - **online**表示启用。
             * - **offline**表示停用。
             * - **configuring**表示配置中。
             * - **configure_failed**表示配置失败。
             * - **checking**表示正在审核。
             * - **check_failed**表示审核失败。
             * @example `online`
             */
            DomainStatus: string;
            /**
             * 加速域名对应的CNAME域名。
             * @example `image.developer.aliyundoc.com`
             */
            Cname: string;
            /**
             * 加速域名修改时间。
             * @example `2015-10-28T11:05:52Z`
             */
            GmtModified: string;
            /**
             * 加速域名名称。
             * @example `example.aliyun.com`
             */
            DomainName: string;
            Sources: {
                /**
                 * 源站信息。
                 */
                Source: {
                    /**
                     * 源站类型。
                     * @example `oss`
                     */
                    Type: string;
                    /**
                     * 优先级。
                     * @example `50`
                     */
                    Priority: string;
                    /**
                     * 源站端口。
                     * @example `80`
                     */
                    Port: number;
                    /**
                     * 源站地址。
                     * @example `video.developer.aliyundoc.com`
                     */
                    Content: string;
                }[];
            };
        }[];
    };
}
