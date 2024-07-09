export interface TriggerNetworkRequest {
    /**
     * 实例ID。
     * @example `es-cn-n6w1o1x0w001c****`
     */
    "InstanceId": string;
    /**
     * 用于保证请求的幂等性。由客户端生成该参数值，要保证在不同请求间唯一，最大不超过64个ASCII字符。
     * @example `407d02b74c49beb5bfdac7ec8bde2488`
     */
    "clientToken"?: string;
    /**
     * 请求体参数。
     */
    "body"?: {
        /**
         * 实例类型。可选值：
         * - KIBANA：Kibana集群
         * - WORKER：Elasticsearch集群
         * @example `KIBANA`
         */
        nodeType: string;
        /**
         * 网络类型。可选值：
         * - PUBLIC：公网
         * - PRIVATE：私网
         * @example `PUBLIC`
         */
        networkType: string;
        /**
         * 动作类型。可选值：
         * - CLOSE：关闭
         * - OPEN：开启
         * @example `OPEN`
         */
        actionType: string;
    };
}
