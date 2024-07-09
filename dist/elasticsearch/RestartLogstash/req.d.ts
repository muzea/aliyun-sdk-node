export interface RestartLogstashRequest {
    /**
     * 实例ID。
     * @example `ls-cn-v0h1kzca****`
     */
    "InstanceId": string;
    /**
     * 是否强制重启：
     * - true：强制，
     * - false（默认）：不强制
     * @example `true`
     */
    "force"?: boolean;
    /**
     * 用于保证请求的幂等性。由客户端生成该参数值，要保证在不同请求间唯一，最大不超过64个ASCII字符。
     * @example `5A2CFF0E-5718-45B5-9D4D-70B3FF****`
     */
    "clientToken"?: string;
    /**
     * 请求体。
     */
    "body"?: {
        /**
         * 强制重启的并发度。蓝绿重启时，无法进行强制重启，无需设置。
         * @example `20%`
         */
        batchCount: number;
        /**
         * 重启类型，可选值：
         * - instance：重启实例
         * - nodeIp：重启节点
         * @example `instance`
         */
        restartType: string;
        /**
         * 重启节点时，选择的节点信息。
         */
        nodes: string[];
        /**
         * 重启的角色节点类型，暂不支持。
         */
        nodeTypes: string[];
        /**
         * 是否进行蓝绿重启，默认为false。
         * @example `false`
         */
        blueGreenDep: boolean;
    };
}
