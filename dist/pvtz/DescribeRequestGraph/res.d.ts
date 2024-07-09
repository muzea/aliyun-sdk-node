export interface DescribeRequestGraphResponse {
    /**
     * 请求ID。
     * @example `EB71815-A421-4E51-8E8D-667F44ABE633`
     */
    RequestId: string;
    RequestDetails: {
        /**
         * 详情。
         */
        ZoneRequestTop: {
            /**
             * 统计时间（字符串）。
             * @example `2019-10-21T10:00Z`
             */
            Time: string;
            /**
             * 请求量。
             * @example `103`
             */
            RequestCount: number;
            /**
             * 统计时间戳（以毫秒计）。
             * @example `1571652000000`
             */
            Timestamp: number;
        }[];
    };
}
