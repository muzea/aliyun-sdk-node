export interface ModifyLogMetaStatusRequest {
    /**
     * 请求来源标识，固定取值为**sas**。
     * @example `sas`
     */
    "From"?: string;
    /**
     * Project名称。
     * > 您可以调用[DescribeLogMeta](~~DescribeLogMeta~~)接口获取该参数。
     * @example `aegis-log`
     */
    "Project"?: string;
    /**
     * 日志存放的专属Logstore名称。
     * >您可以调用[DescribeLogMeta](~~DescribeLogMeta~~)接口获取该参数。
     * @example `aegis-log-login
    `
     */
    "LogStore": string;
    /**
     * 指定需要修改的日志的状态。取值：
     * - **enabled**：启用
     * - **disabled**：禁用
     * @example `disabled`
     */
    "Status": string;
    /**
     * 资源目录成员账号ID（阿里云账号）。
     * >调用[DescribeMonitorAccounts](~~DescribeMonitorAccounts~~)接口可以获取该参数。
     * @example `1232428423234****`
     */
    "ResourceDirectoryAccountId"?: number;
}
