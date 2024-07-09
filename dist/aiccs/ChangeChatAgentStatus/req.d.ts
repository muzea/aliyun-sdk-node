export interface ChangeChatAgentStatusRequest {
    /**
     * 客户请求唯一ID。用于幂等校验，可以用UUID生成。
     * @example `46c1341e-2648-447a-9b11-70b6a298d94d`
     */
    "ClientToken"?: string;
    /**
     * AICCS实例ID。可在智能联络中心控制台上获取。
     * @example `ccc_xp_pre-cn-***`
     */
    "InstanceId": string;
    /**
     * 坐席账号。
     * @example `account1`
     */
    "AccountName": string;
    /**
     * 想要切换到的在线状态。目前支持**requestLogout** （申请离线）。
     * @example `requestLogout`
     */
    "Method": string;
}
