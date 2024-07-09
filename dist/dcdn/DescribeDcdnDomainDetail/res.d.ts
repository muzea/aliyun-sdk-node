export interface DescribeDcdnDomainDetailResponse {
    /**
     * 请求ID。
     * @example `09ABE829-6CD3-4FE0-AFEE-556113E29727`
     */
    RequestId: string;
    /**
     * 域名信息列表。
     */
    DomainDetail: {
        /**
         * 创建时间。
         * @example `2017-11-27T06:51:26Z`
         */
        GmtCreated: string;
        /**
         * 如果开启HTTPS，此处为证书公钥。
         * @example `xxx`
         */
        SSLPub: string;
        /**
         * 域名备案信息。
         * @example `京ICP备1703xxxx号`
         */
        Description: string;
        /**
         * 是否开启SSL证书。取值：
         * - **on**：**开启**。
         * - **off**：**关闭**。
         * @example `on`
         */
        SSLProtocol: string;
        /**
         * 资源组ID。
         * @example `rg-acfmyuji4b6r4**`
         */
        ResourceGroupId: string;
        /**
         * 加速区域。
         * - **domestic**（默认值）：仅中国内地。
         * - **overseas**：全球（不包含中国内地）。
         * - **global**：全球。
         * @example `overseas`
         */
        Scope: string;
        /**
         * 为加速域名生成的一个CNAME域名，您需要在域名解析服务商处为加速域名配置CNAME解析。
         * @example `example.aliyundoc.com`
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
         * @example `2017-11-27T06:51:25Z`
         */
        GmtModified: string;
        /**
         * 加速的域名。
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
                 * 回源权重。
                 * @example `20`
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
                 * 端口，支持443和80。
                 * @example `80`
                 */
                Port: number;
                /**
                 * 回源地址。
                 * @example `example.org`
                 */
                Content: string;
            }[];
        };
        /**
         * 加速场景。支持：
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
    };
}
