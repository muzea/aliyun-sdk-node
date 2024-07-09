export interface ListServiceConnectionsResponse {
    /**
     * 请求id，每次请求都是唯一值，便于后续排查问题
     * @example `ASSDS-ASSASX-XSAXSA-XSAXSAXS`
     */
    requestId: string;
    /**
     * 错误信息
     * @example `""`
     */
    errorMessage: string;
    /**
     * 错误码
     * @example `""`
     */
    errorCode: string;
    /**
     * true 接口调用成功，false 接口调用失败
     * @example `true`
     */
    success: boolean;
    /**
     * 服务连接
     */
    serviceConnections: {
        /**
         * 拥有者阿里云账号id
         * @example `1212123212121212`
         */
        ownerAccountId: number;
        /**
         * 服务连接名称
         * @example `张三的oss服务连接`
         */
        name: string;
        /**
         * 服务连接Id
         * @example `123`
         */
        id: number;
        /**
         * 服务连接类型
         * @example `oss`
         */
        type: string;
        /**
         * 创建时间
         * @example `1586863220000`
         */
        createTime: number;
        /**
         * uuid
         */
        uuid: string;
    }[];
}
