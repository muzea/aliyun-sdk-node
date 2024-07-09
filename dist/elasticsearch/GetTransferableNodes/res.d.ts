export interface GetTransferableNodesResponse {
    /**
     * 请求ID。
     * @example `F99407AB-2FA9-489E-A259-40CF6DCC****`
     */
    RequestId: string;
    /**
     * 返回结果。
     */
    Result: {
        /**
         * 节点的访问端口。
         * @example `9200`
         */
        port: number;
        /**
         * 节点的IP地址。
         * @example `192.168.**.**`
         */
        host: string;
    }[];
}
