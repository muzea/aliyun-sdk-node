export interface DescribeVodDomainDetailResponse {
    /**
     * 请求ID。
     * @example `09ABE829-6CD3-4FE0-556113E2****`
     */
    RequestId: string;
    /**
     * 域名配置的基本信息。
     */
    DomainDetail: {
        /**
         * 创建时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
         * @example `2017-11-27T06:51:26Z`
         */
        GmtCreated: string;
        /**
         * 回源权重。
         * @example `1`
         */
        Weight: string;
        /**
         * 如果开启HTTPS安全加速，此处为HTTPS证书的公钥；如果未开启HTTPS安全加速，则不返回此参数。
         * @example `yourSSLPub`
         */
        SSLPub: string;
        /**
         * 点播加速域名描述。
         * @example `testDescription`
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
         * 如果开启HTTPS安全加速，此处为HTTPS证书的名称；如果未开启HTTPS安全加速，则不返回此参数。
         * @example `testCertName`
         */
        CertName: string;
        /**
         *  加速区域。取值：
         * - **domestic**（默认）：仅中国内地。
         * - **overseas**：全球（不包含中国内地）。
         * - **global**：全球。
         * @example `domestic`
         */
        Scope: string;
        /**
         * 为加速域名生成的一个CNAME域名，需要在域名解析服务商处将此加速域名CNAME解析到该域名。详细操作请参见[配置CNAME](~~86075~~)。
         * @example `example.com.w.alikunlun.net`
         */
        Cname: string;
        /**
         * 加速域名运行状态。取值意义：
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
         * 最近修改时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
         * @example `2017-11-27T06:55:26Z`
         */
        GmtModified: string;
        /**
         * 点播加速域名。
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
                 * - **oss**：OSS Bucket为源站。
                 * @example `oss`
                 */
                Type: string;
                /**
                 * 优先级。
                 * @example `50`
                 */
                Priority: string;
                /**
                 * 端口。支持443和80。
                 * @example `80`
                 */
                Port: number;
                /**
                 * 回源地址。
                 * @example `****.oss-cn-hangzhou.aliyuncs.com`
                 */
                Content: string;
                /**
                 * 源站状态。取值：
                 * - **online**：启用。
                 * - **offline**：停用。
                 * @example `online`
                 */
                Enabled: string;
                Weight: string;
            }[];
        };
    };
}
