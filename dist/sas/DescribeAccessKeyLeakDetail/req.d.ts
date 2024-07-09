export interface DescribeAccessKeyLeakDetailRequest {
    /**
     * 要查询AK泄露事件的ID。
     * > 调用[DescribeAccesskeyLeakList](~~DescribeAccesskeyLeakList~~)接口可以获取该参数。
     * @example `389357`
     */
    "Id": number;
    /**
     * 资源目录成员账号ID（阿里云账号）。
     * >调用[DescribeMonitorAccounts](~~DescribeMonitorAccounts~~)接口可以获取该参数。
     * @example `127608589417****`
     */
    "ResourceDirectoryAccountId"?: number;
}
