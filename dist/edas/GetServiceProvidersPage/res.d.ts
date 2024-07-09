export interface GetServiceProvidersPageResponse {
    /**
     * 接口请求的状态码。
     * @example `200`
     */
    Code: number;
    /**
     * 接口请求返回的信息。
     * @example `success`
     */
    Message: string;
    /**
     * 调用是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 数据结构体。
     */
    Data: {
        /**
         * 总页数。
         * @example `1`
         */
        TotalPages: number;
        /**
         * 总数据量。
         * @example `1`
         */
        TotalElements: number;
        /**
         * 页大小。
         * @example `5`
         */
        Size: number;
        /**
         * 组数据。
         */
        Content: {
            /**
             * 服务超时时间。
             * @example `1000`
             */
            Timeout: string;
            /**
             * 服务提供者的IP地址。
             * @example `10.20.XX.XX`
             */
            Ip: string;
            /**
             * 服务提供者的端口号。
             * @example `12345`
             */
            Port: string;
            /**
             * 服务提供者的备注信息。
             * @example `172.178.XX.XX`
             */
            Iannotations: string;
            /**
             * 序列化类型。
             * @example `hessian2`
             */
            SerializeType: string;
        }[];
    };
}
