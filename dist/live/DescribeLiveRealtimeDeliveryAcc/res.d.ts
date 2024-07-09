export interface DescribeLiveRealtimeDeliveryAccResponse {
    /**
     * 请求ID。
     * @example `684306D2-2511-4977-991D-CE97E91FD7C0`
     */
    RequestId: string;
    RealTimeDeliveryAccData: {
        /**
         * 实时日志投递次数信息。
         */
        AccData: {
            /**
             * 时间片起始时刻。
             * @example `2015-12-10T20:00:00Z`
             */
            TimeStamp: string;
            /**
             * 实时日志投递失败次数。
             * @example `0`
             */
            FailedNum: number;
            /**
             * 实时日志投递成功次数。
             * @example `321321`
             */
            SuccessNum: number;
        }[];
    };
}
