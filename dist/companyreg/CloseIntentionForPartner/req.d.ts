export interface CloseIntentionForPartnerRequest {
    /**
     * 需求单号
     * @example `I20211105230733000001`
     */
    "IntentionBizId": string;
    /**
     * 关闭原因
     * @example `测试`
     */
    "Note": string;
    /**
     * 业务类型
     * @example `esp.beian_assist`
     */
    "BizType": string;
}
