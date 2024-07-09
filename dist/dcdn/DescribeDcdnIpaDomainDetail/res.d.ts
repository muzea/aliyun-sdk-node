export interface DescribeDcdnIpaDomainDetailResponse {
    /**
     * 请求ID。
     * @example `09ABE829-6CD3-4FE0-AFEE-556113E29727`
     */
    RequestId: string;
    /**
     * 域名详情。
     */
    DomainDetail: {
        /**
         * 创建时间。
         * @example `2017-11-27T06:51:26Z`
         */
        GmtCreated: string;
        /**
         * 如果开启HTTPS，此处为证书公钥。
         * @example `SSLPub`
         */
        SSLPub: string;
        /**
         * 描述。
         * @example `audit failed`
         */
        Description: string;
        /**
         * 是否开启SSL证书。取值：
         * - **on**：开启。
         * - **off**：关闭。
         * @example `on`
         */
        SSLProtocol: string;
        /**
         * 资源组ID。
         * @example `rg-acfmyuji4b6xxxx`
         */
        ResourceGroupId: string;
        /**
         * 如果开启HTTPS，此处为证书名称。
         * @example `yourCertName`
         */
        CertName: string;
        /**
         * 加速区域。取值：
         * - domestic：仅中国内地。
         * - overseas：全球（不包含中国内地）。
         * - global：全球。
         * @example `overseas`
         */
        Scope: string;
        /**
         * CNAME。
         * @example `example.com`
         */
        Cname: string;
        /**
         * 加速域名运行状态。取值：
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
         * 最近修改时间。
         * @example `2017-11-27T06:51:26Z`
         */
        GmtModified: string;
        /**
         * 接入全站加速IPA进行加速的域名。
         * @example `example.com`
         */
        DomainName: string;
        Sources: {
            /**
             * 源站信息。
             */
            Source: {
                /**
                 * 源站类型。取值：
                 * - **ipaddr**：IP源站。
                 * - **domain**：域名源站。
                 * - **oss**：不支持OSS。
                 * @example `oss`
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
                 * @example `50`
                 */
                Priority: string;
                /**
                 * 自定义端口，范围：**0**~**65535**。
                 * @example `80`
                 */
                Port: number;
                /**
                 * 回源地址。
                 * @example `xxx.oss-cn-hangzhou.aliyuncs.com`
                 */
                Content: string;
            }[];
        };
    };
}
