export interface CreateMasterSlaveServerGroupResponse {
    /**
     * 主备服务器组ID。
     * @example `rsp-bp19au4******`
     */
    MasterSlaveServerGroupId: string;
    /**
     * 请求ID。
     * @example `7CA4DB76-4D32-523B-822E-5C9******`
     */
    RequestId: string;
    MasterSlaveBackendServers: {
        /**
         * 主备服务器组列表。
         */
        MasterSlaveBackendServer: {
            /**
             * 后端服务器类型，取值：
             * * **ecs**：ECS实例。
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
             * 主备服务器组描述。
             * @example `test-112`
             */
            Description: string;
            /**
             * 后端服务器使用的端口。
             * @example `82`
             */
            Port: number;
            /**
             * 要添加的后端服务器实例ID。
             * @example `i-bp1fq61enf4loa5i****`
             */
            ServerId: string;
            /**
             * 服务器类型。
             * 取值：**Master**或**Slave**。
             * @example `Master`
             */
            ServerType: string;
        }[];
    };
}
