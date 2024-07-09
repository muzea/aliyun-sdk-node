export interface SetBackendServersRequest {
    /**
     * 负载均衡实例的ID。
     * @example `lb-5s7crik3yo3bp03gqrbp5****`
     */
    "LoadBalancerId": string;
    /**
     * 添加的后端服务器列表，每次调用最多可修改20个后端服务器。
     */
    "BackendServers": {
        /**
         * 后端服务器的实例ID。
         * @example `i-5ze0o05xccvbljtn****`
         */
        ServerId: string;
        /**
         * 后端服务器的权重。默认值：100，取值：**0**~**100**。
         * > 取值为0，表示不会将请求转发给该后端服务器。
         * @example `20`
         */
        Weight: number;
        /**
         * 后端服务器类型。取值：
         * - **ens**：ENS实例。
         * - **eni**：弹性网卡实例。
         * @example `ens`
         */
        Type: string;
    }[];
}
