export interface AddBackendServersRequest {
    /**
     * 负载均衡实例前端使用的端口。取值：**1**~**65535**。
     * @example `lb-5qzdmxefgrpxd7oz2mefonvtx`
     */
    "LoadBalancerId": string;
    /**
     * 添加的后端服务器列表，每次调用最多可添加20个后端服务器。
     * > 后端服务器（ENS实例）必须是运行中才可以加入负载均衡实例。
     */
    "BackendServers": {
        /**
         * ENS实例ID。
         * @example `i-5uf6dwyzch3wly790****`
         */
        ServerId: string;
        /**
         * 后端服务器的权重。默认值：100，取值：**0**~**100**。
         * > 取值为0，表示不会将请求转发给该后端服务器。
         * @example `100`
         */
        Weight: number;
        /**
         * 后端服务器类型。取值：
         * - **ens**：ENS实例。
         * - **eni**：弹性网卡实例。
         * @example `ens`
         */
        Type: string;
        /**
         * 后端服务器IP地址。
         * @example `192.168.0.1`
         */
        Ip: string;
        /**
         * 负载均衡实例后端使用的端口。
         * @example `3309`
         */
        Port: number;
    }[];
}
