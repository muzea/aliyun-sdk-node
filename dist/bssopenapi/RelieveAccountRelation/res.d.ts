export interface RelieveAccountRelationResponse {
    /**
     * 状态码
     * @example `200`
     */
    Code: string;
    /**
     * 返回消息
     * @example `返回消息`
     */
    Message: string;
    /**
     * 唯一请求业务标识
     * @example `request_id`
     */
    RequestId: string;
    /**
     * 请求处理是否成功
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回数据
     */
    Data: {
        /**
         * hostid
         * @example `HostId`
         */
        HostId: string;
    };
}
