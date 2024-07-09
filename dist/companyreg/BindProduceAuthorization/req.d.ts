export interface BindProduceAuthorizationRequest {
    /**
     * 业务ID
     * @example `P20210815211849000001`
     */
    "BizId": string;
    /**
     * 业务类型
     * @example `esp.bookkeeping_ai`
     */
    "BizType": string;
    /**
     * 被授权人id 列表
     * @example `1219541161213057,1219541161213059`
     */
    "AuthorizedUserIds"?: string;
}
