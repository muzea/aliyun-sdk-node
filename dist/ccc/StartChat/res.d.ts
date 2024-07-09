export interface StartChatResponse {
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
     * @example `EEEE671A-3E24-4A04-81E6-6C4F5B39DF75`
     */
    RequestId: string;
    /**
     * 响应数据。
     */
    Data: {
        /**
         * 聊天会话ID。
         * @example `$23086709$EAUNIT`
         */
        ChatConversationId: string;
        /**
         * 话务ID。
         * @example `chat-525523618219921408`
         */
        JobId: string;
    };
}
