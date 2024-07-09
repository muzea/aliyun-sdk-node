export interface DescribeUsageDistributionStatDataRequest {
    /**
     * 查询的开始时间，使用UNIX时间戳表示，单位：秒。
     * @example `1615824000`
     */
    "StartDate": number;
    /**
     * 查询的结束时间，使用UNIX时间戳表示，单位：秒。
     * @example `1615910399`
     */
    "EndDate": number;
    /**
     * 统计维度。取值：
     * - **CHANNEL_ONLINE**：按照频道在线人数统计。
     * - **NETWORK**：按照网络类型统计。
     * - **OS**：按照系统类型统计。
     * @example `CHANNEL_ONLINE`
     */
    "StatDim": string;
    /**
     * APP ID。
     * @example `0rbd****
    `
     */
    "AppId": string;
}
