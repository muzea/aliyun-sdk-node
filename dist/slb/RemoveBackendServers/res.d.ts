export interface RemoveBackendServersResponse {
    /**
     * 负载均衡实例ID。
     * @example `lb-bp15lbk8uja8rvm4a****`
     */
    LoadBalancerId: string;
    /**
     * 请求ID。
     * @example `365F4154-92F6-4AE4-92F8-7FF34******`
     */
    RequestId: string;
    BackendServers: {
        /**
         * 后端服务器列表。
         */
        BackendServer: {
            /**
             * 后端服务器类型，取值：
             * * **ecs**：ECS实例。
             * * **eni**：弹性网卡实例。
             * * **eci**：弹性容器实例。
             * @example `ecs`
             */
            Type: string;
            /**
             * 后端服务器的权重，范围为**0~100**。
             * @example `100`
             */
            Weight: number;
            /**
             * 后端服务器组描述。
             * @example `BackendServer1`
             */
            Description: string;
            /**
             * 后端服务器的实例ID。
             * @example `i-bp1fq61enf4loa5i****`
             */
            ServerId: string;
        }[];
    };
}
