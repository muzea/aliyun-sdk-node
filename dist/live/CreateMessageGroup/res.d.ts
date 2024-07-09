export interface CreateMessageGroupResponse {
    /**
     * 请求ID。
     * @example `16A96B9A-****-CB92E68F4CD8`
     */
    RequestId: string;
    /**
     * 返回结果。
     */
    Result: {
        /**
         * 拓展字段。
         * @example `test001`
         */
        Extension: any;
        /**
         * 消息组ID。
         * @example `AE35-****-T95F`
         */
        GroupId: string;
    };
}
