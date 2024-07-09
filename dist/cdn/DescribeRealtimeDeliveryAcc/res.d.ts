export interface DescribeRealtimeDeliveryAccResponse {
    /**
     * 请求ID。
     * @example `684306D2-2511-4977-991D-CE97E91FD7C0`
     */
    RequestId: string;
    ReatTimeDeliveryAccData: {
        /**
         * 实时日志信息。
         */
        AccData: {
            /**
             * 时间片起始时刻。
             * @example `2018-09-03T06:00:00Z`
             */
            TimeStamp: string;
            /**
             * 实时日志投递失败次数。
             * @example `2`
             */
            FailedNum: number;
            /**
             * 实时日志投递成功次数。
             * @example `2`
             */
            SuccessNum: number;
        }[];
    };
}
