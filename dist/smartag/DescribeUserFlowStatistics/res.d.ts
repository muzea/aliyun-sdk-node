export interface DescribeUserFlowStatisticsResponse {
    SagStatistics: {
        /**
         * 流量统计。
         */
        Statistics: {
            /**
             * 已使用的流量值。单位：Byte。
             * @example `100`
             */
            TotalBytes: string;
            /**
             * 用户名。
             * @example `doctest`
             */
            UserName: string;
            /**
             * 智能接入网关App用户剩余免费流量值。单位：Byte。
             * @example `1000`
             */
            TotalLeaveBytes: string;
        }[];
    };
    /**
     * 请求ID。
     * @example `9552AD68-18EA-4074-B27D-40040FBA9683`
     */
    RequestId: string;
}
