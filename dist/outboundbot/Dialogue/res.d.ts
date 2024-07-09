export interface DialogueResponse {
    /**
     * http 状态码
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 接口状态码
     * @example `OK`
     */
    Code: string;
    /**
     * 接口提示消息
     * @example `Success`
     */
    Message: string;
    /**
     * 请求id
     * @example `254EB995-DEDF-48A4-9101-9CA5B72FFBCC`
     */
    RequestId: string;
    /**
     * 是否成功
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回对话信息
     */
    Feedback: {
        /**
         * 给ivr 的指令
         * @example `broadcast`
         */
        Action: string;
        /**
         * 指令参数
         * @example `""`
         */
        ActionParams: string;
        /**
         * 对话文本
         * @example `你好，我是**客服`
         */
        Content: string;
        /**
         * 是否可以打断播报
         * @example `true`
         */
        Interruptible: boolean;
        /**
         * 已废弃
         * @example `“”`
         */
        ContentParams: string;
    };
}
