export interface DescribeHealthStatusResponse {
    /**
     * 请求ID。
     * @example `365F4154-92F6-4AE4-92F8-7FF******`
     */
    RequestId: string;
    BackendServers: {
        /**
         * 后端服务器列表。
         */
        BackendServer: {
            /**
             * 负载均衡实例前端使用的协议。
             * @example `http`
             */
            Protocol: string;
            /**
             * 后端服务器的健康状况。
             * - normal：后端服务器健康。
             * - abnormal：后端服务器不健康。
             * - unavailable：未完成健康检查。
             * @example `abnormal`
             */
            ServerHealthStatus: string;
            /**
             * 负载均衡实例前端使用的端口。
             * @example `80`
             */
            ListenerPort: number;
            /**
             * 后端服务器IP地址。
             * @example `192.XX.XX.11`
             */
            ServerIp: string;
            /**
             * 负载均衡实例后端使用的端口。
             * @example `80`
             */
            Port: number;
            /**
             * 后端服务器实例ID。
             * @example `i-bp1h5u3fv54ytf***`
             */
            ServerId: string;
        }[];
    };
}
