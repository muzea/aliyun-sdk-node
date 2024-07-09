export interface DescribeStreamVodListResponse {
    /**
     * 该条任务请求ID。
     * @example `BEA5625F-8FCF-48F4-851B-CA63946DA664`
     */
    RequestId: string;
    /**
     * 点播记录列表
     */
    Records: {
        /**
         * 点播记录结束时间点（uinx时间戳，单位：秒）
         * @example `1634873413`
         */
        EndTime: number;
        /**
         * 点播记录开始时间点（uinx时间戳，单位：秒）
         * @example `1639077653`
         */
        StartTime: number;
    }[];
}
