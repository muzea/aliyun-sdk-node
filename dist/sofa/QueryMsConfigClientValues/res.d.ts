export interface QueryMsConfigClientValuesResponse {
    /**
     * 结果描述
     * @example `OK`
     */
    ResultMessage: string;
    /**
     * 结果码
     * @example `OK`
     */
    ResultCode: string;
    /**
     * 请求ID
     * @example `861E6630-AEC0-4B2D-B214-6CB5E44B7F04`
     */
    RequestId: string;
    /**
     * 客户端信息，包含内存值
     */
    Clients: {
        /**
         * 客户端 IP
         * @example `127.0.0.1`
         */
        Ip: string;
        /**
         * 客户端内存里的值
         * @example `switch`
         */
        Data: string;
        /**
         * 是否查询成功
         * @example `true`
         */
        Success: boolean;
    }[];
}
