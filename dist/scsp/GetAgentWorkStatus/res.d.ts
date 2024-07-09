export interface GetAgentWorkStatusResponse {
    /**
     * 接口调用是否成功
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误编码，当success为true时，该字段为空
     * @example `NoTenantFound`
     */
    Code: string;
    /**
     * 错误描述，当success为true时，该字段为空
     * @example `xxxxx`
     */
    Message: string;
    /**
     * 坐席上班状态对象
     */
    Data: {
        /**
         * 租户ID
         * @example `905`
         */
        TenantId: number;
        /**
         * 小二ID
         * @example `1059054`
         */
        AgentId: number;
        /**
         * 坐席账号名称（坐席登录名）
         * @example `123@123.com`
         */
        AccountName: string;
        /**
         * 坐席上班状态code
         * @example `AgentCheckin`
         */
        AgentStatusCode: string;
        /**
         * 坐席上班状态描述
         * @example `坐席签入状态`
         */
        AgentStatusDesc: string;
        /**
         * 上班渠道，PSTN手机上班，PC电脑上班
         * @example `PC`
         */
        WorkChannel: string;
        /**
         * 扩展字段
         */
        ExtAttr: string;
    };
    /**
     * 请求ID，用于跟踪错误原因
     * @example `EE338D98-9BD3-4413-B165`
     */
    RequestId: string;
}
