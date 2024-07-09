export interface ReleaseProduceAuthorizationRequest {
    /**
     * 业务Id
     * @example `P20211117141528000001`
     */
    "BizId": string;
    /**
     * 业务类型
     * @example `esp.beian_assist`
     */
    "BizType": string;
    /**
     * 解绑被授权用户ID
     * @example `1219541161213000`
     */
    "AuthorizedUserId"?: string;
}
