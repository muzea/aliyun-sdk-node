export interface DescribeConnectableClustersResponse {
    /**
     * 请求ID。
     * @example `5FFD9ED4-C2EC-4E89-B22B-1ACB6FE1D***`
     */
    RequestId: string;
    /**
     * 返回结果。
     */
    Result: {
        /**
         * 实例的网络类型。
         * @example `vpc`
         */
        networkType: string;
        /**
         * 可以进行网络互通的实例ID。
         * @example `es-cn-xxx`
         */
        instances: string;
    }[];
}
