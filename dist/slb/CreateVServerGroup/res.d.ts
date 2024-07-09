export interface CreateVServerGroupResponse {
    /**
     * 后端服务器组ID。
     * @example `rsp-cige6******`
     */
    VServerGroupId: string;
    /**
     * 请求ID。
     * @example `9DEC9C28-AB05-4DDF-9A78-6B08EC9CE18C`
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
            Weight: number;
            /**
             * 后端服务器组描述。
             * @example `后端服务器组`
             */
            Description: string;
            /**
             * 后端服务器使用的端口。
             * @example `70`
             */
            Port: number;
            /**
             * ECS实例ID或ENI实例ID。
             * @example `eni-hhshhs****`
             */
            ServerId: string;
        }[];
    };
}
