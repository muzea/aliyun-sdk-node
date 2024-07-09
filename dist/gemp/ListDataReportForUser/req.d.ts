export interface ListDataReportForUserRequest {
    /**
     * A short description of struct
     */
    "body"?: {
        /**
         * 开始时间
         * @example `2021-09-01`
         */
        startTime: string;
        /**
         * 结束时间
         * @example `2021-09-30`
         */
        endTime: string;
        /**
         * 当前页
         * @example `1`
         */
        pageNumber: number;
        /**
         * 页大小
         * @example `100`
         */
        pageSize: number;
    };
}
