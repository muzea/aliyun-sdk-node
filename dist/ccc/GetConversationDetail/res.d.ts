export interface GetConversationDetailResponse {
    /**
     * 响应码。
     * @example `OK`
     */
    Code: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 响应信息。
     * @example `无`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `7E407F9B-A278-52A0-B193-3EE5471D7A87`
     */
    RequestId: string;
    /**
     * 对话列表。
     */
    Phrases: {
        /**
         * 角色标识，系统内部使用，主要用于判断角色，客户无需关心。
         * @example `agent@ccc-test`
         */
        Identity: string;
        /**
         * 角色。
         * @example `客服`
         */
        Role: string;
        /**
         * 句子开始时间相对会话开始时间的偏移量，单位毫秒。
         * @example `240`
         */
        Begin: number;
        /**
         * 句子结束时间相对会话开始时间的偏移量，单位毫秒。
         * @example `1280`
         */
        End: number;
        /**
         * 对话文本内容。
         * @example `欢迎致电阿里云云呼叫中心`
         */
        Words: string;
    }[];
}
