export interface ConfirmRelationResponse {
    /**
     * 业务后台状态码
     * @example `200`
     */
    Code: string;
    /**
     * 返回信息
     * @example `返回信息`
     */
    Message: string;
    /**
     * 调用请求唯一标识
     * @example `request_id`
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
         * HostId
         * @example `HostId`
         */
        HostId: string;
    };
}
