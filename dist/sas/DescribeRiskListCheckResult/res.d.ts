export interface DescribeRiskListCheckResultResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `3BFB4989-A108-46A4-954E-FF7EF02D1078`
     */
    RequestId: string;
    /**
     * 风险项数量详情。
     */
    List: {
        /**
         * 当前云产品实例上存在的风险项总数量。
         * @example `3`
         */
        riskCount: number;
        /**
         * 云产品实例ID。
         * @example `rm-bp1e8t4q15sr3****`
         */
        InstanceId: string;
    }[];
}
