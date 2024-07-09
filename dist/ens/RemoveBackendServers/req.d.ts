export interface RemoveBackendServersRequest {
    /**
     * 负载均衡实例的ID。
     * @example `lb-5ovkn1piwqmoqrfjdyhq4****`
     */
    "LoadBalancerId": string;
    /**
     * 添加的后端服务器列表，每次调用最多可删除20个后端服务器。
     */
    "BackendServers": {
        /**
         * 后端服务器的实例ID。
         * @example `i-5uf68ts0fqexe1a4n****`
         */
        ServerId: string;
        /**
         * 后端服务器的权重。
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
         * @example `0`
         */
        Port: number;
    }[];
}
