export interface ListGlobalQuestionsResponse {
    /**
     * http状态码
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
     * 全局话术数据
     */
    GlobalQuestions: {
        /**
         * 页号
         * @example `1`
         */
        PageNumber: number;
        /**
         * 个数
         * @example `10`
         */
        PageSize: number;
        /**
         * 总计个数
         * @example `12`
         */
        TotalCount: number;
        /**
         * 全局话术数组
         */
        List: {
            /**
             * 全局话术id
             * @example `53c27755-d41e-46a6-bb3c-4f66f257d50c`
             */
            GlobalQuestionId: string;
            /**
             * 回复列表
             * @example `["你好,您可以再说一遍吗","不好意思我刚才没有听清"]`
             */
            Answers: string;
            /**
             * 全局话术类型
             * @example `SYSTEM`
             */
            GlobalQuestionType: string;
            /**
             * 全局话术id
             * @example `未识别`
             */
            GlobalQuestionName: string;
            /**
             * 话术问题列表
             * @example `["未识别的用户问题"]`
             */
            Questions: string;
            /**
             * 话术id
             * @example `aa279896-64a6-4182-864c-4f2b04ec8d17`
             */
            ScriptId: string;
        }[];
    };
}
