export interface ListConnectedClustersResponse {
    /**
     * 请求ID。
     * @example `5FFD9ED4-C2EC-4E89-B22B-1ACB6FE1D***`
     */
    RequestId: string;
    Result: {
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
             * 已经与当前实例进行网络互通的远程实例ID。
             * @example `es-cn-09k1rocex0006****`
             */
            instances: string;
        }[];
    };
}
