export interface AddBackendServersResponse {
    /**
     * 负载均衡实例ID。
     * @example `lb-2ze7o5h52g02kkzz****`
     */
    LoadBalancerId: string;
    /**
     * 请求ID。
     * @example `34B82C81-F13B-4EEB-99F6-A048C67CC830`
     */
    RequestId: string;
    BackendServers: {
        /**
         * 后端服务器列表。
         */
        BackendServer: {
            /**
             * 后端服务器类型。取值：
             * - **ecs**：ECS实例（默认）。
             * - **eni**：弹性网卡实例。
             * - **eci**：弹性容器实例。
             * @example `ecs`
             */
            Type: string;
            /**
             * 后端服务器的权重。
             * 取值：**0~100**。默认值：**100**。
             * 如果值为**0**，则不会将请求转发给该后端服务器。
             * @example `100`
             */
            Weight: string;
            /**
             * 后端服务器描述。
             * @example `后端服务器`
             */
            Description: string;
            /**
             * ECS、ENI、或者ECI实例ID。
             * @example `i-2zej4lxhjoq1icu*****`
             */
            ServerId: string;
        }[];
    };
}
