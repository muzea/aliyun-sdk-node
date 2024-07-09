export interface GetInterveneGlobalReplyResponse {
    /**
     * 请求唯一标识
     * @example `3f7045e099474ba28ceca1b4eb6d6e21`
     */
    RequestId: string;
    /**
     * 是否成功：true 成功，false 失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 状态码
     * @example `0`
     */
    Code: string;
    /**
     * 错误说明
     * @example `success`
     */
    Message: string;
    /**
     * http状态码
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 业务数据
     */
    Data: {
        /**
         * 回复信息列表
         */
        ReplyMessagList: {
            /**
             * 回复类型
             * @example `namespace_qa_query`
             */
            ReplyType: string;
            /**
             * 回复内容
             * @example `success`
             */
            Message: string;
        }[];
    };
}
