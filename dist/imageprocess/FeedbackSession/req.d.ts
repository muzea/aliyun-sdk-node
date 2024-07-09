export interface FeedbackSessionRequest {
    /**
     * 会话ID。
     * > 与**RunMedQA**接口返回参数中的`SessionId`一致。
     * @example `69675e9ddaea4b1ca8b9ddbafd02edc2`
     */
    "SessionId": string;
    /**
     * 会话结束后的反馈信息。
     * @example `张三医生_皮肤过敏_remark`
     */
    "Feedback": string;
}
