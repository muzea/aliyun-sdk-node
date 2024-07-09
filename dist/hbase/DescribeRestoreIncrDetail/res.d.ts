export interface DescribeRestoreIncrDetailResponse {
    /**
     * 请求Id。
     * @example `D0FE2717-E194-465A-B27B-7373F96E580B`
     */
    RequestId: string;
    /**
     * 增量恢复详情。
     */
    RestoreIncrDetail: {
        /**
         * 结束时间。
         * @example `2020-11-05T06:45:44Z`
         */
        EndTime: string;
        /**
         * 启动时间。
         * @example `2020-11-05T06:45:44Z`
         */
        StartTime: string;
        /**
         * 进度。
         * @example `0/0`
         */
        Process: string;
        /**
         * 同步起始点位。
         * @example `2020-11-02T18:00:00Z`
         */
        RestoreStartTs: string;
        /**
         * 状态。
         * @example `SUCCEEDED`
         */
        State: string;
        /**
         * 同步点位。
         * @example `''`
         */
        RestoredTs: string;
        /**
         * 同步延时。
         * @example `0 ms`
         */
        RestoreDelay: string;
    };
}
