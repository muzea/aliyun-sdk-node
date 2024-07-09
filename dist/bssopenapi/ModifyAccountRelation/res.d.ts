export interface ModifyAccountRelationResponse {
    /**
     * 业务状态码
     * @example `200`
     */
    Code: string;
    /**
     * 返回消息
     * @example `返回消息`
     */
    Message: string;
    /**
     * 唯一请求标识
     * @example `48602faf-abbe-4d46-8029-654cc5aead5d`
     */
    RequestId: string;
    /**
     * 是否成功
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回数据
     */
    Data: {
        /**
         * 请求来源IP
         * @example `127.0.0.1`
         */
        HostId: string;
    };
}
