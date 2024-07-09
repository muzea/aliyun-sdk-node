export interface DescribeCdnDomainDetailResponse {
    /**
     * 请求ID。
     * @example `18CF38AA-1275-451D-A12B-4EC0BF1C5E30`
     */
    RequestId: string;
    /**
     * 域名详情。
     */
    GetDomainDetailModel: {
        /**
         * 创建时间。
         * @example `2015-06-25T03:30:50Z`
         */
        GmtCreated: string;
        /**
         * 备注。
         * @example `直播域名`
         */
        Description: string;
        /**
         * 开启HTTPS的CNAME域名。
         * @example `example.com.w.kunlunle.com`
         */
        HttpsCname: string;
        /**
         * 资源组ID。
         * @example `abcd1234abcd1234`
         */
        ResourceGroupId: string;
        /**
         * 是否开启SSL证书。取值：
         * - **on**：开启。
         * - **off**：关闭。
         * @example `on`
         */
        ServerCertificateStatus: string;
        /**
         * 加速区域。
         * @example `domestic`
         */
        Scope: string;
        /**
         * 加速域名运行状态。取值：
         * - **online**：启用。
         * - **offline**：停用。
         * - **configuring**：配置中。
         * - **configure_failed**：配置失败。
         * - **checking**：正在审核。
         * - **check_failed**：审核失败。
         * -  **stopping**：停用中。
         * -  **deleting**：删除中。
         * @example `online`
         */
        DomainStatus: string;
        /**
         * 为加速域名生成的一个CNAME域名，需要在域名解析服务商处将加速域名CNAME解析到该域名。
         * @example `example.com.w.kunlunle.com`
         */
        Cname: string;
        /**
         * 最近修改时间。
         * @example `2017-06-25T03:30:50Z`
         */
        GmtModified: string;
        /**
         * 加速域名的业务类型。取值：
         * - **web**：图片小文件。
         * - **download**：大文件下载。
         * - **video**：视音频点播。
         * @example `web`
         */
        CdnType: string;
        /**
         * 加速的域名。
         * @example `example.com`
         */
        DomainName: string;
        SourceModels: {
            /**
             * 源站信息。
             */
            SourceModel: {
                /**
                 * 源站类型。取值：
                 * - **ipaddr**：IP源站。
                 * - **domain**：域名源站。
                 * - **oss**：OSS Bucket为源站。
                 * - **fc_domain**：函数计算为源站。
                 * @example `domain`
                 */
                Type: string;
                /**
                 * 回源权重。
                 * @example `10`
                 */
                Weight: string;
                /**
                 * 状态。
                 * @example `online`
                 */
                Enabled: string;
                /**
                 * 优先级。
                 * @example `20`
                 */
                Priority: string;
                /**
                 * 端口，支持443和80。
                 * @example `80`
                 */
                Port: number;
                /**
                 * 回源地址。
                 * @example `example.com`
                 */
                Content: string;
            }[];
        };
    };
}
