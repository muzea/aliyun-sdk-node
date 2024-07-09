export interface SubmitSolutionRequest {
    /**
     * 需求ID
     * @example `I20211223101045000001`
     */
    "IntentionBizId": string;
    /**
     * 业务类型
     * @example `esp.wangwen`
     */
    "BizType": string;
    /**
     * 方案内容
     * @example `{\"domainCount\":1,\"companyArea\":\"广东省\",\"domain\":\"fb-link8.com\",\"source\":\"官网\",\"beianType\":\"备案服务-国内\"}`
     */
    "Solution": string;
    /**
     * 用户UID
     * @example `1219541161213057`
     */
    "UserId"?: string;
    "OperateType"?: string;
}
