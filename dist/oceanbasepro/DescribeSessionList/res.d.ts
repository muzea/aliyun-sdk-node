export interface DescribeSessionListResponse {
    /**
     * 请求 ID。
     * @example `EE205C00-30E4-XXXX-XXXX-87E3A8A2AA0C`
     */
    RequestId: string;
    /**
     * 查询对象信息。
     */
    Data: {
        /**
         * 代理服务的 Session ID。
         * @example `4325`
         */
        SessionId: string;
        /**
         * 客户端地址，格式：ip:port。
         * @example `192.***.**.100:80`
         */
        Host: string;
    }[];
}
