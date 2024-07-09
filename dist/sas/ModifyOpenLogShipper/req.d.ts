export interface ModifyOpenLogShipperRequest {
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
