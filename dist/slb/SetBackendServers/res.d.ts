export interface SetBackendServersResponse {
    /**
     * 传统型负载均衡实例ID。
     * @example `lb-bp1qjwo61pqz3a******`
     */
    LoadBalancerId: string;
    /**
     * 请求ID。
     * @example `365F4154-92F6-4AE4-92F8-7F******`
     */
    RequestId: string;
    BackendServers: {
        /**
         *  后端服务器列表。
         */
        BackendServer: {
            /**
             * 后端服务器类型，取值：
             * * **ecs**（默认）：ECS实例。
             * * **eni**：弹性网卡实例。
             * * **eci**：弹性容器实例。
             * @example `eni`
             */
            Type: string;
            /**
             * 后端服务器的权重。
             * @example `100`
             */
            Weight: string;
            /**
             * 后端服务器描述。
             * @example `后端服务器`
             */
            Description: string;
            /**
             * 后端服务器ID。
             * @example `eni-hhshhs****`
             */
            ServerId: string;
        }[];
    };
}
