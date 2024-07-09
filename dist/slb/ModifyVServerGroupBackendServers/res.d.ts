export interface ModifyVServerGroupBackendServersResponse {
    /**
     * 服务器组ID。
     * @example `rsp-cige6j****`
     */
    VServerGroupId: string;
    /**
     * 请求ID。
     * @example `9DEC9C28-AB05-4DDF-9A78-6B08******`
     */
    RequestId: string;
    BackendServers: {
        /**
         * 后端服务器列表。
         */
        BackendServer: {
            /**
             * 后端服务器类型，取值：
             * * **ecs**（默认）：ECS实例。
             * * **eni**：弹性网卡实例。
             * * **eci**：弹性容器实例。
             * @example `ecs`
             */
            Type: string;
            /**
             * 后端服务器的权重。
             * @example `100`
             */
            Weight: number;
            /**
             * 后端服务器描述。
             * @example `后端服务器描述。`
             */
            Description: string;
            /**
             * 后端服务器使用的端口。
             * @example `70`
             */
            Port: number;
            /**
             * ECS实例ID或ENI的实例ID。
             * @example `i-bp1ge5hrp****`
             */
            ServerId: string;
        }[];
    };
}
