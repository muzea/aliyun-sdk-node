export interface GetClientRatioStatisticRequest {
    /**
     * 统计起始时间戳。单位：毫秒。
     * @example `1671382800000`
     */
    "TimeStart": number;
    /**
     * 统计结束时间戳。单位：毫秒。
     * @example `1686412799999`
     */
    "TimeEnd": number;
    /**
     * 统计类型列表。
     */
    "StatisticTypes"?: string[];
    /**
     * 资源目录成员账号主账号ID。
     * >调用[DescribeMonitorAccounts](~~DescribeMonitorAccounts~~)接口可以获取该参数。
     * @example `127608589417****`
     */
    "ResourceDirectoryAccountId"?: number;
}
