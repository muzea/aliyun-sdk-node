export interface ChangeChatAgentStatusRequest {
    /**
     * 客户请求唯一id，用于幂等校验，可以用uuid生成
     * @example `46c1341e-2648-447a-9b11-70b6a298d94d`
     */
    "ClientToken"?: string;
    /**
     * 实例id
     * @example `ccc_xp_pre-cn-***`
     */
    "InstanceId": string;
    /**
     * 坐席账号名称，实例内唯一（登录名）
     * @example `123@123.com`
     */
    "AccountName": string;
    /**
     * 修改到的状态类型
     *
     * - requestRest   （申请小休）
     * - requestLogout  （申请离线）
     * - restToWork  （小休转上班）
     * @example `requestLogout`
     */
    "Method": string;
}
