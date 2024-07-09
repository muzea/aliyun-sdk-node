export interface DescribeGlobalQuestionResponse {
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
     * 接口提示信息
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
     * 全局话术信息
     */
    GlobalQuestion: {
        /**
         * 全局话术id
         * @example `f160ec2e-94f2-4c03-87be-ece5b52d5dd9`
         */
        GlobalQuestionId: string;
        /**
         * 回复数组
         * @example `["你好,我是你的专属客服顾问."]`
         */
        Answers: string;
        /**
         * 全局话术类型
         * @example `COMMON`
         */
        GlobalQuestionType: string;
        /**
         * 全局话术名字
         * @example `你是谁-全局问题`
         */
        GlobalQuestionName: string;
        /**
         * 问题数组
         * @example ` ["你是谁","你叫什么"]`
         */
        Questions: string;
        /**
         * 话术id
         * @example `290e06a5-6de2-4cc8-8a9c-72b7c152256c`
         */
        ScriptId: string;
    };
}
