export interface DescribeClusterNetworkRequest {
    /**
     * 开始时间的时间戳。单位：毫秒。
     * > 开始时间戳和结束时间戳不能超过**7**天。
     * @example `1656038740435`
     */
    "StartTime": number;
    /**
     * 结束时间的时间戳。单位：毫秒。
     * > 开始时间戳和结束时间戳相差不能超过**7**天。
     * @example `1656038940435`
     */
    "EndTime": number;
}
