export interface RemoveBackendServersResponse {
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    RequestId: string;
    BackendServers: {
        /**
         * 添加的后端服务器列表。
         */
        BackendServer: {
            /**
             * 后端服务器的实例ID。
             * @example `i-5vb5h5njxiuhn48a****`
             */
            ServerId: string;
            /**
             * 后端服务器的权重。
             * > 取值为0，表示不会将请求转发给该后端服务器。
             * @example `50`
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
    };
}
