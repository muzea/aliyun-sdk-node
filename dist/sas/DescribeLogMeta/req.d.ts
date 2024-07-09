export interface DescribeLogMetaRequest {
    /**
     * 访问源的IP地址。
     * @example `123.168.XX.XX`
     */
    "SourceIp"?: string;
    /**
     * 设置请求和接收消息的语言类型，默认为**zh**。取值：
     * - **zh**：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * 请求来源标识，默认**aegis**，取值：
     * - **aegis**：安骑士版本。
     * - **sas**：云安全中心版本。
     * > 安骑士用户请使用**aegis**，云安全中心用户则使用**sas**。
     * @example `sas`
     */
    "From"?: string;
    /**
     * 资源目录成员账号ID（阿里云账号）。
     * >调用[DescribeMonitorAccounts](~~DescribeMonitorAccounts~~)接口可以获取该参数。
     * @example `127608589417****`
     */
    "ResourceDirectoryAccountId"?: number;
}
