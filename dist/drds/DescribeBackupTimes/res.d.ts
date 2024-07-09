export interface DescribeBackupTimesResponse {
    /**
     * 请求结果。
     * @example `true`
     */
    Success: boolean;
    /**
     * 请求ID。
     * @example `4780A19F-5ECB-4C56-AD20-966A3FF9DE5R`
     */
    RequestId: string;
    /**
     * 可恢复时间详情。
     */
    RestoreTime: {
        /**
         * 结束时间，格式为Unix时间戳（UTC时间），单位为毫秒。
         * @example `1568636922671`
         */
        EndTime: string;
        /**
         * 开始时间，格式为Unix时间戳（UTC时间），单位为毫秒。
         * @example `1568632853000`
         */
        StartTime: string;
    };
}
