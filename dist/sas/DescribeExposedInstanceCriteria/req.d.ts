export interface DescribeExposedInstanceCriteriaRequest {
    /**
     * 指定查询条件的值，支持模糊匹配。
     * @example `id`
     */
    "Value"?: string;
    /**
     * 资源目录成员账号主账号ID。
     * >调用[DescribeMonitorAccounts](~~DescribeMonitorAccounts~~)接口可以获取该参数。
     * @example `127608589417****`
     */
    "ResourceDirectoryAccountId"?: string;
}
