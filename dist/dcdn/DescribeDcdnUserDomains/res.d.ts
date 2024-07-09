export interface DescribeDcdnUserDomainsResponse {
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
     * @example `12`
     */
    PageSize: number;
    /**
     * 总条数。
     * @example `12`
     */
    TotalCount: number;
    Domains: {
        /**
         * 由PageData组成的数组格式，返回加速域名的状态信息。
         */
        PageData: {
            /**
             * 加速域名创建时间。
             * @example `2015-10-28T11:05:50Z`
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
             * @example `rg-acfmv6jutt**`
             */
            ResourceGroupId: string;
            /**
             * 沙箱。
             * @example `normal`
             */
            Sandbox: string;
            /**
             * 加速域名状态。
             *  - **online**：启用。
             *  - **offline**：停用。
             *  - **configuring**：配置中。
             * - **configure_failed**：配置失败。
             * - **checking**：正在审核。
             * - **check_failed**：审核失败。
             * @example `online`
             */
            DomainStatus: string;
            /**
             * 加速域名对应的CNAME域名。
             * @example `test.aliyun.com.w.alikunlun.com`
             */
            Cname: string;
            /**
             * 加速域名修改时间。
             * @example `2015-10-28T09:31:59Z`
             */
            GmtModified: string;
            /**
             * 域名信息。
             * @example `www.example.com`
             */
            DomainName: string;
            /**
             * 加速域名ID。
             * @example `11223344`
             */
            DomainId: number;
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
                     * 权重。
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
                     * @example `example.com`
                     */
                    Content: string;
                }[];
            };
            /**
             * 场景。支持：
             * - **apiscene**：API加速。
             * - **webservicescene**：网站业务加速。
             * - **staticscene**：视频、图文类加速。
             * - **（空）**：没有场景。
             * @example `apiscene`
             */
            Scene: string;
            /**
             * 计算服务类型。取值：
             * - **routine**：程序。
             * - **image**：镜像。
             * - **cloudFunction**：函数。
             * @example `routine`
             */
            FunctionType: string;
        }[];
    };
}
