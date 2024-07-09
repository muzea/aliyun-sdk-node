export interface CloseUserIntentionRequest {
    /**
     * 需求单号
     * @example `I20201027162033000001`
     */
    "IntentionBizId": string;
    /**
     * 备注信息
     * @example `用户关闭`
     */
    "Note": string;
    /**
     * 业务类型
     * @example `esp.bookkeeping`
     */
    "BizType"?: string;
}
