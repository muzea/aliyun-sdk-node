export interface DescribeSagOnlineClientStatisticsResponse {
    SagStatistics: {
        /**
         * 在线连接数据。
         */
        Statistics: {
            /**
             * 智能接入网关App实例ID。
             * @example `sag-va03wf4l4idaj*****`
             */
            SmartAGId: string;
            /**
             * 当前智能接入网关App实例在线连接的客户端数。
             * @example `0`
             */
            OnlineCount: string;
        }[];
    };
    /**
     * 请求ID。
     * @example `9EC839B6-0EA5-4F19-A4B7-A9E465D057AE`
     */
    RequestId: string;
}
