export interface DescribeDcdnIpaUserDomainsResponse {
    /**
     * 请求ID。
     * @example `AA75AADB-5E25-4970-B480-EAA1F5658483`
     */
    RequestId: string;
    /**
     * 当前页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 单页显示的域名总数。
     * @example `20`
     */
    PageSize: number;
    /**
     * 查询到的域名总数。
     * @example `1`
     */
    TotalCount: number;
    Domains: {
        /**
         * 由PageData组成的数组格式，返回加速域名的状态信息。
         */
        PageData: {
            /**
             * 加速域名创建时间。
             * @example `2015-10-28T09:32:51Z`
             */
            GmtCreated: string;
            /**
             * 审核失败原因。
             * @example `audit failed`
             */
            Description: string;
            /**
             * HTTPS开关。
             * - **on**表示已开启。
             * - **off**表示未开启。
             * @example `on`
             */
            SSLProtocol: string;
            /**
             * 资源组ID。
             * @example `abcd1234abcd****`
             */
            ResourceGroupId: string;
            /**
             * 沙箱。
             * @example `normal`
             */
            Sandbox: string;
            /**
             * 加速域名状态，取值：
             * - **online**：启用。
             * - **offline**：停用。
             * - **configuring**：配置中。
             * - **configure_failed**：配置失败。
             * - **checking**：正在审核。
             * - **check_failed**：审核失败。
             * @example `online`
             */
            DomainStatus: string;
            /**
             * 加速域名对应的CNAME域名。
             * @example `example.com.*.com`
             */
            Cname: string;
            /**
             * 加速域名修改时间。
             * @example `2015-10-28T11:05:52Z`
             */
            GmtModified: string;
            /**
             * 加速域名名称。
             * @example `example.com`
             */
            DomainName: string;
            Sources: {
                /**
                 * 源站信息。
                 */
                Source: {
                    /**
                     * 源站类型。
                     * @example `OSS域名`
                     */
                    Type: string;
                    /**
                     * 回源权重。
                     * @example `20`
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
                     * @example `*.aliyuncs.com`
                     */
                    Content: string;
                }[];
            };
        }[];
    };
}
