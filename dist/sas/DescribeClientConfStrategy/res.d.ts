export interface DescribeClientConfStrategyResponse {
    /**
     * 返回数据总数。
     * @example `100`
     */
    TotalCount: number;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `5BD95679-D63A-4151-97D0-188432F****`
     */
    RequestId: string;
    /**
     * 返回列表。
     */
    TargetList: {
        /**
         * 云安全中心客户端生成的uuid。
         * @example `2b1753a6-04d9-448e-ad17-7abdf19f****`
         */
        Uuid: string;
    }[];
}
