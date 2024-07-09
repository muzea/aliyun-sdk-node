export interface DescribeBackupSetsRequest {
    /**
     * DRDS实例ID。
     * @example `drds***********`
     */
    "DrdsInstanceId": string;
    /**
     * 查询开始时间，格式为时间戳（单位为毫秒）。
     * @example `1591327800000`
     */
    "StartTime": string;
    /**
     * 查询结束时间，格式为时间戳（单位为毫秒）。
     * > 查询结束时间需晚于查询开始时间
     * @example `1591326000000`
     */
    "EndTime": string;
}
