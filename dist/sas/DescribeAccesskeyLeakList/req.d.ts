export interface DescribeAccesskeyLeakListRequest {
    /**
     * 指定要查询的已泄露的AccessKey信息的处理状态。取值：
     * - **pending**：未处理
     * - **dealed**：已处理
     * @example `pending`
     */
    "Status"?: string;
    /**
     * 指定要查询的AccessKey ID。仅支持精确查询。
     * @example `LTAI4Fytv7ALKzkNVBV6****`
     */
    "Query"?: string;
    /**
     * 指定要查询的泄露信息的发现时间，可以查询该时间点后发现的所有AccessKey泄露信息。该参数为时间戳格式，单位为毫秒。
     * @example `1614155361489`
     */
    "StartTs"?: number;
    /**
     * 指定分页查询时，每页显示的数据最大条数。
     * PageSize参数最大取值为100。每页默认显示的数据条数为20条，PageSize参数值为空时，将默认返回20条数据。
     * > 建议PageSize取值不要为空。
     * @example `20`
     */
    "PageSize": number;
    /**
     * 指定分页查询时，当前页的页码。默认值为**1**。
     * @example `1`
     */
    "CurrentPage": number;
    /**
     * 资源目录成员账号ID（阿里云账号）。
     * >调用[DescribeMonitorAccounts](~~DescribeMonitorAccounts~~)接口可以获取该参数。
     * @example `1232428423234****`
     */
    "ResourceDirectoryAccountId"?: number;
}
