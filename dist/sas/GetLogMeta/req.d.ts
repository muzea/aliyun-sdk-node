export interface GetLogMetaRequest {
    /**
     * 日志存放的专属Logstore名称。
     * >您可以调用[DescribeLogMeta](~~DescribeLogMeta~~)接口获取该参数。
     * @example `aegis-log-login
    `
     */
    "LogStore": string;
    /**
     * 资源目录成员账号ID（阿里云账号）。
     * >调用[DescribeMonitorAccounts](~~DescribeMonitorAccounts~~)接口可以获取该参数。
     * @example `127608589417****`
     */
    "ResourceDirectoryAccountId"?: number;
}
