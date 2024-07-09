export interface DescribeScdnDomainDetailResponse {
    /**
     * 请求ID
     * @example `09ABE829-6CD3-4FE0-AFEE-556113E29727`
     */
    RequestId: string;
    /**
     * 域名信息列表
     */
    DomainDetail: {
        /**
         * 创建时间
         * @example `2017-11-27T06:51:26Z`
         */
        GmtCreated: string;
        /**
         * 如果开启HTTPS，此处为证书公钥。
         * @example `xxx`
         */
        SSLPub: string;
        /**
         * 审核失败原因
         * @example `audit failed`
         */
        Description: string;
        /**
         * 是否开启SSL证书。取值范围：
         * - **on**：表示开启
         * - **off**：表示关闭
         * @example `on`
         */
        SSLProtocol: string;
        /**
         * 资源组ID
         * @example `rg-acfmyuji4b6r4ry`
         */
        ResourceGroupId: string;
        /**
         * 如果开启HTTPS，此处为证书名称。
         * @example `证书名称`
         */
        CertName: string;
        /**
         * 区域
         * @example `overseas`
         */
        Scope: string;
        /**
         * 为加速域名生成的一个CNAME域名，需要在域名解析服务商处将加速域名CNAME解析到该域名。
         * @example `example.com.scdn7mhp.com`
         */
        Cname: string;
        /**
         * 加速域名运行状态。取值：
         * - **online**：表示启用
         * - **offline**：表示停用
         * - **configuring**：表示配置中
         * - **configure_failed**：表示配置失败
         * - **checking**：表示正在审核
         * - **check_failed**：表示审核失败
         * @example `online`
         */
        DomainStatus: string;
        /**
         * 最近修改时间
         * @example `2017-11-27T06:51:26Z`
         */
        GmtModified: string;
        /**
         * 接入SCDN进行加速的域名
         * @example `example.com`
         */
        DomainName: string;
        Sources: {
            /**
             * 源站信息
             */
            Source: {
                /**
                 * 源站类型。取值：
                 * - **ipaddr**：IP源站
                 * - **domain**：域名源站
                 * - **oss**：OSS Bucket为源站
                 * @example `oss`
                 */
                Type: string;
                /**
                 * 优先级
                 * @example `50`
                 */
                Priority: string;
                /**
                 * 端口，支持443和80
                 * @example `80`
                 */
                Port: number;
                /**
                 * 回源地址
                 * @example `xxx.oss-cn-hangzhou.aliyuncs.com`
                 */
                Content: string;
                /**
                 * 状态
                 * @example `online`
                 */
                Enabled: string;
            }[];
        };
    };
}
