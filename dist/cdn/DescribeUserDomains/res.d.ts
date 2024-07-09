export interface DescribeUserDomainsResponse {
    /**
     * 请求ID。
     * @example `BDA62CE4-3477-439A-B52E-D2D7C829D7C1`
     */
    RequestId: string;
    /**
     * 返回数据的页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 整页大小。
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
         * 域名信息。
         */
        PageData: {
            /**
             * HTTPS开关。取值：
             * - **on**：已开启。
             * - **off**：未开启。
             * @example `on`
             */
            SslProtocol: string;
            /**
             * 是否在沙箱。取值：
             * - **true**：是
             * - **空字符串**：否
             * @example `true`
             */
            Sandbox: string;
            /**
             * 加速域名修改时间。
             * @example `2015-10-28T11:05:52Z`
             */
            GmtModified: string;
            /**
             * 加速域名。
             * @example `example.com`
             */
            DomainName: string;
            /**
             * 加速域名ID。
             * @example `11223344`
             */
            DomainId: number;
            /**
             * 加速域名创建时间。
             * @example `2015-10-28T09:32:51Z`
             */
            GmtCreated: string;
            /**
             * 域名备案信息的描述。
             * @example `filing description`
             */
            Description: string;
            /**
             * 加速区域。取值：
             * - **domestic**：仅中国内地。
             * - **global**：全球。
             * - **overseas**：全球（不包含中国内地）。
             * @example `domestic`
             */
            Coverage: string;
            /**
             * 资源组ID。
             * @example `abcd1234abcd1234`
             */
            ResourceGroupId: string;
            /**
             * 加速域名对应的CNAME。
             * @example `example.com.w.alikunlun.net`
             */
            Cname: string;
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
             * 加速业务类型。取值：
             * - **web**：图片小文件。
             * - **download**：大文件下载。
             * - **video**：视音频点播。
             * @example `download`
             */
            CdnType: string;
            Sources: {
                /**
                 * 数据类型Source。
                 */
                Source: {
                    /**
                     * 源站类型。
                     * @example `oss`
                     */
                    Type: string;
                    /**
                     * 回源权重。
                     * @example `15`
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
                     * @example `***.oss-cn-hangzhou.aliyuncs.com`
                     */
                    Content: string;
                }[];
            };
        }[];
    };
}
